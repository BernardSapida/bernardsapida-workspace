"use client";

import { addToast, Button, Input, Select, SelectItem } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { use, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import type { UserRole } from "~/features/user/constants";
import { updateUserSchema } from "~/features/user/utils/validation";
import { api } from "~/trpc/react";

type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  role: UserRole;
};

export default function ProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { data: user } = api.user.getUser.useQuery({ id });
  const updateUser = api.user.updateUser.useMutation({
    onSuccess: async () => {
      addToast({
        title: "Successfully updated",
        description: "User successfully updated",
        color: "success",
      });
      // await utils.user.get.invalidate();
    },
    onError: async (e) => {
      addToast({
        title: "Failed to update user",
        description: e.message,
        color: "danger",
      });
    },
  });

  const { control, handleSubmit, reset } = useForm<FormData>({
    resolver: zodResolver(updateUserSchema),
  });

  useEffect(() => {
    if (!user) return;
    reset(user);
  }, [user, reset]);

  const onSubmit = (data: FormData) => {
    updateUser.mutate({
      id,
      input: {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        role: data.role,
      },
    });
  };

  return (
    <div className="mx-auto max-w-md p-6">
      <h1 className="mb-6 font-bold text-2xl">Edit Profile</h1>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="firstname"
          render={({ field }) => <Input {...field} label="Firstname" />}
        />
        <Controller
          control={control}
          name="lastname"
          render={({ field }) => <Input {...field} label="Lastname" />}
        />
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input {...field} label="Email" type="email" />
          )}
        />
        <Controller
          control={control}
          name="role"
          render={({ field }) => (
            <Select
              {...field}
              label="Role"
              selectedKeys={[field.value as string]}
            >
              <SelectItem key="USER">USER</SelectItem>
              <SelectItem key="ADMIN">ADMIN</SelectItem>
            </Select>
          )}
        />
        <Button className="w-full" type="submit">
          Save Changes
        </Button>
      </form>
    </div>
  );
}
