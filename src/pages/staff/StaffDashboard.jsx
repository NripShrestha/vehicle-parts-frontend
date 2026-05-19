import React, { useState, useEffect } from "react";
import {
  Users,
  ShoppingCart,
  Search,
  ClipboardList,
  BarChart3,
  Mail,
  UserPlus,
  Clock,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Loader2,
  Sparkles,
  RefreshCw,
  ChevronRight,
  Zap,
} from "lucide-react";
import { salesService, customerService } from "../../services/api";

const QuickAction = ({ title, icon: Icon, onClick }) => (
  <button
    onClick={onClick}
    className="bg-white rounded-[30px] p-8 flex flex-col items-center gap-6 cursor-pointer border border-black/5 hover:bg-[#111111] hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group text-center w-full relative overflow-hidden"
  >
    <div className="absolute -right-4 -bottom-4 text-black/5 group-hover:text-white/5 transition-colors">
      <Icon size={80} />
    </div>
    <div className="w-20 h-20 rounded-3xl bg-[#f8f8f8] flex items-center justify-center text-[#111111] group-hover:bg-[#fcd20b] transition-all duration-500 shadow-sm relative z-10">
      <Icon size={32} />
    </div>
    <h4 className="m-0 text-sm font-bold text-[#111111] font-oswald uppercase italic tracking-tighter group-hover:text-white transition-colors relative z-10">
      {title}
    </h4>
    <div className="flex items-center gap-2 text-[#fcd20b] font-oswald text-[9px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 relative z-10">
      INITIALIZE <ChevronRight size={14} />
    </div>
  </button>
);

