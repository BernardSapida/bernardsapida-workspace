import { create } from "zustand";
import type { FinanceData } from "~/features/business-plans/types";

// import type {
//   CellValue,
//   FinanceTableData,
// } from "~/features/business-plans/types";

interface FinanceState {
  part: number;
  year: number;
  periodType: "Monthly" | "Quarterly" | "Yearly";
  financeData: FinanceData;

  setPart: (part: number) => void;
  setYear: (year: number) => void;
  setPeriodType: (periodType: "Monthly" | "Quarterly" | "Yearly") => void;
  setFinanceData: (financeData: FinanceData) => void;
  resetStore: () => void;

  // Table
  // financeData: FinanceTableData;
  // updatePartData: (
  //   part: string,
  //   data: Record<string, Record<string, CellValue>>
  // ) => void;
  // resetStore: () => void;
}

export const useFinanceStore = create<FinanceState>((set) => ({
  part: 1,
  year: 1,
  periodType: "Monthly",
  financeData: {},

  setPart: (part) => set({ part }),
  setYear: (year) => set({ year }),
  setPeriodType: (periodType) => set({ periodType }),
  setFinanceData: (financeData) => set({ financeData }),
  resetStore: () => set({ financeData: {} }),
}));
