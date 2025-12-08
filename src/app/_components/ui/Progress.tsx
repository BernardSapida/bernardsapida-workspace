import { Progress as HeroProgress } from "@heroui/react";
import { type FunctionComponent } from "react";

interface CircularProgressProps {
  progress: number;
}

const Progress: FunctionComponent<CircularProgressProps> = ({ progress }) => {
  const getColor = () => {
    if (progress < 25) return { bg: "bg-red-500", color: "text-red-500" };
    else if (progress < 50)
      return { bg: "bg-orange-500", color: "text-orange-500" };
    else if (progress < 100)
      return { bg: "bg-yellow-500", color: "text-yellow-500" };
    else return { bg: "bg-green-500", color: "text-green-500" };
  };

  return (
    <HeroProgress
      aria-label="Progress"
      size="sm"
      value={progress}
      className="max-w-md"
      classNames={{
        base: "max-w-md",
        track: "drop-shadow-md",
        indicator: getColor().bg,
        label: "tracking-wider font-medium text-default-500",
        value: `text-default-500 text-tiny ${getColor().color}`,
      }}
      showValueLabel
    />
  );
};

export default Progress;
