import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Snippet,
  Tooltip,
} from "@heroui/react";
import type { FunctionComponent } from "react";
import type { BusinessPlanStep } from "~/features/business-plans/types";
import { useBusinessPlanStore } from "~/store/businessPlanStore";
import FinancialOutput from "./finance/output/FinancialOutput";

interface OutputsProps {
  currentStep: BusinessPlanStep;
}

const Outputs: FunctionComponent<OutputsProps> = ({ currentStep }) => {
  const { values, setHighlightedField, setStep } = useBusinessPlanStore();
  const outputs = currentStep.outputs || {};
  const outputKeys = Object.keys(outputs);

  // Function to copy specific text to clipboard
  const copyTextToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {})
      .catch((err) => console.error("Failed to copy:", err));
  };

  const highlightPlaceholders = (
    text: string,
    key: string
  ): React.ReactElement => {
    if (!text) return <></>;

    const regex = /\{(\d+-[^\}]+)\}/g;
    const parts = text.split(regex);

    return (
      <div id={`answer-${key}`} className="inline">
        {parts.map((part, idx) => {
          const [step, name] = part.split("-");
          const isPlaceholder = idx % 2 === 1;
          if (isPlaceholder) {
            return (
              <Tooltip
                key={idx}
                closeDelay={0}
                content="Visit to answer"
                offset={0}
                showArrow={true}
                color="danger"
              >
                <span
                  className="px-1 rounded bg-red-50 text-red-600 border font-semibold border-red-200 cursor-pointer text-xs"
                  onClick={() => {
                    setStep(+step!);
                    setHighlightedField(name!);
                  }}
                >
                  {name}
                </span>
              </Tooltip>
            );
          }
          return <span key={idx}>{part}</span>;
        })}
      </div>
    );
  };

  if (currentStep.stepNumber === 12) {
    return <FinancialOutput />;
  }

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="bg-slate-50 border-b border-slate-200 flex flex-col items-start gap-2">
        <h1 className="text-lg">Step {currentStep.stepNumber} Output Report</h1>
        <p>
          You can copy the answers and paste them to replace the corresponding
          keys in the Word document that starts with "FINAL_BP".
        </p>
      </CardHeader>
      <CardBody className="pt-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <dl className="space-y-6">
            {outputKeys.map((key, idx) => {
              const output = outputs[key];
              const title = output?.title?.(values);
              const paragraph = output?.paragraph?.(values) ?? "";
              const url = output?.url?.(values) ?? "";
              const isEmpty = !paragraph && !url;
              const type = output?.type;
              const value = type === "text" ? paragraph : url;

              return (
                <div key={key}>
                  <div className="text-slate-900 text-xs font-semibold uppercase tracking-wide mb-1 flex justify-between items-center">
                    <p>{title}</p>
                    <Snippet
                      size="sm"
                      codeString={value}
                      hideSymbol={true}
                      className="gap-0"
                    />
                  </div>

                  <p className="text-slate-500 text-sm break-words whitespace-pre-wrap flex items-start gap-2">
                    {isEmpty ? (
                      <span className="px-2 rounded bg-red-50 text-red-600 border border-red-200 cursor-pointer text-xs">
                        No answer
                      </span>
                    ) : (
                      highlightPlaceholders(value, key)
                    )}
                  </p>

                  {idx < outputKeys.length - 1 && (
                    <div className="my-4">
                      <Divider />
                    </div>
                  )}
                </div>
              );
            })}
          </dl>
        </div>
      </CardBody>
    </Card>
  );
};

export default Outputs;
