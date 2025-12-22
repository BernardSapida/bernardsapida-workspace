import type { RowConfigurations } from "../../types";

export const part4: RowConfigurations = {
  part: 4,
  title: "EXPENSES: RESEARCH AND DEVELOPMENT (R&D)",
  inputs: {
    totalRd: {
      label: "Total R & D Expenses",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
      ],
    },
  },
};
