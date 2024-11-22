import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

const StaffList = () => {
  const staff = [
    {
      id: 1,
      name: "Sarah Connor",
      role: "Head Coach",
      department: "Swimming",
      email: "s.connor@university.edu",
      phone: "(555) 111-2233",
      office: "Athletics Center 201",
      hours: "Mon-Fri 9:00-17:00",
      photo: "/static/sarah.webp",
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Assistant Coach",
      department: "Sprint",
      email: "s.chen@university.edu",
      phone: "(555) 222-3344",
      office: "Athletics Center 202",
      hours: "Mon-Fri 8:00-16:00",
      photo: "/static/default.webp",
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Assistant Coach",
      department: "Distance",
      email: "m.rodriguez@university.edu",
      phone: "(555) 333-4455",
      office: "Athletics Center 203",
      hours: "Mon-Fri 10:00-18:00",
      photo: "/static/default.webp",
    },
    {
      id: 4,
      name: "Lisa Thompson",
      role: "Athletic Trainer",
      department: "Medical",
      email: "l.thompson@university.edu",
      phone: "(555) 444-5566",
      office: "Medical Suite 101",
      hours: "Mon-Sat 7:00-15:00",
      photo: "/static/default.webp",
    },
    {
      id: 5,
      name: "David Kim",
      role: "Strength Coach",
      department: "Performance",
      email: "d.kim@university.edu",
      phone: "(555) 555-6677",
      office: "Weight Room 102",
      hours: "Mon-Fri 6:00-14:00",
      photo: "/static/default.webp",
    },
    {
      id: 6,
      name: "Emily Parker",
      role: "Team Nutritionist",
      department: "Performance",
      email: "e.parker@university.edu",
      phone: "(555) 666-7788",
      office: "Athletics Center 204",
      hours: "Tue-Sat 9:00-17:00",
      photo: "/static/default.webp",
    },
    {
      id: 7,
      name: "Dr. Amanda Foster",
      role: "Sports Psychologist",
      department: "Medical",
      email: "a.foster@university.edu",
      phone: "(555) 777-8899",
      office: "Medical Suite 105",
      hours: "Mon-Fri 8:00-16:00",
      photo: "/static/default.webp",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filterDepartment, setFilterDepartment] = useState("All");
  const [filterRole, setFilterRole] = useState("All");

  const departments = [
    "All",
    "Swimming",
    "Sprint",
    "Distance",
    "Medical",
    "Performance",
  ];
  const roles = [
    "All",
    "Head Coach",
    "Assistant Coach",
    "Athletic Trainer",
    "Strength Coach",
    "Team Nutritionist",
    "Sports Psychologist",
  ];

  const filteredStaff = staff.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment =
      filterDepartment === "All" || member.department === filterDepartment;
    const matchesRole = filterRole === "All" || member.role === filterRole;
    return matchesSearch && matchesDepartment && matchesRole;
  });

  const handleChatClick = (staffMember: { name: string }) => {
    // Handle chat functionality here
    console.log(`Opening chat with ${staffMember.name}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header and Filters */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Swimming Staff</h1>
          <span className="text-gray-500">
            {filteredStaff.length} Staff Members
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search staff..."
              className="pl-10 p-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Department Filter */}
          <div className="relative">
            <select
              className="w-full p-2 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
            >
              {departments.map((department) => (
                <option key={department} value={department}>
                  {department} Department
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>

          {/* Role Filter */}
          <div className="relative">
            <select
              className="w-full p-2 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
            >
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Staff List */}
      <div className="space-y-4">
        {filteredStaff.map((member) => (
          <Card key={member.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                {/* Top Row - Basic Info and Chat Button */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-lg">{member.name}</h3>
                      <div className="text-sm text-gray-500">
                        {member.role} • {member.department}
                      </div>
                    </div>
                  </div>

                  {/* Chat Button */}
                  <button
                    onClick={() => handleChatClick(member)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors duration-200"
                    title="Start chat"
                  >
                    <MessageCircle className="h-6 w-6" />
                  </button>
                </div>

                {/* Contact Info and Office Hours */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>{member.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{member.office}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{member.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StaffList;
