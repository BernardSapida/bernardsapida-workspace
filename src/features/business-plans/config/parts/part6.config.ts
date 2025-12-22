import type { RowConfigurations } from "../../types";
import {
  calculateQuarterlyTotals,
  calculateYearlyTotal,
  getOutputValue,
  getValue,
  sumArraysByIndex,
} from "../../utils";

export const part6: RowConfigurations = {
  part: 6,
  title: "INCOME OR LOSSES FROM OPERATIONS",
  outputs: {
    totalOperatingIncome: {
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
      ],
      label: "Total Income (Losses) from Operations",
      formulas: {
        monthlyFormula: (data, year, output): number[] =>
          sumArraysByIndex([
            getValue(data, year, 1, "revenue"),
            getOutputValue(output, year, 2, "totalCogs").map((v) => -v),
            getOutputValue(output, year, 3, "totalSga").map((v) => -v),
            getValue(data, year, 4, "totalRd").map((v) => -v),
            getValue(data, year, 5, "totalDepreciation").map((v) => -v),
          ]),
        quarterlyFormula: (data, year, output): number[] =>
          calculateQuarterlyTotals(
            sumArraysByIndex([
              getValue(data, year, 1, "revenue"),
              getOutputValue(output, year, 2, "totalCogs").map((v) => -v),
              getOutputValue(output, year, 3, "totalSga").map((v) => -v),
              getValue(data, year, 4, "totalRd").map((v) => -v),
              getValue(data, year, 5, "totalDepreciation").map((v) => -v),
            ])
          ),
        yearlyFormula: (data, year, output): number =>
          calculateYearlyTotal(
            sumArraysByIndex([
              getValue(data, year, 1, "revenue"),
              getOutputValue(output, year, 2, "totalCogs").map((v) => -v),
              getOutputValue(output, year, 3, "totalSga").map((v) => -v),
              getValue(data, year, 4, "totalRd").map((v) => -v),
              getValue(data, year, 5, "totalDepreciation").map((v) => -v),
            ])
          ),
      },
    },
  },
};
