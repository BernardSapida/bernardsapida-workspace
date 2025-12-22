import type { RowConfigurations } from "../../types";
import {
  calculateQuarterlyTotals,
  calculateYearlyTotal,
  getOutputValue,
  getValue,
  sumArraysByIndex,
} from "../../utils";

export const part11: RowConfigurations = {
  part: 11,
  title: "NET INCOME",
  outputs: {
    totalNetIncome: {
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
      ],
      label: "Total Net Income (Loss)",
      formulas: {
        monthlyFormula: (data, year, output): number[] =>
          sumArraysByIndex([
            getOutputValue(output, year, 9, "totalIncomeBeforeTax"),
            getValue(data, year, 10, "totalTaxExpense").map((v) => -v),
          ]),
        quarterlyFormula: (data, year, output): number[] =>
          calculateQuarterlyTotals(
            sumArraysByIndex([
              getOutputValue(output, year, 9, "totalIncomeBeforeTax"),
              getValue(data, year, 10, "totalTaxExpense").map((v) => -v),
            ])
          ),
        yearlyFormula: (data, year, output): number =>
          calculateYearlyTotal(
            sumArraysByIndex([
              getOutputValue(output, year, 9, "totalIncomeBeforeTax"),
              getValue(data, year, 10, "totalTaxExpense").map((v) => -v),
            ])
          ),
      },
    },
  },
};
