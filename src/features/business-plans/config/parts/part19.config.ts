import type { RowConfigurations } from "../../types";

export const part19: RowConfigurations = {
  part: 19,
  title: "COMMON SHARES",
  inputs: {
    commonShares: {
      label: "Common Shares",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
      ],
    },
  },
};
