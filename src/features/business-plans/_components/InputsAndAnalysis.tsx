import { Button } from "@heroui/react";
import { memo, type FunctionComponent } from "react";
import { IoSaveOutline } from "react-icons/io5";
import { STEPS_DATA } from "~/features/business-plans/constants";
import SearchBar from "./SearchBar";
import SectionForm from "./SectionForm";
import FinancialInputAndAnalysis from "./finance/input/FinancialInputAndAnalysis";

interface InputsAndAnalysisProps {
  currentStepNumber: number;
}

const InputsAndAnalysis: FunctionComponent<InputsAndAnalysisProps> = memo(
  ({ currentStepNumber }) => {
    return (
      <>
        {/* Search Bar */}
        <div className={`${currentStepNumber !== 12 ? "block" : "hidden"}`}>
          <SearchBar currentStepNumber={currentStepNumber} />
        </div>

        {/* Step 1 */}
        <div className={`${currentStepNumber === 1 ? "block" : "hidden"}`}>
          <SectionForm currentStep={STEPS_DATA[0]!} />
        </div>

        {/* Step 2 */}
        <div className={`${currentStepNumber === 2 ? "block" : "hidden"}`}>
          <SectionForm currentStep={STEPS_DATA[1]!} />
        </div>

        {/* Step 3 */}
        <div className={`${currentStepNumber === 3 ? "block" : "hidden"}`}>
          <SectionForm currentStep={STEPS_DATA[2]!} />
        </div>

        {/* Step 4 */}
        <div className={`${currentStepNumber === 4 ? "block" : "hidden"}`}>
          <SectionForm currentStep={STEPS_DATA[3]!} />
        </div>

        {/* Step 5 */}
        <div className={`${currentStepNumber === 5 ? "block" : "hidden"}`}>
          <SectionForm currentStep={STEPS_DATA[4]!} />
        </div>

        {/* Step 6 */}
        <div className={`${currentStepNumber === 6 ? "block" : "hidden"}`}>
          <SectionForm currentStep={STEPS_DATA[5]!} />
        </div>

        {/* Step 7 */}
        <div className={`${currentStepNumber === 7 ? "block" : "hidden"}`}>
          <SectionForm currentStep={STEPS_DATA[6]!} />
        </div>

        {/* Step 8 */}
        <div className={`${currentStepNumber === 8 ? "block" : "hidden"}`}>
          <SectionForm currentStep={STEPS_DATA[7]!} />
        </div>

        {/* Step 9 */}
        <div className={`${currentStepNumber === 9 ? "block" : "hidden"}`}>
          <SectionForm currentStep={STEPS_DATA[8]!} />
        </div>

        {/* Step 10 */}
        <div className={`${currentStepNumber === 10 ? "block" : "hidden"}`}>
          <SectionForm currentStep={STEPS_DATA[9]!} />
        </div>

        {/* Step 11 */}
        <div className={`${currentStepNumber === 11 ? "block" : "hidden"}`}>
          <SectionForm currentStep={STEPS_DATA[10]!} />
        </div>

        {/* Step 12 */}
        <div className={`${currentStepNumber === 12 ? "block" : "hidden"}`}>
          <FinancialInputAndAnalysis />
        </div>

        {/* Step 13 */}
        <div className={`${currentStepNumber === 13 ? "block" : "hidden"}`}>
          <SectionForm currentStep={STEPS_DATA[12]!} />
        </div>

        {/* Save Button - Mobile */}
        <div className="lg:hidden pt-6">
          <Button className="w-full gap-2 bg-blue-600 hover:bg-blue-700 text-white h-11">
            <IoSaveOutline className="w-5 h-5" />
          </Button>
        </div>
      </>
    );
  }
);

export default InputsAndAnalysis;
