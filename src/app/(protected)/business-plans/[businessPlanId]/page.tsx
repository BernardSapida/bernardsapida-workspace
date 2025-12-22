"use client";

import { Button, Tab, Tabs, Tooltip } from "@heroui/react";
import {
  Activity,
  lazy,
  Suspense,
  use,
  useEffect,
  useRef,
  useState,
  type FunctionComponent,
} from "react";
import { FaAsterisk } from "react-icons/fa";
import { IoChevronUp } from "react-icons/io5";
import { STEPS_DATA } from "~/features/business-plans/constants";
import type { BusinessPlanStep } from "~/features/business-plans/types";
import { getAllCompletion } from "~/features/business-plans/utils";
import { useBusinessPlanStore } from "~/store/businessPlanStore";
import { api } from "~/trpc/react";
import Footer from "~/features/business-plans/_components/Footer";
import Header from "~/features/business-plans/_components/Header";
import Outputs from "~/features/business-plans/_components/Outputs";
import BusinessPlanLoadingSkeleton from "~/features/business-plans/_components/LoadingBusinessPlans";
import DownloadableTemplate from "~/features/business-plans/_components/DownloadableTemplate";
import { useFinanceStore } from "~/store/financeStore";
const InputsAndAnalysis = lazy(
  () => import("~/features/business-plans/_components/InputsAndAnalysis")
);

interface BusinessPlanPageProps {
  params: Promise<{ businessPlanId: string }>;
}

const BusinessPlanPage: FunctionComponent<BusinessPlanPageProps> = ({
  params,
}) => {
  const { businessPlanId } = use(params);
  const [businessPlan] = api.businessPlan.getBusinessPlan.useSuspenseQuery({
    id: +businessPlanId,
  });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Business Plan Store
  const values = useBusinessPlanStore((v) => v.values);
  const flaggedItems = useBusinessPlanStore((v) => v.flaggedItems);
  const currentStepNumber = useBusinessPlanStore((v) => v.currentStepNumber);
  const setValues = useBusinessPlanStore((v) => v.setValues);
  const highlightedField = useBusinessPlanStore((v) => v.highlightedField);
  const selectedTab = useBusinessPlanStore((v) => v.selectedTab);
  const setSelectedTab = useBusinessPlanStore((v) => v.setSelectedTab);

  // Finance Store
  const setFinanceData = useFinanceStore((v) => v.setFinanceData);

  const currentStep: BusinessPlanStep = STEPS_DATA[currentStepNumber - 1]!;
  const allCompletion = getAllCompletion(values, flaggedItems);

  // Determine which content to show
  const shouldShowTemplate = currentStepNumber === 14;
  const shouldShowTabs =
    (currentStep.sections.length > 0 || currentStep.stepNumber === 12) &&
    currentStepNumber !== 14;

  const scrollToTop = () => {
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (containerRef.current) {
      setShowScrollTop(containerRef.current.scrollTop > 100); // show after 100px
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Scroll to highlighted field if it exists in the current step
    if (highlightedField) {
      setTimeout(() => {
        document.getElementById(`field-${highlightedField}`)?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  }, [businessPlanId, currentStepNumber, highlightedField]);

  useEffect(() => scrollToTop(), [currentStepNumber]);

  useEffect(() => {
    if (businessPlan) {
      setValues(businessPlan.values as Record<string, any>);
      setFinanceData(businessPlan.finance as Record<string, any>);
    }
  }, [businessPlan]);

  return (
    <main
      className="flex-1 overflow-y-auto h-screen relative"
      ref={containerRef}
    >
      {/* Business Plan Header */}
      <Header />

      {/* Scroll to top */}
      <div className="fixed bottom-10 right-10 z-50 flex flex-col gap-2">
        <Button
          startContent={<IoChevronUp className="text-xl" />}
          isIconOnly
          className={`rounded-full transition-opacity duration-300 transform ${
            showScrollTop
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          color="primary"
          onPress={scrollToTop}
        />
        <Tooltip
          closeDelay={0}
          content="Go to required field"
          offset={0}
          placement="left"
          showArrow={true}
        >
          <Button
            type="submit"
            form="section-form"
            color="danger"
            className={`rounded-full ${allCompletion === 100 && "hidden"}`}
            isIconOnly
            startContent={<FaAsterisk />}
          />
        </Tooltip>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen relative">
        <div className="flex-1 px-6 sm:px-8 lg:px-10 py-8">
          {/* Download Business Plan Template */}
          <Activity mode={shouldShowTemplate ? "visible" : "hidden"}>
            <DownloadableTemplate />
          </Activity>

          <Activity mode={shouldShowTabs ? "visible" : "hidden"}>
            <Tabs
              className="w-full"
              classNames={{ tabList: "w-full" }}
              destroyInactiveTabPanel={false}
              defaultSelectedKey="inputs"
              selectedKey={selectedTab}
              onSelectionChange={(key) =>
                setSelectedTab(key as "inputs" | "outputs")
              }
            >
              <Tab key="inputs" title="Inputs & Analysis">
                <Suspense fallback={<BusinessPlanLoadingSkeleton />}>
                  <InputsAndAnalysis currentStepNumber={currentStepNumber} />
                </Suspense>
              </Tab>
              <Tab
                key="outputs"
                title="Outputs"
                isDisabled={!currentStep.hasOutput}
              >
                <Outputs currentStep={currentStep} />
              </Tab>
            </Tabs>
          </Activity>
        </div>

        {/* Footer Navigation */}
        <Footer />
      </div>
    </main>
  );
};

export default BusinessPlanPage;
