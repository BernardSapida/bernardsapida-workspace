import {
  DatePicker,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react";
import { parseDate } from "@internationalized/date";
import moment from "moment";
import { memo, useEffect, useState, type FunctionComponent } from "react";
import type { Question } from "~/features/business-plans/types";
import { useDebounceCallback } from "~/hooks/useDebounceCallback";
import { useBusinessPlanStore } from "~/store/businessPlanStore";

interface SectionInputProps {
  question: Question;
  dependentFieldValue?: string | string[];
  isHighlighted: boolean;
}

const SectionInput: FunctionComponent<SectionInputProps> = memo(
  ({ question, dependentFieldValue, isHighlighted }) => {
    const [fieldValue, setFieldValue] = useState("");
    const [loading, setLoading] = useState(true);
    const setValue = useBusinessPlanStore((v) => v.setValue);
    const deleteValue = useBusinessPlanStore((v) => v.deleteValue);
    const getValue = useBusinessPlanStore((v) => v.getValue);
    const setHighlightedField = useBusinessPlanStore(
      (v) => v.setHighlightedField
    );

    const handleInputChange = useDebounceCallback((value: string) => {
      if (value != "") {
        setValue(question.key, value);
        setFieldValue(value);
      } else {
        reset();
      }
      setHighlightedField(null);
    }, 500);

    const reset = () => {
      deleteValue(question.key);
      setFieldValue("");
    };

    useEffect(() => {
      const value = getValue(question.key) || "";
      setFieldValue(value);
      setLoading(false);
    }, []);

    if (loading) return <></>;

    switch (question.type) {
      case "textarea":
        return (
          <Textarea
            aria-labelledby={question.key}
            variant="flat"
            onChange={(e) => handleInputChange(e.target.value)}
            defaultValue={fieldValue}
            classNames={{
              inputWrapper: `${isHighlighted && "bg-white!"}`,
            }}
            minRows={4}
            placeholder="Your answer"
            autoComplete="off"
            isClearable={true}
            onClear={reset}
          />
        );

      case "select":
        return (
          <>
            <Select
              aria-labelledby={question.key}
              defaultSelectedKeys={[fieldValue]}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Choose option"
              autoComplete="off"
            >
              {
                (Array.isArray(dependentFieldValue)
                  ? dependentFieldValue
                  : question.options
                )?.map((opt) => (
                  <SelectItem key={typeof opt === "string" ? opt : opt?.value}>
                    {typeof opt === "string" ? opt : opt?.label}
                  </SelectItem>
                )) as any
              }
            </Select>
            {question?.hasTemplate && fieldValue != "" && (
              <p className="mt-2 border-l-4 border-blue-500 bg-blue-50 p-4">
                {question?.getTemplate?.(fieldValue, dependentFieldValue)}
              </p>
            )}
          </>
        );

      case "text":
      case "number":
        return (
          <Input
            aria-labelledby={question.key}
            type={question.type}
            variant="flat"
            defaultValue={fieldValue}
            placeholder="Your answer"
            onChange={(e) => handleInputChange(e.target.value)}
            classNames={{
              inputWrapper: `${isHighlighted && "bg-white!"}`,
            }}
            autoComplete="off"
            onClear={reset}
            isClearable={true}
          />
        );

      case "date":
        return (
          <>
            <DatePicker
              aria-labelledby={question.key}
              variant="flat"
              defaultValue={(() => {
                try {
                  return parseDate(fieldValue);
                } catch {
                  return null;
                }
              })()}
              onChange={(date) => {
                const formatted = date
                  ? moment(date.toDate("Asia/Manila")).format("YYYY-MM-DD")
                  : null;

                // update RHF field *manually*
                handleInputChange(formatted || "");
              }}
              className="border-slate-300 text-sm"
              autoComplete="off"
            />
            {fieldValue}
          </>
        );

      case "radio":
        return (
          <RadioGroup
            aria-labelledby={question.key}
            orientation="horizontal"
            defaultValue={fieldValue}
            onChange={(e) => handleInputChange(e.target.value)}
          >
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </RadioGroup>
        );

      default:
        return <></>;
    }
  }
);

export default SectionInput;
