import type { RowConfigurations } from "../../types";

export const part20: RowConfigurations = {
  part: 20,
  title: "ADDITIONAL PAID-IN-CAPITAL",
  inputs: {
    paidInCapital: {
      label: "Additional Paid-In Capital",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
      ],
    },
  },
};
