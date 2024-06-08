import { ColumnDef } from "@tanstack/react-table";
import { priorities, statuses } from "../data/data";
import { Task } from "../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import Icons from "@/components/Icons";

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
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
    cell: ({ row }) => (
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
    header: ({ column }) => (
      <DataTableColumnHeader
        className="justify-center"
        column={column}
        title="Apy Reward"
      />
    ),
    cell: ({ row }) => (
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
    header: ({ column }) => (
      <DataTableColumnHeader
        className="justify-center"
        column={column}
        title="Price"
      />
    ),
    cell: ({ row }) => {
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
    header: ({ column }) => (
      <DataTableColumnHeader
        className="justify-center"
        column={column}
        title="24H Change"
      />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
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
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="justify-center"
        column={column}
        title="30 Day Trend"
      />
    ),
    cell: ({ row }) => {
      const priority = priorities.find(
        (priority) => priority.value === row.getValue("priority")
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
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="justify-center"
        column={column}
        title="Balance"
      />
    ),
    cell: ({ row }) => {
      return <p className="text-center">1,239.778 ALGO</p>;
    },
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="justify-center"
        column={column}
        title="Value"
      />
    ),
    cell: ({ row }) => {
      return <p className="text-center">$241.04</p>;
    },
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="justify-center"
        column={column}
        title="Portfolio"
      />
    ),
    cell: ({ row }) => {
      return <p className="text-center">99.24%</p>;
    },
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => <DataTableRowActions row={row} />,
  // },
];
