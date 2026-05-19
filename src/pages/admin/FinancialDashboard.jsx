import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingBag,
  PieChart,
  Users,
  ArrowUpRight,
  MoreVertical,
  Calendar,
  Download,
  CheckCircle,
  Clock,
  Loader2,
  ArrowRight,
  ChevronRight,
  Zap,
} from "lucide-react";
import {
  salesService,
  staffService,
  vendorService,
  partsService,
} from "../../services/api";

const StatCard = ({ title, value, change, isPositive, icon: Icon }) => (
  <div className="bg-white rounded-[40px] shadow-2xl relative p-10 transition-all hover:-translate-y-2 duration-500 border border-black/5 group overflow-hidden">
    {/* Decorative background element */}
    <div className="absolute -right-6 -bottom-6 text-black/5 group-hover:text-[#fcd20b]/10 transition-colors">
      <Icon size={140} />
    </div>

    <div className="flex justify-between items-start relative z-10">
      <div className="w-16 h-16 rounded-3xl bg-[#111111] text-[#fcd20b] flex items-center justify-center shadow-2xl group-hover:bg-[#fcd20b] group-hover:text-[#111111] transition-all duration-500">
        <Icon size={28} />
      </div>
      <div className="text-right">
        <p className="text-[10px] font-bold text-[#7a7a7a] uppercase tracking-[0.2em] mb-2 font-oswald italic">
          {title}
        </p>
        <h3 className="text-4xl font-bold text-[#111111] m-0 tracking-tighter font-oswald italic uppercase leading-none">
          {value}
        </h3>
      </div>
    </div>

    <div className="border-t border-black/5 pt-8 mt-8 flex items-center justify-between relative z-10">
      <span
        className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full font-bold text-[10px] tracking-widest uppercase font-oswald ${isPositive ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"}`}
      >
        {isPositive ? (
          <ArrowUpRight size={14} strokeWidth={3} />
        ) : (
          <TrendingDown size={14} strokeWidth={3} />
        )}
        {change}
      </span>
      <span className="text-[#7a7a7a] text-[9px] font-bold uppercase tracking-widest italic">
        Performance Delta
      </span>
    </div>
  </div>
);

const FinancialDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    dailyRevenue: 0,
    newOrders: 0,
    activeVendors: 0,
    inventoryValue: 0,
    recentTransactions: [],
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [salesRes, staffRes, vendorRes, partsRes] = await Promise.all([
        salesService.getAllInvoices(),
        staffService.getAll(),
        vendorService.getAll(),
        partsService.getAll(),
      ]);

      const sales = salesRes.data;
      const today = new Date().toLocaleDateString();
      const dailySales = sales.filter(
        (s) => new Date(s.invoiceDate).toLocaleDateString() === today,
      );

      const totalRevenue = dailyBySum(dailySales);
      const inventoryValue = partsRes.data.reduce(
        (acc, p) => acc + p.sellingPrice * p.stockQuantity,
        0,
      );

      setStats({
        dailyRevenue: totalRevenue,
        newOrders: sales.length,
        activeVendors: vendorRes.data.length,
        inventoryValue: inventoryValue,
        recentTransactions: sales.slice(0, 5).map((s) => ({
          id: `#INV-${s.invoiceID}`,
          desc: `TRANSACTION WITH ${s.customerName.toUpperCase()}`,
          date: new Date(s.invoiceDate).toLocaleDateString(),
          amount: `+$${s.totalAmount.toLocaleString()}`,
          status: "FINALIZED",
        })),
      });
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const dailyBySum = (items) =>
    items.reduce((acc, item) => acc + item.totalAmount, 0);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center font-roboto">
        <Loader2 size={56} className="text-[#fcd20b] animate-spin mb-6" />
        <p className="text-[#111111] font-bold tracking-[0.3em] uppercase text-[10px] animate-pulse font-oswald italic">
          AGGREGATING FINANCIAL TELEMETRY...
        </p>
      </div>
    );
  }

  return (
    <div className="pb-20 font-roboto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 animate-xtra">
        <div>
          <h2 className="text-5xl font-bold text-[#111111] m-0 tracking-tighter font-oswald italic uppercase">
            FINANCIAL <span className="text-[#fcd20b]">INTELLIGENCE</span>
          </h2>
          <p className="text-[#7a7a7a] text-sm font-medium mt-2 uppercase tracking-widest italic">
            Command & Control Over Global Liquidity Streams
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-8 py-4 rounded-full border-2 border-black/5 bg-white text-[#111111] text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-[#fcd20b] hover:border-[#fcd20b] transition-all shadow-sm font-oswald">
            <Calendar size={16} /> DATA CYCLE: 30 DAYS
          </button>
          <button className="px-8 py-4 rounded-full bg-[#111111] text-[#fcd20b] text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-black shadow-2xl transition-all transform active:scale-95 font-oswald">
            <Download size={16} /> EXPORT CRYPTO-LOG
          </button>
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20 animate-xtra">
        <StatCard
          title="DAILY REVENUE"
          value={`$${stats.dailyRevenue.toLocaleString()}`}
          change="+24.2%"
          isPositive={true}
          icon={DollarSign}
        />
        <StatCard
          title="LIFETIME YIELD"
          value={stats.newOrders}
          change="+12.8%"
          isPositive={true}
          icon={ShoppingBag}
        />
        <StatCard
          title="ACTIVE VENDORS"
          value={stats.activeVendors}
          change="0.0%"
          isPositive={true}
          icon={Users}
        />
        <StatCard
          title="ASSET VALUATION"
          value={`$${Math.round(stats.inventoryValue / 1000)}K`}
          change="+5.4%"
          isPositive={true}
          icon={PieChart}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Advanced Transaction Table */}
        <div
          className="lg:col-span-2 bg-white rounded-[40px] shadow-2xl overflow-hidden border border-black/5 flex flex-col animate-xtra"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="bg-[#111111] p-10 flex justify-between items-center text-white">
            <h4 className="m-0 font-bold font-oswald italic flex items-center gap-3 uppercase tracking-tighter text-xl">
              <TrendingUp size={24} className="text-[#fcd20b]" />
              SECURE <span className="text-[#fcd20b]">LEDGER</span> STREAM
            </h4>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-[#fcd20b] hover:text-[#111111] transition-all">
              <MoreVertical size={20} />
            </div>
          </div>
          <div className="flex-1 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#f8f8f8]">
                  <th className="pl-10 py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 text-left tracking-[0.2em] font-oswald italic">
                    Asset Protocol
                  </th>
                  <th className="py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 text-left tracking-[0.2em] font-oswald italic">
                    Timestamp
                  </th>
                  <th className="py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 text-left tracking-[0.2em] font-oswald italic">
                    Volume
                  </th>
                  <th className="py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 text-left tracking-[0.2em] font-oswald italic">
                    State
                  </th>
                </tr>
              </thead>
              <tbody>
                {stats.recentTransactions.map((trx, idx) => (
                  <tr
                    key={idx}
                    className="group hover:bg-[#f8f8f8] transition-all duration-300"
                  >
                    <td className="pl-10 py-8 border-b border-black/5">
                      <div className="flex items-center gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-[#f8f8f8] border border-black/5 flex items-center justify-center text-[#111111]/40 shadow-sm group-hover:scale-110 group-hover:bg-[#fcd20b] group-hover:text-[#111111] transition-all duration-500">
                          <ArrowUpRight size={22} />
                        </div>
                        <div>
                          <p className="font-bold text-lg m-0 text-[#111111] font-oswald italic tracking-tighter leading-none mb-1 uppercase">
                            {trx.desc}
                          </p>
                          <p className="text-[10px] text-[#7a7a7a] m-0 font-bold uppercase tracking-widest mt-1">
                            ID: {trx.id}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-8 border-b border-black/5">
                      <p className="text-xs text-[#111111] m-0 font-bold font-oswald">
                        {trx.date}
                      </p>
                    </td>
                    <td className="py-8 border-b border-black/5">
                      <p className="text-xl font-bold m-0 tracking-tighter text-[#111111] font-oswald italic">
                        {trx.amount}
                      </p>
                    </td>
                    <td className="py-8 border-b border-black/5">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-[9px] font-bold tracking-widest uppercase text-emerald-600 font-oswald">
                          {trx.status}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-8 bg-[#f8f8f8] text-center border-t border-black/5">
            <button className="bg-transparent border-none text-[#111111] text-[10px] font-bold cursor-pointer hover:text-[#fcd20b] tracking-widest uppercase flex items-center gap-3 mx-auto transition-all group font-oswald italic">
              INITIALIZE DETAILED LEDGER AUDIT{" "}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* Right Sidebar: Performance Widget */}
        <div
          className="bg-white rounded-[40px] shadow-2xl p-12 border border-black/5 flex flex-col items-center animate-xtra"
          style={{ animationDelay: "0.2s" }}
        >
          <h4 className="w-full text-[#111111] font-bold uppercase tracking-tighter italic font-oswald text-xl mb-12 flex items-center gap-3">
            <PieChart size={24} className="text-[#fcd20b]" />
            YIELD <span className="text-[#fcd20b]">METRICS</span>
          </h4>

          <div className="relative h-64 w-64 flex items-center justify-center mb-16 group">
            <div className="absolute inset-0 rounded-full border-[22px] border-[#f8f8f8] border-t-[#fcd20b] border-r-[#111111] border-b-[#fcd20b]/40 shadow-2xl transform -rotate-12 group-hover:rotate-12 transition-transform duration-1000"></div>
            <div className="text-center bg-white w-40 h-40 rounded-full flex flex-col items-center justify-center shadow-xl border border-black/5 group-hover:scale-110 transition-all duration-500">
              <h4 className="m-0 text-5xl font-bold text-[#111111] font-oswald tracking-tighter leading-none italic uppercase">
                92%
              </h4>
              <p className="m-0 text-[10px] text-[#7a7a7a] font-bold tracking-widest uppercase mt-2 font-oswald italic">
                Efficiency
              </p>
            </div>
          </div>

          <div className="w-full space-y-10">
            {[
              { label: "Asset Procurement", value: 65, color: "#fcd20b" },
              { label: "Service Logistics", value: 25, color: "#111111" },
              { label: "Operational Capital", value: 10, color: "#7a7a7a" },
            ].map((item) => (
              <div key={item.label} className="group">
                <div className="flex justify-between mb-3 items-end">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-4 h-4 rounded-full shadow-lg"
                      style={{ background: item.color }}
                    ></div>
                    <span className="text-[11px] font-bold text-[#111111] uppercase tracking-tighter font-oswald italic group-hover:text-[#fcd20b] transition-colors">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-xs text-[#7a7a7a] font-bold font-oswald">
                    {item.value}%
                  </span>
                </div>
                <div className="h-4 bg-[#f8f8f8] rounded-full overflow-hidden p-1 shadow-inner border border-black/5">
                  <div
                    className="h-full rounded-full transition-all duration-1000 group-hover:brightness-110 relative"
                    style={{ width: `${item.value}%`, background: item.color }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard;
