import { part1, part2, part3 } from "../config/parts";
import type { FinanceData } from "../types";

export const trueValue = (value: number | null | undefined): number => {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return 0;
  }

  return value;
};

/**
 * Calculate percentage change between two values
 * Formula: (current - previous) / |previous| * 100
 */
const calculatePercentChange = (
  currentValue: number,
  previousValue: number
): number => {
  if (previousValue === 0) return 0; // Avoid division by zero
  return ((currentValue - previousValue) / Math.abs(previousValue)) * 100;
};

/**
 * Calculate yearly total from monthly data
 */
export const calculateYearlyTotal = (monthly: number[]): number => {
  return monthly.reduce((sum, val) => sum + trueValue(val), 0);
};

// ============================================
// YEAR OVER YEAR (YOY) CHANGE
// ============================================

/**
 * Calculate Year-over-Year change for each month
 * Compares current year month to same month in previous year
 * Returns array of 12 percentages (one per month)
 *
 * @param data - Complete finance data
 * @param year - Current year index
 * @param partKey - Part identifier (e.g., "1", "2")
 * @param rowKey - Row identifier (e.g., "totalRevenue")
 * @returns Array of 12 YOY percentage changes (null if previous year doesn't exist)
 */
/**
 * Calculate Year-over-Year change
 * Compares current period to same period in previous year
 *
 * @param data - Complete finance data
 * @param year - Current year index
 * @param partKey - Part identifier (e.g., "1", "2")
 * @param rowKey - Row identifier (e.g., "totalRevenue")
 * @param periodType - "Monthly" (12 values), "Quarterly" (4 values), or "Yearly" (1 value)
 * @returns Array of YOY percentage changes based on period type
 */
export const calculateYearOverYearChange = (
  data: FinanceData,
  year: number,
  partKey: string,
  rowKey: string,
  periodType: "Monthly" | "Quarterly" | "Yearly" = "Monthly"
): number[] => {
  // Can't calculate YOY for Year 0 (no previous year)
  if (year === 0) {
    const length =
      periodType === "Monthly" ? 12 : periodType === "Quarterly" ? 4 : 1;
    return new Array(length).fill(0);
  }

  const currentYearData =
    data[year]?.[partKey]?.[rowKey] || new Array(12).fill(0);
  const previousYearData =
    data[year - 1]?.[partKey]?.[rowKey] || new Array(12).fill(0);

  switch (periodType) {
    case "Monthly":
      // Calculate YOY for each of 12 months
      return currentYearData.map((currentMonth, monthIndex) => {
        const previousMonth = trueValue(previousYearData[monthIndex]);
        const current = trueValue(currentMonth);
        return calculatePercentChange(current, previousMonth);
      });

    case "Quarterly": {
      // Calculate YOY for each of 4 quarters
      const currentQuarters = calculateQuarterlyTotals(currentYearData);
      const previousQuarters = calculateQuarterlyTotals(previousYearData);

      return currentQuarters.map((currentQuarter, quarterIndex) => {
        const previousQuarter = trueValue(previousQuarters[quarterIndex]);
        const current = trueValue(currentQuarter);
        return calculatePercentChange(current, previousQuarter);
      });
    }

    case "Yearly": {
      // Calculate YOY for the entire year (single value)
      const currentYearTotal = calculateYearlyTotal(currentYearData);
      const previousYearTotal = calculateYearlyTotal(previousYearData);
      return [calculatePercentChange(currentYearTotal, previousYearTotal)];
    }

    default:
      return [];
  }
};

// ============================================
// QUARTER OVER QUARTER (QOQ) CHANGE
// ============================================

/**
 * Calculate Quarter-over-Quarter change
 * Compares current period to previous period (including previous year transitions)
 *
 * @param data - Complete finance data
 * @param year - Current year index
 * @param partKey - Part identifier
 * @param rowKey - Row identifier
 * @param periodType - "Monthly" (12 values), "Quarterly" (4 values), or "Yearly" (1 value)
 * @returns Array of QOQ percentage changes based on period type
 */
