import { Input } from "@heroui/react";
import type React from "react";
import { IoSearch } from "react-icons/io5";

interface TableSearchBarProps {
	value: string;
	placeholder?: string;
	onValueChange: (value: string) => void;
	onClear: () => void;
}

export const TableSearchBar: React.FC<TableSearchBarProps> = ({
	value,
	placeholder = "Search...",
	onValueChange,
	onClear,
}) => {
	return (
		<Input
			className="w-full sm:max-w-[44%]"
			isClearable
			onClear={onClear}
			onValueChange={onValueChange}
			placeholder={placeholder}
			startContent={<IoSearch />}
			value={value}
		/>
	);
};
