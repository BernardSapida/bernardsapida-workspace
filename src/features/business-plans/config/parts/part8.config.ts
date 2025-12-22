import type { RowConfigurations } from "../../types";

export const part8: RowConfigurations = {
  part: 8,
  title: "OTHER INCOME OR EXPENSE",
  inputs: {
    totalOtherIncome: {
      label: "Total Other Income (Expenses)",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
      ],
    },
  },
};
