export type ComputationType =
  | "yearOverYearChange"
  | "quarterOverQuarterChange"
  | "monthOverMonthChange"
  | "percentOfTotalCogs"
  | "totalGrossMarginPercent"
  | "percentOfTotalRevenue"
  | "percentOfTotalSgaExpense";
export type FieldType = "input" | "output";
export type PeriodType = "Monthly" | "Quarterly" | "Yearly";
export type FinanceType =
  | "Revenue"
  | "Income Statement"
  | "Balance Sheet"
  | "Cashflow";

export type FormulaConfig = {
  monthlyFormula: (
    data: FinanceData,
    year: number,
    outputs: FinanceData
  ) => number[];
  quarterlyFormula: (
    data: FinanceData,
    year: number,
    outputs: FinanceData
  ) => number[];
  yearlyFormula: (
    data: FinanceData,
    year: number,
    outputs: FinanceData
  ) => number;
};

export type SubOutputsData = {
  [year: number]: {
    // e.g., "Total Revenue", "Revenue", "Number of Units Sold", etc.
    [key: string]: {
      // e.g., "yearOverYearChange", "quarterOverQuarterChange", "monthOverMonthChange"
      [key: string]: number[];
    };
  };
};

export type InputRowConfig = {
  label: string;
  computations: ComputationType[];
  helperText?: string;
};

export type OutputRowConfig = {
  label: string;
  helperText?: string;
  formulas: FormulaConfig;
  computations: ComputationType[];
};

export type RowConfigurations = {
  part: number;
  title: string;
  inputs?: {
    [rowKey: string]: InputRowConfig;
  };
  outputs?: {
    [rowKey: string]: OutputRowConfig;
  };
};

// Store inputs
export type FinanceData = {
  // e.g., 0 for Year 1, 1 for Year 2, etc.
  [year: number]: {
    // e.g., "1", "2", etc.
    [part: string]: {
      // e.g., totalRevenue, unitsSold, etc.
      [rowKey: string]: number[]; // Array of 12 numbers for each month
    };
  };
};
