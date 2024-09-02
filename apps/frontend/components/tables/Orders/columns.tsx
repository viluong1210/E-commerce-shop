"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Employee } from "@/constants/data";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import dayjs from "dayjs";

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "status",
  },
  {
    accessorKey: "userName",
    header: "User Name",
    cell: ({ row }: any) => <> {row.original.UserInformation.name}</>,
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }: any) => <> {row.original.UserInformation.phone}</>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }: any) => <> {row.original.UserInformation.email}</>,
  },
  {
    accessorKey: "createdAt",
    header: "Order Date",
    cell: ({ row }: any) => (
      <> {dayjs(row.original.createdAt).format("DD/MM/YYYY")}</>
    ),
  },

  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
