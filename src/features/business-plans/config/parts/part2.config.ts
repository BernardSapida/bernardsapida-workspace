import type { RowConfigurations } from "../../types";
import {
  calculateQuarterlyTotals,
  calculateYearlyTotal,
  getValue,
} from "../../utils";

export const part2: RowConfigurations = {
  part: 2,
  title: "EXPENSES: COST OF GOODS SOLD (COGS) BREAKDOWN",
  inputs: {
    cogsForRevenue: {
      label: "COGS for Revenue",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalCogs",
        "totalGrossMarginPercent",
      ],
    },
    costPerUnit: {
      label:
        "Cost to Manufacture 1 Item (Product) or the Cost to Bill 1 Hour of Employees' Time to a Customer (Service)",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
      ],
    },
  },
  outputs: {
    totalCogs: {
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "totalGrossMarginPercent",
      ],
      label: "Total COGS",
      formulas: {
        monthlyFormula: (data, year, _output): number[] =>
          getValue(data, year, 2, "cogsForRevenue"),
        quarterlyFormula: (data, year, _output): number[] =>
          calculateQuarterlyTotals(getValue(data, year, 2, "cogsForRevenue")),
        yearlyFormula: (data, year, _output): number =>
          calculateYearlyTotal(getValue(data, year, 2, "cogsForRevenue")),
      },
    },
  },
};