export const calculateQuarterOverQuarterChange = (
  data: FinanceData,
  year: number,
  partKey: string,
  rowKey: string,
  periodType: "Monthly" | "Quarterly" | "Yearly" = "Monthly"
): number[] => {
  const currentYearData =
    data[year]?.[partKey]?.[rowKey] || new Array(12).fill(0);

  // return calculateQuarterlyTotals(currentYearData);

  switch (periodType) {
    case "Monthly": {
      // Only calculate QOQ for the last month of each quarter (index 2, 5, 8, 11)
      // Pattern: [null, null, data, null, null, data, null, null, data, null, null, data]
      const qoqChanges: number[] = [];

      for (let m = 0; m < 12; m++) {
        // Check if this is the last month of a quarter (March, June, Sept, Dec)
        const isLastMonthOfQuarter = (m + 1) % 3 === 0;

        if (!isLastMonthOfQuarter) {
          qoqChanges.push(0);
        } else {
          // Calculate current quarter total (sum of 3 months)
          const quarterStartIndex = m - 2;
          const currentQuarterTotal =
            trueValue(currentYearData[quarterStartIndex]) +
            trueValue(currentYearData[quarterStartIndex + 1]) +
            trueValue(currentYearData[quarterStartIndex + 2]);

          if (m < 3) {
            // Q1 last month (March, index 2): Compare to Q4 of previous year
            if (year === 0) {
              qoqChanges.push(0);
            } else {
              const previousYearData =
                data[year - 1]?.[partKey]?.[rowKey] || new Array(12).fill(0);
              // Q4 total (Oct + Nov + Dec)
              const previousQuarterTotal =
                trueValue(previousYearData[9]) +
                trueValue(previousYearData[10]) +
                trueValue(previousYearData[11]);
              qoqChanges.push(
                calculatePercentChange(
                  currentQuarterTotal,
                  previousQuarterTotal
                )
              );
            }
          } else {
            // Q2-Q4 last months: Compare to previous quarter total
            const prevQuarterStartIndex = quarterStartIndex - 3;
            const previousQuarterTotal =
              trueValue(currentYearData[prevQuarterStartIndex]) +
              trueValue(currentYearData[prevQuarterStartIndex + 1]) +
              trueValue(currentYearData[prevQuarterStartIndex + 2]);
            qoqChanges.push(
              calculatePercentChange(currentQuarterTotal, previousQuarterTotal)
            );
          }
        }
      }

      return qoqChanges;
    }

    case "Quarterly": {
      // For quarterly view, compare each quarter to previous quarter
      const currentQuarters = calculateQuarterlyTotals(currentYearData);
      const qoqChanges: number[] = [];

      for (let q = 0; q < 4; q++) {
        const currentQuarter = trueValue(currentQuarters[q]);

        if (q === 0) {
          // Q1: Compare to Q4 of previous year
          if (year === 0) {
            qoqChanges.push(0);
          } else {
            const previousYearData =
              data[year - 1]?.[partKey]?.[rowKey] || new Array(12).fill(0);
            const previousQuarters = calculateQuarterlyTotals(previousYearData);
            const previousQuarter = trueValue(previousQuarters[3]);
            qoqChanges.push(
              calculatePercentChange(currentQuarter, previousQuarter)
            );
          }
        } else {
          // Q2-Q4: Compare to previous quarter in same year
          const previousQuarter = trueValue(currentQuarters[q - 1]);
          qoqChanges.push(
            calculatePercentChange(currentQuarter, previousQuarter)
          );
        }
      }

      return qoqChanges;
    }

    case "Yearly": {
      // For yearly view, compare current year to previous year (same as YOY)
      if (year === 0) {
        return [0];
      }

      const currentYearTotal = calculateYearlyTotal(currentYearData);
      const previousYearData =
        data[year - 1]?.[partKey]?.[rowKey] || new Array(12).fill(0);
      const previousYearTotal = calculateYearlyTotal(previousYearData);

      return [calculatePercentChange(currentYearTotal, previousYearTotal)];
    }

    default:
      return [];
  }
};

// ============================================
// MONTH OVER MONTH (MOM) CHANGE
// ============================================

/**
 * Calculate Month-over-Month change
 * Compares current period to previous period (including year transitions)
 *
 * @param data - Complete finance data
 * @param year - Current year index
 * @param partKey - Part identifier
 * @param rowKey - Row identifier
 * @param periodType - "Monthly" (12 values), "Quarterly" (4 values), or "Yearly" (1 value)
 * @returns Array of MOM percentage changes based on period type
 */
