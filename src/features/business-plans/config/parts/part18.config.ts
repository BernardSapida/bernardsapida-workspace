import type { RowConfigurations } from "../../types";

export const part18: RowConfigurations = {
  part: 18,
  title: "LONG-TERM DEBT",
  inputs: {
    longTermDebt: {
      label: "Long-Term Debt",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
      ],
    },
  },
};
