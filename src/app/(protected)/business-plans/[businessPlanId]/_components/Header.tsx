import Link from "next/link";
import { memo, type FunctionComponent } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import type { Section } from "~/features/business-plans/types";
import { useBusinessPlanStore } from "~/store/businessPlanStore";
import { STEPS_DATA } from "../../../../../features/business-plans/constants";

interface BusinessPlanSidebarProps {}

const Header: FunctionComponent<BusinessPlanSidebarProps> = memo(({}) => {
  const { values, flaggedItems, currentStepNumber } = useBusinessPlanStore();
  const currentStep = STEPS_DATA[currentStepNumber - 1];

  const calculateSectionCompletion = (section: Section) => {
    const requiredQuestions = section.questions.filter((q) => q.required);
    if (requiredQuestions.length === 0) return true;

    return requiredQuestions.every((q) => {
      const value = values[q.key] || "";
      const isFlagged = flaggedItems.has(q.key);
      return value.trim() !== "" && !isFlagged;
    });
  };

  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-40 shadow-sm">
      <div className="px-6 sm:px-8 lg:px-10 py-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Link
                href="/business-plans"
                className="lg:hidden flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <IoChevronBackOutline className="w-4 h-4" />
              </Link>
              <span className="text-sm font-semibold text-blue-600">
                Step {currentStepNumber}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900">
              {currentStep?.stepTitle}
            </h1>
          </div>

          {/* Sections Completed Count */}
          {currentStep && currentStep.sections?.length > 0 && (
            <div className="text-right">
              <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">
                Sections
              </p>
              <div className="text-4xl font-bold text-slate-900">
                {
                  currentStep.sections.filter((s: Section) =>
                    calculateSectionCompletion(s)
                  ).length
                }
                <span className="text-2xl text-slate-500">
                  /{currentStep.sections.length}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
});

export default Header;