export const calculateMonthOverMonthChange = (
  data: FinanceData,
  year: number,
  partKey: string,
  rowKey: string,
  periodType: "Monthly" | "Quarterly" | "Yearly" = "Monthly"
): number[] => {
  const currentYearData =
    data[year]?.[partKey]?.[rowKey] || new Array(12).fill(0);

  switch (periodType) {
    case "Monthly": {
      // Compare each month to previous month
      const momChanges: number[] = [];

      for (let m = 0; m < 12; m++) {
        const currentMonth = trueValue(currentYearData[m]);

        if (m === 0) {
          // January: Compare to December of previous year
          if (year === 0) {
            momChanges.push(0);
          } else {
            const previousYearData =
              data[year - 1]?.[partKey]?.[rowKey] || new Array(12).fill(0);
            const previousMonth = trueValue(previousYearData[11]);
            momChanges.push(
              calculatePercentChange(currentMonth, previousMonth)
            );
          }
        } else {
          // Feb-Dec: Compare to previous month in same year
          const previousMonth = trueValue(currentYearData[m - 1]);
          momChanges.push(calculatePercentChange(currentMonth, previousMonth));
        }
      }

      return momChanges;
    }

    case "Quarterly": {
      // Compare each quarter to previous quarter
      const currentQuarters = calculateQuarterlyTotals(currentYearData);
      const momChanges: number[] = [];

      for (let q = 0; q < 4; q++) {
        const currentQuarter = trueValue(currentQuarters[q]);

        if (q === 0) {
          // Q1: Compare to Q4 of previous year
          if (year === 0) {
            momChanges.push(0);
          } else {
            const previousYearData =
              data[year - 1]?.[partKey]?.[rowKey] || new Array(12).fill(0);
            const previousQuarters = calculateQuarterlyTotals(previousYearData);
            const previousQuarter = trueValue(previousQuarters[3]);
            momChanges.push(
              calculatePercentChange(currentQuarter, previousQuarter)
            );
          }
        } else {
          // Q2-Q4: Compare to previous quarter in same year
          const previousQuarter = trueValue(currentQuarters[q - 1]);
          momChanges.push(
            calculatePercentChange(currentQuarter, previousQuarter)
          );
        }
      }

      return momChanges;
    }

    case "Yearly": {
      // Compare current year to previous year
      if (year === 0) {
        return [0];
      }

      const currentYearTotal = calculateYearlyTotal(currentYearData);
      const previousYearData =
        data[year - 1]?.[partKey]?.[rowKey] || new Array(12).fill(0);
      const previousYearTotal = calculateYearlyTotal(previousYearData);

      return [calculatePercentChange(currentYearTotal, previousYearTotal)];
    }

    default:
      return [];
  }
};

// ============================================
// PERCENTAGE CALCULATIONS
// ============================================

/**
 * Calculate each period's value as a percentage of total revenue
 *
 * @param data - Complete finance data
 * @param year - Current year index
 * @param partKey - Part identifier
 * @param rowKey - Row identifier for the metric
 * @param periodType - "Monthly" (12 values), "Quarterly" (4 values), or "Yearly" (1 value)
 * @param totalRevenueKey - Row key for total revenue (default: "totalRevenue")
 * @returns Array of percentages based on period type
 */
export const calculatePercentOfTotalRevenue = (
  data: FinanceData,
  year: number,
  partKey: string,
  rowKey: string,
  periodType: "Monthly" | "Quarterly" | "Yearly" = "Monthly",
  totalRevenueKey: string = "totalRevenue"
): number[] => {
  const metricData = data[year]?.[partKey]?.[rowKey] || new Array(12).fill(0);
  const revenueData =
    data[year]?.[part1.part]?.[totalRevenueKey] || new Array(12).fill(0);
  console.log(data[year]?.[part1.part]?.totalRevenue, totalRevenueKey);

  switch (periodType) {
    case "Monthly":
      return metricData.map((value, index) => {
        const revenue = trueValue(revenueData[index]);
        if (revenue === 0) return 0;
        return (trueValue(value) / revenue) * 100;
      });

    case "Quarterly": {
      const metricQuarters = calculateQuarterlyTotals(metricData);
      const revenueQuarters = calculateQuarterlyTotals(revenueData);

      return metricQuarters.map((value, index) => {
        const revenue = trueValue(revenueQuarters[index]);
        if (revenue === 0) return 0;
        return (trueValue(value) / revenue) * 100;
      });
    }

    case "Yearly": {
      const metricTotal = calculateYearlyTotal(metricData);
      const revenueTotal = calculateYearlyTotal(revenueData);

      if (revenueTotal === 0) return [0];
      return [(metricTotal / revenueTotal) * 100];
    }

    default:
      return [];
  }
};

