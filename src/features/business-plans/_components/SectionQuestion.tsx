import { Chip } from "@heroui/react";
import { type FunctionComponent } from "react";
import { FaCheck } from "react-icons/fa6";
import type { Section } from "~/features/business-plans/types";
import {
  getCompletionChipColor,
  getSectionStats,
  getStepCompletion,
} from "~/features/business-plans/utils";
import { useBusinessPlanStore } from "~/store/businessPlanStore";
import InputLabel from "./InputLabel";
import SectionInput from "./SectionInput";

interface SectionQuestionProps {
  section: Section;
}

const SectionQuestion: FunctionComponent<SectionQuestionProps> = ({
  section,
}) => {
  const values = useBusinessPlanStore((v) => v.values);
  const flaggedItems = useBusinessPlanStore((v) => v.flaggedItems);
  const toggleFlag = useBusinessPlanStore((v) => v.toggleFlag);
  const currentStepNumber = useBusinessPlanStore((v) => v.currentStepNumber);
  const highlightedField = useBusinessPlanStore((v) => v.highlightedField);
  const sectionStats = getSectionStats(section, values, flaggedItems);
  const completion = getStepCompletion(values, currentStepNumber, flaggedItems);

  return (
    <div id={`section-${section.sectionId}`}>
      <div className="my-6 flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            {section.sectionTitle}
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            {section.questions.length} items
          </p>
        </div>
        {sectionStats.isCompleted ? (
          <Chip
            color="success"
            startContent={<FaCheck />}
            variant="flat"
            className="pl-2"
          >
            Completed
          </Chip>
        ) : (
          <Chip
            variant="flat"
            className={`pl-2 ${getCompletionChipColor(completion)}`}
          >
            {completion}%
          </Chip>
        )}
      </div>

      <div className="space-y-6">
        {section.questions.map((question) => {
          const isFlagged = flaggedItems.has(question.key);
          const isHighlighted = highlightedField === question.key;
          const emptyField =
            values[question.key] == null || values[question.key] === "";
          const valueKey = question.values?.key;
          const valueKeys = question.values?.keys;
          const partOfStep =
            +(section.sectionId[0] as string) == currentStepNumber;
          let dependentFieldValue: string | string[] | undefined = undefined;
          const hasErrorKey = question.required && emptyField && partOfStep;

          if (valueKey) dependentFieldValue = values[valueKey] as any;
          else if (valueKeys) {
            const options = valueKeys
              .map((key) => values[key] as any)
              .filter((v) => v);

            dependentFieldValue = options.length > 0 ? options : undefined;
          }

          if (dependentFieldValue === undefined && question.shouldHaveValue) {
            return;
          }

          return (
            <div
              key={question.key}
              id={`field-${question.key}`}
              {...(hasErrorKey ? { "data-error-key": question.key } : {})}
              className={`p-5 rounded-lg border-2 transition-all border-slate-200 ${
                isHighlighted &&
                "border-blue-500! bg-blue-50! shadow-lg! ring-2! ring-blue-200!"
              }`}
            >
              {/* Input Label */}
              <InputLabel
                value={values[question.key]}
                question={question}
                dependentFieldValue={dependentFieldValue as string | undefined}
                isFlagged={isFlagged}
                handleToggleFlag={toggleFlag}
              />

              {/* Section Input */}
              <SectionInput
                question={question}
                dependentFieldValue={dependentFieldValue}
                isHighlighted={isHighlighted}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionQuestion;
