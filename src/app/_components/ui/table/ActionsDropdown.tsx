import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@heroui/react";
import type React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export interface Action {
	key: string;
	label: string;
	onAction?: () => void;
}

interface ActionsDropdownProps {
	actions: Action[];
	onActionSelect?: (key: string | number) => void;
}

export const ActionsDropdown: React.FC<ActionsDropdownProps> = ({
	actions,
	onActionSelect,
}) => {
	return (
		<div className="relative flex justify-center items-center gap-2">
			<Dropdown>
				<DropdownTrigger>
					<Button isIconOnly size="sm" variant="light">
						<BsThreeDotsVertical className="text-default-300 text-lg" />
					</Button>
				</DropdownTrigger>
				<DropdownMenu onAction={onActionSelect}>
					{actions.map((action) => (
						<DropdownItem key={action.key}>{action.label}</DropdownItem>
					))}
				</DropdownMenu>
			</Dropdown>
		</div>
	);
};
