import type { RowConfigurations } from "../../types";
import {
  calculateQuarterlyTotals,
  calculateYearlyTotal,
  getOutputValue,
  getValue,
  sumArraysByIndex,
} from "../../utils";

export const part7: RowConfigurations = {
  part: 7,
  title:
    "EBITDA (EARNINGS BEFORE INTEREST, TAXES, DEPRECIATION AND AMORTIZATION)",
  outputs: {
    totalEbitda: {
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
      ],
      label: "Total EBITDA",
      formulas: {
        monthlyFormula: (data, year, output): number[] =>
          sumArraysByIndex([
            getOutputValue(output, year, 6, "totalOperatingIncome"),
            getValue(data, year, 5, "totalDepreciation"),
          ]),
        quarterlyFormula: (data, year, output): number[] =>
          calculateQuarterlyTotals(
            sumArraysByIndex([
              getOutputValue(output, year, 6, "totalOperatingIncome"),
              getValue(data, year, 5, "totalDepreciation"),
            ])
          ),
        yearlyFormula: (data, year, output): number =>
          calculateYearlyTotal(
            sumArraysByIndex([
              getOutputValue(output, year, 6, "totalOperatingIncome"),
              getValue(data, year, 5, "totalDepreciation"),
            ])
          ),
      },
    },
  },
};
