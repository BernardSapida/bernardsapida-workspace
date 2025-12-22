import { memo, type FunctionComponent } from "react";
import FinancialSelection from "./FinancialSelection";
import Reminder from "./Reminder";
import FinanceTable from "./FinanceTable";

interface FinancialInputAndAnalysisProps {}

const FinancialInputAndAnalysis: FunctionComponent<FinancialInputAndAnalysisProps> =
  memo(({}) => {
    return (
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Financial Yearly Inputs
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Enter monthly data for all financial parts
            </p>
          </div>
        </div>

        {/* Input Controls */}
        <FinancialSelection />

        {/* Reminder */}
        <Reminder />

        {/* Finance Input Tables */}
        <FinanceTable />
      </section>
    );
  });

export default FinancialInputAndAnalysis;
