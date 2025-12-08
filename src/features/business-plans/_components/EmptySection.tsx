import { Card, CardBody } from "@heroui/react";
import { memo } from "react";

const EmptySection = memo(() => {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardBody className="pt-12 pb-12 text-center">
        <p className="text-slate-600 text-lg">
          This step is coming soon. Content will be available soon!
        </p>
      </CardBody>
    </Card>
  );
});

export default EmptySection;
