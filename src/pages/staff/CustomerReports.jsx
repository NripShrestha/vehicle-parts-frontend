import React, { useState, useEffect } from "react";
import {
  BarChart3,
  Users,
  TrendingUp,
  AlertTriangle,
  ArrowUpRight,
  ArrowDownRight,
  UserCheck,
  CreditCard,
  Loader2,
  Sparkles,
  Briefcase,
  Activity,
  Award,
} from "lucide-react";
import { customerService, reportService } from "../../services/api";

const CustomerReports = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("highSpenders"); // "highSpenders", "regulars", "credits"
  const [data, setData] = useState({
    totalCustomers: 0,
    highSpenders: [],
    regulars: [],
    pendingCredits: [],
    totalRevenue: 0,
    averageSpend: 0,
  });

  useEffect(() => {
    loadReportData();
  }, []);

  const loadReportData = async () => {
    try {
      const [custRes, topRes, regularRes, creditRes] = await Promise.all([
        customerService.getAll(),
        reportService.getTopSpenders(),
        reportService.getRegularCustomers(),
        reportService.getPendingCredits(),
      ]);

      const customers = custRes.data;
      const highSpenders = (topRes.data || []).map((row) => ({
        id: row.customerID,
        name: row.fullName || "Unknown",
        email: row.email || "N/A",
        phone: row.phoneNumber || "N/A",
        spent: row.totalSpent || 0,
        visits: row.purchaseCount || 0,
        creditBalance: row.creditBalance || 0,
      }));
      const regulars = (regularRes.data || []).map((row) => ({
        id: row.customerID,
        name: row.fullName || "Unknown",
        email: row.email || "N/A",
        phone: row.phoneNumber || "N/A",
        spent: row.totalSpent || 0,
        visits: row.purchaseCount || 0,
        creditBalance: row.creditBalance || 0,
      }));
      const pendingCredits = (creditRes.data || []).map((row) => ({
        id: row.customerID,
        name: row.fullName || "Unknown",
        email: row.email || "N/A",
        phone: row.phoneNumber || "N/A",
        spent: row.totalSpent || 0,
        visits: row.purchaseCount || 0,
        creditBalance: row.creditBalance || 0,
      }));

      const totalRevenue = highSpenders.reduce((acc, row) => acc + row.spent, 0);

      setData({
        totalCustomers: customers.length,
        highSpenders: highSpenders,
        regulars: regulars,
        pendingCredits: pendingCredits,
        totalRevenue: totalRevenue,
        averageSpend:
          highSpenders.length > 0 ? totalRevenue / highSpenders.length : 0,
      });
    } catch (error) {
      console.error("Error loading report data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <Loader2 size={48} className="text-slate-900 animate-spin mb-4" />
        <p className="text-slate-500 font-black tracking-widest uppercase text-xs animate-pulse">
          Loading Sales Reports...
        </p>
      </div>
    );
  }

  const categories = [
    {
      label: "Total Portfolio",
      count: data.totalCustomers,
      icon: Users,
      color: "#3b82f6",
      trend: "Live",
      isUp: true,
    },
    {
      label: "Strategic Spenders",
      count: data.highSpenders.length,
      icon: TrendingUp,
      color: "#10b981",
      trend: "Top 10",
      isUp: true,
    },
    {
      label: "Pending Credits",
      count: data.pendingCredits.length,
      icon: AlertTriangle,
      color: "#f59e0b",
      trend: "Overdue",
      isUp: false,
    },
  ];

  const getActiveList = () => {
    switch (activeTab) {
      case "regulars":
        return data.regulars;
      case "credits":
        return data.pendingCredits;
      default:
        return data.highSpenders;
    }
  };

  const activeList = getActiveList();

  return (
    <div className="pb-10 font-inter">
      {/* Strategic Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h2 className="text-3xl font-black text-slate-900 m-0 tracking-tight">
            Sales Reports & Analytics
          </h2>
          <p className="text-slate-500 text-sm font-medium mt-1 uppercase tracking-widest text-[10px]">
            Detailed analysis of customer spending, attendance patterns, and outstanding credits.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-slate-50 shadow-sm transition-all active:scale-95">
            <Sparkles size={16} className="text-amber-500" /> Export Report
          </button>
        </div>
      </div>

      {/* Modern Stat Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-white rounded-[2.5rem] shadow-xl p-8 border border-slate-100 relative overflow-hidden group hover:scale-[1.05] transition-all duration-500 cursor-pointer"
          >
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                <cat.icon size={28} className="text-blue-400" />
              </div>
              <div
                className={`flex items-center gap-2 text-[10px] font-black px-3 py-1 rounded-full border tracking-widest uppercase ${
                  cat.isUp
                    ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                    : "bg-amber-50 text-amber-600 border-amber-100"
                }`}
              >
                {cat.trend}
              </div>
            </div>
            <div className="relative z-10">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">
                {cat.label}
              </p>
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter m-0 leading-none">
                {cat.count}
              </h2>
            </div>
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.1] group-hover:scale-110 transition-all duration-700">
              <cat.icon size={180} />
            </div>
          </div>
        ))}
      </div>

      {/* High Fidelity Dynamic Report Table */}
      <div className="bg-white rounded-[2.5rem] shadow-xl relative overflow-hidden border border-slate-100">
        <div className="bg-slate-900 p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-white">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
              <BarChart3 size={28} />
            </div>
            <div>
              <h4 className="m-0 text-xs font-black uppercase tracking-widest">
                Customer-Related Intelligence Reports
              </h4>
              <p className="text-slate-400 text-[10px] font-bold mt-1 uppercase tracking-wider">
                Select category to display optimized reports for staff review
              </p>
            </div>
          </div>
          <div className="flex gap-2 bg-white/5 p-1 rounded-2xl border border-white/10">
            <button
              onClick={() => setActiveTab("highSpenders")}
              className={`px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest border-none transition-all cursor-pointer ${
                activeTab === "highSpenders"
                  ? "bg-[#fcd20b] text-[#111111] shadow-lg"
                  : "bg-transparent text-white/60 hover:text-white"
              }`}
            >
              High Spenders
            </button>
            <button
              onClick={() => setActiveTab("regulars")}
              className={`px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest border-none transition-all cursor-pointer ${
                activeTab === "regulars"
                  ? "bg-[#fcd20b] text-[#111111] shadow-lg"
                  : "bg-transparent text-white/60 hover:text-white"
              }`}
            >
              Regulars
            </button>
            <button
              onClick={() => setActiveTab("credits")}
              className={`px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest border-none transition-all cursor-pointer ${
                activeTab === "credits"
                  ? "bg-[#fcd20b] text-[#111111] shadow-lg"
                  : "bg-transparent text-white/60 hover:text-white"
              }`}
            >
              Pending Credits
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="pl-10 py-6 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">
                  Customer Name
                </th>
                <th className="py-6 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">
                  {activeTab === "credits" ? "Pending Credit" : "Activity"}
                </th>
                <th className="py-6 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">
                  {activeTab === "credits" ? "Contact Info" : "Total Revenue"}
                </th>
                <th className="py-6 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">
                  Loyalty Status
                </th>
                <th className="pr-10 py-6 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-right tracking-widest">
                  Status Code
                </th>
              </tr>
            </thead>
            <tbody>
              {activeList.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-24 text-center">
                    <Activity size={48} className="mx-auto text-slate-100 mb-4 animate-pulse" />
                    <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">
                      No matched customer records found under this filter
                    </p>
                  </td>
                </tr>
              ) : (
                activeList.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-slate-50/50 transition-colors group"
                  >
                    <td className="pl-10 py-8 border-b border-slate-100">
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-slate-900 text-blue-400 flex items-center justify-center font-black text-xs shadow-lg group-hover:scale-110 transition-transform">
                          {row.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <p className="font-black text-slate-900 m-0 tracking-tight text-base leading-none">
                            {row.name}
                          </p>
                          <p className="text-[10px] text-slate-400 font-bold m-0 mt-1 uppercase tracking-tight">
                            Ref: CST-{row.id}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-8 border-b border-slate-100">
                      {activeTab === "credits" ? (
                        <p className="text-lg font-black text-rose-600 m-0 tracking-tighter">
                          ${row.creditBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </p>
                      ) : (
                        <div className="flex items-center gap-4">
                          <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden shadow-inner p-0.5">
                            <div
                              className="h-full bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.4)]"
                              style={{
                                width: `${Math.min((row.visits / 20) * 100, 100)}%`,
                              }}
                            ></div>
                          </div>
                          <span className="text-[11px] font-black text-slate-900 uppercase">
                            {row.visits} Purchases
                          </span>
                        </div>
                      )}
                    </td>
                    <td className="py-8 border-b border-slate-100">
                      {activeTab === "credits" ? (
                        <div>
                          <p className="text-[11px] font-black text-slate-700 m-0 uppercase tracking-widest">
                            {row.email}
                          </p>
                          <p className="text-[10px] font-bold text-slate-400 m-0 mt-1 tracking-tight">
                            {row.phone}
                          </p>
                        </div>
                      ) : (
                        <p className="text-lg font-black text-blue-600 m-0 tracking-tighter">
                          ${row.spent.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </p>
                      )}
                    </td>
                    <td className="py-8 border-b border-slate-100">
                      <span
                        className={`text-[9px] font-black px-3 py-1.5 rounded-xl tracking-widest border uppercase shadow-sm ${
                          row.spent > 5000
                            ? "bg-indigo-50 text-indigo-600 border-indigo-100"
                            : "bg-slate-50 text-slate-600 border-slate-100"
                        }`}
                      >
                        {row.spent > 5000 ? "PLATINUM" : "RECOGNIZED"}
                      </span>
                    </td>
                    <td className="pr-10 py-8 border-b border-slate-100 text-right">
                      {activeTab === "credits" ? (
                        <span className="text-[10px] font-black text-rose-500 bg-rose-50 px-4 py-2 rounded-full border border-rose-100 uppercase tracking-widest shadow-sm">
                          CREDIT DELINQUENT
                        </span>
                      ) : (
                        <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 uppercase tracking-widest shadow-sm">
                          VERIFIED
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerReports;
