import type { RowConfigurations } from "../../types";

export const part5: RowConfigurations = {
  part: 5,
  title: "EXPENSES: DEPRECIATION",
  inputs: {
    totalDepreciation: {
      label: "Total Depreciation Expenses",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
      ],
    },
  },
};
