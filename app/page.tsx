"use client"
import { Button } from "@/components/ui/button";
import { 
  DashboardLayout, 
  MetricsSection, 
  TableSection, 
  DataTable, 
  StatusBadge, 
  CategoryBadge,
  Column
} from "@/components/dashboard";
import { recentBookings, newRegistrations } from "@/data/mockData";
import { CheckCheckIcon, CheckCircleIcon, XCircleIcon, XIcon } from "lucide-react";

export default function Dashboard() {
  // Column definitions for bookings table
  const bookingColumns: Column[] = [
    { header: "Name", accessor: "name" },
    { 
      header: "Status", 
      accessor: "status",
      cell: (value) => <StatusBadge status={value} />
    },
    { header: "Price", accessor: "price" },
    { header: "Capacity", accessor: "capacity" },
    { 
      header: "Duration", 
      accessor: "duration",
      sortable: true
    }
  ];

  // Column definitions for registrations table
  const registrationColumns: Column[] = [
    { header: "Name", accessor: "name" },
    { 
      header: "Category", 
      accessor: "category",
      cell: (value) => <CategoryBadge category={value} />
    },
    { header: "Join Date", accessor: "joinDate" },
    { 
      header: "Email", 
      accessor: "email",
      sortable: true
    }
  ];

  // Action components
  const bookingAction = (booking: any) => (
    <Button
      variant="ghost"
      size="sm"
      className=" hover:text-[#2a85ff]/80 hover:bg-blue-50 h-8 px-2 text-sm"
    >
      View Booking Details →
    </Button>
  );

  const registrationAction = (user: any) => (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        className="text-[#ea4335] hover:text-[#ea4335]/80 bg-red-50 h-8 px-2 rounded-full  text-sm"
      >
        <XCircleIcon className="w-2 h-2" />
        Decline
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="text-[#24bc73] hover:text-[#24bc73]/80 bg-emerald-50 h-8 px-2 rounded-full text-sm"
      >
        <CheckCircleIcon className="w-2 h-2" />
        Approve
      </Button>
    </div>
  );

  return (
    <DashboardLayout activePage="Dashboard">
      <MetricsSection />
      
      <TableSection title="Recent Bookings">
        <DataTable 
          columns={bookingColumns} 
          data={recentBookings} 
          actionComponent={bookingAction}
        />
      </TableSection>
      
      <TableSection title="New User Registrations">
        <DataTable 
          columns={registrationColumns} 
          data={newRegistrations} 
          actionComponent={registrationAction}
        />
      </TableSection>
    </DashboardLayout>
  );
}
