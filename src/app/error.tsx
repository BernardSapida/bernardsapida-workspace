"use client";

import { Button } from "@heroui/button";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error boundary caught:", error);
  }, [error]);

  const redirectToIndex = () => {
    window.location.href = "/sign-in";
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="max-w-md text-center">
        <div className="mb-4 text-6xl">⚠️</div>
        <h1 className="mb-4 font-bold text-3xl text-gray-800">
          Something went wrong!
        </h1>
        <p className="mb-8 text-gray-600">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        <div className="flex justify-center gap-4">
          <Button color="primary" onPress={reset}>
            Try Again
          </Button>
          <Button onPress={redirectToIndex} variant="flat">
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
