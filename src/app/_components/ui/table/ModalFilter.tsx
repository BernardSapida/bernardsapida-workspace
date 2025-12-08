import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from "@heroui/react";
import type { FunctionComponent } from "react";

interface ModalFilterProps {
	isOpen: boolean;
	onOpenChange: () => void;
	children: React.ReactNode;
}

const ModalFilter: FunctionComponent<ModalFilterProps> = ({
	isOpen,
	onOpenChange,
	children,
}) => {
	return (
		<Modal isOpen={isOpen} onOpenChange={onOpenChange} size="sm">
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">Filter</ModalHeader>
						<ModalBody>{children}</ModalBody>
						<ModalFooter>
							<Button onPress={onClose} variant="light">
								Close
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
};

export default ModalFilter;
