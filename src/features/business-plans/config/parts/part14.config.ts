import type { RowConfigurations } from "../../types";

export const part14: RowConfigurations = {
  part: 14,
  title: "INVENTORY",
  inputs: {
    inventory: {
      label: "Inventory",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
      ],
    },
  },
};
