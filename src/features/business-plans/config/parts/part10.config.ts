import type { RowConfigurations } from "../../types";

export const part10: RowConfigurations = {
  part: 10,
  title: "PROVISION (BENEFIT) FOR INCOME TAXES",
  inputs: {
    totalTaxExpense: {
      label: "Total Tax Expense (Benefit)",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
      ],
    },
  },
};