const StaffDashboard = ({ setActiveScreen }) => {
  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState({
    todaySales: 0,
    todayCustomers: 0,
    recentOperations: [],
  });

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const [salesRes, custRes] = await Promise.all([
        salesService.getAllInvoices(),
        customerService.getAll(),
      ]);

      const today = new Date().toISOString().split("T")[0];

      const todaySales = salesRes.data.filter(
        (s) => s.invoiceDate.split("T")[0] === today,
      );
      const totalRevenue = todaySales.reduce(
        (acc, s) => acc + s.totalAmount,
        0,
      );

      const todayCust = custRes.data.filter(
        (c) => c.dateJoined?.split("T")[0] === today,
      );

      setMetrics({
        todaySales: totalRevenue,
        todayCustomers: todayCust.length,
        recentOperations: salesRes.data.slice(0, 5),
      });
    } catch (error) {
      console.error("Error loading dashboard:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center font-roboto">
        <Loader2 size={56} className="text-[#fcd20b] animate-spin mb-6" />
        <p className="text-[#111111] font-bold tracking-[0.3em] uppercase text-[10px] animate-pulse font-oswald italic">
          SYNCHRONIZING OPERATIONAL CORE...
        </p>
      </div>
    );
  }

  return (
    <div className="pb-20 font-roboto">
      {/* Hero Welcome Banner */}
      <div className="mb-14 p-16 bg-[#111111] rounded-[40px] text-white relative overflow-hidden shadow-2xl border border-white/5 animate-xtra">
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-5 py-2 rounded-xl bg-[#fcd20b]/10 text-[#fcd20b] text-[10px] font-bold uppercase tracking-[0.2em] border border-[#fcd20b]/20 font-oswald italic">
              Operational Status: Online
            </span>
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#111111] bg-[#222222] ring-1 ring-white/10 overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/150?u=op${i}`}
                    alt="Operator"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              ))}
            </div>
          </div>
          <h1 className="text-7xl font-bold m-0 mb-6 font-oswald uppercase italic tracking-tighter leading-[0.9]">
            STAFF <br />
            <span className="text-[#fcd20b]">COMMAND CENTER</span>
          </h1>
          <p className="text-white/40 text-lg font-medium max-w-xl leading-relaxed uppercase tracking-tight">
            Process high-fidelity sales, manage registries, and monitor
            real-time fulfillment metrics.
          </p>

          <button
            onClick={() => setActiveScreen("SalesInvoice")}
            className="mt-10 px-10 py-5 bg-[#fcd20b] text-[#111111] rounded-full font-oswald font-bold uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-white transition-all shadow-xl shadow-[#fcd20b]/10 transform active:scale-95"
          >
            <Zap size={18} /> OPEN POS TERMINAL
          </button>
        </div>
        <div className="absolute -right-32 -bottom-32 opacity-5 rotate-12 text-white">
          <TrendingUp size={600} />
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="mb-16">
        <div className="flex items-center gap-6 mb-10">
          <h3 className="text-[10px] font-bold text-[#7a7a7a] m-0 tracking-[0.3em] uppercase ml-1 font-oswald">
            Mission Critical Workflows
          </h3>
          <div className="h-0.5 flex-1 bg-black/5"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <QuickAction
            title="Customer Onboarding"
            icon={UserPlus}
            onClick={() => setActiveScreen("Registration")}
          />
          <QuickAction
            title="POS Terminal"
            icon={ShoppingCart}
            onClick={() => setActiveScreen("SalesInvoice")}
          />
          <QuickAction
            title="Asset Search"
            icon={Search}
            onClick={() => setActiveScreen("CustomerSearch")}
          />
          <QuickAction
            title="Command Reports"
            icon={BarChart3}
            onClick={() => setActiveScreen("CustomerReports")}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Recent Activity Table */}
        <div
          className="lg:col-span-2 bg-white rounded-[40px] shadow-2xl overflow-hidden border border-black/5 animate-xtra"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="bg-[#111111] p-10 flex justify-between items-center text-white">
            <div>
              <h4 className="m-0 text-xl font-bold font-oswald uppercase tracking-tighter italic">
                REAL-TIME <span className="text-[#fcd20b]">FEED</span>
              </h4>
              <p className="text-white/40 text-[9px] font-bold mt-1 uppercase tracking-[0.2em]">
                Latest system-wide transactions
              </p>
            </div>
            <button className="bg-white/5 border border-white/10 text-white px-8 py-3 rounded-full text-[10px] font-bold hover:bg-[#fcd20b] hover:text-[#111111] transition-all uppercase tracking-widest font-oswald">
              SYSTEM LOGS
            </button>
          </div>
          <div className="p-10">
            {metrics.recentOperations.length === 0 ? (
              <div className="py-24 text-center">
                <Clock size={64} className="mx-auto text-black/5 mb-6" />
                <p className="text-[#7a7a7a] font-bold uppercase tracking-[0.3em] text-[10px] font-oswald">
                  NO RECENT TELEMETRY DETECTED
                </p>
              </div>
            ) : (
              metrics.recentOperations.map((op, idx, arr) => (
                <div
                  key={op.salesInvoiceID}
                  className={`flex items-center py-8 gap-6 ${idx !== arr.length - 1 ? "border-b border-black/5" : ""} group hover:translate-x-3 transition-transform duration-500`}
                >
                  <div className="w-16 h-16 rounded-[20px] bg-[#f8f8f8] border border-black/5 flex items-center justify-center text-[#111111]/40 shadow-sm shrink-0 group-hover:scale-110 group-hover:bg-[#fcd20b] group-hover:text-[#111111] transition-all">
                    <ShoppingCart size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="m-0 text-lg font-bold text-[#111111] font-oswald uppercase italic tracking-tighter truncate leading-none mb-1">
                      #{op.salesInvoiceID} · TRANSACTION FINALIZED
                    </p>
                    <p className="m-0 text-[10px] text-[#7a7a7a] font-bold uppercase tracking-widest mt-1">
                      Operator: Verified · Node: A-01
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="m-0 text-2xl font-bold text-[#111111] font-oswald tracking-tighter leading-none">
                      ${op.totalAmount.toFixed(2)}
                    </p>
                    <div className="flex items-center justify-end gap-2 mt-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      <p className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest m-0">
                        PROCESSED
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="px-10 py-8 bg-[#f8f8f8] text-center border-t border-black/5">
            <p className="text-[10px] text-[#7a7a7a] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 font-oswald italic">
              <RefreshCw size={14} className="animate-spin text-[#fcd20b]" />
              ENCRYPTED SYNC ACTIVE · 128-BIT TELEMETRY
            </p>
          </div>
        </div>

        {/* Today's Performance */}
        <div className="flex flex-col gap-10">
          <div
            className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-black/5 animate-xtra"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="bg-[#fcd20b] p-10 text-[#111111]">
              <h4 className="m-0 text-xl font-bold font-oswald uppercase tracking-tighter italic leading-none mb-1">
                UNIT <span className="text-white">INTEL</span>
              </h4>
              <p className="text-[#111111]/60 text-[9px] font-bold uppercase tracking-[0.2em]">
                Operational Cycle Metrics
              </p>
            </div>
            <div className="p-10 flex flex-col gap-8">
              <div className="bg-[#f8f8f8] p-8 rounded-[30px] border border-black/5 flex items-center gap-6 hover:bg-[#111111] hover:text-white transition-all duration-500 group">
                <div className="w-16 h-16 rounded-[20px] bg-white shadow-md flex items-center justify-center text-[#111111] group-hover:bg-[#fcd20b] group-hover:scale-110 transition-all duration-500">
                  <Users size={28} />
                </div>
                <div>
                  <h4 className="m-0 text-5xl font-bold font-oswald tracking-tighter italic leading-none mb-1">
                    {metrics.todayCustomers}
                  </h4>
                  <p className="m-0 text-[9px] font-bold text-[#7a7a7a] group-hover:text-white/40 uppercase tracking-widest">
                    NEW OPERATORS
                  </p>
                </div>
              </div>
              <div className="bg-[#f8f8f8] p-8 rounded-[30px] border border-black/5 flex items-center gap-6 hover:bg-[#111111] hover:text-white transition-all duration-500 group">
                <div className="w-16 h-16 rounded-[20px] bg-white shadow-md flex items-center justify-center text-[#fcd20b] group-hover:bg-[#fcd20b] group-hover:text-[#111111] group-hover:scale-110 transition-all duration-500">
                  <TrendingUp size={28} />
                </div>
                <div>
                  <h4 className="m-0 text-5xl font-bold font-oswald tracking-tighter italic leading-none mb-1">
                    ${metrics.todaySales.toFixed(0)}
                  </h4>
                  <p className="m-0 text-[9px] font-bold text-[#7a7a7a] group-hover:text-white/40 uppercase tracking-widest">
                    DAILY REVENUE
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <div className="flex justify-between items-center mb-5">
                  <p className="m-0 text-[10px] font-bold text-[#7a7a7a] uppercase tracking-widest ml-1 font-oswald">
                    Efficiency Rating
                  </p>
                  <span className="text-[10px] font-bold text-[#111111] bg-[#fcd20b] px-3 py-1 rounded-lg uppercase font-oswald">
                    OPTIMAL
                  </span>
                </div>
                <div className="h-4 bg-[#f8f8f8] border border-black/5 rounded-full overflow-hidden p-1 shadow-inner">
                  <div className="h-full w-[82%] bg-[#111111] rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-8 p-5 bg-[#fcd20b]/5 rounded-[20px] border border-[#fcd20b]/10">
                  <CheckCircle size={18} className="text-[#fcd20b]" />
                  <p className="text-[10px] text-[#111111] font-bold m-0 uppercase tracking-tight leading-tight">
                    All systems within nominal operating parameters
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
