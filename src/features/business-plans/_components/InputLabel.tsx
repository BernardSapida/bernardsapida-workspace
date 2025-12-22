import { Checkbox, Chip, Snippet, Tooltip } from "@heroui/react";
import { memo, type FunctionComponent } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { LuFlag } from "react-icons/lu";
import type { Question } from "~/features/business-plans/types";

interface InputLabelProps {
  value: string;
  question: Question;
  isFlagged: boolean;
  handleToggleFlag: (key: string) => void;
  dependentFieldValue?: string;
}

const InputLabel: FunctionComponent<InputLabelProps> = memo(
  ({ value, question, isFlagged, handleToggleFlag, dependentFieldValue }) => {
    return (
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex gap-2">
          <Tooltip
            closeDelay={0}
            content={question.helperText}
            key={question.key}
            offset={0}
            placement="right"
            showArrow={true}
          >
            <IoMdInformationCircleOutline className="text-xl text-slate-500" />
          </Tooltip>
          <label
            htmlFor={question.key}
            className="text-sm font-semibold text-slate-900 flex items-center gap-2"
          >
            {question.label(dependentFieldValue)}
            {question.required && (
              <span className="text-xs text-danger-500 font-normal">
                (Required)
              </span>
            )}
            {!question.required && (
              <span className="text-xs text-slate-500 font-normal">
                (Optional)
              </span>
            )}
          </label>
        </div>

        {/* Flag Toggle */}
        <div className="flex items-center  gap-2">
          <div className="flex items-center gap-2">
            {isFlagged ? (
              <Chip
                startContent={<LuFlag className="w-3 h-3" />}
                variant="shadow"
                size="sm"
                color="danger"
                className="inline-flex items-center gap-1 p-2 rounded-full text-xs font-semibold"
              >
                Flagged
              </Chip>
            ) : (
              <Chip
                className="inline-flex items-center gap-1 p-2 rounded-full text-xs font-semibold text-slate-600"
                variant="light"
                size="sm"
              >
                Flag
              </Chip>
            )}
            <Checkbox
              id={`flag-${question.key}`}
              checked={isFlagged}
              color="danger"
              onChange={() => handleToggleFlag(question.key)}
              className="cursor-pointer"
            />
            <Snippet
              size="sm"
              codeString={value}
              hideSymbol={true}
              className="gap-0"
            />
          </div>
        </div>
      </div>
    );
  }
);

export default InputLabel;
