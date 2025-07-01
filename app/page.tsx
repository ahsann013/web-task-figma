"use client"
import {
  Bell,
  Search,
  Filter,
  Calendar,
  Download,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  ArrowUpDown,
  Home,
  Building2,
  Users,
  CalendarDays,
  Scale,
  Settings,
  FileText,
  LogOut,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Dashboard() {
  const sidebarItems = [
    { name: "Dashboard", icon: Home, active: true },
    { name: "Properties", icon: Building2, active: false },
    { name: "User Management", icon: Users, active: false },
    { name: "Bookings", icon: CalendarDays, active: false },
    { name: "Dispute Centre", icon: Scale, active: false },
    { name: "Settings", icon: Settings, active: false },
  ]

  const recentBookings = [
    {
      name: "Olivia Daddario",
      status: "Completed",
      price: "$633.00",
      capacity: "60 (Seated)",
      duration: "24 May - 28 May 2024",
    },
    {
      name: "Jack Paul",
      status: "In Progress",
      price: "$231.00",
      capacity: "60 (Seated)",
      duration: "24 May - 28 May 2024",
    },
    {
      name: "Mr Aalexandar",
      status: "Cancelled",
      price: "$260.00",
      capacity: "60 (Seated)",
      duration: "24 May - 28 May 2024",
    },
    {
      name: "Arnold Archer",
      status: "Completed",
      price: "$900.00",
      capacity: "60 (Seated)",
      duration: "24 May - 28 May 2024",
    },
  ]

  const newRegistrations = [
    {
      name: "Olivia Daddario",
      category: "Guest",
      joinDate: "Jan 13, 2022",
      email: "Userefandax1234@gmail.com",
    },
    {
      name: "Jack Paul",
      category: "Host",
      joinDate: "Jan 12, 2022",
      email: "Userefandax1234@gmail.com",
    },
    {
      name: "Mr Aalexandar",
      category: "Guest",
      joinDate: "Jan 12, 2022",
      email: "Userefandax1234@gmail.com",
    },
    {
      name: "Arnold Archer",
      category: "Host",
      joinDate: "Jan 12, 2022",
      email: "Userefandax1234@gmail.com",
    },
    {
      name: "Jack Paul",
      category: "Guest",
      joinDate: "Jan 12, 2022",
      email: "Userefandax1234@gmail.com",
    },
  ]

  const StatusBadge = ({ status }: { status: string }) => {
    const getStatusConfig = (status: string) => {
      switch (status) {
        case "Completed":
          return {
            bgColor: "bg-emerald-50",
            textColor: "text-emerald-700",
            dotColor: "bg-emerald-500",
          }
        case "In Progress":
          return {
            bgColor: "bg-orange-50",
            textColor: "text-orange-700",
            dotColor: "bg-orange-500",
          }
        case "Cancelled":
          return {
            bgColor: "bg-red-50",
            textColor: "text-red-700",
            dotColor: "bg-red-500",
          }
        default:
          return {
            bgColor: "bg-gray-50",
            textColor: "text-gray-700",
            dotColor: "bg-gray-500",
          }
      }
    }

    const config = getStatusConfig(status)

    return (
      <div
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.bgColor} ${config.textColor}`}
      >
        <div className={`w-1.5 h-1.5 rounded-full ${config.dotColor}`}></div>
        {status}
      </div>
    )
  }

  const CategoryBadge = ({ category }: { category: string }) => {
    const getCategoryConfig = (category: string) => {
      switch (category) {
        case "Guest":
          return {
            bgColor: "bg-cyan-50",
            textColor: "text-cyan-700",
            dotColor: "bg-cyan-500",
          }
        case "Host":
          return {
            bgColor: "bg-orange-50",
            textColor: "text-orange-700",
            dotColor: "bg-orange-500",
          }
        default:
          return {
            bgColor: "bg-gray-50",
            textColor: "text-gray-700",
            dotColor: "bg-gray-500",
          }
      }
    }

    const config = getCategoryConfig(category)

    return (
      <div
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.bgColor} ${config.textColor}`}
      >
        <div className={`w-1.5 h-1.5 rounded-full ${config.dotColor}`}></div>
        {category}
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-[#fafcff]">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-[#eaecf0] flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-[#101828]">Efandex</h1>
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
            const IconComponent = item.icon
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
            )
          })}
        </nav>

        <div className="p-4 border-t border-[#eaecf0]">
          <div className="flex items-center gap-3 px-3 py-2.5 text-[#344054] hover:bg-[#f9fafb] rounded-lg cursor-pointer mb-3 transition-colors">
            <FileText className="w-5 h-5" />
            <span className="font-medium text-sm">Privacy Policy</span>
          </div>
          <Button className="w-full bg-[#ea4335] hover:bg-[#ea4335]/90 text-white h-10 text-sm font-medium">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-[#eaecf0] px-6 py-4">
          <div className="flex items-center justify-end gap-4">
            <Bell className="w-5 h-5 text-[#667085] cursor-pointer" />
            <div className="flex items-center gap-2 text-[#344054] text-sm font-medium">
              <span>EN</span>
              <span>USD</span>
            </div>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback className="bg-[#f9fafb] text-[#344054] text-sm">U</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Active Users Card */}
            <div className="bg-white rounded-lg border border-[#eaecf0] p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-sm text-[#667085]">
                  <span>Last Month</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-1 text-emerald-600 text-sm font-medium">
                  <span>↗</span>
                  <span>30.5620%</span>
                </div>
              </div>
              <div className="mb-4">
                <div className="text-3xl font-bold text-[#101828] mb-1">3632</div>
                <div className="text-sm text-[#667085]">Overall last month</div>
              </div>
              <div className="text-sm font-semibold text-[#344054] mb-4">Active Users</div>
              <div className="h-12 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 rounded-md"></div>
            </div>

            {/* Total Properties Card */}
            <div className="bg-white rounded-lg border border-[#eaecf0] p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-sm text-[#667085]">
                  <span>Last Month</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-1 text-emerald-600 text-sm font-medium">
                  <span>↗</span>
                  <span>30.5620%</span>
                </div>
              </div>
              <div className="mb-4">
                <div className="text-3xl font-bold text-[#101828] mb-1">10k+</div>
                <div className="text-sm text-[#667085]">Overall last month</div>
              </div>
              <div className="text-sm font-semibold text-[#344054] mb-4">Total Properties</div>
              <div className="h-12 bg-gradient-to-r from-red-100 via-red-200 to-red-300 rounded-md"></div>
            </div>

            {/* Total Revenue Card */}
            <div className="bg-white rounded-lg border border-[#eaecf0] p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-sm text-[#667085]">
                  <span>Last Month</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-1 text-red-600 text-sm font-medium">
                  <span>↘</span>
                  <span>30.5620%</span>
                </div>
              </div>
              <div className="mb-4">
                <div className="text-3xl font-bold text-[#101828] mb-1">$900K</div>
                <div className="text-sm text-[#667085]">Overall this month</div>
              </div>
              <div className="text-sm font-semibold text-[#344054] mb-4">Total Revenue</div>
              <div className="h-12 bg-gradient-to-r from-emerald-100 via-emerald-200 to-emerald-300 rounded-md"></div>
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="bg-white rounded-lg border border-[#eaecf0] mb-8">
            <div className="p-6 border-b border-[#eaecf0]">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-[#101828]">Recent Bookings</h2>
                <div className="flex items-center gap-3">
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
                  <MoreHorizontal className="w-5 h-5 text-[#667085] cursor-pointer" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#667085] w-4 h-4" />
                  <Input
                    placeholder="Search here..."
                    className="pl-10 bg-[#f9fafb] border-[#d0d5dd] h-9 text-sm placeholder:text-[#667085]"
                  />
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#d0d5dd] bg-white text-[#344054] h-9 px-3 text-sm"
                >
                  <Filter className="w-4 h-4 mr-1" />F
                </Button>
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow className="border-[#eaecf0] hover:bg-transparent">
                  <TableHead className="text-[#667085] font-medium text-sm h-12">Name</TableHead>
                  <TableHead className="text-[#667085] font-medium text-sm">Status</TableHead>
                  <TableHead className="text-[#667085] font-medium text-sm">Price</TableHead>
                  <TableHead className="text-[#667085] font-medium text-sm">Capacity</TableHead>
                  <TableHead className="text-[#667085] font-medium text-sm">
                    <div className="flex items-center gap-1">
                      Duration
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </TableHead>
                  <TableHead className="text-[#667085] font-medium text-sm">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentBookings.map((booking, index) => (
                  <TableRow key={index} className="border-[#eaecf0] hover:bg-[#f9fafb]/50">
                    <TableCell className="font-medium text-[#101828] text-sm py-4">{booking.name}</TableCell>
                    <TableCell className="py-4">
                      <StatusBadge status={booking.status} />
                    </TableCell>
                    <TableCell className="text-[#344054] text-sm py-4">{booking.price}</TableCell>
                    <TableCell className="text-[#667085] text-sm py-4">{booking.capacity}</TableCell>
                    <TableCell className="text-[#667085] text-sm py-4">{booking.duration}</TableCell>
                    <TableCell className="py-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#2a85ff] hover:text-[#2a85ff]/80 hover:bg-blue-50 h-8 px-2 text-sm"
                      >
                        View Booking Details →
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="flex items-center justify-between p-6 border-t border-[#eaecf0]">
              <Button variant="outline" size="sm" className="border-[#d0d5dd] bg-white text-[#344054] h-9 px-3 text-sm">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              <div className="flex items-center gap-1">
                {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
                  <Button
                    key={index}
                    variant={page === 1 ? "default" : "ghost"}
                    size="sm"
                    className={
                      page === 1
                        ? "bg-[#101828] hover:bg-[#101828]/90 text-white h-8 w-8 p-0 text-sm"
                        : "text-[#344054] hover:bg-[#f9fafb] h-8 w-8 p-0 text-sm"
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

          {/* New User Registrations */}
          <div className="bg-white rounded-lg border border-[#eaecf0]">
            <div className="p-6 border-b border-[#eaecf0]">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-[#101828]">New User Registrations</h2>
                <div className="flex items-center gap-3">
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
                  <MoreHorizontal className="w-5 h-5 text-[#667085] cursor-pointer" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#667085] w-4 h-4" />
                  <Input
                    placeholder="Search here..."
                    className="pl-10 bg-[#f9fafb] border-[#d0d5dd] h-9 text-sm placeholder:text-[#667085]"
                  />
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#d0d5dd] bg-white text-[#344054] h-9 px-3 text-sm"
                >
                  <Filter className="w-4 h-4 mr-1" />F
                </Button>
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow className="border-[#eaecf0] hover:bg-transparent">
                  <TableHead className="text-[#667085] font-medium text-sm h-12">Name</TableHead>
                  <TableHead className="text-[#667085] font-medium text-sm">Category</TableHead>
                  <TableHead className="text-[#667085] font-medium text-sm">Join Date</TableHead>
                  <TableHead className="text-[#667085] font-medium text-sm">
                    <div className="flex items-center gap-1">
                      Email
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </TableHead>
                  <TableHead className="text-[#667085] font-medium text-sm">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {newRegistrations.map((user, index) => (
                  <TableRow key={index} className="border-[#eaecf0] hover:bg-[#f9fafb]/50">
                    <TableCell className="font-medium text-[#101828] text-sm py-4">{user.name}</TableCell>
                    <TableCell className="py-4">
                      <CategoryBadge category={user.category} />
                    </TableCell>
                    <TableCell className="text-[#667085] text-sm py-4">{user.joinDate}</TableCell>
                    <TableCell className="text-[#667085] text-sm py-4">{user.email}</TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#ea4335] hover:text-[#ea4335]/80 hover:bg-red-50 h-8 px-2 text-sm"
                        >
                          Decline
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#24bc73] hover:text-[#24bc73]/80 hover:bg-emerald-50 h-8 px-2 text-sm"
                        >
                          Approve
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="flex items-center justify-between p-6 border-t border-[#eaecf0]">
              <Button variant="outline" size="sm" className="border-[#d0d5dd] bg-white text-[#344054] h-9 px-3 text-sm">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              <div className="flex items-center gap-1">
                {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
                  <Button
                    key={index}
                    variant={page === 1 ? "default" : "ghost"}
                    size="sm"
                    className={
                      page === 1
                        ? "bg-[#101828] hover:bg-[#101828]/90 text-white h-8 w-8 p-0 text-sm"
                        : "text-[#344054] hover:bg-[#f9fafb] h-8 w-8 p-0 text-sm"
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
        </main>
      </div>
    </div>
  )
}
