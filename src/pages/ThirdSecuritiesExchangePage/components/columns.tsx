/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ColumnDef } from "@tanstack/react-table";
import { priorities, statuses } from "../data/data";
import { Task } from "../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import Icons from "@/components/Icons";

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    // @ts-ignore
    header: ({ column }) => (
      // <Checkbox
      //   checked={
      //     table.getIsAllPageRowsSelected() ||
      //     (table.getIsSomePageRowsSelected() && "indeterminate")
      //   }
      //   onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      //   aria-label="Select all"
      //   className="translate-y-[2px]"
      // />
      // <p>Asset Name</p>
      <DataTableColumnHeader column={column} title="Asset Name" />
    ),
    cell: () => (
      // <Checkbox
      //   checked={row.getIsSelected()}
      //   onCheckedChange={(value) => row.toggleSelected(!!value)}
      //   aria-label="Select row"
      //   className="translate-y-[2px]"
      // />
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 border rounded-full"></div>
        <div>
          <p className="mb-0.5">Algorand</p>
          <p className="text-xs opacity-60">ALGO</p>
        </div>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    // @ts-ignore
    header: ({ column }) => (
      <DataTableColumnHeader
        className="justify-center"
        column={column}
        title="Apy Reward"
      />
    ),
    cell: () => (
      <div className="flex items-center space-x-2 justify-center">
        {/* {row.getValue("id")} */}
        <span className="size-2 rounded-full bg-green-500"></span>
        <span>4.58% APY</span>
      </div>
    ),
    // enableSorting: false,
    // enableHiding: false,
  },
  {
    accessorKey: "title",
    // @ts-ignore
    header: ({ column }) => (
      <DataTableColumnHeader
        className="justify-center"
        column={column}
        title="Price"
      />
    ),
    cell: () => {
      return (
        <p className="text-center">$0.194422</p>
        // <div className="flex space-x-2">
        //   {label && <Badge variant="outline">{label.label}</Badge>}
        //   <span className="max-w-[500px] truncate font-medium">
        //     {row.getValue("title")}
        //   </span>
        // </div>
      );
    },
  },
  {
    accessorKey: "status",
    // @ts-ignore
    header: ({ column }) => (
      <DataTableColumnHeader
        className="justify-center"
        column={column}
        title="24H Change"
      />
    ),
    cell: ({ row }: any) => {
      const status = statuses.find(
        (status: any) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      return (
        <p className="text-center text-green-400">
          + 4.39%
          {/* {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )} */}
          {/* <span>{status.label}</span> */}
        </p>
      );
    },
    filterFn: (row: any, id: any, value: any) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "priority",
    // @ts-ignore
    header: ({ column }) => (
      <DataTableColumnHeader
        className="justify-center"
        column={column}
        title="30 Day Trend"
      />
    ),
    cell: ({ row }: any) => {
      const priority = priorities.find(
        (priority: any) => priority.value === row.getValue("priority")
      );

      if (!priority) {
        return null;
      }

      return (
        <div className="flex items-center justify-center">
          <Icons.priceChart className="h-full" />
          {/* {priority.icon && (
            <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )} */}
          {/* <span>{priority.label}</span> */}
        </div>
      );
    },
    filterFn: (row: any, id: any, value: any) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "priority",
    // @ts-ignore
    header: ({ column }) => (
      <DataTableColumnHeader
        className="justify-center"
        column={column}
        title="Balance"
      />
    ),
    cell: () => {
      return <p className="text-center">1,239.778 ALGO</p>;
    },
  },
  {
    accessorKey: "priority",
    // @ts-ignore
    header: ({ column }) => (
      <DataTableColumnHeader
        className="justify-center"
        column={column}
        title="Value"
      />
    ),
    cell: () => {
      return <p className="text-center">$241.04</p>;
    },
  },
  {
    accessorKey: "priority",
    // @ts-ignore
    header: ({ column }) => (
      <DataTableColumnHeader
        className="justify-center"
        column={column}
        title="Portfolio"
      />
    ),
    cell: () => {
      return <p className="text-center">99.24%</p>;
    },
  },
  // {
  //   id: "actions",
  //   cell: () => <DataTableRowActions row={row} />,
  // },
];
