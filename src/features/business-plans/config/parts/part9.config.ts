import type { RowConfigurations } from "../../types";
import {
  calculateQuarterlyTotals,
  calculateYearlyTotal,
  getOutputValue,
  getValue,
  sumArraysByIndex,
} from "../../utils";

export const part9: RowConfigurations = {
  part: 9,
  title: "INCOME OR LOSSES BEFORE INCOME TAXES",
  outputs: {
    totalIncomeBeforeTax: {
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
      ],
      label: "Total Income (Losses) Before Income Taxes",
      formulas: {
        monthlyFormula: (data, year, output): number[] =>
          sumArraysByIndex([
            getOutputValue(output, year, 6, "totalOperatingIncome"),
            getValue(data, year, 8, "totalOtherIncome"),
          ]),
        quarterlyFormula: (data, year, output): number[] =>
          calculateQuarterlyTotals(
            sumArraysByIndex([
              getOutputValue(output, year, 6, "totalOperatingIncome"),
              getValue(data, year, 8, "totalOtherIncome"),
            ])
          ),
        yearlyFormula: (data, year, output): number =>
          calculateYearlyTotal(
            sumArraysByIndex([
              getOutputValue(output, year, 6, "totalOperatingIncome"),
              getValue(data, year, 8, "totalOtherIncome"),
            ])
          ),
      },
    },
  },
};
