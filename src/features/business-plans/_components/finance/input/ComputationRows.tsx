import type { JSX } from "react";
import {
  calculateMonthOverMonthChange,
  calculatePercentOfTotalCogs,
  calculatePercentOfTotalRevenue,
  calculatePercentOfTotalSGAExpense,
  calculateQuarterOverQuarterChange,
  calculateTotalGrossMarginPercent,
  calculateYearOverYearChange,
  formatPercentage,
} from "../../../utils";
import { TableCell, TableRow } from "@heroui/react";
import type { ComputationType, FinanceData, PeriodType } from "../../../types";

interface ComputationRowsProps {
  rowKey: string;
  financeData: FinanceData;
  year: number;
  partKey: string;
  periodType: PeriodType;
  computations: ComputationType[];
  variant?: "input" | "output";
}

const ComputationRows = ({
  rowKey,
  financeData,
  year,
  partKey,
  periodType,
  computations,
  variant,
}: ComputationRowsProps): JSX.Element[] => {
  const rows: JSX.Element[] = [];
  const rowBg = variant === "output" ? "bg-blue-50/80" : "";

  if (computations.includes("yearOverYearChange")) {
    const yoyValues = calculateYearOverYearChange(
      financeData,
      year,
      partKey,
      rowKey,
      periodType
    );

    rows.push(
      <TableRow key={`${rowKey}-yoy`} className={rowBg}>
        <TableCell className="font-medium text-xs text-slate-400 pl-8">
          Year-over-Year Change (YoY) %
        </TableCell>
        {
          yoyValues.map((val, idx) => (
            <TableCell key={idx} className="text-right text-xs text-slate-400">
              {formatPercentage(val)}
            </TableCell>
          )) as any
        }
      </TableRow>
    );
  }

  if (
    periodType !== "Yearly" &&
    computations.includes("quarterOverQuarterChange")
  ) {
    const qoqValues = calculateQuarterOverQuarterChange(
      financeData,
      year,
      partKey,
      rowKey,
      periodType
    );

    rows.push(
      <TableRow key={`${rowKey}-qoq`} className={rowBg}>
        <TableCell className="font-medium text-xs text-slate-400 pl-8">
          Quarter-over-Quarter Change %
        </TableCell>
        {
          qoqValues.map((val, idx) => (
            <TableCell key={idx} className="text-right text-xs text-slate-400">
              {formatPercentage(val)}
            </TableCell>
          )) as any
        }
      </TableRow>
    );
  }

  if (
    periodType === "Monthly" &&
    computations.includes("monthOverMonthChange")
  ) {
    const momValues = calculateMonthOverMonthChange(
      financeData,
      year,
      partKey,
      rowKey,
      periodType
    );

    rows.push(
      <TableRow key={`${rowKey}-mom`} className={rowBg}>
        <TableCell className="font-medium text-xs text-slate-400 pl-8">
          Month-over-Month Change %
        </TableCell>
        {
          momValues.map((val, idx) => (
            <TableCell key={idx} className="text-right text-xs text-slate-400">
              {formatPercentage(val)}
            </TableCell>
          )) as any
        }
      </TableRow>
    );
  }

  if (computations.includes("percentOfTotalCogs")) {
    const percentValues = calculatePercentOfTotalCogs(
      financeData,
      year,
      partKey,
      rowKey,
      periodType
    );

    rows.push(
      <TableRow key={`${rowKey}-percentOfTotalCogs`} className={rowBg}>
        <TableCell className="font-medium text-xs text-slate-400 pl-8">
          Total COGS %
        </TableCell>
        {
          percentValues.map((val, idx) => (
            <TableCell key={idx} className="text-right text-xs text-slate-400">
              {formatPercentage(val)}
            </TableCell>
          )) as any
        }
      </TableRow>
    );
  }

  if (computations.includes("totalGrossMarginPercent")) {
    const percentValues = calculateTotalGrossMarginPercent(
      financeData,
      year,
      partKey,
      rowKey,
      periodType
    );

    rows.push(
      <TableRow key={`${rowKey}-totalGrossMarginPercent`} className={rowBg}>
        <TableCell className="font-medium text-xs text-slate-400 pl-8">
          Total Gross Margin %
        </TableCell>
        {
          percentValues.map((val, idx) => (
            <TableCell key={idx} className="text-right text-xs text-slate-400">
              {formatPercentage(val)}
            </TableCell>
          )) as any
        }
      </TableRow>
    );
  }

  if (computations.includes("percentOfTotalRevenue")) {
    const percentValues = calculatePercentOfTotalRevenue(
      financeData,
      year,
      partKey,
      rowKey,
      periodType
    );

    rows.push(
      <TableRow key={`${rowKey}-percentOfTotalRevenue`} className={rowBg}>
        <TableCell className="font-medium text-xs text-slate-400 pl-8">
          Total Revenue %
        </TableCell>
        {
          percentValues.map((val, idx) => (
            <TableCell key={idx} className="text-right text-xs text-slate-400">
              {formatPercentage(val)}
            </TableCell>
          )) as any
        }
      </TableRow>
    );
  }

  if (computations.includes("percentOfTotalSgaExpense")) {
    const percentValues = calculatePercentOfTotalSGAExpense(
      financeData,
      year,
      partKey,
      rowKey,
      periodType
    );

    rows.push(
      <TableRow key={`${rowKey}-percentOfTotalSgaExpense`} className={rowBg}>
        <TableCell className="font-medium text-xs text-slate-400 pl-8">
          Total S, G, & A Expense %
        </TableCell>
        {
          percentValues.map((val, idx) => (
            <TableCell key={idx} className="text-right text-xs text-slate-400">
              {formatPercentage(val)}
            </TableCell>
          )) as any
        }
      </TableRow>
    );
  }

  return rows;
};

export default ComputationRows;
