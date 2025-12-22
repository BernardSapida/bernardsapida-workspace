"use client";

import dynamic from "next/dynamic";
import { useMemo, type FunctionComponent } from "react";
import {
  formatPercentage,
  formatPesoCurrency,
} from "~/features/business-plans/utils";

interface BarChartProps {
  title: string;
  values?: { year: number; value: number }[];
  formatType?: "currency" | "percent";
}

// Dynamically import react-apexcharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarChart: FunctionComponent<BarChartProps> = ({
  title = "Title",
  values = [],
  formatType = "currency",
}) => {
  const chartData = useMemo(
    () => ({
      series: [
        {
          name: "Milestones",
          data: values.map((v) => v.value),
        },
      ],
      options: {
        title: {
          text: title,
          align: "center",
          style: {
            fontSize: "18px",
            fontFamily: "Roboto",
            color: "#263238",
          },
        },
        chart: {
          type: "bar",
          height: 350,
        },
        colors: ["#006FEE"],
        dataLabels: {
          enabled: true,
          formatter: (val: number) => {
            return formatType === "currency"
              ? formatPesoCurrency(val)
              : formatPercentage(val);
          },
          style: {
            colors: ["#006FEE"],
          },
          offsetY: -20,
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: "top",
            },
          },
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: values.map((v) => `Year ${v.year}`),
          labels: {
            style: {
              fontSize: "12px",
            },
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            style: {
              fontSize: "12px",
            },
            formatter: (val: number) => val.toFixed(0),
          },
        },
        grid: {
          xaxis: {
            lines: {
              show: false,
            },
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          theme: "dark",
        },
      },
    }),
    [values]
  );

  return (
    <Chart
      options={chartData.options as any}
      series={chartData.series}
      type="bar"
      height="100%"
    />
  );
};

export default BarChart;
