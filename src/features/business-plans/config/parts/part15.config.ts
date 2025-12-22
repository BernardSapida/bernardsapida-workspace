import type { RowConfigurations } from "../../types";

export const part15: RowConfigurations = {
  part: 15,
  title: "CAPEX",
  inputs: {
    capex: {
      label: "Capital Expenditures (CapEx)",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
      ],
    },
  },
};
