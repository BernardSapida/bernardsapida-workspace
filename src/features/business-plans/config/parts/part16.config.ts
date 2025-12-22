import type { RowConfigurations } from "../../types";

export const part16: RowConfigurations = {
  part: 16,
  title: "ACCOUNTS PAYABLE",
  inputs: {
    accountsPayable: {
      label: "Accounts Payable",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
      ],
    },
  },
};
