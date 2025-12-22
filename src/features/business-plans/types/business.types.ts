export interface Question {
  reference?: string;
  type:
    | "text"
    | "textarea"
    | "select"
    | "number"
    | "date"
    | "checkbox"
    | "radio";
  label: (value?: string) => string;
  key: string;
  helperText?: string;
  options?: {
    label: string;
    value: any;
  }[];
  shouldHaveValue?: boolean;
  values?: {
    key?: string; // If dependent to single field
    keys?: string[]; // If dependent to many fields
  };
  required: boolean;
  hasTemplate?: boolean;
  getTemplate?: (...args: any) => string;
}

export interface Section {
  sectionId: string;
  sectionTitle: string;
  questions: Question[];
}

export interface BusinessPlanStep {
  stepNumber: number;
  stepTitle: string;
  sections: Section[];
  hasOutput: boolean;
  outputs?: BusinessPlanOutput;
}

export interface Output {
  title: (values: Record<string, any>) => string;
  type: "text" | "image";
  url?: (values: Record<string, any>) => string;
  paragraph?: (values: Record<string, any>) => string;
}

export type BusinessPlanOutput = Record<string, Output>;
