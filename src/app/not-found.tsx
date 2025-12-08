"use client";

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="font-bold text-9xl">404</h1>
        <h2 className="mt-4 mb-2 font-semibold text-3xl">Page Not Found</h2>
        <p className="mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button color="primary" onPress={() => router.back()} size="lg">
          Go Home
        </Button>
      </div>
    </div>
  );
}
