import React, { useState } from "react";
import {
  Bell,
  AlertTriangle,
  CheckCircle,
  Info,
  Mail,
  Trash2,
  Check,
  Filter,
  Package,
  ShoppingCart,
  UserPlus,
  FileText,
  ChevronRight,
} from "lucide-react";

const Notifications = () => {
  const [activeTab, setActiveTab] = useState("All");

  const notifications = [
    {
      id: 1,
      type: "inventory",
      title: "Critical Stock Level",
      msg: "Engine Oil Filter (SKU: OF-202) is currently at 3 units. Minimum threshold is 10.",
      time: "12:45 PM",
      date: "Today",
      icon: Package,
      color: "#ec4899",
      action: "Restock Now",
    },
    {
      id: 2,
      type: "financial",
      title: "Bulk Purchase Completed",
      msg: 'Order #PUR-7781 for "Radiator Fans" has been processed and paid.',
      time: "10:30 AM",
      date: "Today",
      icon: ShoppingCart,
      color: "#10b981",
      action: "View Invoice",
    },
    {
      id: 3,
      type: "system",
      title: "New Staff Registered",
      msg: 'Robert Fox has been added as a "Technician" to the system.',
      time: "Yesterday",
      date: "Yesterday",
      icon: UserPlus,
      color: "#3b82f6",
      action: "View Profile",
    },
    {
      id: 4,
      type: "financial",
      title: "Unpaid Credit Reminder",
      msg: 'Customer "Alice Wilson" has a pending balance of $450.00 for 32 days.',
      time: "Yesterday",
      date: "Yesterday",
      icon: AlertTriangle,
      color: "#f59e0b",
      action: "Send Reminder",
    },
    {
      id: 5,
      type: "system",
      title: "Backup Successful",
      msg: "Full database backup has been archived to secure storage.",
      time: "Apr 25, 2024",
      date: "Older",
      icon: FileText,
      color: "#1e293b",
      action: "Download Log",
    },
  ];

  const filteredNotifications =
    activeTab === "All"
      ? notifications
      : notifications.filter((n) => n.type === activeTab.toLowerCase());

  const Tab = ({ label }) => (
    <button
      onClick={() => setActiveTab(label)}
      className={`px-6 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-widest transition-all duration-300 ${
        activeTab === label
          ? "bg-blue-500 text-white shadow-header"
          : "bg-transparent text-text-muted hover:bg-slate-50"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="pb-10">
      <div className="bg-white rounded-xl shadow-material relative overflow-hidden mt-10 border border-slate-100">
        <div className="absolute top-0 left-0 right-0 h-16 rounded-t-xl flex items-center px-8 text-white shadow-header bg-dark-gradient">
          <div className="flex justify-between w-full items-center">
            <div className="flex items-center gap-3">
              <Bell size={18} className="text-white/60" />
              <h4 className="m-0 text-base font-bold">
                Encrypted Notification Center
              </h4>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-1.5 rounded-lg bg-white/10 text-white text-[10px] font-extrabold uppercase tracking-widest hover:bg-white/20 transition-all border border-white/10 flex items-center gap-2">
                <Check size={14} /> Mark Read
              </button>
              <button className="px-4 py-1.5 rounded-lg bg-white/10 text-white text-[10px] font-extrabold uppercase tracking-widest hover:bg-white/20 transition-all border border-white/10 flex items-center gap-2">
                <Trash2 size={14} /> Clear All
              </button>
            </div>
          </div>
        </div>

        <div className="p-8 pt-20">
          <div className="flex gap-3 mb-8 border-b border-slate-100 pb-6">
            <Tab label="All" />
            <Tab label="Inventory" />
            <Tab label="Financial" />
            <Tab label="System" />
          </div>

          <div className="space-y-4">
            {filteredNotifications.map((notif) => (
              <div
                key={notif.id}
                className="relative bg-white rounded-2xl border border-slate-100 p-6 flex gap-6 hover:shadow-material transition-all group overflow-hidden"
              >
                {/* Left status accent line */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1.5 group-hover:w-2 transition-all"
                  style={{ background: notif.color }}
                ></div>

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-header shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: notif.color }}
                >
                  <notif.icon size={24} />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h5 className="m-0 text-base font-extrabold text-text-main tracking-tight group-hover:text-blue-500 transition-colors">
                      {notif.title}
                    </h5>
                    <span className="text-xs font-extrabold text-text-muted uppercase tracking-widest">
                      {notif.time}
                    </span>
                  </div>
                  <p className="m-0 text-sm text-text-muted font-medium leading-relaxed mb-5">
                    {notif.msg}
                  </p>

                  <div className="flex gap-3">
                    <button className="px-5 py-2 rounded-xl bg-slate-50 border border-slate-100 text-[11px] font-extrabold uppercase tracking-widest text-text-main flex items-center gap-2 hover:bg-white hover:shadow-sm transition-all">
                      {notif.action}
                      <ChevronRight size={14} className="text-text-muted" />
                    </button>
                    <button className="px-5 py-2 rounded-xl bg-transparent text-[11px] font-extrabold uppercase tracking-widest text-text-muted hover:text-red-500 transition-colors">
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredNotifications.length === 0 && (
              <div className="text-center py-24 border-2 border-dashed border-slate-100 rounded-3xl">
                <Bell size={64} className="mx-auto text-slate-100 mb-6" />
                <p className="text-lg font-extrabold text-text-main tracking-tight m-0">
                  All System Logs Clear
                </p>
                <p className="text-sm font-medium text-text-muted mt-1">
                  No active {activeTab.toLowerCase()} anomalies detected in
                  current cycle.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
