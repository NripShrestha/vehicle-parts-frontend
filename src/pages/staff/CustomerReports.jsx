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
} from "lucide-react";
import { customerService, salesService } from "../../services/api";

const CustomerReports = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    totalCustomers: 0,
    highSpenders: [],
    totalRevenue: 0,
    averageSpend: 0,
  });

  useEffect(() => {
    loadReportData();
  }, []);

  const loadReportData = async () => {
    try {
      const [custRes, salesRes] = await Promise.all([
        customerService.getAll(),
        salesService.getAllInvoices(),
      ]);

      const customers = custRes.data;
      const invoices = salesRes.data;

      // Calculate total spend per customer
      const customerSpendMap = {};
      invoices.forEach((inv) => {
        if (!customerSpendMap[inv.customerID]) {
          customerSpendMap[inv.customerID] = {
            id: inv.customerID,
            name:
              customers.find((c) => c.customerID === inv.customerID)
                ?.fullName || "Unknown",
            spent: 0,
            visits: 0,
          };
        }
        customerSpendMap[inv.customerID].spent += inv.totalAmount;
        customerSpendMap[inv.customerID].visits += 1;
      });

      const spendersList = Object.values(customerSpendMap).sort(
        (a, b) => b.spent - a.spent,
      );
      const highSpenders = spendersList.slice(0, 10);
      const totalRevenue = invoices.reduce(
        (acc, inv) => acc + inv.totalAmount,
        0,
      );

      setData({
        totalCustomers: customers.length,
        highSpenders: highSpenders,
        totalRevenue: totalRevenue,
        averageSpend:
          spendersList.length > 0 ? totalRevenue / spendersList.length : 0,
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
          Aggregating Economic Intelligence...
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
      label: "Avg Portfolio Value",
      count: `$${Math.round(data.averageSpend)}`,
      icon: Briefcase,
      color: "#8b5cf6",
      trend: "Active",
      isUp: true,
    },
  ];

  return (
    <div className="pb-10 font-inter">
      {/* Strategic Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h2 className="text-3xl font-black text-slate-900 m-0 tracking-tight">
            Customer Analytics & Insights
          </h2>
          <p className="text-slate-500 text-sm font-medium mt-1 uppercase tracking-widest text-[10px]">
            Quantitative analysis of customer loyalty metrics and financial risk
            profiles.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-slate-50 shadow-sm transition-all active:scale-95">
            <Sparkles size={16} className="text-amber-500" /> AI Forecasting
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
              <div className="flex items-center gap-2 text-[10px] font-black px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 tracking-widest uppercase">
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

      {/* High Fidelity Spend Analysis Table */}
      <div className="bg-white rounded-[2.5rem] shadow-xl relative overflow-hidden border border-slate-100">
        <div className="bg-slate-900 p-10 flex justify-between items-center text-white">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
              <TrendingUp size={28} />
            </div>
            <div>
              <h4 className="m-0 text-xs font-black uppercase tracking-widest">
                Top Portfolio Spenders
              </h4>
              <p className="text-slate-400 text-[10px] font-bold mt-1 uppercase tracking-wider">
                Historical high-value acquisition profiles
              </p>
            </div>
          </div>
          <button className="px-6 py-3 rounded-2xl bg-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-all border border-white/10 flex items-center gap-2">
            <BarChart3 size={16} /> Full Economic Report
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="pl-10 py-6 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">
                  Customer Identity
                </th>
                <th className="py-6 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">
                  Engagement
                </th>
                <th className="py-6 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">
                  Total Acquisition
                </th>
                <th className="py-6 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">
                  Loyalty Status
                </th>
                <th className="pr-10 py-6 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-right tracking-widest">
                  Lifecycle
                </th>
              </tr>
            </thead>
            <tbody>
              {data.highSpenders.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-24 text-center">
                    <BarChart3
                      size={48}
                      className="mx-auto text-slate-100 mb-4"
                    />
                    <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">
                      No acquisition data available
                    </p>
                  </td>
                </tr>
              ) : (
                data.highSpenders.map((row, i) => (
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
                        <p className="font-black text-slate-900 m-0 tracking-tight text-base leading-none">
                          {row.name}
                        </p>
                      </div>
                    </td>
                    <td className="py-8 border-b border-slate-100">
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
                          {row.visits} Visits
                        </span>
                      </div>
                    </td>
                    <td className="py-8 border-b border-slate-100">
                      <p className="text-lg font-black text-blue-600 m-0 tracking-tighter">
                        ${row.spent.toLocaleString()}
                      </p>
                    </td>
                    <td className="py-8 border-b border-slate-100">
                      <span
                        className={`text-[9px] font-black px-3 py-1.5 rounded-xl tracking-widest border uppercase shadow-sm ${row.spent > 5000 ? "bg-indigo-50 text-indigo-600 border-indigo-100" : "bg-slate-50 text-slate-600 border-slate-100"}`}
                      >
                        {row.spent > 5000 ? "PLATINUM" : "RECOGNIZED"}
                      </span>
                    </td>
                    <td className="pr-10 py-8 border-b border-slate-100 text-right">
                      <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 uppercase tracking-widest shadow-sm">
                        VERIFIED
                      </span>
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
