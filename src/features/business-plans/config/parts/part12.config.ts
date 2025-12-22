import type { RowConfigurations } from "../../types";

export const part12: RowConfigurations = {
  part: 12,
  title: "SHORT-TERM INVESTMENTS",
  inputs: {
    shortTermInvestments: {
      label: "Short-Term Investments",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
      ],
    },
  },
};
