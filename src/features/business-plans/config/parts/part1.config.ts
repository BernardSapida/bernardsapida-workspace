import type { RowConfigurations } from "../../types";
import {
  calculateQuarterlyTotals,
  calculateYearlyTotal,
  getValue,
} from "../../utils";

export const part1: RowConfigurations = {
  part: 1,
  title: "REVENUE BREAKDOWN",
  inputs: {
    revenue: {
      label: "Revenue",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
      ],
    },
    unitsOrHours: {
      label:
        "Number of Units Sold for a Product or Number of Hours Billed for a Service",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
      ],
    },
    pricePerUnit: {
      label:
        "Average Selling Price per Unit for a Product or Hourly Rate Charged for a Service",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
      ],
    },
    returnsOrRefunds: {
      label:
        "# of Units (Products) Returned or # of Billable Hours Refunded (Service)",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
      ],
    },
  },
  outputs: {
    totalRevenue: {
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
      ],
      label: "Total Revenue",
      formulas: {
        monthlyFormula: (data, year, _output): number[] =>
          getValue(data, year, 1, "revenue"),
        quarterlyFormula: (data, year, _output): number[] =>
          calculateQuarterlyTotals(getValue(data, year, 1, "revenue")),
        yearlyFormula: (data, year, _output): number =>
          calculateYearlyTotal(getValue(data, year, 1, "revenue")),
      },
    },
  },
};
