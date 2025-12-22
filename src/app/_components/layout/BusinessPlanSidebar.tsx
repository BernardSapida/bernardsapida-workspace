import { addToast, Button, Tooltip } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type FunctionComponent } from "react";
import { FaCheck } from "react-icons/fa";
import { IoChevronBackOutline } from "react-icons/io5";
import { LuFlag } from "react-icons/lu";
import { STEPS_DATA } from "~/features/business-plans/constants";
import {
  getAllCompletion,
  getCompletionChipColor,
  getSectionStats,
  getStepCompletion,
  isStepCompleted,
} from "~/features/business-plans/utils";
import { useBusinessPlanStore } from "~/store/businessPlanStore";
import { useFinanceStore } from "~/store/financeStore";
import { api } from "~/trpc/react";

interface BusinessPlanSideBarProps {}

const BusinessPlanSideBar: FunctionComponent<
  BusinessPlanSideBarProps
> = ({}) => {
  const path = usePathname();
  const utils = api.useUtils();
  const [_, _pathname, businessPlanId = 0] = path.split("/");
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const { values, setStep, currentStepNumber, flaggedItems } =
    useBusinessPlanStore();
  const financeData = useFinanceStore((v) => v.financeData);

  const invalidate = async () => {
    await utils.businessPlan.getBusinessPlan.invalidate({
      id: +businessPlanId,
    });
    await utils.businessPlan.getBusinessPlans.invalidate();
    console.log("invalidated");
  };

  const save = api.businessPlan.updateBusinessPlan.useMutation({
    onSuccess: async () => {
      addToast({
        title: "Successfully saved",
        description: "Business plan successfully saved",
        color: "success",
      });
      invalidate();
      setSaving(false);
    },
    onError: async (e) => {
      addToast({
        title: "Failed to save business plan",
        description: e.message,
        color: "danger",
      });
      setSaving(false);
    },
  });
  const allCompletion = getAllCompletion(values, flaggedItems);

  const handleSave = () => {
    setSaving(true);

    save.mutate({
      id: +businessPlanId,
      input: {
        progress: allCompletion,
        status: allCompletion === 100 ? "COMPLETED" : "DRAFT",
        finance: financeData,
        values: values,
      },
    });
  };

  return (
    <aside className="w-64 border-r border-slate-200 bg-slate-50 hidden lg:flex flex-col sticky top-0 h-screen overflow-y-auto">
      <div className="p-6 border-b border-slate-200">
        <Link
          href="/business-plans"
          className="flex items-center gap-2 text-slate-900 hover:text-slate-600 transition-colors"
        >
          <IoChevronBackOutline className="w-5 h-5" />
          <span className="font-semibold">Back</span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {STEPS_DATA.map((step) => {
          const completion = getStepCompletion(
            values,
            step.stepNumber,
            flaggedItems
          );
          const isActive = currentStepNumber === step.stepNumber;

          return (
            <div key={step.stepNumber}>
              <div
                onClick={() => setStep(step.stepNumber)}
                className={`w-full text-left p-4 rounded-lg transition-all group cursor-pointer flex justify-between items-center ${
                  isActive
                    ? "bg-white border-2 border-blue-500 shadow-sm"
                    : "border border-transparent hover:bg-white hover:border-slate-200"
                }`}
              >
                <div className="w-full">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span
                      className={`text-sm font-semibold ${
                        isActive ? "text-blue-600" : "text-slate-700"
                      }`}
                    >
                      Step {step.stepNumber}
                    </span>
                    {isStepCompleted(values, step.stepNumber, flaggedItems) ? (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 border border-green-200">
                        <FaCheck />
                      </span>
                    ) : (
                      completion > 0 && (
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold border ${getCompletionChipColor(
                            completion
                          )}`}
                        >
                          {completion}%
                        </span>
                      )
                    )}
                  </div>
                  <p
                    className={`text-xs ${
                      isActive ? "text-blue-500" : "text-slate-600"
                    } truncate`}
                  >
                    {step.stepTitle}
                  </p>
                </div>
              </div>

              {/* Section Links - Only visible when step is active */}
              {isActive && step.sections.length > 0 && (
                <div className="ml-2 mt-2 space-y-1 border-l-2 border-slate-200 pl-2">
                  {step.sections.map((section) => {
                    const stats = getSectionStats(
                      section,
                      values,
                      flaggedItems
                    );
                    const isActiveSection = activeSection === section.sectionId;

                    return (
                      <div
                        key={section.sectionId}
                        onClick={() => {
                          setActiveSection(section.sectionId);
                          setTimeout(() => {
                            document
                              .getElementById(`section-${section.sectionId}`)
                              ?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                          }, 100);
                        }}
                        className={`w-full text-left px-3 py-2 rounded text-xs transition-all cursor-pointer ${
                          isActiveSection
                            ? "bg-blue-50 text-blue-700 font-semibold border-l-2 border-blue-500"
                            : "text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        <Tooltip
                          closeDelay={0}
                          content={section.sectionTitle}
                          key={section.sectionId}
                          offset={0}
                          placement="right"
                          showArrow={true}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="truncate">
                              {section.sectionTitle}
                            </span>
                            <div className="flex items-center gap-1 whitespace-nowrap">
                              {stats.isCompleted ? (
                                <FaCheck />
                              ) : (
                                <span className="font-semibold">
                                  {Math.round(
                                    (stats.completed / stats.total || 0) * 100
                                  )}
                                  %
                                </span>
                              )}
                              {stats.flagged > 0 && (
                                <span className="inline-flex items-center gap-0.5 text-red-600">
                                  <LuFlag className="w-3 h-3" />
                                  {stats.flagged}
                                </span>
                              )}
                            </div>
                          </div>
                        </Tooltip>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-200">
        <Button
          onPress={handleSave}
          color="primary"
          className="w-full"
          disabled={saving}
          isLoading={saving}
        >
          {saving ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </aside>
  );
};

export default BusinessPlanSideBar;
