"use client";

import { Button, Card, CardBody, CardHeader, Input } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRef } from "react";
import { useForm } from "react-hook-form";

import { useAuth } from "~/features/auth/hooks/useAuth";
import {
  type SigninSchema,
  signinSchema,
} from "~/features/auth/utils/validation";

export default function SigninPage() {
  const { signIn } = useAuth();
  const isSubmittingRef = useRef(false);

  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<SigninSchema>({
    resolver: zodResolver(signinSchema),
  });

  const onSubmit = async (credentials: SigninSchema) => {
    if (isSubmittingRef.current) return;
    isSubmittingRef.current = true;

    try {
      // Step 1: Sign in (sets cookie/session)
      await signIn(credentials);
    } catch (_error) {
    } finally {
      isSubmittingRef.current = false;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-50 px-4">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 mb-4">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-slate-900">
            Personal Workspace
          </h1>
          <p className="text-slate-600 mt-2">Centralize system build by you</p>
        </div>
        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-col">
            <h1 className="font-bold text-2xl">Welcome Back</h1>
            <p className="text-gray-600 text-sm">
              Sign in to your account to continue
            </p>
          </CardHeader>
          <CardBody className="px-6 pb-6">
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              {/* Email */}
              <Input
                {...register("email")}
                defaultValue="bernardsapida1706@gmail.com"
                errorMessage={errors.email?.message}
                isDisabled={isSubmitting}
                isInvalid={!!errors.email}
                label="Email"
                placeholder="Enter your email"
                type="email"
                variant="bordered"
              />

              {/* Password */}
              <Input
                {...register("password")}
                defaultValue="@Password123"
                errorMessage={errors.password?.message}
                isDisabled={isSubmitting}
                isInvalid={!!errors.password}
                label="Password"
                placeholder="Enter your password"
                type="password"
                variant="bordered"
              />

              {/* Forgot Password Link */}
              <div className="text-right">
                <Link
                  href="#"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Error Message */}
              {errors.root && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-700">{errors.root.message}</p>
                </div>
              )}

              <Button
                className="w-full"
                color="primary"
                data-cy="signin"
                isDisabled={isSubmitting}
                isLoading={isSubmitting}
                type="submit"
              >
                {isSubmitting ? "Signing in..." : "Sign In"}
              </Button>

              <p className="text-center text-gray-600 text-sm">
                Don&apos;t have an account?{" "}
                <Link
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  href="/sign-up"
                >
                  Create one now
                </Link>
              </p>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
