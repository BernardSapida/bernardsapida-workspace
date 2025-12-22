import { create } from "zustand";
import { STEPS_DATA } from "~/features/business-plans/constants";

interface BusinessPlanState {
  businessPlanId: string | null;
  values: Record<string, any>;
  currentStepNumber: number;
  flaggedItems: Set<string>;
  highlightedField: string | null;
  selectedTab: "inputs" | "outputs";

  setValues: (values: Record<string, any>) => Promise<void>;
  setValue: (key: string, value: any) => void;
  getValue: (key: string) => string | undefined;
  getValues: () => Record<string, any>;
  deleteValue: (key: string) => void;
  resetValues: () => void;
  setStep: (step: number) => void;
  nextStep: () => void;
  previousStep: () => void;
  toggleFlag: (key: string) => void;
  setHighlightedField: (key: string | null) => void;
  setSelectedTab: (tab: "inputs" | "outputs") => void;
}

export const useBusinessPlanStore = create<BusinessPlanState>((set, get) => ({
  businessPlanId: null,
  values: {},
  currentStepNumber: 1,
  flaggedItems: new Set(),
  highlightedField: null,
  selectedTab: "inputs",

  setStep: (step: number) =>
    set(() => ({ currentStepNumber: step, selectedTab: "inputs" })),

  nextStep: () =>
    set((state) => ({
      currentStepNumber: Math.min(
        state.currentStepNumber + 1,
        STEPS_DATA.length
      ),
    })),

  previousStep: () =>
    set((state) => ({
      currentStepNumber: Math.max(state.currentStepNumber - 1, 1),
    })),

  toggleFlag: (key: string) =>
    set((state) => {
      const newSet = new Set(state.flaggedItems);

      if (newSet.has(key)) newSet.delete(key);
      else newSet.add(key);

      return { flaggedItems: newSet };
    }),

  setHighlightedField: (key: string | null) =>
    set(() => ({ highlightedField: key })),

  setSelectedTab: (tab: "inputs" | "outputs") =>
    set(() => ({ selectedTab: tab })),

  setValues: async (values: Record<string, any>) => {
    set({ values: values || {} });
  },

  setValue: (key, value) =>
    set((state) => ({
      values: { ...state.values, [key]: value },
    })),

  getValue: (key) => {
    return get().values[key];
  },

  getValues: () => {
    return get().values;
  },

  deleteValue: (key) =>
    set((state) => {
      const updated = { ...state.values };
      delete updated[key];
      return { values: updated };
    }),

  resetValues: () => set({ values: {} }),
}));
