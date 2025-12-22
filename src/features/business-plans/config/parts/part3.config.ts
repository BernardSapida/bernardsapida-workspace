import type { RowConfigurations } from "../../types";
import {
  calculateQuarterlyTotals,
  calculateYearlyTotal,
  getValue,
  sumArraysByIndex,
} from "../../utils";

const inputKeys = [
  "salariesEmployees",
  "salariesContractors",
  "benefitsEmployees",
  "payrollTaxes",
  "officeEquipment",
  "telecommunications",
  "travelEntertainment",
  "utilities",
  "advertising",
  "insurance",
  "legalFees",
  "furniture",
  "automobileExpenses",
  "licenseFees",
  "postageFees",
  "employeeEducation",
];
export const part3: RowConfigurations = {
  part: 3,
  title: "EXPENSES: SALES, GENERAL & ADMINISTRATIVE BREAKDOWN (S, G, & A)",
  inputs: {
    salariesEmployees: {
      label: "Salaries for Employees",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
        "percentOfTotalSgaExpense",
      ],
    },
    salariesContractors: {
      label: "Salaries for Contractors or Consultants",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
        "percentOfTotalSgaExpense",
      ],
    },
    benefitsEmployees: {
      label: "Benefits for Employees",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
        "percentOfTotalSgaExpense",
      ],
    },
    payrollTaxes: {
      label: "Payroll Taxes",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
        "percentOfTotalSgaExpense",
      ],
    },
    officeEquipment: {
      label: "Office Equipment and Supplies",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
        "percentOfTotalSgaExpense",
      ],
    },
    telecommunications: {
      label: "Telecommunication Expenses",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
        "percentOfTotalSgaExpense",
      ],
    },
    travelEntertainment: {
      label: "Travel and Entertainment",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
        "percentOfTotalSgaExpense",
      ],
    },
    utilities: {
      label: "Utilities (Electricity, Heating, Water, Etc.)",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
        "percentOfTotalSgaExpense",
      ],
    },
    advertising: {
      label: "Advertising and Marketing",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
        "percentOfTotalSgaExpense",
      ],
    },
    insurance: {
      label: "Insurance",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
        "percentOfTotalSgaExpense",
      ],
    },
    legalFees: {
      label: "Legal Fees",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
        "percentOfTotalSgaExpense",
      ],
    },
    furniture: {
      label: "Furniture",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
        "percentOfTotalSgaExpense",
      ],
    },
    automobileExpenses: {
      label: "Automobile Expenses (Gas, parking, etc.)",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
        "percentOfTotalSgaExpense",
      ],
    },
    licenseFees: {
      label: "License Fees",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
        "percentOfTotalSgaExpense",
      ],
    },
    postageFees: {
      label: "Postage Fees",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
        "percentOfTotalSgaExpense",
      ],
    },
    employeeEducation: {
      label: "Employee Education",
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
        "percentOfTotalSgaExpense",
      ],
    },
  },
  outputs: {
    totalSga: {
      computations: [
        "yearOverYearChange",
        "quarterOverQuarterChange",
        "monthOverMonthChange",
        "percentOfTotalRevenue",
      ],
      label: "Total S, G & A Expenses",
      formulas: {
        monthlyFormula: (data, year, _output): number[] =>
          sumArraysByIndex(
            inputKeys.map((key) => getValue(data, year, 3, key))
          ),
        quarterlyFormula: (data, year, _output): number[] =>
          calculateQuarterlyTotals(
            sumArraysByIndex(
              inputKeys.map((key) => getValue(data, year, 3, key))
            )
          ),
        yearlyFormula: (data, year, _output): number =>
          calculateYearlyTotal(
            sumArraysByIndex(
              inputKeys.map((key) => getValue(data, year, 3, key))
            )
          ),
      },
    },
  },
};
