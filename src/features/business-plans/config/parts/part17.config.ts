import type { RowConfigurations } from "../../types";

export const part17: RowConfigurations = {
  part: 17,
  title: "SHORT-TERM DEBT",
  inputs: {
    shortTermDebt: {
      label: "Short-Term Debt",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
      ],
    },
  },
};
