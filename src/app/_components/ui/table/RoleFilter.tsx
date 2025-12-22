import { Select, SelectItem, type SharedSelection } from "@heroui/react";
import type { Key } from "@react-types/shared";
import type React from "react";

interface RoleOption {
	name: string;
	uid: string;
}

interface RoleFilterProps {
	roleOptions: RoleOption[];
	selectedRole: "all" | Iterable<Key>;
	onSelectionChange: (keys: SharedSelection) => void;
}

export const RoleFilter: React.FC<RoleFilterProps> = ({
	roleOptions,
	selectedRole,
	onSelectionChange,
}) => {
	return (
		<Select
			disallowEmptySelection
			label="Role"
			onSelectionChange={onSelectionChange}
			placeholder="Select role"
			selectedKeys={selectedRole}
			selectionMode="multiple"
		>
			{roleOptions.map((role) => (
				<SelectItem key={role.name.toUpperCase()}>{role.name}</SelectItem>
			))}
		</Select>
	);
};
