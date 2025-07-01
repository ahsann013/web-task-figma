"use client"

import { useState } from "react"
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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard")

  const sidebarItems = [
    { name: "Dashboard", icon: "🏠", active: true },
    { name: "Properties", icon: "🏢", active: false },
    { name: "User Management", icon: "👥", active: false },
    { name: "Bookings", icon: "📅", active: false },
    { name: "Dispute Centre", icon: "⚖️", active: false },
    { name: "Settings", icon: "⚙️", active: false },
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
            <Input placeholder="Search..." className="pl-10 bg-[#f9fafb] border-[#d0d5dd] text-[#344054]" />
          </div>
        </div>

        <nav className="flex-1 px-4">
          {sidebarItems.map((item) => (
            <div
              key={item.name}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg mb-1 cursor-pointer ${
                item.active ? "bg-[#101828] text-white" : "text-[#344054] hover:bg-[#f9fafb]"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-[#eaecf0]">
          <div className="flex items-center gap-3 px-3 py-2 text-[#344054] hover:bg-[#f9fafb] rounded-lg cursor-pointer mb-2">
            <span className="text-lg">📋</span>
            <span className="font-medium">Privacy Policy</span>
          </div>
          <Button className="w-full bg-[#ea4335] hover:bg-[#ea4335]/90 text-white">
            <span className="mr-2">🚪</span>
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-[#eaecf0] px-6 py-4">
          <div className="flex items-center justify-end gap-4">
            <Bell className="w-5 h-5 text-[#667085]" />
            <div className="flex items-center gap-2 text-[#344054]">
              <span className="font-medium">EN</span>
              <span className="font-medium">USD</span>
            </div>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg border border-[#eaecf0] p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-[#667085]">Last Month</div>
                <div className="flex items-center gap-1 text-[#24bc73] text-sm">
                  <span>↗</span>
                  <span>30.5620%</span>
                </div>
              </div>
              <div className="mb-2">
                <div className="text-2xl font-bold text-[#101828]">3632</div>
                <div className="text-sm text-[#667085]">Overall last month</div>
              </div>
              <div className="text-sm font-medium text-[#344054] mb-3">Active Users</div>
              <div className="h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded"></div>
            </div>

            <div className="bg-white rounded-lg border border-[#eaecf0] p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-[#667085]">Last Month</div>
                <div className="flex items-center gap-1 text-[#24bc73] text-sm">
                  <span>↗</span>
                  <span>30.5620%</span>
                </div>
              </div>
              <div className="mb-2">
                <div className="text-2xl font-bold text-[#101828]">10k+</div>
                <div className="text-sm text-[#667085]">Overall last month</div>
              </div>
              <div className="text-sm font-medium text-[#344054] mb-3">Total Properties</div>
              <div className="h-12 bg-gradient-to-r from-red-100 to-red-200 rounded"></div>
            </div>

            <div className="bg-white rounded-lg border border-[#eaecf0] p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-[#667085]">Last Month</div>
                <div className="flex items-center gap-1 text-[#ea4335] text-sm">
                  <span>↘</span>
                  <span>30.5620%</span>
                </div>
              </div>
              <div className="mb-2">
                <div className="text-2xl font-bold text-[#101828]">$900K</div>
                <div className="text-sm text-[#667085]">Overall this month</div>
              </div>
              <div className="text-sm font-medium text-[#344054] mb-3">Total Revenue</div>
              <div className="h-12 bg-gradient-to-r from-green-100 to-green-200 rounded"></div>
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="bg-white rounded-lg border border-[#eaecf0] mb-8">
            <div className="p-6 border-b border-[#eaecf0]">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-[#101828]">Recent Bookings</h2>
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm" className="border-[#d0d5dd] bg-transparent">
                    <Calendar className="w-4 h-4 mr-2" />
                    Today
                  </Button>
                  <Button size="sm" className="bg-[#101828] hover:bg-[#101828]/90">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                  <MoreHorizontal className="w-5 h-5 text-[#667085]" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#667085] w-4 h-4" />
                  <Input placeholder="Search here..." className="pl-10 bg-[#f9fafb] border-[#d0d5dd]" />
                </div>
                <Button variant="outline" size="sm" className="border-[#d0d5dd] bg-transparent">
                  <Filter className="w-4 h-4 mr-2" />F
                </Button>
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow className="border-[#eaecf0]">
                  <TableHead className="text-[#667085] font-medium">Name</TableHead>
                  <TableHead className="text-[#667085] font-medium">Status</TableHead>
                  <TableHead className="text-[#667085] font-medium">Price</TableHead>
                  <TableHead className="text-[#667085] font-medium">Capacity</TableHead>
                  <TableHead className="text-[#667085] font-medium">
                    <div className="flex items-center gap-1">
                      Duration
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </TableHead>
                  <TableHead className="text-[#667085] font-medium">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentBookings.map((booking, index) => (
                  <TableRow key={index} className="border-[#eaecf0]">
                    <TableCell className="font-medium text-[#101828]">{booking.name}</TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={
                          booking.status === "Completed"
                            ? "bg-[#e6f6ee] text-[#00a559] hover:bg-[#e6f6ee]"
                            : booking.status === "In Progress"
                              ? "bg-[#fef6f0] text-[#f78e41] hover:bg-[#fef6f0]"
                              : "bg-[#fef3f2] text-[#ea4335] hover:bg-[#fef3f2]"
                        }
                      >
                        {booking.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-[#344054]">{booking.price}</TableCell>
                    <TableCell className="text-[#667085]">{booking.capacity}</TableCell>
                    <TableCell className="text-[#667085]">{booking.duration}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="text-[#2a85ff] hover:text-[#2a85ff]/80">
                        View Booking Details →
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="flex items-center justify-between p-6 border-t border-[#eaecf0]">
              <Button variant="outline" size="sm" className="border-[#d0d5dd] bg-transparent">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              <div className="flex items-center gap-2">
                {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
                  <Button
                    key={index}
                    variant={page === 1 ? "default" : "ghost"}
                    size="sm"
                    className={page === 1 ? "bg-[#101828] hover:bg-[#101828]/90" : ""}
                  >
                    {page}
                  </Button>
                ))}
              </div>
              <Button variant="outline" size="sm" className="border-[#d0d5dd] bg-transparent">
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
                  <Button variant="outline" size="sm" className="border-[#d0d5dd] bg-transparent">
                    <Calendar className="w-4 h-4 mr-2" />
                    Today
                  </Button>
                  <Button size="sm" className="bg-[#101828] hover:bg-[#101828]/90">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                  <MoreHorizontal className="w-5 h-5 text-[#667085]" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#667085] w-4 h-4" />
                  <Input placeholder="Search here..." className="pl-10 bg-[#f9fafb] border-[#d0d5dd]" />
                </div>
                <Button variant="outline" size="sm" className="border-[#d0d5dd] bg-transparent">
                  <Filter className="w-4 h-4 mr-2" />F
                </Button>
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow className="border-[#eaecf0]">
                  <TableHead className="text-[#667085] font-medium">Name</TableHead>
                  <TableHead className="text-[#667085] font-medium">Category</TableHead>
                  <TableHead className="text-[#667085] font-medium">Join Date</TableHead>
                  <TableHead className="text-[#667085] font-medium">
                    <div className="flex items-center gap-1">
                      Email
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </TableHead>
                  <TableHead className="text-[#667085] font-medium">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {newRegistrations.map((user, index) => (
                  <TableRow key={index} className="border-[#eaecf0]">
                    <TableCell className="font-medium text-[#101828]">{user.name}</TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={
                          user.category === "Guest"
                            ? "bg-[#e6f7f8] text-[#2a85ff] hover:bg-[#e6f7f8]"
                            : "bg-[#fef6f0] text-[#f78e41] hover:bg-[#fef6f0]"
                        }
                      >
                        {user.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-[#667085]">{user.joinDate}</TableCell>
                    <TableCell className="text-[#667085]">{user.email}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="text-[#ea4335] hover:text-[#ea4335]/80">
                          Decline
                        </Button>
                        <Button variant="ghost" size="sm" className="text-[#24bc73] hover:text-[#24bc73]/80">
                          Approve
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="flex items-center justify-between p-6 border-t border-[#eaecf0]">
              <Button variant="outline" size="sm" className="border-[#d0d5dd] bg-transparent">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              <div className="flex items-center gap-2">
                {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
                  <Button
                    key={index}
                    variant={page === 1 ? "default" : "ghost"}
                    size="sm"
                    className={page === 1 ? "bg-[#101828] hover:bg-[#101828]/90" : ""}
                  >
                    {page}
                  </Button>
                ))}
              </div>
              <Button variant="outline" size="sm" className="border-[#d0d5dd] bg-transparent">
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
