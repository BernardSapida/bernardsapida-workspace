import { Input } from "@heroui/react";
import {
  memo,
  useState,
  type FunctionComponent,
  type SetStateAction,
} from "react";
import { IoSearchOutline } from "react-icons/io5";
import { STEPS_DATA } from "~/features/business-plans/constants";
import type { Question, Section } from "~/features/business-plans/types";
import { useDebounceCallback } from "~/hooks/useDebounceCallback";
import { useBusinessPlanStore } from "~/store/businessPlanStore";

interface SearchBarProps {
  currentStepNumber: number;
}

const SearchBar: FunctionComponent<SearchBarProps> = memo(
  ({ currentStepNumber }) => {
    const [searchResults, setSearchResults] = useState<
      Array<{
        section: string;
        question: Question;
        sectionId: string;
        stepNumber: number;
      }>
    >([]);
    const [searchTerm, setSearchTerm] = useState("");
    const setStep = useBusinessPlanStore((v) => v.setStep);
    const setHighlightedField = useBusinessPlanStore(
      (v) => v.setHighlightedField
    );

    const handleSearch = useDebounceCallback((term: string) => {
      setSearchTerm(term);

      if (!term.trim()) {
        setSearchResults([]);
        setHighlightedField(null);
        return;
      }

      const results: Array<{
        section: string;
        question: Question;
        sectionId: string;
        stepNumber: number;
      }> = [];
      const lowerTerm = term.toLowerCase();

      // Search across ALL steps, not just the current step
      STEPS_DATA.forEach((step) => {
        step.sections.forEach((section: Section) => {
          section.questions.forEach((question) => {
            if (
              question.label().toLowerCase().includes(lowerTerm) ||
              question.key.toLowerCase().includes(lowerTerm)
            ) {
              results.push({
                section: section.sectionTitle,
                question,
                sectionId: section.sectionId,
                stepNumber: step.stepNumber,
              });
            }
          });
        });
      });

      setSearchResults(results);
    });

    const clearSearch = () => {
      setSearchTerm("");
      setSearchResults([]);
      setHighlightedField(null);
    };

    return (
      <div className="sticky top-0 z-30 pb-6 border-b border-slate-200">
        <Input
          type="text"
          placeholder="Search fields (e.g., Company Name, Email)..."
          variant="bordered"
          className="w-full"
          startContent={<IoSearchOutline className="w-5 h-5 text-slate-400" />}
          onChange={(e) => handleSearch(e.target.value)}
          isClearable={!!searchTerm}
          onClear={clearSearch}
        />

        {/* Search Results Dropdown */}
        {searchResults.length > 0 && (
          <div className="absolute top-12 left-0 right-0 bg-white border border-slate-300 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
            {searchResults.map((result, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setHighlightedField(result.question.key);
                  setSearchTerm("");
                  setSearchResults([]);

                  // Navigate to the step if it's different from the current step
                  if (result.stepNumber !== currentStepNumber) {
                    setStep(result.stepNumber);
                  } else {
                    document
                      .getElementById(`field-${result.question.key}`)
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                  }
                }}
                className="w-full cursor-pointer text-left px-4 py-3 hover:bg-blue-50 border-b border-slate-100 last:border-0 transition-colors"
              >
                <div className="text-sm font-semibold text-slate-900">
                  {result.question.label()}
                </div>
                <div className="text-xs text-slate-600 flex items-center justify-between">
                  <span>{result.section}</span>
                  <span className="text-blue-500 font-medium">
                    Step {result.stepNumber}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results Message */}
        {searchTerm && searchResults.length === 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-300 rounded-lg shadow-lg z-50 p-4">
            <p className="text-sm text-slate-600 text-center">
              No fields found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    );
  }
);

export default SearchBar;
