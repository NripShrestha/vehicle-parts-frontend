import React from "react";
import {
  Car,
  Calendar,
  Clock,
  Wrench,
  CheckCircle,
  ArrowRight,
  User,
  MapPin,
  Phone,
  ShieldCheck,
  History,
} from "lucide-react";

const QuickStat = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white rounded-xl shadow-material p-6 flex flex-col gap-3 transition-all hover:scale-[1.02] duration-200">
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center"
      style={{ backgroundColor: `${color}15`, color: color }}
    >
      <Icon size={22} />
    </div>
    <div>
      <h3 className="m-0 text-2xl font-extrabold text-text-main leading-tight">
        {value}
      </h3>
      <p className="m-0 text-[13px] font-extrabold text-text-muted tracking-tight">
        {title}
      </p>
    </div>
  </div>
);

const CustomerDashboard = () => {
  return (
    <div className="pb-10">
      {/* Personalized Welcome Header */}
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-3xl bg-primary flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-300">
            <User size={40} className="text-white" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-extrabold text-text-main m-0 tracking-tighter">
                Welcome back, Adrian
              </h2>
              <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-blue-500 text-white shadow-sm uppercase tracking-widest border border-white/20">
                GOLD MEMBER
              </span>
            </div>
            <p className="text-text-muted text-base mt-1 font-medium italic opacity-80">
              Your Tesla Model S is in peak condition. No service required.
            </p>
          </div>
        </div>
        <button className="px-7 py-3.5 rounded-xl bg-blue-500 text-white text-sm font-extrabold uppercase tracking-widest flex items-center gap-2 hover:bg-black shadow-header transition-all transform active:scale-95">
          <Calendar size={18} /> Schedule New Service
        </button>
      </div>

      {/* Overview Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <QuickStat
          title="Active Appointments"
          value="1"
          icon={Calendar}
          color="#1A73E8"
        />
        <QuickStat
          title="Total Services"
          value="12"
          icon={Wrench}
          color="#43A047"
        />
        <QuickStat
          title="Spend (YTD)"
          value="$1,450"
          icon={ShieldCheck}
          color="#D81B60"
        />
        <QuickStat
          title="Next Due (Days)"
          value="124"
          icon={Clock}
          color="#FB8C00"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Rich Service History Table */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-material relative overflow-hidden border border-slate-100">
          <div className="absolute top-0 left-0 right-0 h-16 rounded-t-xl flex items-center px-6 text-white shadow-header bg-dark-gradient">
            <div className="flex justify-between w-full items-center">
              <h4 className="m-0 text-base font-bold">
                Comprehensive Service History
              </h4>
              <button className="bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-lg text-[10px] font-extrabold cursor-pointer hover:bg-white/20 transition-all uppercase tracking-widest">
                DOWNLOAD ALL
              </button>
            </div>
          </div>
          <div className="mt-20">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="pl-6 py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">
                    SERVICE TYPE
                  </th>
                  <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">
                    DATE
                  </th>
                  <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">
                    TECHNICIAN
                  </th>
                  <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">
                    STATUS
                  </th>
                  <th className="pr-6 py-4 border-b border-[#f0f2f5] text-right text-[11px] uppercase text-text-muted font-extrabold">
                    COST
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: "Full Engine Diagnostic",
                    date: "Apr 12, 2024",
                    tech: "Robert F.",
                    status: "COMPLETED",
                    color: "#10b981",
                    cost: "$120.00",
                  },
                  {
                    type: "Brake Pad Replacement",
                    date: "Mar 05, 2024",
                    tech: "Cody F.",
                    status: "COMPLETED",
                    color: "#10b981",
                    cost: "$450.00",
                  },
                  {
                    type: "Oil & Filter Change",
                    date: "Jan 20, 2024",
                    tech: "Esther H.",
                    status: "COMPLETED",
                    color: "#10b981",
                    cost: "$85.00",
                  },
                  {
                    type: "Scheduled Maintenance",
                    date: "Dec 15, 2023",
                    tech: "John D.",
                    status: "COMPLETED",
                    color: "#10b981",
                    cost: "$240.00",
                  },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="pl-6 py-5 border-b border-[#f0f2f5]">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-text-muted shadow-sm border border-slate-100">
                          <Wrench size={18} />
                        </div>
                        <p className="font-extrabold text-sm m-0 text-text-main tracking-tight leading-tight">
                          {row.type}
                        </p>
                      </div>
                    </td>
                    <td className="py-5 border-b border-[#f0f2f5]">
                      <p className="text-[13px] text-text-muted m-0 font-extrabold">
                        {row.date}
                      </p>
                    </td>
                    <td className="py-5 border-b border-[#f0f2f5]">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-text-main text-white text-[10px] flex items-center justify-center font-extrabold ring-2 ring-white shadow-sm">
                          {row.tech[0]}
                        </div>
                        <span className="text-[13px] font-extrabold text-text-main tracking-tight">
                          {row.tech}
                        </span>
                      </div>
                    </td>
                    <td className="py-5 border-b border-[#f0f2f5]">
                      <span
                        className="text-[10px] font-extrabold px-3 py-1 rounded-md tracking-wider border uppercase shadow-sm"
                        style={{
                          color: row.color,
                          backgroundColor: `${row.color}15`,
                          borderColor: `${row.color}30`,
                        }}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="pr-6 py-5 border-b border-[#f0f2f5] text-right font-extrabold text-text-main text-sm tracking-tight">
                      {row.cost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-6 text-center border-t border-[#f0f2f5]">
              <button className="bg-transparent border-none text-blue-500 text-[11px] font-extrabold cursor-pointer hover:text-blue-700 transition-colors tracking-widest uppercase flex items-center gap-2 mx-auto justify-center">
                VIEW EXTENDED HISTORY <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Vehicle Profile & Support */}
        <div className="flex flex-col gap-8">
          <div className="bg-white rounded-xl shadow-material relative p-8 border border-slate-100 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-16 rounded-t-xl flex items-center px-6 text-white shadow-header bg-blue-gradient">
              <h4 className="m-0 text-base font-bold">Primary Vehicle</h4>
            </div>
            <div className="mt-14 text-center">
              <div className="w-full h-40 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 shadow-inner group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Car
                  size={72}
                  className="text-text-muted group-hover:scale-110 transition-transform duration-700 relative z-10"
                />
              </div>
              <h4 className="text-2xl font-extrabold m-0 text-text-main tracking-tighter">
                Tesla Model S
              </h4>
              <p className="text-[11px] text-text-muted font-extrabold mt-1 tracking-widest uppercase opacity-70">
                VIN: 5YJSA1E2XG...0912
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <p className="m-0 text-[10px] font-extrabold text-text-muted uppercase tracking-widest mb-1 opacity-60">
                    MODEL YEAR
                  </p>
                  <p className="m-0 text-base font-extrabold text-text-main tracking-tight">
                    2022
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <p className="m-0 text-[10px] font-extrabold text-text-muted uppercase tracking-widest mb-1 opacity-60">
                    COLORWAY
                  </p>
                  <p className="m-0 text-base font-extrabold text-text-main tracking-tight whitespace-nowrap">
                    Midnight Silver
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-gradient rounded-xl text-white p-8 shadow-header relative overflow-hidden group">
            <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <ShieldCheck size={160} />
            </div>
            <div className="relative z-10">
              <h4 className="m-0 text-xl font-extrabold tracking-tight">
                Need Assistance?
              </h4>
              <p className="text-sm text-white/70 my-5 font-medium leading-relaxed">
                Our expert technicians are available 24/7 for emergency roadside
                support and quick diagnostics.
              </p>
              <button className="w-full bg-white text-text-main py-3.5 rounded-xl font-extrabold text-[11px] uppercase tracking-widest shadow-xl hover:bg-slate-50 transition-all transform active:scale-95 flex items-center justify-center gap-2">
                <Phone size={14} className="fill-text-main" /> CALL SUPPORT NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
