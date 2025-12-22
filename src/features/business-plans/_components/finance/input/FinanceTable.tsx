import {
  Checkbox,
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import React, { useEffect, useRef, useState } from "react";
import { useDebounceCallback } from "~/hooks/useDebounceCallback";
import { useFinanceStore } from "~/store/financeStore";
import { getPartConfig, part1 } from "../../../config/parts";
import { MONTHS, QUARTERS } from "../../../constants/finance";
import type { FinanceData, OutputRowConfig } from "../../../types";
import {
  calculateQuarterlyTotals,
  calculateYearlyTotal,
  formatPesoCurrency,
} from "../../../utils";
import ComputationRows from "./ComputationRows";

const FinanceTable: React.FC = () => {
  const [showComputations, setShowComputations] = useState(false);
  const periodType = useFinanceStore((v) => v.periodType);
  const part = useFinanceStore((v) => v.part);
  const year = useFinanceStore((v) => v.year);
  const [financeDataInput, setFinanceDataInput] = useState<FinanceData>({});
  const financeData = useFinanceStore((v) => v.financeData);
  const setFinanceData = useFinanceStore((v) => v.setFinanceData);
  const outputsRef = useRef<FinanceData>({});
  const config = getPartConfig(part) || part1;
  const partKey = config.part.toString();

  // Get column headers based on period type
  const getColumns = (): string[] => {
    switch (periodType) {
      case "Monthly":
        return MONTHS;
      case "Quarterly":
        return QUARTERS;
      case "Yearly":
        return ["Year"];
      default:
        return [];
    }
  };

  // Initialize row data if it doesn't exist
  const initializeRowData = (rowKey: string) => {
    if (!financeDataInput[year]) {
      financeDataInput[year] = {};
    }

    if (!financeDataInput[year][partKey]) {
      financeDataInput[year][partKey] = {};
    }

    if (!financeDataInput[year][partKey][rowKey]) {
      financeDataInput[year][partKey][rowKey] = new Array(12).fill(0);
    }
  };

  // Handle input change
  const handleInputChange = useDebounceCallback(
    (rowKey: string, index: number, value: string) => {
      const numValue = parseFloat(value) || 0;

      setFinanceDataInput((prev) => {
        const newData = { ...prev };

        // Set the input value
        if (!newData[year]) newData[year] = {};
        if (!newData[year][partKey]) newData[year][partKey] = {};
        if (!newData[year][partKey][rowKey]) {
          newData[year][partKey][rowKey] = new Array(12).fill(0);
        }
        newData[year][partKey][rowKey][index] = numValue;

        // Set the value for output
        if (!outputsRef.current[year]) outputsRef.current[year] = {};
        if (!outputsRef.current[year][partKey])
          outputsRef.current[year][partKey] = {};
        if (!outputsRef.current[year][partKey][rowKey]) {
          outputsRef.current[year][partKey][rowKey] = new Array(12).fill(0);
        }
        outputsRef.current[year][partKey][rowKey][index] = numValue;

        return newData;
      });

      // Update finance data in store
      setFinanceData(outputsRef.current);
    },
    500
  );

  // Get computed output values
  const getOutputValues = (
    rowKey: string,
    outputConfig: OutputRowConfig
  ): (number | string)[] => {
    // console.log(rowKey, config.inputs);

    if (!rowKey)
      return Array.from({ length: getColumns().length }).map(() => 0);

    initializeRowData(rowKey);

    let computedValues: number[];
    let displayValues: (number | string)[];

    switch (periodType) {
      case "Monthly":
        computedValues = outputConfig.formulas.monthlyFormula(
          financeDataInput,
          year,
          outputsRef.current
        );
        displayValues = computedValues.map((v) => v.toFixed(2));
        break;
      case "Quarterly":
        computedValues = outputConfig.formulas.quarterlyFormula(
          financeDataInput,
          year,
          outputsRef.current
        );
        displayValues = computedValues.map((v) => v.toFixed(2));
        break;
      case "Yearly":
        computedValues = [
          outputConfig.formulas.yearlyFormula(
            financeDataInput,
            year,
            outputsRef.current
          ),
        ];
        displayValues = computedValues.map((v) => v.toFixed(2));
        break;
      default:
        computedValues = [];
        displayValues = [];
    }

    // Store computed values in ref for potential use in other computations
    if (!outputsRef.current[year]) outputsRef.current[year] = {};
    if (!outputsRef.current[year][partKey])
      outputsRef.current[year][partKey] = {};
    outputsRef.current[year][partKey][rowKey] = computedValues;

    return displayValues;
  };

  // Get input values for display
  const getInputValues = (rowKey: string): number[] => {
    initializeRowData(rowKey);

    const data: number[] =
      financeDataInput[year]?.[partKey]?.[rowKey] || new Array(12).fill(0);

    switch (periodType) {
      case "Monthly":
        return data;
      case "Quarterly":
        return calculateQuarterlyTotals(data);
      case "Yearly":
        return [calculateYearlyTotal(data)];
      default:
        return [];
    }
  };

  const columns = getColumns();

  useEffect(() => {
    setFinanceDataInput(financeData);
    outputsRef.current = financeData;
  }, []);

  return (
    <div className="w-full space-y-4">
      <div className="flex justify-end mb-2">
        <Checkbox
          className="ml-auto"
          defaultSelected={showComputations}
          onValueChange={setShowComputations}
        >
          Show computations
        </Checkbox>
      </div>
      <Table aria-label="Finance data table" className="max-h-[564px]">
        <TableHeader>
          <TableColumn key="label" className="min-w-64 max-w-64 w-64 text-xs">
            Metric
          </TableColumn>
          {
            columns?.map((col, idx) => (
              <TableColumn
                key={idx}
                className="min-w-20 max-w-20 w-20 text-right text-xs"
              >
                {col}
              </TableColumn>
            )) as any
          }
        </TableHeader>
        <TableBody>
          {/* Output Rows */}
          {config.outputs &&
            Object.entries(config.outputs).map(([key, outputConfig]) => [
              <TableRow key={key} className="bg-blue-100 text-blue-500">
                <TableCell className="font-semibold text-xs">
                  {outputConfig.label}
                </TableCell>
                {
                  getOutputValues(key, outputConfig).map((value, idx) => (
                    <TableCell
                      key={idx}
                      className="text-right font-semibold text-xs"
                    >
                      {formatPesoCurrency(+value)}
                    </TableCell>
                  )) as any
                }
              </TableRow>,
              ...(showComputations
                ? ComputationRows({
                    rowKey: key,
                    financeData: outputsRef.current,
                    year: year,
                    partKey: partKey,
                    periodType: periodType,
                    computations: outputConfig.computations,
                    variant: "output",
                  })
                : []),
            ])}

          {/* Input Rows */}
          {config.inputs &&
            (Object.entries(config.inputs).map(([key, inputConfig]) => [
              <TableRow
                key={`${partKey}-${key}-${year}`}
                className="bg-gray-50"
              >
                <TableCell className="font-medium text-xs">
                  {inputConfig.label}
                </TableCell>
                {periodType === "Monthly"
                  ? // For monthly, show actual input fields for each month
                    Array.from({ length: 12 }).map((_, idx) => {
                      initializeRowData(key);
                      const value =
                        financeDataInput[year]?.[partKey]?.[key]?.[idx] || 0;
                      return (
                        <TableCell
                          key={`${year}-${partKey}-${key}-${idx}-${value}`}
                        >
                          <Input
                            type="number"
                            size="sm"
                            defaultValue={value.toString()}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => handleInputChange(key, idx, e.target.value)}
                            classNames={{
                              input: "text-right !text-xs",
                              inputWrapper: "h-8",
                            }}
                            variant="underlined"
                          />
                        </TableCell>
                      );
                    })
                  : // For quarterly/yearly, show aggregated values as text
                    (getInputValues(key).map((value, idx) => (
                      <TableCell
                        key={`${year}-${partKey}-${key}-${idx}`}
                        className="text-right text-xs"
                      >
                        {value ? formatPesoCurrency(+value) : "-"}
                      </TableCell>
                    )) as any)}
              </TableRow>,
              ...(showComputations
                ? ComputationRows({
                    rowKey: key,
                    financeData: outputsRef.current,
                    year: year,
                    partKey: partKey,
                    periodType: periodType,
                    computations: inputConfig.computations,
                    variant: "input",
                  })
                : []),
            ]) as any)}
        </TableBody>
      </Table>
    </div>
  );
};

export default FinanceTable;
