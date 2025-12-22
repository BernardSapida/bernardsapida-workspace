import type { RowConfigurations } from "../../types";

export const part13: RowConfigurations = {
  part: 13,
  title: "ACCOUNTS RECEIVABLE",
  inputs: {
    accountsReceivable: {
      label: "Accounts Receivable",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
      ],
    },
  },
};
