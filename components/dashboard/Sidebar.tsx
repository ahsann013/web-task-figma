import { FC } from "react";
import { Search, Home, Building2, Users, CalendarDays, Scale, Settings, FileText, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SidebarProps {
  activePage: string;
}

interface SidebarItem {
  name: string;
  icon: React.ElementType;
  active: boolean;
}

const Sidebar: FC<SidebarProps> = ({ activePage }) => {
  const sidebarItems: SidebarItem[] = [
    { name: "Dashboard", icon: Home, active: activePage === "Dashboard" },
    { name: "Properties", icon: Building2, active: activePage === "Properties" },
    { name: "User Management", icon: Users, active: activePage === "User Management" },
    { name: "Bookings", icon: CalendarDays, active: activePage === "Bookings" },
    { name: "Dispute Centre", icon: Scale, active: activePage === "Dispute Centre" },
    { name: "Settings", icon: Settings, active: activePage === "Settings" },
  ];

  return (
    <div className="w-64 bg-white border-r border-[#eaecf0] flex flex-col">
      <div className="p-6">
        <h1 className="text-4xl flex justify-center font-extrabold text-[#101828]">Efandex</h1>
      </div>

      <div className="px-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#667085] w-4 h-4" />
          <Input
            placeholder="Search..."
            className="pl-10 bg-[#f9fafb] border-[#d0d5dd] text-[#344054] h-10 text-sm placeholder:text-[#667085]"
          />
        </div>
      </div>

      <nav className="flex-1 px-4">
        {sidebarItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.name}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 cursor-pointer transition-colors ${
                item.active ? "bg-[#101828] text-white" : "text-[#344054] hover:bg-[#f9fafb]"
              }`}
            >
              <IconComponent className="w-5 h-5" />
              <span className="font-medium text-sm">{item.name}</span>
            </div>
          );
        })}
      </nav>

      <div className="p-4 border-t border-[#eaecf0]">
        <div className="flex items-center gap-3 px-3 py-2.5 text-[#344054] hover:bg-[#f9fafb] rounded-lg cursor-pointer mb-3 transition-colors">
          <FileText className="w-5 h-5" />
          <span className="font-medium text-sm">Privacy Policy</span>
        </div>
        <Button className="flex justify-start w-full bg-[#ea4335] hover:bg-[#ea4335]/90 text-white h-10 text-sm font-medium">
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar; 