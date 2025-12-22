import { Select, SelectItem } from "@heroui/react";
import type React from "react";

interface RowsPerPageSelectorProps {
	options?: number[];
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const RowsPerPageSelector: React.FC<RowsPerPageSelectorProps> = ({
	options = [5, 10, 15],
	onChange,
}) => {
	return (
		<div className="flex justify-between items-center">
			<p className="text-default-400 text-small w-28">Rows per page:</p>
			<Select
				className="w-20"
				defaultSelectedKeys={new Set(["10"])}
				disallowEmptySelection
				onChange={onChange}
				size="sm"
			>
				{options.map((option) => (
					<SelectItem key={option}>{`${option}`}</SelectItem>
				))}
			</Select>
		</div>
	);
};
