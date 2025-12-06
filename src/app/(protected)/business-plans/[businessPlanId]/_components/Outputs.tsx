import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Tooltip,
} from "@heroui/react";
import type { FunctionComponent } from "react";
import type { BusinessPlanStep } from "~/features/business-plans/types";
import { useBusinessPlanStore } from "~/store/businessPlanStore";

interface OutputsProps {
  currentStep: BusinessPlanStep;
}

const Outputs: FunctionComponent<OutputsProps> = ({ currentStep }) => {
  const { values, setHighlightedField, setStep } = useBusinessPlanStore();
  const outputs = currentStep.outputs || {};
  const outputKeys = Object.keys(outputs);

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="bg-slate-50 border-b border-slate-200 flex flex-col items-start gap-1">
        <h1 className="text-lg">Step Output Report</h1>
        <p>A read-only summary of your inputs for this step</p>
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

              const highlightPlaceholders = (
                text: string
              ): React.ReactElement => {
                if (!text) return <></>;

                // Match {number-string}, e.g., {1-CompanyName}, {23-Email}
                const regex = /\{(\d+-[^\}]+)\}/g;
                const parts = text.split(regex);

                return (
                  <>
                    {parts.map((part, idx) => {
                      const isPlaceholder = idx % 2 === 1; // odd index = inside {}
                      if (isPlaceholder) {
                        return (
                          <Tooltip
                            key={idx}
                            closeDelay={0}
                            content="Click to redirect"
                            offset={0}
                            showArrow={true}
                            color="danger"
                          >
                            <span
                              className="px-1 rounded bg-red-50 text-red-600 border border-red-200 cursor-pointer text-xs"
                              onClick={() => {
                                const [step, name] = part.split("-");
                                setStep(+step!);
                                setHighlightedField(name!);
                              }}
                            >
                              Missing Value
                            </span>
                          </Tooltip>
                        );
                      }

                      return <span key={idx}>{part}</span>;
                    })}
                  </>
                );
              };

              return (
                <div key={key}>
                  <dt className="text-slate-500 text-xs uppercase tracking-wide mb-1">
                    {title}
                  </dt>

                  <dd className="text-slate-900 text-sm font-semibold break-words whitespace-pre-wrap">
                    {isEmpty ? (
                      <span
                        key={idx}
                        className="px-2 rounded bg-red-50 text-red-600 border border-red-200 cursor-pointer text-xs"
                      >
                        No answer
                      </span>
                    ) : (
                      highlightPlaceholders(value)
                    )}
                  </dd>

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
