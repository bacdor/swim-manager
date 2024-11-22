"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Home,
  MessageSquare,
  Users,
  Activity,
  Clipboard,
  Plane,
  Trophy,
  DollarSign,
  Bell,
  Calendar,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  X,
  Brain,
  Search,
  ChevronDown,
  ChevronRight,
  BarChart2,
} from "lucide-react";
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface NavItemProps {
  item: { icon: React.ComponentType<any>; label: string; children?: string[] };
  isOpen: boolean;
  activeItem: string;
  onItemSelect: (label: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({
  item,
  isOpen,
  activeItem,
  onItemSelect,
}) => {
  const [expanded, setExpanded] = useState(false);
  const isActive = activeItem === item.label;

  const handleClick = () => {
    if (item.children) {
      setExpanded(!expanded);
    } else {
      onItemSelect(item.label);
    }
  };

  return (
    <div className="space-y-1">
      <button
        onClick={handleClick}
        className={`w-full flex items-center ${
          isOpen ? "justify-between px-4" : "justify-center"
        } 
          py-3 rounded-xl transition-colors ${
            isActive
              ? "bg-blue-50 text-blue-600"
              : "text-gray-600 hover:bg-gray-50"
          }`}
      >
        <div className="flex items-center">
          <item.icon
            className={`h-5 w-5 ${
              isActive ? "text-blue-600" : "text-gray-500"
            }`}
          />
          {isOpen && <span className="ml-3">{item.label}</span>}
        </div>
        {isOpen &&
          item.children &&
          (expanded ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          ))}
      </button>

      {isOpen && expanded && item.children && (
        <div className="ml-4 pl-4 border-l border-gray-200 space-y-1">
          {item.children.map((child, index) => (
            <button
              key={index}
              onClick={() => onItemSelect(`${item.label}-${child}`)}
              className={`w-full flex items-center px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50 ${
                activeItem === `${item.label}-${child}`
                  ? "bg-blue-50 text-blue-600"
                  : ""
              }`}
            >
              <span className="text-sm">{child}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  activeItem: string;
  onItemSelect: (label: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  toggleSidebar,
  activeItem,
  onItemSelect,
}) => {
  const navItems = [
    { icon: Home, label: "Dashboard" },
    {
      icon: MessageSquare,
      label: "Communication",
      children: [
        "Team Chat",
        "Group Channels",
        "Direct Messages",
        "Announcements",
        "Emergency Broadcasts",
      ],
    },
    {
      icon: Users,
      label: "Profiles",
      children: ["Athletes", "Staff", "Emergency Contacts", "Medical Records"],
    },
    {
      icon: Activity,
      label: "Performance",
      children: [
        "Competition Times",
        "Practice Analytics",
        "SwimCloud Data",
        "Historical Records",
        "Goal Tracking",
      ],
    },
    {
      icon: Clipboard,
      label: "Practice",
      children: [
        "Workout Builder",
        "Attendance",
        "Lane Assignments",
        "Equipment Tracking",
        "Training Templates",
      ],
    },
    {
      icon: Plane,
      label: "Travel & Logistics",
      children: [
        "Travel Planning",
        "Hotel Bookings",
        "Meal Management",
        "Transportation",
        "Travel Documents",
      ],
    },
    {
      icon: Brain,
      label: "AI Lineup",
      children: [
        "Meet Strategy",
        "Lineup Optimizer",
        "What-if Analysis",
        "Rest Period Planning",
      ],
    },
    {
      icon: DollarSign,
      label: "Finance",
      children: [
        "Budget Overview",
        "Expense Tracking",
        "Purchase Requests",
        "Equipment Inventory",
        "Reimbursements",
      ],
    },
  ];

  return (
    <div
      className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 shadow-lg transform transition-all duration-300 z-50 
      ${isOpen ? "w-64" : "w-20"}`}
    >
      {/* Logo and Toggle */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {isOpen && (
          <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            SwimSync Pro
          </div>
        )}
        <button
          onClick={toggleSidebar}
          className="absolute -right-4 top-8 bg-white rounded-full p-2 shadow-lg border border-gray-200"
        >
          {isOpen ? (
            <X className="h-4 w-4 text-gray-600" />
          ) : (
            <Menu className="h-4 w-4 text-gray-600" />
          )}
        </button>
      </div>

      {/* User Profile */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-center">
          <div className="relative">
            <img
              src="/api/placeholder/64/64"
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
        </div>
        {isOpen && (
          <div className="mt-3 text-center">
            <h4 className="font-medium">Sarah Connor</h4>
            <p className="text-sm text-gray-500">Head Coach</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="overflow-y-auto h-[calc(100vh-200px)] py-4">
        <nav className="px-4 space-y-2">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              item={item}
              isOpen={isOpen}
              activeItem={activeItem}
              onItemSelect={onItemSelect}
            />
          ))}
        </nav>
      </div>

      {/* Bottom Actions */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
        {isOpen ? (
          <div className="flex flex-col space-y-2">
            <button className="flex items-center space-x-3 text-gray-600 hover:text-gray-800">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </button>
            <button className="flex items-center space-x-3 text-gray-600 hover:text-gray-800">
              <HelpCircle className="h-5 w-5" />
              <span>Help Center</span>
            </button>
            <button className="flex items-center space-x-3 text-gray-600 hover:text-gray-800">
              <LogOut className="h-5 w-5" />
              <span>Log Out</span>
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-4">
            <button className="p-2 text-gray-600 hover:text-gray-800">
              <Settings className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-800">
              <HelpCircle className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-800">
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const TopNav = () => (
  <div className="bg-white border-b border-gray-100 sticky top-0 z-40">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-end items-center h-16">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white w-64"
            />
          </div>
          <button className="relative p-2 text-gray-400 hover:text-gray-500">
            <Bell className="h-6 w-6" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 transform translate-x-1/2 -translate-y-1/2"></span>
          </button>
          <div className="flex items-center space-x-3">
            <img
              className="h-8 w-8 rounded-full object-cover"
              src="/api/placeholder/32/32"
              alt="Profile"
            />
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MainContent = ({
  sidebarOpen,
  activeItem,
}: {
  sidebarOpen: boolean;
  activeItem: string;
}) => {
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 transition-all duration-300 ${
        sidebarOpen ? "ml-64" : "ml-20"
      }`}
    >
      <TopNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-semibold mb-6">
          {activeItem || "Dashboard"}
        </h1>
        {/* Content area for the active section */}
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="relative">
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        activeItem={activeItem}
        onItemSelect={setActiveItem}
      />
      <MainContent sidebarOpen={sidebarOpen} activeItem={activeItem} />
    </div>
  );
};

export default Dashboard;
