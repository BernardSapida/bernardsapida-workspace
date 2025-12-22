import { Select, SelectItem, type SharedSelection } from "@heroui/react";
import type { Key } from "@react-types/shared";
import type React from "react";

interface StatusOption {
  name: string;
  uid: string;
}

interface StatusFilterProps {
  statusOptions: StatusOption[];
  selectedStatus: "all" | Iterable<Key>;
  onSelectionChange: (keys: SharedSelection) => void;
}

export const StatusFilter: React.FC<StatusFilterProps> = ({
  statusOptions,
  selectedStatus,
  onSelectionChange,
}) => {
  return (
    <Select
      disallowEmptySelection
      label="Status"
      onSelectionChange={onSelectionChange}
      placeholder="Select status"
      selectedKeys={selectedStatus}
      selectionMode="multiple"
    >
      {statusOptions.map((status) => (
        <SelectItem key={status.name.toUpperCase()}>{status.name}</SelectItem>
      ))}
    </Select>
  );
};
