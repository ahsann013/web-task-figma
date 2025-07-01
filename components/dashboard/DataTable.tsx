import { FC, ReactNode } from "react";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import StatusBadge from "./StatusBadge";
import CategoryBadge from "./CategoryBadge";

export interface Column {
  header: string;
  accessor: string;
  sortable?: boolean;
  cell?: (value: any, row: any) => ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  actionComponent?: (row: any) => ReactNode;
}

const DataTable: FC<DataTableProps> = ({ columns, data, actionComponent }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-[#eaecf0] bg-gray-100 hover:bg-transparent">
          {columns.map((column, index) => (
            <TableHead key={index} className="text-[#667085] font-medium text-sm h-12">
              {column.sortable ? (
                <div className="flex items-center gap-1">
                  {column.header}
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              ) : (
                column.header
              )}
            </TableHead>
          ))}
          {actionComponent && (
            <TableHead className="text-[#667085] font-medium text-sm">Action</TableHead>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex} className="border-[#eaecf0] hover:bg-[#f9fafb]/50">
            {columns.map((column, colIndex) => (
              <TableCell 
                key={colIndex} 
                className={colIndex === 0 
                  ? "font-medium text-[#101828] text-sm py-4" 
                  : "text-[#667085] text-sm py-4"
                }
              >
                {column.cell 
                  ? column.cell(row[column.accessor], row)
                  : row[column.accessor]
                }
              </TableCell>
            ))}
            {actionComponent && (
              <TableCell className="py-4">
                {actionComponent(row)}
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable; 