/**
 * Calculate Gross Margin Percentage
 * Formula: (Revenue - COGS) / Revenue * 100
 *
 * @param data - Complete finance data
 * @param year - Current year index
 * @param partKey - Part identifier
 * @param periodType - "Monthly" (12 values), "Quarterly" (4 values), or "Yearly" (1 value)
 * @param revenueKey - Row key for revenue (default: "totalRevenue")
 * @param cogsKey - Row key for COGS (default: "totalCogs")
 * @returns Array of gross margin percentages based on period type
 */
export const calculateTotalGrossMarginPercent = (
  data: FinanceData,
  year: number,
  partKey: string,
  rowKey: string,
  periodType: "Monthly" | "Quarterly" | "Yearly" = "Monthly",
  revenueKey: string = "totalRevenue"
): number[] => {
  const metricData = data[year]?.[partKey]?.[rowKey] || new Array(12).fill(0);
  const revenueData =
    data[year]?.[part1.part]?.[revenueKey] || new Array(12).fill(0);

  switch (periodType) {
    case "Monthly":
      return revenueData.map((revenue, index) => {
        const rev = trueValue(revenue);
        const cogs = trueValue(metricData[index]);

        if (rev === 0) return 0;

        return ((rev - cogs) / rev) * 100;
      });

    case "Quarterly": {
      const revenueQuarters = calculateQuarterlyTotals(revenueData);
      const metricQuarters = calculateQuarterlyTotals(metricData);

      return revenueQuarters.map((revenue, index) => {
        const rev = trueValue(revenue);
        const metric = trueValue(metricQuarters[index]);

        if (rev === 0) return 0;

        return ((rev - metric) / rev) * 100;
      });
    }

    case "Yearly": {
      const revenueTotal = calculateYearlyTotal(revenueData);
      const metricTotal = calculateYearlyTotal(metricData);

      if (revenueTotal === 0) return [0];

      return [((revenueTotal - metricTotal) / revenueTotal) * 100];
    }

    default:
      return [];
  }
};

/**
 * Calculate each COGS component as percentage of total COGS
 *
 * @param data - Complete finance data
 * @param year - Current year index
 * @param partKey - Part identifier
 * @param rowKey - Row identifier for the COGS component
 * @param periodType - "Monthly" (12 values), "Quarterly" (4 values), or "Yearly" (1 value)
 * @param totalCogsKey - Row key for total COGS (default: "totalCogs")
 * @returns Array of percentages based on period type
 */
export const calculatePercentOfTotalCogs = (
  data: FinanceData,
  year: number,
  partKey: string,
  rowKey: string,
  periodType: "Monthly" | "Quarterly" | "Yearly" = "Monthly",
  totalCogsKey: string = "totalCogs"
): number[] => {
  const componentData =
    data[year]?.[partKey]?.[rowKey] || new Array(12).fill(0);
  const totalCogsData =
    data[year]?.[part2.part]?.[totalCogsKey] || new Array(12).fill(0);

  switch (periodType) {
    case "Monthly":
      return componentData.map((value, index) => {
        const totalCogs = trueValue(totalCogsData[index]);
        if (totalCogs === 0) return 0;
        return (trueValue(value) / totalCogs) * 100;
      });

    case "Quarterly": {
      const componentQuarters = calculateQuarterlyTotals(componentData);
      const cogsQuarters = calculateQuarterlyTotals(totalCogsData);

      return componentQuarters.map((value, index) => {
        const totalCogs = trueValue(cogsQuarters[index]);
        if (totalCogs === 0) return 0;
        return (trueValue(value) / totalCogs) * 100;
      });
    }

    case "Yearly": {
      const componentTotal = calculateYearlyTotal(componentData);
      const cogsTotal = calculateYearlyTotal(totalCogsData);

      if (cogsTotal === 0) return [0];
      return [(componentTotal / cogsTotal) * 100];
    }

    default:
      return [];
  }
};

