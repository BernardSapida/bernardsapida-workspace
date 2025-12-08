import { MdCheckCircleOutline } from "react-icons/md";

function StepsOverviewSection() {
  return (
    <div className="mt-20 bg-white rounded-xl border border-slate-200 shadow-lg p-8">
      <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
        What You'll Build
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { step: "1", title: "General Business Plan Inputs" },
          { step: "2", title: "Cover Page" },
          { step: "3", title: "Executive Summary" },
          { step: "4", title: "Management" },
          { step: "5", title: "Product/Service" },
          { step: "6", title: "Customer & Market" },
          { step: "7", title: "Competition" },
          { step: "8", title: "Go-to-Market Strategy" },
          { step: "9", title: "Sales & Marketing" },
          { step: "10", title: "Milestones" },
          { step: "11", title: "Other / Misc" },
          { step: "12", title: "Financials" },
        ].map((item) => (
          <div key={item.step} className="flex items-start gap-3">
            <MdCheckCircleOutline className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-slate-900">Step {item.step}</p>
              <p className="text-slate-600 text-sm">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StepsOverviewSection;
