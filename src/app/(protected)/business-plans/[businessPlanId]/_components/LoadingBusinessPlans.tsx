import { Divider, Skeleton } from "@heroui/react";

export default function BusinessPlanLoadingSkeleton() {
  return (
    <div className="w-full space-y-6">
      <Skeleton className="h-10 w-full rounded-lg" />

      <Divider />

      {/* Form Sections */}
      {[1, 2, 3, 4, 5].map((section) => (
        <div
          key={section}
          className="w-full p-5 rounded-lg border-2 transition-all border-slate-200 space-y-6"
        >
          <div className="flex gap-2 items-center w-full">
            <div className="flex gap-2 w-full">
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-5 w-1/3 rounded-lg" />
            </div>
            <div className="flex gap-2 w-full items-center justify-end">
              <Skeleton className="h-5 w-20 rounded-full" />
              <Skeleton className="h-8 w-8 rounded-lg" />
              <Skeleton className="h-8 w-8 rounded-lg" />
            </div>
          </div>

          <Skeleton className="h-10 w-full rounded-lg" />
        </div>
      ))}

      <Divider />

      <Skeleton className="h-10 w-full rounded-lg" />
    </div>
  );
}
