import { Button, Pagination } from "@heroui/react";
import type React from "react";

interface TableBottomContentProps {
	selectedCount: number;
	totalFilteredItems: number;
	isAllSelected: boolean;
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
	onPreviousPage: () => void;
	onNextPage: () => void;
}

export const TableBottomContent: React.FC<TableBottomContentProps> = ({
	selectedCount,
	totalFilteredItems,
	isAllSelected,
	currentPage,
	totalPages,
	onPageChange,
	onPreviousPage,
	onNextPage,
}) => {
	return (
		<div className="py-2 px-2 flex justify-between items-center">
			<span className="w-[30%] text-small text-default-400">
				{isAllSelected
					? "All items selected"
					: `${selectedCount} of ${totalFilteredItems} selected`}
			</span>
			<Pagination
				color="primary"
				isCompact
				onChange={onPageChange}
				page={currentPage}
				showControls
				showShadow
				total={totalPages}
			/>
			<div className="hidden sm:flex w-[30%] justify-end gap-2">
				<Button
					isDisabled={totalPages === 1}
					onPress={onPreviousPage}
					size="sm"
					variant="flat"
				>
					Previous
				</Button>
				<Button
					isDisabled={totalPages === 1}
					onPress={onNextPage}
					size="sm"
					variant="flat"
				>
					Next
				</Button>
			</div>
		</div>
	);
};
