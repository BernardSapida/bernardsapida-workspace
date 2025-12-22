"use client";

import { Button, Card, CardBody, CardHeader, Input } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { useAuth } from "~/features/auth/hooks/useAuth";
import {
  type SignupSchema,
  signupSchema,
} from "~/features/auth/utils/validation";

export default function RegisterPage() {
  const { signUp } = useAuth();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (credentials: SignupSchema) => {
    await signUp(credentials);
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
          <h1 className="text-3xl font-bold text-slate-900">Business Plan</h1>
          <p className="text-slate-600 mt-2">
            Create your account to get started
          </p>
        </div>
        <Card className="w-full max-w-md">
          <CardHeader className="flex flex-col items-start gap-1 px-6 pt-6">
            <h1 className="font-bold text-2xl">Create Account</h1>
            <p className="text-gray-600 text-sm">
              Join us and start planning your business
            </p>
          </CardHeader>
          <CardBody className="px-6 pb-6">
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex gap-4">
                {/* Firstname */}
                <Input
                  {...register("firstname")}
                  errorMessage={errors.firstname?.message}
                  isInvalid={!!errors.firstname}
                  label="Firstname"
                  placeholder="Enter your firstname"
                  type="text"
                  variant="bordered"
                />

                {/* Lastname */}
                <Input
                  {...register("lastname")}
                  errorMessage={errors.lastname?.message}
                  isInvalid={!!errors.lastname}
                  label="Lastname"
                  placeholder="Enter your lastname"
                  type="text"
                  variant="bordered"
                />
              </div>

              {/* Email */}
              <Input
                {...register("email")}
                errorMessage={errors.email?.message}
                isInvalid={!!errors.email}
                label="Email"
                placeholder="Enter your email"
                type="email"
                variant="bordered"
              />

              {/* Role */}
              {/* <Select
                {...register("role")}
                errorMessage={errors.role?.message}
                isInvalid={!!errors.role}
                label="Role"
                placeholder="Select your role"
                variant="bordered"
              >
                {Object.keys(USER_ROLES).map((role) => (
                  <SelectItem className="capitalize" key={role}>
                    {role.toLowerCase()}
                  </SelectItem>
                ))}
              </Select> */}

              {/* Password */}
              <Input
                {...register("password")}
                errorMessage={errors.password?.message}
                isInvalid={!!errors.password}
                label="Password"
                placeholder="Create a password"
                type="password"
                variant="bordered"
              />

              {errors.root && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-700">{errors.root.message}</p>
                </div>
              )}

              <Button className="w-full" color="primary" type="submit">
                Create Account
              </Button>

              <p className="text-center text-gray-600 text-sm">
                Already have an account?{" "}
                <Link
                  className="font-medium text-primary hover:underline"
                  href="/sign-in"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
