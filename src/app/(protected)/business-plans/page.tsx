"use client";

import {
  Button,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@heroui/react";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useMemo, useState, type Key } from "react";
import { BsEye } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import CustomChip from "~/app/_components/ui/CustomChip";
import Progress from "~/app/_components/ui/Progress";
import { TableBottomContent } from "~/app/_components/ui/table/TableBottomContent";
import { TableTopContent } from "~/app/_components/ui/table/TableTopContent";
import { useTableState } from "~/features/business-plans/hooks/useTableState";
import { ROUTES } from "~/lib/constants/routes";
import { api } from "~/trpc/react";
import type { ValueOf } from "~/types/common.types";
import type { Column } from "~/types/table.types";
import CreateModal from "~/features/business-plans/_components/CreateModal";
import DeleteModal from "~/features/business-plans/_components/DeleteModal";
import EditModal from "~/features/business-plans/_components/EditModal";
import Header from "~/features/business-plans/_components/Header";

interface BusinessPlan {
  id: number;
  name: string;
  progress: number;
  status: "DRAFT" | "COMPLETED";
  createdAt: Date;
}

export const BUSINESS_PLAN_STATUS = {
  DRAFT: "DRAFT",
  COMPLETED: "COMPLETED",
} as const;

export type BusinessPlanStatus = ValueOf<typeof BUSINESS_PLAN_STATUS>;

function Page() {
  const createModalDisclosure = useDisclosure();
  const deleteModalDisclosure = useDisclosure();
  const editModalDisclosure = useDisclosure();
  const router = useRouter();
  const {
    debouncedFilterValue,
    filterValue,
    statusFilter,
    roleFilter,
    visibleColumns,
    page,
    rowsPerPage,
    sortDescriptor,
    selectedKeys,
    setRoleFilter,
    setStatusFilter,
    setVisibleColumns,
    setSelectedKeys,
    onSearchChange,
    onClear,
    onRowsPerPageChange,
    onNextPage,
    onPreviousPage,
    setPage,
    setSortDescriptor,
  } = useTableState({
    initialVisibleColumns: [
      "name",
      "status",
      "progress",
      "createdAt",
      "actions",
    ],
  });
  const [selectedBusinessPlan, setBusinessPlan] = useState<{
    id: number;
    name: string;
  }>({
    id: 0,
    name: "",
  });
  const { data, isLoading, refetch } =
    api.businessPlan.getBusinessPlans.useQuery({
      filters: {
        statuses:
          statusFilter === "all"
            ? []
            : (Array.from(statusFilter) as BusinessPlanStatus[]),
        search: debouncedFilterValue,
      },
      pagination: {
        page,
        pageSize: rowsPerPage,
        sortBy: (sortDescriptor?.column as string) || "createdAt",
        sortOrder: sortDescriptor?.direction === "ascending" ? "asc" : "desc",
      },
    });
  const businessPlans = data?.businessPlans || [];
  const totalPages = data?.totalPages || 1;
  const totalItems = data?.total || 0;

  // Define table columns
  const columns: Column<(typeof businessPlans)[0]>[] = [
    { name: "Business Plan", sortable: true, uid: "name" },
    { name: "Status", sortable: true, uid: "status" },
    { name: "Progress", sortable: true, uid: "progress" },
    { name: "Date Created", sortable: true, uid: "createdAt" },
    { name: "Actions", uid: "actions" },
  ];

  const statusOptions = [
    { name: "Draft", uid: "DRAFT" },
    { name: "Completed", uid: "COMPLETED" },
  ];

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columns;
    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const handleEdit = (businessPlan: BusinessPlan) => {
    setBusinessPlan((state) => ({
      ...state,
      id: businessPlan.id,
      name: businessPlan.name,
    }));
    editModalDisclosure.onOpen();
  };

  const handleDelete = (businessPlan: BusinessPlan) => {
    setBusinessPlan((state) => ({
      ...state,
      id: businessPlan.id,
      name: businessPlan.name,
    }));
    deleteModalDisclosure.onOpen();
  };

  return (
    <section>
      <Header />

      <div className="flex-1 px-6 sm:px-8 lg:px-10 py-8">
        <TableTopContent
          columns={columns}
          addNewLabel="Create New Plan"
          onAddNew={createModalDisclosure.onOpen}
          onRoleChange={setRoleFilter}
          onRowsPerPageChange={onRowsPerPageChange}
          onSearchChange={onSearchChange}
          onSearchClear={onClear}
          onStatusChange={setStatusFilter}
          onVisibleColumnsChange={setVisibleColumns}
          rowsPerPageOptions={[5, 10, 15, 20, 50]}
          searchValue={filterValue}
          selectedRole={roleFilter}
          selectedStatus={statusFilter}
          statusOptions={statusOptions}
          totalItems={totalItems}
          visibleColumns={visibleColumns}
        />

        <Table
          aria-label="Users Table"
          onSelectionChange={setSelectedKeys}
          onSortChange={setSortDescriptor}
          selectedKeys={selectedKeys}
          sortDescriptor={sortDescriptor}
        >
          <TableHeader columns={headerColumns}>
            {(column) => (
              <TableColumn
                allowsSorting={column.sortable}
                key={column.uid}
                className={`${column.name == "Actions" && "text-right"}`}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>

          <TableBody
            isLoading={isLoading}
            items={businessPlans}
            loadingContent={<Spinner label="Loading..." size="sm" />}
            emptyContent={"No business plans"}
          >
            {(businessPlan) => (
              <TableRow key={businessPlan.id}>
                {(columnKey: Key) => {
                  const key = columnKey as keyof typeof businessPlan;

                  switch (key) {
                    case "name":
                      return (
                        <TableCell className="max-w-8">
                          {businessPlan[key]}
                        </TableCell>
                      );
                    case "progress":
                      return (
                        <TableCell>
                          <Progress progress={businessPlan.progress} />
                        </TableCell>
                      );
                    case "status":
                      return (
                        <TableCell>
                          <CustomChip
                            styles="border-none"
                            type={businessPlan.status}
                            variant="dot"
                          />
                        </TableCell>
                      );
                    case "createdAt":
                      return (
                        <TableCell>
                          {moment(businessPlan[key]).format("MMM DD, YYYY")}
                        </TableCell>
                      );
                    case "actions" as unknown:
                      return (
                        <TableCell>
                          <div className="flex justify-end">
                            <Button
                              startContent={<BsEye />}
                              size="sm"
                              variant="light"
                              color="primary"
                              onPress={() =>
                                router.push(
                                  ROUTES.USER.BUSINESS_PLAN(businessPlan.id)
                                )
                              }
                            >
                              View
                            </Button>
                            <Button
                              startContent={<FiEdit3 />}
                              size="sm"
                              variant="light"
                              color="default"
                              onPress={() => handleEdit(businessPlan)}
                            >
                              Edit
                            </Button>
                            <Button
                              startContent={<FaRegTrashAlt />}
                              size="sm"
                              variant="light"
                              color="danger"
                              onPress={() => handleDelete(businessPlan)}
                            >
                              Delete
                            </Button>
                          </div>
                        </TableCell>
                      );
                    default:
                      return <TableCell>{String(businessPlan[key])}</TableCell>;
                  }
                }}
              </TableRow>
            )}
          </TableBody>
        </Table>

        <TableBottomContent
          currentPage={page}
          isAllSelected={selectedKeys === "all"}
          onNextPage={onNextPage}
          onPageChange={setPage}
          onPreviousPage={onPreviousPage}
          selectedCount={
            selectedKeys === "all" ? businessPlans.length : selectedKeys.size
          }
          totalFilteredItems={totalItems}
          totalPages={totalPages}
        />
      </div>

      <CreateModal modalDisclosure={createModalDisclosure} refetch={refetch} />
      <EditModal
        modalDisclosure={editModalDisclosure}
        businessPlan={selectedBusinessPlan}
        refetch={refetch}
      />
      <DeleteModal
        modalDisclosure={deleteModalDisclosure}
        businessPlan={selectedBusinessPlan}
        refetch={refetch}
      />
    </section>
  );
}

export default Page;
