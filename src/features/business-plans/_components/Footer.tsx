import { Button } from "@heroui/react";
import type { FunctionComponent } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { STEPS_DATA } from "~/features/business-plans/constants";
import { useBusinessPlanStore } from "~/store/businessPlanStore";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = ({}) => {
  const { currentStepNumber, previousStep, nextStep } = useBusinessPlanStore();

  return (
    <footer className="border-t border-slate-200 bg-white px-6 sm:px-8 lg:px-10 py-6">
      <div className="flex gap-3 justify-between">
        {currentStepNumber > 1 && (
          <Button
            onPress={previousStep}
            disabled={currentStepNumber <= 1}
            variant="bordered"
            className="gap-2 flex-1"
          >
            <IoChevronBackOutline className="w-4 h-4" />
            Previous
          </Button>
        )}
        {currentStepNumber < STEPS_DATA.length && (
          <Button
            onPress={nextStep}
            disabled={currentStepNumber >= 13}
            color="primary"
            className="gap-2 flex-1 text-white"
          >
            Next
            <IoChevronForwardOutline className="w-4 h-4" />
          </Button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
