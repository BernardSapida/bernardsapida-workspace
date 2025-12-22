const finance = {
  data: {
    totalRevenue: {
      type: "output",
      monthly: Array(12).map((n, i) => n + i),
      quarterly: Array(4).map((n, i) => n + i),
      yearly: 70000,

      // This is output so it contains formulas
      monthlyFormula: (data: { monthly: number[] }) => {
        return data.monthly;
      },
      quarterlyFormula: (data: { monthly: number[] }) => {
        return [
          data.monthly.slice(0, 3).reduce((sum, val) => sum + Number(val), 0),
          data.monthly.slice(3, 6).reduce((sum, val) => sum + Number(val), 0),
          data.monthly.slice(6, 9).reduce((sum, val) => sum + Number(val), 0),
          data.monthly.slice(9, 12).reduce((sum, val) => sum + Number(val), 0),
        ];
      },
      yearlyFormula: (data: { monthly: number[] }) => {
        return data.monthly.reduce((sum, val) => sum + Number(val), 0);
      },
    },
    unitsOrHours: {
      type: "input",
      monthly: Array(12).map((n, i) => n + i),
      quarterly: Array(4).map((n, i) => n + i),
      yearly: 70000,
    },
    pricePerUnit: {
      type: "input",
      monthly: Array(12).map((n, i) => n + i),
      quarterly: Array(4).map((n, i) => n + i),
      yearly: 70000,
    },
    returnsOrRefunds: {
      type: "input",
      monthly: Array(12).map((n, i) => n + i),
      quarterly: Array(4).map((n, i) => n + i),
      yearly: 70000,
    },
  },
};

console.log(finance);
