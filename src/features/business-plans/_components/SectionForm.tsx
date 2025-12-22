import React, { memo, type FunctionComponent } from "react";
import type { BusinessPlanStep } from "~/features/business-plans/types";
import { useBusinessPlanStore } from "~/store/businessPlanStore";
import SectionQuestion from "./SectionQuestion";

interface SectionProps {
  currentStep: BusinessPlanStep;
}

const SectionForm: FunctionComponent<SectionProps> = memo(({ currentStep }) => {
  const setHighlightedField = useBusinessPlanStore(
    (v) => v.setHighlightedField
  );

  const goToRequiredField = (e: React.FormEvent) => {
    e.preventDefault();

    const el = document.querySelector("[data-error-key]") as HTMLElement | null;
    const value = el?.dataset.errorKey;

    if (value) onError(value);
  };

  const onError = (errorKey: any) => {
    setTimeout(() => {
      setHighlightedField(errorKey);
      document.getElementById(`field-${errorKey}`)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  return (
    <form id="section-form" onSubmit={goToRequiredField} className="space-y-10">
      {currentStep.sections.map((section) => (
        <SectionQuestion key={section.sectionId} section={section} />
      ))}
    </form>
  );
});

export default SectionForm;
