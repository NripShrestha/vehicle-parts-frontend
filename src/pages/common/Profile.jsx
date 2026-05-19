import React from "react";
import {
  User,
  Mail,
  Shield,
  Bell,
  Camera,
  Clock,
  CheckCircle,
  Star,
  Award,
  Briefcase,
  MapPin,
  Smartphone,
  Key,
  History,
} from "lucide-react";

const Profile = () => {
  const activities = [
    {
      action: "Updated Stock Levels",
      target: "Brake Pads (BP-101)",
      time: "2 hours ago",
      icon: History,
    },
    {
      action: "Generated Monthly Report",
      target: "Financials_April.pdf",
      time: "5 hours ago",
      icon: History,
    },
    {
      action: "Approved New Vendor",
      target: "Global Parts Inc.",
      time: "Yesterday",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="pb-10">
      {/* Profile Header Card */}
      <div className="bg-white rounded-xl shadow-material relative overflow-hidden mt-10 border border-slate-100">
        <div className="h-16 rounded-t-xl flex items-center px-6 text-white shadow-header bg-dark-gradient">
          <div className="flex justify-between w-full items-center">
            <h4 className="m-0 text-base font-bold">Executive Profile</h4>
            <span className="text-[10px] font-extrabold px-3 py-1 bg-white/20 rounded-md uppercase tracking-widest border border-white/10">
              VERIFIED ADMIN
            </span>
          </div>
        </div>

        <div className="pt-8 px-6 pb-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
            {/* Left Sidebar Info */}
            <div className="flex flex-col items-center">
              <div className="relative w-40 mb-6 group">
                <div className="w-40 h-40 rounded-3xl bg-blue-gradient flex items-center justify-center text-5xl font-extrabold text-white shadow-header transform hover:rotate-3 transition-transform duration-300">
                  JD
                </div>
                <button className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-white flex items-center justify-center cursor-pointer shadow-material text-primary hover:text-blue-500 transition-colors border border-slate-100">
                  <Camera size={20} />
                </button>
              </div>

              <div className="text-center mb-8">
                <h2 className="text-2xl font-extrabold m-0 mb-1 text-text-main tracking-tight">
                  Jane Doe
                </h2>
                <p className="text-text-muted text-sm font-extrabold uppercase tracking-tight">
                  Senior Fleet Manager
                </p>
                <div className="flex justify-center gap-2 mt-3">
                  <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded text-[10px] font-extrabold text-text-muted uppercase tracking-widest">
                    FLEET OPS
                  </span>
                  <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded text-[10px] font-extrabold text-text-muted uppercase tracking-widest">
                    INVENTORY
                  </span>
                </div>
              </div>

              <div className="w-full flex flex-col gap-5 border-t border-[#f0f2f5] pt-6">
                <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-0">
                  System Performance
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 bg-slate-50 rounded-xl text-center border border-slate-100 shadow-sm">
                    <h3 className="text-xl font-extrabold text-text-main m-0">
                      98%
                    </h3>
                    <p className="text-[9px] text-text-muted font-extrabold uppercase tracking-widest mt-1">
                      EFFICIENCY
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl text-center border border-slate-100 shadow-sm">
                    <h3 className="text-xl font-extrabold text-text-main m-0">
                      1.2k
                    </h3>
                    <p className="text-[9px] text-text-muted font-extrabold uppercase tracking-widest mt-1">
                      TASKS
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Detailed Content */}
            <div className="pt-2">
              <div className="mb-10">
                <h4 className="text-lg font-extrabold text-text-main m-0 mb-4 border-b-2 border-blue-500 w-fit pb-1 tracking-tight">
                  Professional Biography
                </h4>
                <p className="text-[15px] text-text-muted font-medium leading-relaxed m-0">
                  Dedicated Fleet Operations Specialist with over 8 years of
                  experience in automotive parts management and logistics.
                  Expert in optimizing supply chain workflows and implementing
                  automated inventory tracking systems. Currently overseeing the
                  "AutoPart Pro" integration for high-volume service centers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-base font-extrabold text-text-main m-0 mb-5 tracking-tight">
                    Recent Activity
                  </h4>
                  <div className="flex flex-col gap-5">
                    {activities.map((act, i) => (
                      <div key={i} className="flex gap-4 group">
                        <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center text-text-muted group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors shadow-sm border border-slate-100">
                          <act.icon size={16} />
                        </div>
                        <div>
                          <p className="text-sm font-extrabold text-text-main m-0">
                            {act.action}
                          </p>
                          <p className="text-xs text-text-muted font-bold m-0 mt-0.5">
                            {act.target} • {act.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-extrabold text-text-main m-0 mb-5 tracking-tight">
                    Security & Access
                  </h4>
                  <div className="flex flex-col gap-4">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 shadow-sm hover:bg-white transition-colors duration-300">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-3 items-center">
                          <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                            <Smartphone size={18} />
                          </div>
                          <span className="text-sm font-extrabold text-text-main">
                            2FA Authentication
                          </span>
                        </div>
                        <span className="text-[10px] font-extrabold text-green-500 bg-green-50 px-2 py-1 rounded border border-green-100 tracking-widest">
                          ENABLED
                        </span>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 shadow-sm hover:bg-white transition-colors duration-300">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-3 items-center">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            <Key size={18} />
                          </div>
                          <span className="text-sm font-extrabold text-text-main">
                            Security Key
                          </span>
                        </div>
                        <span className="text-[10px] font-extrabold text-text-muted uppercase tracking-widest">
                          14d ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
