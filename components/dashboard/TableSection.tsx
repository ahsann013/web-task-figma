import { FC, ReactNode } from "react";
import { Search, Filter, Calendar, Download, ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TableSectionProps {
  title: string;
  children: ReactNode;
}

const TableSection: FC<TableSectionProps> = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg border border-[#eaecf0] mb-8">
      <div className="p-6 border-b border-[#eaecf0]">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#101828]">{title}</h2>
          
          <div className="flex items-center gap-3">
            <div className="relative w-96 mr-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#667085] w-4 h-4" />
              <Input
                placeholder="Search here..."
                className="pl-10 bg-[#f9fafb] border-[#d0d5dd] h-10 text-sm placeholder:text-[#667085]"
              />
            </div>
            
            <Button
              variant="outline"
              size="sm"
              className="border-[#d0d5dd] bg-white text-[#344054] h-9 px-3 text-sm"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Today
            </Button>
            
            <Button size="sm" className="bg-[#101828] hover:bg-[#101828]/90 text-white h-9 px-3 text-sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            
            <MoreVertical className="w-5 h-5 text-[#667085] cursor-pointer" />
          </div>
        </div>
      </div>

      {children}

      <div className="flex items-center justify-between p-6 border-t border-[#eaecf0]">
        <Button variant="outline" size="sm" className="border-[#d0d5dd] bg-white text-[#344054] h-9 px-3 text-sm">
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>
        <div className="flex items-center gap-1">
          {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
            <Button
              key={index}
              variant={page === 1 ? "ghost" : "ghost"}
              size="sm"
              className={
                page === 1
                  ? "font-bold  text-black h-8 w-8 p-0 text-sm"
                  : "text-[black] h-8 w-8 p-0 text-sm"
              }
            >
              {page}
            </Button>
          ))}
        </div>
        <Button variant="outline" size="sm" className="border-[#d0d5dd] bg-white text-[#344054] h-9 px-3 text-sm">
          Next
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default TableSection; 