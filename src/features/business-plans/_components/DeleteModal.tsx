import {
  addToast,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { useState, type FunctionComponent } from "react";
import { api } from "~/trpc/react";

interface DeleteModalProps {
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

const DeleteModal: FunctionComponent<DeleteModalProps> = ({
  businessPlan,
  modalDisclosure,
  refetch,
}) => {
  const { isOpen, onOpenChange } = modalDisclosure;
  const [loading, setLoading] = useState(false);
  const deleteBusinessPlan = api.businessPlan.delete.useMutation({
    onSuccess: async () => {
      refetch();
      addToast({
        title: "Successfully deleted",
        description: "Business plan successfully deleted",
        color: "success",
      });
      onOpenChange();
      setLoading(false);
    },
    onError: async (e) => {
      addToast({
        title: "Failed to delete business plan",
        description: e.message,
        color: "danger",
      });
      setLoading(false);
    },
  });

  const onDelete = () => {
    setLoading(true);
    deleteBusinessPlan.mutate({ id: +businessPlan.id });
  };

  const handleClose = () => {
    onOpenChange();
  };

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
            <>
              <ModalHeader className="flex flex-col gap-1">Delete</ModalHeader>
              <ModalBody>
                <p>
                  Are you sure you want to delete{" "}
                  <span className="text-danger font-bold">
                    {businessPlan.name}
                  </span>
                  ?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="danger"
                  onPress={onDelete}
                  isDisabled={loading}
                  isLoading={loading}
                >
                  {loading ? "Deleting..." : "Yes, I'm sure"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteModal;
