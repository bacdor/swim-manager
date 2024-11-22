import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  ChevronDown,
  GraduationCap,
  Mail,
  Phone,
  ArrowLeft,
} from "lucide-react";
import AthleteProfileEmma from "./athletes/emma";

const AthletesList = () => {
  const athletes = [
    {
      id: 1,
      name: "Emma Thompson",
      year: "Sophomore",
      group: "Distance",
      email: "e.thompson@university.edu",
      phone: "(555) 234-5678",
      eligibility: "Eligible",
      photo: "/static/emma.webp",
      academic: {
        standing: "Dean's List",
        gpa: 3.85,
      },
    },
    {
      id: 2,
      name: "John Smith",
      year: "Junior",
      group: "Sprint",
      email: "j.smith@university.edu",
      phone: "(555) 123-4567",
      residence: "North Campus Housing, Room 304",
      major: "Computer Science",
      eligibility: "Eligible",
      photo: "/static/john.webp",
      academic: {
        standing: "Good Standing",
        gpa: 3.45,
      },
    },
    {
      id: 3,
      name: "Alice Thompson",
      year: "Senior",
      group: "Sprint",
      email: "a.thompson@university.edu",
      phone: "(555) 123-4567",
      eligibility: "Eligible",
      photo: "/static/default.webp",
      academic: {
        standing: "Good Standing",
        gpa: 3.45,
      },
    },
    {
      id: 4,
      name: "Brandon Miller",
      year: "Junior",
      group: "IM",
      email: "b.miller@university.edu",
      phone: "(555) 234-5678",
      eligibility: "Eligible",
      photo: "/static/default.webp",
      academic: {
        standing: "Dean's List",
        gpa: 3.85,
      },
    },
    {
      id: 5,
      name: "Catherine Wilson",
      year: "Sophomore",
      group: "Distance",
      email: "c.wilson@university.edu",
      phone: "(555) 345-6789",
      eligibility: "Eligible",
      photo: "/static/default.webp",
      academic: {
        standing: "Dean's List",
        gpa: 3.92,
      },
    },
    {
      id: 6,
      name: "David Johnson",
      year: "Freshman",
      group: "Sprint",
      email: "d.johnson@university.edu",
      phone: "(555) 456-7890",
      eligibility: "Eligible",
      photo: "/static/default.webp",
      academic: {
        standing: "Good Standing",
        gpa: 3.65,
      },
    },
    {
      id: 7,
      name: "Emily Davis",
      year: "Senior",
      group: "IM",
      email: "e.davis@university.edu",
      phone: "(555) 567-8901",
      eligibility: "Eligible",
      photo: "/static/default.webp",
      academic: {
        standing: "Dean's List",
        gpa: 3.88,
      },
    },
    {
      id: 8,
      name: "Frank Garcia",
      year: "Junior",
      group: "Distance",
      email: "f.garcia@university.edu",
      phone: "(555) 678-9012",
      eligibility: "Eligible",
      photo: "/static/default.webp",
      academic: {
        standing: "Dean's List",
        gpa: 3.95,
      },
    },
    {
      id: 9,
      name: "Grace Hernandez",
      year: "Sophomore",
      group: "Sprint",
      email: "g.hernandez@university.edu",
      phone: "(555) 789-0123",
      eligibility: "Eligible",
      photo: "/static/default.webp",
      academic: {
        standing: "Good Standing",
        gpa: 3.75,
      },
    },
    {
      id: 10,
      name: "Henry Jackson",
      year: "Freshman",
      group: "IM",
      email: "h.jackson@university.edu",
      phone: "(555) 890-1234",
      eligibility: "Eligible",
      photo: "/static/default.webp",
      academic: {
        standing: "Dean's List",
        gpa: 3.9,
      },
    },
    {
      id: 11,
      name: "Isabella King",
      year: "Senior",
      group: "Distance",
      email: "i.king@university.edu",
      phone: "(555) 901-2345",
      eligibility: "Eligible",
      photo: "/static/default.webp",
      academic: {
        standing: "Dean's List",
        gpa: 3.98,
      },
    },
    {
      id: 12,
      name: "James Lee",
      year: "Junior",
      group: "Sprint",
      email: "j.lee@university.edu",
      phone: "(555) 012-3456",
      eligibility: "Eligible",
      photo: "/static/default.webp",
      academic: {
        standing: "Good Standing",
        gpa: 3.8,
      },
    },
    {
      id: 13,
      name: "Katherine Martinez",
      year: "Sophomore",
      group: "IM",
      email: "k.martinez@university.edu",
      phone: "(555) 123-4567",
      eligibility: "Eligible",
      photo: "/static/default.webp",
      academic: {
        standing: "Dean's List",
        gpa: 3.92,
      },
    },
    {
      id: 14,
      name: "Liam Nguyen",
      year: "Freshman",
      group: "Distance",
      email: "l.nguyen@university.edu",
      phone: "(555) 234-5678",
      eligibility: "Eligible",
      photo: "/static/default.webp",
      academic: {
        standing: "Dean's List",
        gpa: 3.95,
      },
    },
    {
      id: 15,
      name: "Mia O'Connor",
      year: "Senior",
      group: "Sprint",
      email: "m.oconnor@university.edu",
      phone: "(555) 345-6789",
      eligibility: "Eligible",
      photo: "/static/default.webp",
      academic: {
        standing: "Good Standing",
        gpa: 3.85,
      },
    },
    {
      id: 16,
      name: "Noah Patel",
      year: "Junior",
      group: "IM",
      email: "n.patel@university.edu",
      phone: "(555) 456-7890",
      eligibility: "Eligible",
      photo: "/static/default.webp",
      academic: {
        standing: "Dean's List",
        gpa: 3.9,
      },
    },
    {
      id: 17,
      name: "Olivia Quinn",
      year: "Sophomore",
      group: "Distance",
      email: "o.quinn@university.edu",
      phone: "(555) 567-8901",
      eligibility: "Eligible",
      photo: "/static/default.webp",
      academic: {
        standing: "Dean's List",
        gpa: 3.95,
      },
    },
    {
      id: 18,
      name: "Patrick Robinson",
      year: "Freshman",
      group: "Sprint",
      email: "p.robinson@university.edu",
      phone: "(555) 678-9012",
      eligibility: "Eligible",
      photo: "/static/default.webp",
      academic: {
        standing: "Good Standing",
        gpa: 3.75,
      },
    },
    {
      id: 19,
      name: "Queen Smith",
      year: "Senior",
      group: "IM",
      email: "q.smith@university.edu",
      phone: "(555) 789-0123",
      eligibility: "Eligible",
      photo: "/static/default.webp",
      academic: {
        standing: "Dean's List",
        gpa: 3.98,
      },
    },
    {
      id: 20,
      name: "Robert Turner",
      year: "Junior",
      group: "Distance",
      email: "r.turner@university.edu",
      phone: "(555) 890-1234",
      eligibility: "Eligible",
      photo: "/static/default.webp",
      academic: {
        standing: "Dean's List",
        gpa: 3.8,
      },
    },
    {
      id: 21,
      name: "Sophia White",
      year: "Sophomore",
      group: "Sprint",
      email: "s.white@university.edu",
      phone: "(555) 901-2345",
      eligibility: "Eligible",
      photo: "/static/default.webp",
      academic: {
        standing: "Good Standing",
        gpa: 3.92,
      },
    },
    {
      id: 22,
      name: "Thomas Young",
      year: "Freshman",
      group: "IM",
      email: "t.young@university.edu",
      phone: "(555) 012-3456",
      eligibility: "Eligible",
      photo: "/static/default.webp",
      academic: {
        standing: "Dean's List",
        gpa: 3.95,
      },
    },
    {
      id: 23,
      name: "Ursula Adams",
      year: "Senior",
      group: "Distance",
      email: "u.adams@university.edu",
      phone: "(555) 123-4567",
      eligibility: "Eligible",
      photo: "/static/default.webp",
      academic: {
        standing: "Dean's List",
        gpa: 3.85,
      },
    },
    {
      id: 24,
      name: "Victor Baker",
      year: "Junior",
      group: "Sprint",
      email: "v.baker@university.edu",
      phone: "(555) 234-5678",
      eligibility: "Eligible",
      photo: "/static/default.webp",
      academic: {
        standing: "Good Standing",
        gpa: 3.9,
      },
    },
    {
      id: 25,
      name: "Wendy Clark",
      year: "Sophomore",
      group: "IM",
      email: "w.clark@university.edu",
      phone: "(555) 345-6789",
      eligibility: "Eligible",
      photo: "/static/default.webp",
      academic: {
        standing: "Dean's List",
        gpa: 3.95,
      },
    },
    {
      id: 26,
      name: "Xavier Davis",
      year: "Freshman",
      group: "Distance",
      email: "x.davis@university.edu",
      phone: "(555) 456-7890",
      eligibility: "Eligible",
      photo: "/static/default.webp",
      academic: {
        standing: "Dean's List",
        gpa: 3.98,
      },
    },
    {
      id: 27,
      name: "Yvonne Evans",
      year: "Senior",
      group: "Sprint",
      email: "y.evans@university.edu",
      phone: "(555) 567-8901",
      eligibility: "Eligible",
      photo: "/static/default.webp",
      academic: {
        standing: "Good Standing",
        gpa: 3.8,
      },
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filterGroup, setFilterGroup] = useState("All");
  const [filterYear, setFilterYear] = useState("All");
  const [athleteProfile, setAthleteProfile] = useState(false);

  const groups = ["All", "Sprint", "Distance", "IM"];
  const years = ["All", "Freshman", "Sophomore", "Junior", "Senior"];

  const filteredAthletes = athletes.filter((athlete) => {
    const matchesSearch =
      athlete.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      athlete.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGroup = filterGroup === "All" || athlete.group === filterGroup;
    const matchesYear = filterYear === "All" || athlete.year === filterYear;
    return matchesSearch && matchesGroup && matchesYear;
  });

  const getGpaColor = (gpa: number): string => {
    if (gpa >= 3.8) return "text-green-600";
    if (gpa >= 3.5) return "text-blue-600";
    if (gpa >= 3.0) return "text-yellow-600";
    return "text-gray-600";
  };

  return athleteProfile ? (
    <div className="max-w-6xl mx-auto">
      <button
        onClick={() => setAthleteProfile(false)}
        className="mb-2 mt-6 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
      >
        <ArrowLeft className="h-5 w-5" />
        Return to the list
      </button>
      <AthleteProfileEmma />
    </div>
  ) : (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header and Filters */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Swimming Athletes</h1>
          <span className="text-gray-500">
            {filteredAthletes.length} Athletes
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search athletes..."
              className="pl-10 p-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Group Filter */}
          <div className="relative">
            <select
              className="w-full p-2 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filterGroup}
              onChange={(e) => setFilterGroup(e.target.value)}
            >
              {groups.map((group) => (
                <option key={group} value={group}>
                  {group} Group
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>

          {/* Year Filter */}
          <div className="relative">
            <select
              className="w-full p-2 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Athletes List */}
      <div className="space-y-4">
        {filteredAthletes.map((athlete) => (
          <Card key={athlete.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                {/* Top Row - Basic Info and Academic Status */}
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setAthleteProfile(true)}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={athlete.photo}
                      alt={athlete.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-lg">{athlete.name}</h3>
                      <div className="text-sm text-gray-500">
                        {athlete.year} • {athlete.group} Group
                      </div>
                    </div>
                  </div>

                  {/* Academic Status and Eligibility */}
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col items-end">
                      <div className="flex items-center space-x-2">
                        <GraduationCap
                          className={`h-5 w-5 ${
                            athlete.academic.standing === "Dean's List"
                              ? "text-yellow-500"
                              : "text-gray-400"
                          }`}
                        />
                        <span
                          className={
                            athlete.academic.standing === "Dean's List"
                              ? "text-yellow-600"
                              : "text-gray-600"
                          }
                        >
                          {athlete.academic.standing}
                        </span>
                      </div>
                      <div
                        className={`text-sm font-medium ${getGpaColor(
                          athlete.academic.gpa
                        )}`}
                      >
                        GPA: {athlete.academic.gpa.toFixed(2)}
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        athlete.eligibility === "Eligible"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {athlete.eligibility}
                    </span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>{athlete.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>{athlete.phone}</span>
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

export default AthletesList;
