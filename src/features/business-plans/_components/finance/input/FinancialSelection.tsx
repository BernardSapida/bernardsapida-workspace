import { Select, SelectItem } from "@heroui/react";
import { memo, type FunctionComponent } from "react";
import { PERIOD_TYPES, YEARS } from "../../../constants/finance";
import { useFinanceStore } from "~/store/financeStore";
import { FINANCIAL_PARTS } from "../../../config/parts/all.config";
import type { PeriodType } from "../../../types";

interface FinancialSelectionProps {}

const FinancialSelection: FunctionComponent<FinancialSelectionProps> = memo(
  ({}) => {
    const part = useFinanceStore((v) => v.part);
    const setPart = useFinanceStore((v) => v.setPart);

    const year = useFinanceStore((v) => v.year);
    const setYear = useFinanceStore((v) => v.setYear);

    const periodType = useFinanceStore((v) => v.periodType);
    const setPeriodType = useFinanceStore((v) => v.setPeriodType);

    return (
      <>
        <Select
          className="w-full mb-4"
          aria-labelledby="Financial Part Selection"
          defaultSelectedKeys={[`${part}`]}
          onChange={(e) => setPart(+e.target.value)}
          label="Select Part"
          disallowEmptySelection
        >
          {FINANCIAL_PARTS?.map((item) => (
            <SelectItem key={item.part}>
              {`Part ${item.part}: ${item.title}`}
            </SelectItem>
          ))}
        </Select>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <Select
            className="w-full"
            aria-labelledby="Financial Period Type"
            defaultSelectedKeys={[periodType]}
            onChange={(e) => setPeriodType(e.target.value as PeriodType)}
            variant="flat"
            label="Select Period"
            disallowEmptySelection
          >
            {PERIOD_TYPES.map((period) => (
              <SelectItem key={period}>{period}</SelectItem>
            ))}
          </Select>
          <Select
            className="w-full"
            aria-labelledby="Financial Year"
            defaultSelectedKeys={[`${year}`]}
            onChange={(e) => setYear(+e.target.value)}
            variant="flat"
            label="Select Year"
            disallowEmptySelection
          >
            {YEARS.map((year) => (
              <SelectItem key={year}>{`Year ${year}`}</SelectItem>
            ))}
          </Select>
        </div>
      </>
    );
  }
);

export default FinancialSelection;
