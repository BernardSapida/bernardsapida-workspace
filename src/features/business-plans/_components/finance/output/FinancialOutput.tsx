import { Divider, Tab, Tabs } from "@heroui/react";
import { useState, type FunctionComponent } from "react";
import type { FinanceType } from "~/features/business-plans/types";
import {
  getTotalGrossMarginsFor10years,
  getTotalNetIncomeFor10years,
  getTotalNetProfitMarginsFor10years,
  getTotalOperatingMarginsFor10years,
  getTotalRevenueFor10years,
} from "~/features/business-plans/utils";
import { useFinanceStore } from "~/store/financeStore";
import BarChart from "./BarChart";

interface FinancialOutputProps {}

const FinancialOutput: FunctionComponent<FinancialOutputProps> = () => {
  const financeData = useFinanceStore((v) => v.financeData);
  const [selectedTab, setSelectedTab] = useState("Revenue");

  return (
    <section>
      <div className="mb-8">
        <h1 className="font-semibold text-2xl mt-4">Financial Statements</h1>
        <p className="text-slate-500">Description...</p>
      </div>
      <Tabs
        className="w-full"
        classNames={{ tabList: "w-full" }}
        variant="underlined"
        destroyInactiveTabPanel={false}
        defaultSelectedKey="inputs"
        selectedKey={selectedTab}
        onSelectionChange={(key) => setSelectedTab(key as FinanceType)}
      >
        <Tab key="Revenue" title="Revenue">
          <p>{selectedTab}</p>
        </Tab>
        <Tab key="Income Statement" title="Income Statement">
          <p>{selectedTab}</p>
        </Tab>
        <Tab key="Balance Sheet" title="Balance Sheet">
          <p>{selectedTab}</p>
        </Tab>
        <Tab key="Cashflow" title="Cashflow">
          <p>{selectedTab}</p>
        </Tab>
        <Tab key="All" title="All">
          <div className="space-y-8">
            {/* Revenue and Net Income Forecast Highlights */}
            <div className="space-y-4">
              <h1 className="font-semibold text-2xl">
                Revenue and Net Income Forecast Highlights
              </h1>
              <div className="h-96">
                <BarChart
                  title="Revenue"
                  values={getTotalRevenueFor10years(financeData)}
                />
              </div>
              <Divider />
              <div className="h-96">
                <BarChart
                  title="Net Income"
                  values={getTotalNetIncomeFor10years(financeData)}
                />
              </div>
            </div>

            {/* Financial Ratios */}
            <div className="space-y-4">
              <h1 className="font-semibold text-2xl">Financial Ratios</h1>
              <div className="h-96">
                <BarChart
                  title="Gross Margins"
                  values={getTotalGrossMarginsFor10years(financeData)}
                  formatType="percent"
                />
              </div>
              <Divider />
              <div className="h-96">
                <BarChart
                  title="Operating Margins"
                  values={getTotalOperatingMarginsFor10years(financeData)}
                  formatType="percent"
                />
              </div>
              <div className="h-96">
                <BarChart
                  title="Net Profit Margins"
                  values={getTotalNetProfitMarginsFor10years(financeData)}
                  formatType="percent"
                />
              </div>
              <div className="h-96">
                <BarChart
                  title="Return on Assets"
                  values={getTotalNetIncomeFor10years(financeData)}
                  formatType="percent"
                />
              </div>
              <div className="h-96">
                <BarChart
                  title="Return on Equity"
                  values={getTotalNetIncomeFor10years(financeData)}
                  formatType="percent"
                />
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </section>
  );
};

export default FinancialOutput;