/**
 * Calculate each period's value as a percentage of total SGA
 *
 * @param data - Complete finance data
 * @param year - Current year index
 * @param partKey - Part identifier
 * @param rowKey - Row identifier for the metric
 * @param periodType - "Monthly" (12 values), "Quarterly" (4 values), or "Yearly" (1 value)
 * @param totalRevenueKey - Row key for total revenue (default: "totalRevenue")
 * @returns Array of percentages based on period type
 */
export const calculatePercentOfTotalSGAExpense = (
  data: FinanceData,
  year: number,
  partKey: string,
  rowKey: string,
  periodType: "Monthly" | "Quarterly" | "Yearly" = "Monthly",
  totalSGAKey: string = "totalSga"
): (number | null)[] => {
  const metricData = data[year]?.[partKey]?.[rowKey] || new Array(12).fill(0);
  const sgaData =
    data[year]?.[part3.part]?.[totalSGAKey] || new Array(12).fill(0);

  switch (periodType) {
    case "Monthly":
      return metricData.map((value, index) => {
        const sga = trueValue(sgaData[index]);
        if (sga === 0) return null;
        return (trueValue(value) / sga) * 100;
      });

    case "Quarterly": {
      const metricQuarters = calculateQuarterlyTotals(metricData);
      const sgaQuarters = calculateQuarterlyTotals(sgaData);

      return metricQuarters.map((value, index) => {
        const sga = trueValue(sgaQuarters[index]);
        if (sga === 0) return null;
        return (trueValue(value) / sga) * 100;
      });
    }

    case "Yearly": {
      const metricTotal = calculateYearlyTotal(metricData);
      const sgaTotal = calculateYearlyTotal(sgaData);

      if (sgaTotal === 0) return [null];
      return [(metricTotal / sgaTotal) * 100];
    }

    default:
      return [];
  }
};

// Calculate quarterly totals from monthly data
export const calculateQuarterlyTotals = (monthly: number[]): number[] => {
  return [
    // Q1: Jan + Feb + Mar
    trueValue(monthly[0]) + trueValue(monthly[1]) + trueValue(monthly[2]),

    // Q2: Apr + May + Jun
    trueValue(monthly[3]) + trueValue(monthly[4]) + trueValue(monthly[5]),

    // Q3: Jul + Aug + Sep
    trueValue(monthly[6]) + trueValue(monthly[7]) + trueValue(monthly[8]),

    // Q4: Oct + Nov + Dec
    trueValue(monthly[9]) + trueValue(monthly[10]) + trueValue(monthly[11]),
  ];
};

// Calculate percentage of revenue
export const calculatePercentageOfRevenue = (
  value: number,
  revenue: number
): number => {
  if (revenue === 0) return 0;
  return (value / revenue) * 100;
};

