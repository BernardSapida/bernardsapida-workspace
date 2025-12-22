import {
  addToast,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { useEffect, useState, type FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { api } from "~/trpc/react";

interface EditModalProps {
  businessPlan: {
    id: number;
    name: string;
  };
  modalDisclosure: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onOpenChange: () => void;
    isControlled: boolean;
    getButtonProps: (props?: any) => any;
    getDisclosureProps: (props?: any) => any;
  };
  refetch: any;
}

interface FormData {
  name: string;
}

const EditModal: FunctionComponent<EditModalProps> = ({
  businessPlan,
  modalDisclosure,
  refetch,
}) => {
  const { isOpen, onOpenChange } = modalDisclosure;
  const [loading, setLoading] = useState(false);
  const updateBusinessPlanName =
    api.businessPlan.updateBusinessPlanName.useMutation({
      onSuccess: async () => {
        refetch();
        addToast({
          title: "Successfully created",
          description: "Business plan successfully created",
          color: "success",
        });
        reset();
        onOpenChange();
        setLoading(false);
      },
      onError: async (e) => {
        addToast({
          title: "Failed to create business plan",
          description: e.message,
          color: "danger",
        });
        setLoading(false);
      },
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      name: businessPlan.name,
    },
  });

  const onSubmit = (data: FormData) => {
    setLoading(true);
    updateBusinessPlanName.mutate({ id: +businessPlan.id, name: data.name });
  };

  const handleClose = () => {
    onOpenChange();
  };

  useEffect(() => {
    reset({ name: businessPlan.name }); // Reset form when closing
  }, [businessPlan.name]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={handleClose}
        placement="center"
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalHeader className="flex flex-col gap-1">
                Create New Item
              </ModalHeader>
              <ModalBody>
                <Input
                  {...register("name", {
                    required: "Business plan name is required",
                  })}
                  label="Business Plan Name"
                  placeholder="Enter name"
                  variant="bordered"
                  isInvalid={!!errors.name}
                  errorMessage={errors.name?.message}
                />
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  type="submit"
                  isDisabled={loading}
                  isLoading={loading}
                >
                  {loading ? "Update..." : "Update"}
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditModal;