export const formatPesoCurrency = (value: number): string => {
  if (!value) return "-";

  return value.toLocaleString("en-PH", {
    currency: "PHP",
    style: "currency",
    currencyDisplay: "code",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const formatPercentage = (value: number | null = 0): string => {
  if (!value && value !== 0) return "-";
  return `${Math.round(value)}%`;
};

export const getValue = (
  data: FinanceData,
  year: number,
  part: number,
  key: string
): number[] => {
  return data[year]?.[part.toString()]?.[key] || new Array(12).fill(0);
};

export const getOutputValue = (
  output: FinanceData,
  year: number,
  part: number,
  key: string
): number[] => {
  return output[year]?.[part]?.[key] || new Array(12).fill(0);
};

export const sumArraysByIndex = (arrays: number[][]): number[] => {
  console.log("sumArraysByIndex called with arrays:", arrays);
  const result: number[] = [];
  const length = arrays[0]?.length || 0;

  for (let i = 0; i < length; i++) {
    result[i] = arrays.reduce((sum, arr) => sum + trueValue(arr[i]), 0);
  }

  return result;
};

export const getTotalRevenueFor10years = (
  data: FinanceData
): { year: number; value: number }[] => {
  const revenues: { year: number; value: number }[] = [];

  for (let year = 1; year <= 10; year++) {
    const currentYearTotalRevenue =
      data[year]?.[1]?.totalRevenue || new Array(12).fill(0);
    const yearTotalRevenue = currentYearTotalRevenue.reduce(
      (prev, cur) => prev + cur,
      0
    );

    revenues.push({ year, value: yearTotalRevenue });
  }

  return revenues;
};

export const getTotalNetIncomeFor10years = (
  data: FinanceData
): { year: number; value: number }[] => {
  const netIncomes: { year: number; value: number }[] = [];

  for (let year = 1; year <= 10; year++) {
    const currentYearTotalIncomeBeforeTax =
      data[year]?.[9]?.totalIncomeBeforeTax || new Array(12).fill(0);
    const currentYearTotalTaxExpense =
      data[year]?.[10]?.totalTaxExpense || new Array(12).fill(0);

    const yearTotalIncomeBeforeTax = currentYearTotalIncomeBeforeTax.reduce(
      (prev, cur) => prev + cur,
      0
    );
    const yearTotalTaxExpense = currentYearTotalTaxExpense.reduce(
      (prev, cur) => prev + cur,
      0
    );

    netIncomes.push({
      year,
      value: yearTotalIncomeBeforeTax - yearTotalTaxExpense,
    });
  }

  return netIncomes;
};

export const getTotalGrossMarginsFor10years = (
  data: FinanceData
): { year: number; value: number }[] => {
  const grossMargins: { year: number; value: number }[] = [];

  for (let year = 1; year <= 10; year++) {
    const currentYearTotalRevenue =
      data[year]?.[1]?.totalRevenue || new Array(12).fill(0);
    const currentYearTotalCogs =
      data[year]?.[2]?.totalCogs || new Array(12).fill(0);

    const yearTotalRevenue = currentYearTotalRevenue.reduce(
      (prev, cur) => prev + cur,
      0
    );
    const yearTotalCogs = currentYearTotalCogs.reduce(
      (prev, cur) => prev + cur,
      0
    );

    grossMargins.push({
      year,
      value: trueValue(
        Math.round(
          ((yearTotalRevenue - yearTotalCogs) / yearTotalRevenue) * 100
        )
      ),
    });
  }

  return grossMargins;
};

export const getTotalOperatingMarginsFor10years = (
  data: FinanceData
): { year: number; value: number }[] => {
  const operatingMargins: { year: number; value: number }[] = [];

  for (let year = 1; year <= 10; year++) {
    const currentYearTotalRevenue =
      data[year]?.[1]?.totalRevenue || new Array(12).fill(0);
    const currentYearTotalEbitda =
      data[year]?.[7]?.totalEbitda || new Array(12).fill(0);

    const yearTotalRevenue = currentYearTotalRevenue.reduce(
      (prev, cur) => prev + cur,
      0
    );
    const yearTotalEbitda = currentYearTotalEbitda.reduce(
      (prev, cur) => prev + cur,
      0
    );

    operatingMargins.push({
      year,
      value: trueValue(Math.round((yearTotalEbitda / yearTotalRevenue) * 100)),
    });
  }

  return operatingMargins;
};

export const getTotalNetProfitMarginsFor10years = (
  data: FinanceData
): { year: number; value: number }[] => {
  const operatingMargins: { year: number; value: number }[] = [];

  for (let year = 1; year <= 10; year++) {
    const currentYearTotalRevenue =
      data[year]?.[1]?.totalRevenue || new Array(12).fill(0);
    const currentYearTotalNetIncome =
      data[year]?.[11]?.totalNetIncome || new Array(12).fill(0);

    const yearTotalRevenue = currentYearTotalRevenue.reduce(
      (prev, cur) => prev + cur,
      0
    );
    const yearTotalNetIncome = currentYearTotalNetIncome.reduce(
      (prev, cur) => prev + cur,
      0
    );

    operatingMargins.push({
      year,
      value: trueValue(
        Math.round((yearTotalNetIncome / yearTotalRevenue) * 100)
      ),
    });
  }

  return operatingMargins;
};
