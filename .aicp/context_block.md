src\components\Footer.jsx:
<code>
import React from "react";
import {
  ShieldCheck,
  Globe,
  MessageSquare,
  Activity,
  Mail,
  Phone,
  ArrowRight,
  Zap,
  Cpu,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="ml-72 mt-20 border-t border-slate-200/50 bg-white/40 backdrop-blur-xl">
      <div className="px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-gradient flex items-center justify-center text-white shadow-header">
                <Cpu size={24} />
              </div>
              <div>
                <h4 className="text-lg font-black text-text-main m-0 tracking-tighter leading-none">
                  AutoPart OS
                </h4>
                <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] m-0 mt-1">
                  v4.0.2 Stable
                </p>
              </div>
            </div>
            <p className="text-sm text-text-muted font-medium leading-relaxed m-0">
              The industry-standard operating system for modern automotive
              logistics, inventory optimization, and high-fidelity marketplace
              management.
            </p>
            <div className="flex gap-4">
              {[Globe, MessageSquare, Activity].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-text-muted hover:bg-blue-500 hover:text-white transition-all shadow-sm border border-slate-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Infrastructure Column */}
          <div>
            <h5 className="text-[11px] font-black text-text-main uppercase tracking-[0.2em] mb-8">
              Infrastructure
            </h5>
            <ul className="space-y-4 p-0 m-0 list-none">
              {[
                "Global Fleet Node",
                "Inventory Ledger",
                "Financial Engine",
                "Vendor API",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm font-bold text-text-muted hover:text-blue-500 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                    />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Docs Column */}
          <div>
            <h5 className="text-[11px] font-black text-text-main uppercase tracking-[0.2em] mb-8">
              Resources
            </h5>
            <ul className="space-y-4 p-0 m-0 list-none">
              {[
                "Documentation",
                "Security Protocol",
                "System Status",
                "Changelog",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm font-bold text-text-muted hover:text-blue-500 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                    />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="bg-slate-50/50 p-8 rounded-3xl border border-slate-100 shadow-inner">
            <h5 className="text-[11px] font-black text-text-main uppercase tracking-[0.2em] mb-4">
              Transmission
            </h5>
            <p className="text-xs text-text-muted font-bold mb-6 leading-relaxed uppercase">
              Subscribe to critical system updates and inventory drops.
            </p>
            <div className="flex flex-col gap-3">
              <div className="relative group">
                <input
                  type="email"
                  placeholder="admin@enterprise.com"
                  className="w-full pl-5 pr-5 py-3.5 rounded-2xl border border-slate-200 text-sm font-bold text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm transition-all"
                />
              </div>
              <button className="w-full py-3.5 rounded-2xl bg-text-main text-white text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 shadow-md transition-all active:scale-95">
                Join Network
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <p className="text-[11px] font-bold text-text-muted m-0 uppercase tracking-widest">
              © 2024 AutoPart Intelligence Corp.
            </p>
            <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full border border-green-100">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[9px] font-black text-green-600 uppercase tracking-widest">
                All Nodes Operational
              </span>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-[10px] font-black text-text-muted hover:text-blue-500 uppercase tracking-widest transition-colors"
            >
              Privacy Protocol
            </a>
            <a
              href="#"
              className="text-[10px] font-black text-text-muted hover:text-blue-500 uppercase tracking-widest transition-colors"
            >
              Legal Terms
            </a>
            <div className="flex items-center gap-2 text-blue-500/50">
              <ShieldCheck size={16} />
              <span className="text-[9px] font-black uppercase tracking-widest">
                Encrypted Session
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

</code>

src\components\Navbar.jsx:
<code>
import React from "react";
import {
  Search,
  Settings,
  Bell,
  UserCircle,
  Menu,
  ChevronRight,
  LayoutGrid,
  Zap,
} from "lucide-react";

const Navbar = ({ activeScreen, setActiveScreen }) => {
  const getScreenTitle = () => {
    const titles = {
      Financial: "Financial Performance",
      Staff: "Personnel Management",
      Parts: "Inventory Logistics",
      Purchases: "Procurement Pipeline",
      Vendors: "Vendor Ecosystem",
      Registration: "Customer Onboarding",
      SalesInvoice: "Point of Sale",
      CustomerSearch: "Intelligence Lookup",
      CustomerDetails: "Profile Analysis",
      CustomerReports: "Strategic Insights",
      EmailInvoice: "Digital Transmission",
      CustomerDash: "Performance Overview",
      Marketplace: "Asset Marketplace",
      History: "Service Logbook",
      Appointments: "Scheduling Hub",
      Profile: "Account Security",
      Settings: "System Configuration",
      Notifications: "Alert Center",
      AssetDetails: "Asset Exploration",
    };
    return titles[activeScreen] || "System Module";
  };

  return (
    <nav className="h-[100px] flex items-center justify-between px-12 bg-white/80 backdrop-blur-xl border-b border-black/5 sticky top-0 z-[900] font-roboto">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-1">
          <p className="text-[9px] font-bold text-[#7a7a7a] uppercase tracking-[0.3em] m-0">
            AutoPart OS
          </p>
          <ChevronRight size={10} className="text-[#7a7a7a]" />
          <p className="text-[9px] font-bold text-[#111111] bg-[#fcd20b] px-2 py-0.5 rounded uppercase tracking-[0.2em] m-0">
            {activeScreen}
          </p>
        </div>
        <h1 className="text-2xl font-bold text-[#111111] m-0 tracking-tighter font-oswald italic uppercase leading-none mt-1">
          {getScreenTitle()}
        </h1>
      </div>

      <div className="flex items-center gap-8">
        <div className="relative group">
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#111111]/40 group-focus-within:text-[#111111] transition-colors">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Scan System Database..."
            className="w-72 pl-14 pr-6 py-3.5 rounded-full border-2 border-black/5 text-xs font-bold text-[#111111] outline-none bg-[#f8f8f8] focus:bg-white focus:border-[#fcd20b] transition-all placeholder:text-[#7a7a7a]/50"
          />
        </div>

        <div className="flex items-center gap-2 border-l border-black/5 pl-8">
          <button
            className="p-3 rounded-full text-[#111111]/60 hover:text-[#111111] hover:bg-[#fcd20b]/10 transition-all relative"
            onClick={() => setActiveScreen("Notifications")}
          >
            <Bell size={20} />
            <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white shadow-sm"></span>
          </button>

          <button
            className="p-3 rounded-full text-[#111111]/60 hover:text-[#111111] hover:bg-[#fcd20b]/10 transition-all"
            onClick={() => setActiveScreen("Settings")}
          >
            <Settings size={20} />
          </button>

          <button
            className="flex items-center gap-4 ml-4 group"
            onClick={() => setActiveScreen("Profile")}
          >
            <div className="w-12 h-12 rounded-full bg-[#f8f8f8] flex items-center justify-center text-[#111111]/40 border-2 border-black/5 group-hover:bg-[#fcd20b] group-hover:text-[#111111] group-hover:border-[#fcd20b] transition-all shadow-sm overflow-hidden">
              <UserCircle size={28} />
            </div>
            <div className="hidden xl:block text-left">
              <p className="text-[9px] font-bold text-[#7a7a7a] uppercase tracking-widest m-0 leading-none mb-1 font-oswald">
                Operator
              </p>
              <p className="text-xs font-bold text-[#111111] m-0 leading-none">
                SECURE SESSION
              </p>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

</code>

src\components\Pagination.jsx:
<code>
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ totalItems = 0, itemsPerPage = 10, currentPage = 1 }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 24px",
        borderTop: "1px solid var(--color-border)",
        backgroundColor: "var(--color-bg-card)",
        borderRadius: "0 0 var(--radius-md) var(--radius-md)",
      }}
    >
      <p style={{ fontSize: "13px", color: "var(--color-text-muted)" }}>
        Showing{" "}
        <span style={{ fontWeight: "600", color: "var(--color-text-main)" }}>
          1
        </span>{" "}
        to{" "}
        <span style={{ fontWeight: "600", color: "var(--color-text-main)" }}>
          {Math.min(itemsPerPage, totalItems)}
        </span>{" "}
        of{" "}
        <span style={{ fontWeight: "600", color: "var(--color-text-main)" }}>
          {totalItems}
        </span>{" "}
        results
      </p>

      <div style={{ display: "flex", gap: "8px" }}>
        <button
          className="btn btn-secondary"
          style={{
            padding: "6px 12px",
            opacity: currentPage === 1 ? 0.5 : 1,
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
          }}
        >
          <ChevronLeft size={16} />
          Previous
        </button>

        <div style={{ display: "flex", gap: "4px" }}>
          {Array.from({ length: Math.min(totalPages, 3) }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "6px",
                border: "1px solid var(--color-border)",
                backgroundColor:
                  page === currentPage ? "var(--color-primary)" : "white",
                color:
                  page === currentPage ? "white" : "var(--color-text-main)",
                fontSize: "13px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          className="btn btn-secondary"
          style={{
            padding: "6px 12px",
            opacity: currentPage >= totalPages ? 0.5 : 1,
            cursor: currentPage >= totalPages ? "not-allowed" : "pointer",
          }}
        >
          Next
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

</code>

src\components\Sidebar.jsx:
<code>
import React from "react";
import {
  Home,
  Users,
  Settings,
  Package,
  Truck,
  UserPlus,
  ShoppingCart,
  Search,
  User,
  Clock,
  Calendar,
  LogOut,
  BarChart,
  Mail,
  ClipboardList,
  ShoppingBag,
  Zap,
  Shield,
  Activity,
  UserCircle2,
} from "lucide-react";

const Sidebar = ({ activeScreen, setActiveScreen, userRole, onLogout }) => {
  const normalizedRole = userRole?.toLowerCase();

  const getRoleInfo = () => {
    switch (normalizedRole) {
      case "admin":
        return {
          label: "ADMIN CONTROL",
          color: "text-[#fcd20b]",
          bg: "bg-[#fcd20b]/10",
          icon: Shield,
        };
      case "staff":
        return {
          label: "STAFF PORTAL",
          color: "text-[#fcd20b]",
          bg: "bg-[#fcd20b]/10",
          icon: Activity,
        };
      case "customer":
        return {
          label: "CUSTOMER HUB",
          color: "text-[#fcd20b]",
          bg: "bg-[#fcd20b]/10",
          icon: UserCircle2,
        };
      default:
        return {
          label: "SYSTEM ACCESS",
          color: "text-slate-400",
          bg: "bg-slate-400/10",
          icon: Zap,
        };
    }
  };

  const roleInfo = getRoleInfo();

  const adminLinks = [
    { id: "Financial", label: "Financial Reports", icon: Home },
    { id: "Staff", label: "Staff Management", icon: Users },
    { id: "Parts", label: "Inventory", icon: Package },
    { id: "Purchases", label: "Procurement", icon: Truck },
    { id: "Vendors", label: "Suppliers", icon: Settings },
  ];

  const staffLinks = [
    { id: "Registration", label: "Register Customer", icon: UserPlus },
    { id: "SalesInvoice", label: "POS Terminal", icon: ShoppingCart },
    { id: "CustomerSearch", label: "Customer Search", icon: Search },
    { id: "CustomerDetails", label: "Customer Profiles", icon: ClipboardList },
    { id: "CustomerReports", label: "Sales Reports", icon: BarChart },
    { id: "EmailInvoice", label: "Email Invoice", icon: Mail },
  ];

  const NavItem = ({ id, label, icon: Icon }) => (
    <div
      className={`group flex items-center gap-4 mx-4 my-1 px-6 py-4 rounded-full cursor-pointer transition-all duration-300 relative overflow-hidden ${
        activeScreen === id
          ? "bg-[#fcd20b] text-[#111111] shadow-xl scale-105 z-10"
          : "text-white/60 hover:text-[#fcd20b] hover:bg-white/5"
      }`}
      onClick={() => setActiveScreen(id)}
    >
      <Icon
        size={18}
        className={`${activeScreen === id ? "text-[#111111]" : "group-hover:scale-110 transition-transform"}`}
      />
      <span className="text-[11px] font-bold uppercase tracking-[0.15em] font-oswald">
        {label}
      </span>
      {activeScreen === id && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#111111]"></div>
      )}
    </div>
  );

  return (
    <div className="w-[300px] h-screen bg-[#111111] fixed left-0 top-0 flex flex-col py-10 z-[1000] border-r border-white/5 font-roboto">
      {/* Brand Header */}
      <div className="px-10 mb-12">
        <div className="flex flex-col gap-1 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-[#fcd20b] flex items-center justify-center text-[#111111] shadow-lg shadow-[#fcd20b]/20">
              <Package size={24} />
            </div>
            <div>
              <h3 className="text-white text-xl font-bold tracking-tighter m-0 font-oswald italic">
                VEHICLE <span className="text-[#fcd20b]">PARTS</span>
              </h3>
              <p className="text-[9px] text-white/40 font-black tracking-widest uppercase">
                Premium Management
              </p>
            </div>
          </div>
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl ${roleInfo.bg} ${roleInfo.color} border border-[#fcd20b]/20`}
          >
            <roleInfo.icon size={14} />
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] font-oswald">
              {roleInfo.label}
            </span>
          </div>
        </div>
      </div>

      <div className="overflow-y-auto flex-1 px-2 space-y-1 scrollbar-hide">
        {normalizedRole === "admin" &&
          adminLinks.map((link) => <NavItem key={link.id} {...link} />)}
        {normalizedRole === "staff" &&
          staffLinks.map((link) => <NavItem key={link.id} {...link} />)}
        {normalizedRole === "customer" && (
          <>
            <NavItem id="CustomerDash" label="My Dashboard" icon={Home} />
            <NavItem id="Marketplace" label="Marketplace" icon={ShoppingBag} />
            <NavItem id="History" label="Purchase History" icon={Clock} />
            <NavItem id="Appointments" label="Appointments" icon={Calendar} />
          </>
        )}
      </div>

      <div className="px-8 mt-auto pt-8">
        <div
          className="p-1 rounded-2xl bg-white/5 border border-white/5 mb-6 group cursor-pointer hover:bg-white/10 transition-all"
          onClick={() => setActiveScreen("Profile")}
        >
          <div className="flex items-center gap-4 p-3">
            <div className="w-11 h-11 rounded-xl bg-[#fcd20b] flex items-center justify-center text-[#111111] font-bold text-sm shadow-lg">
              {userRole[0].toUpperCase()}
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-bold text-white uppercase tracking-widest m-0 font-oswald">
                Admin Portal
              </p>
              <p className="text-[9px] text-white/40 m-0 font-bold tracking-tight">
                System Operator
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onLogout}
          className="w-full py-5 bg-[#fcd20b] text-[#111111] border-none rounded-full flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] cursor-pointer hover:bg-white transition-all shadow-xl font-oswald transform active:scale-95"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

</code>

src\pages\admin\FinancialDashboard.jsx:
<code>
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
  vendorService,
  partsService,
  reportService,
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
    monthlyRevenue: 0,
    yearlyRevenue: 0,
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
      const [summaryRes, salesRes, vendorRes, partsRes] = await Promise.all([
        reportService.getFinancialSummary(),
        salesService.getAllInvoices(),
        vendorService.getAll(),
        partsService.getAll(),
      ]);

      const sales = salesRes.data;
      const summary = summaryRes.data || {};
      const inventoryValue = partsRes.data.reduce(
        (acc, p) => acc + p.sellingPrice * p.stockQuantity,
        0,
      );

      setStats({
        dailyRevenue: summary.daily?.totalRevenue || 0,
        monthlyRevenue: summary.monthly?.totalRevenue || 0,
        yearlyRevenue: summary.yearly?.totalRevenue || 0,
        newOrders: summary.monthly?.totalSalesCount || sales.length,
        activeVendors: vendorRes.data.length,
        inventoryValue: inventoryValue,
        recentTransactions: sales.slice(0, 5).map((s) => ({
          id: `#INV-${s.salesInvoiceID}`,
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
            FINANCIAL <span className="text-[#fcd20b]">REPORTS</span>
          </h2>
          <p className="text-[#7a7a7a] text-sm font-medium mt-2 uppercase tracking-widest italic">
            Overview of revenue, order history, and asset valuations
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-8 py-4 rounded-full border-2 border-black/5 bg-white text-[#111111] text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-[#fcd20b] hover:border-[#fcd20b] transition-all shadow-sm font-oswald">
            <Calendar size={16} /> DATA CYCLE: 30 DAYS
          </button>
          <button className="px-8 py-4 rounded-full bg-[#111111] text-[#fcd20b] text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-black shadow-2xl transition-all transform active:scale-95 font-oswald">
            <Download size={16} /> EXPORT TRANSACTION LOG
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
          title="MONTHLY REVENUE"
          value={`$${stats.monthlyRevenue.toLocaleString()}`}
          change="+12.8%"
          isPositive={true}
          icon={ShoppingBag}
        />
        <StatCard
          title="YEARLY REVENUE"
          value={`$${stats.yearlyRevenue.toLocaleString()}`}
          change="+5.4%"
          isPositive={true}
          icon={TrendingUp}
        />
        <StatCard
          title="MONTHLY ORDERS"
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
            REVENUE <span className="text-[#fcd20b]">METRICS</span>
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

</code>

src\pages\admin\PartsManagement.jsx:
<code>
import React, { useState, useEffect } from "react";
import {
  Plus,
  Search,
  Filter,
  Edit2,
  Trash2,
  Eye,
  Image as ImageIcon,
  Upload,
  AlertCircle,
  Package,
  TrendingDown,
  DollarSign,
  ArrowRight,
  MoreVertical,
  Download,
  Box,
  X,
  Loader2,
  ChevronRight,
  Zap,
  Truck,
} from "lucide-react";
import Pagination from "../../components/Pagination";
import { partsService, vendorService } from "../../services/api";

const InventoryStat = ({ title, value, icon: Icon }) => (
  <div className="bg-white rounded-[30px] p-8 shadow-xl border border-black/5 transition-all hover:-translate-y-1 duration-500 group overflow-hidden relative">
    <div className="absolute -right-4 -bottom-4 text-black/5 group-hover:text-[#fcd20b]/10 transition-colors">
      <Icon size={100} />
    </div>
    <div className="flex items-center gap-6 relative z-10">
      <div className="w-16 h-16 rounded-2xl bg-[#111111] text-[#fcd20b] flex items-center justify-center group-hover:bg-[#fcd20b] group-hover:text-[#111111] transition-all duration-500 shadow-lg">
        <Icon size={28} />
      </div>
      <div>
        <p className="m-0 text-[10px] font-bold text-[#7a7a7a] uppercase tracking-[0.2em] font-oswald italic mb-1">
          {title}
        </p>
        <h4 className="m-0 text-3xl font-bold text-[#111111] font-oswald italic uppercase tracking-tighter leading-none">
          {value}
        </h4>
      </div>
    </div>
  </div>
);

const PartsManagement = () => {
  const [parts, setParts] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingPartId, setEditingPartId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    PartName: "",
    Category: "Engine Components",
    SellingPrice: 0,
    CostPrice: 0,
    StockQuantity: 0,
    ReorderLevel: 10,
    VendorID: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [partsRes, vendorsRes] = await Promise.all([
        partsService.getAll(),
        vendorService.getAll(),
      ]);
      setParts(partsRes.data);
      setVendors(vendorsRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "number" ? parseFloat(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.VendorID)
      return alert("Please select a strategic vendor partner.");

    try {
      const submissionData = {
        ...formData,
        PartID: editingPartId || 0,
        VendorID: parseInt(formData.VendorID),
      };
      if (editingPartId) {
        await partsService.update(editingPartId, submissionData);
      } else {
        await partsService.create(submissionData);
      }
      setShowAddForm(false);
      setEditingPartId(null);
      fetchData();
      setFormData({
        PartName: "",
        Category: "Engine Components",
        SellingPrice: 0,
        CostPrice: 0,
        StockQuantity: 0,
        ReorderLevel: 10,
        VendorID: "",
      });
    } catch (error) {
      const errorMsg = error.response?.data?.errors
        ? Object.values(error.response.data.errors).flat().join("\n")
        : "Critical system failure during asset registration.";
      alert("Validation Error:\n" + errorMsg);
    }
  };

  const resetForm = () => {
    setEditingPartId(null);
    setShowAddForm(false);
    setFormData({
      PartName: "",
      Category: "Engine Components",
      SellingPrice: 0,
      CostPrice: 0,
      StockQuantity: 0,
      ReorderLevel: 10,
      VendorID: "",
    });
  };

  const handleEdit = (part) => {
    setEditingPartId(part.partID);
    setFormData({
      PartName: part.partName || "",
      Category: part.category || "Engine Components",
      SellingPrice: part.sellingPrice || 0,
      CostPrice: part.costPrice || 0,
      StockQuantity: part.stockQuantity || 0,
      ReorderLevel: part.reorderLevel || 10,
      VendorID: String(part.vendorID || ""),
    });
    setShowAddForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this part?")) {
      try {
        await partsService.delete(id);
        fetchData();
      } catch (error) {
        alert("Error deleting part");
      }
    }
  };

  const filteredParts = parts.filter(
    (p) =>
      (p.partName || p.PartName)
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      (p.category || p.Category)
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()),
  );

  const lowStockCount = parts.filter(
    (p) => p.stockQuantity <= (p.reorderLevel || p.ReorderLevel || 10),
  ).length;
  const totalValue = parts.reduce(
    (acc, curr) =>
      acc + (curr.sellingPrice || curr.SellingPrice) * curr.stockQuantity,
    0,
  );

  return (
    <div className="pb-20 font-roboto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 animate-xtra">
        <div>
          <h2 className="text-5xl font-bold text-[#111111] m-0 tracking-tighter font-oswald italic uppercase leading-none mb-2">
            INVENTORY <span className="text-[#fcd20b]">MANAGEMENT</span>
          </h2>
          <p className="text-[#7a7a7a] text-sm font-medium uppercase tracking-widest italic">
            Monitor stock levels, reorder values, and part pricing
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-8 py-4 rounded-full border-2 border-black/5 bg-white text-[#111111] text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-[#fcd20b] hover:border-[#fcd20b] transition-all shadow-sm font-oswald">
            <Download size={16} /> EXPORT CATALOG
          </button>
          <button
            className={`px-10 py-4 rounded-full font-oswald font-bold uppercase tracking-widest text-[10px] flex items-center gap-3 transition-all shadow-2xl transform active:scale-95 ${showAddForm ? "bg-[#111111] text-white hover:bg-black" : "bg-[#fcd20b] text-[#111111] hover:bg-[#111111] hover:text-[#fcd20b]"}`}
            onClick={() => (showAddForm ? resetForm() : setShowAddForm(true))}
          >
            {showAddForm ? <X size={20} /> : <Plus size={20} />}
            {showAddForm ? "CLOSE FORM" : "ADD NEW PART"}
          </button>
        </div>
      </div>

      {/* Quick Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 animate-xtra">
        <InventoryStat title="TOTAL SKUS" value={parts.length} icon={Box} />
        <InventoryStat
          title="LOW STOCK"
          value={lowStockCount}
          icon={AlertCircle}
        />
        <InventoryStat
          title="CATALOG VALUE"
          value={`$${totalValue.toLocaleString()}`}
          icon={DollarSign}
        />
        <InventoryStat title="TURNOVER RATE" value="78%" icon={Package} />
      </div>

      {showAddForm && (
        <div className="bg-white rounded-[40px] shadow-2xl border border-black/5 mb-16 overflow-hidden animate-xtra">
          <div className="bg-[#111111] p-10 flex justify-between items-center text-white">
            <h3 className="font-bold m-0 font-oswald italic uppercase tracking-tighter text-2xl flex items-center gap-4">
              <Zap size={24} className="text-[#fcd20b]" />
              {editingPartId ? "UPDATE" : "INITIALIZE"}{" "}
              <span className="text-[#fcd20b]">PRODUCT</span>
            </h3>
            <button
              onClick={resetForm}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-rose-500 transition-all"
            >
              <X size={20} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <div className="h-full border-4 border-dashed border-black/5 rounded-[30px] flex flex-col items-center justify-center bg-[#f8f8f8] hover:bg-white hover:border-[#fcd20b] transition-all cursor-pointer group p-10">
                  <div className="w-20 h-20 rounded-[24px] bg-white shadow-md flex items-center justify-center text-[#111111]/30 group-hover:bg-[#fcd20b] group-hover:text-[#111111] transition-all duration-500">
                    <Upload size={36} />
                  </div>
                  <p className="text-[11px] font-bold text-[#7a7a7a] mt-6 tracking-[0.2em] uppercase text-center font-oswald">
                    UPLOAD ASSET PHOTO
                  </p>
                  <p className="text-[9px] text-[#7a7a7a]/40 mt-1 font-bold uppercase">
                    PNG, JPG · MAX 10MB
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                    Part Nomenclature
                  </label>
                  <input
                    type="text"
                    name="PartName"
                    value={formData.PartName}
                    onChange={handleChange}
                    required
                    placeholder="V8 FUEL INJECTOR"
                    className="w-full px-6 py-4 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                    Strategic Vendor Partner
                  </label>
                  <select
                    name="VendorID"
                    value={formData.VendorID}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] appearance-none cursor-pointer"
                  >
                    <option value="">SELECT VENDOR NODE</option>
                    {vendors.map((v) => (
                      <option key={v.vendorID} value={v.vendorID}>
                        {v.vendorName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                    Unit Cost Price ($)
                  </label>
                  <input
                    type="number"
                    name="CostPrice"
                    value={formData.CostPrice}
                    onChange={handleChange}
                    required
                    placeholder="0.00"
                    className="w-full px-6 py-4 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                    Unit Selling Price ($)
                  </label>
                  <input
                    type="number"
                    name="SellingPrice"
                    value={formData.SellingPrice}
                    onChange={handleChange}
                    required
                    placeholder="0.00"
                    className="w-full px-6 py-4 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                    Inventory Category
                  </label>
                  <select
                    name="Category"
                    value={formData.Category}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] appearance-none cursor-pointer"
                  >
                    <option>Engine Components</option>
                    <option>Braking Systems</option>
                    <option>Electrical</option>
                    <option>Body & Trim</option>
                    <option>Suspension</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                      Current Stock
                    </label>
                    <input
                      type="number"
                      name="StockQuantity"
                      value={formData.StockQuantity}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                      Reorder Level
                    </label>
                    <input
                      type="number"
                      name="ReorderLevel"
                      value={formData.ReorderLevel}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-5 mt-12 border-t border-black/5 pt-10">
              <button
                type="button"
                onClick={resetForm}
                className="px-10 py-4 rounded-full bg-[#f8f8f8] text-[#7a7a7a] font-bold text-[10px] uppercase tracking-widest hover:bg-[#111111] hover:text-white transition-all font-oswald"
              >
                DISCARD CHANGES
              </button>
              <button
                type="submit"
                className="px-12 py-4 rounded-full bg-[#fcd20b] text-[#111111] font-bold text-[10px] uppercase tracking-widest shadow-xl shadow-[#fcd20b]/20 hover:bg-[#111111] hover:text-[#fcd20b] transition-all active:scale-95 font-oswald italic"
              >
                {editingPartId ? "UPDATE CATALOG ITEM" : "PUBLISH TO CATALOG"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Main Catalog Card */}
      <div
        className="bg-white rounded-[40px] shadow-2xl border border-black/5 overflow-hidden animate-xtra"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="bg-[#111111] p-10 flex flex-col sm:flex-row justify-between items-center gap-6 text-white">
          <h4 className="font-bold m-0 font-oswald italic uppercase tracking-tighter text-xl">
            LIVE PRODUCT <span className="text-[#fcd20b]">CATALOG</span>
          </h4>
          <div className="bg-white/5 rounded-full px-8 py-3 flex items-center gap-4 border border-white/10 w-full sm:w-80 focus-within:bg-white focus-within:border-[#fcd20b] transition-all group">
            <Search
              size={18}
              className="text-white/40 group-focus-within:text-[#111111]"
            />
            <input
              type="text"
              placeholder="SCAN CATALOG DATABASE..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none text-white text-[10px] font-bold outline-none w-full placeholder:text-white/20 group-focus-within:text-[#111111]"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#f8f8f8]">
                <th className="pl-10 py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 tracking-[0.2em] font-oswald italic">
                  Part Name
                </th>
                <th className="py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 tracking-[0.2em] font-oswald italic">
                  Category
                </th>
                <th className="py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 tracking-[0.2em] font-oswald italic">
                  Stock Status
                </th>
                <th className="py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 tracking-[0.2em] font-oswald italic">
                  Unit Price
                </th>
                <th className="pr-10 py-6 text-right text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 tracking-[0.2em] font-oswald italic">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="py-24 text-center">
                    <Loader2
                      size={40}
                      className="animate-spin mx-auto mb-4 text-[#fcd20b]"
                    />
                    <p className="font-bold font-oswald uppercase tracking-widest text-[#7a7a7a] text-[10px]">
                      Loading Parts Inventory...
                    </p>
                  </td>
                </tr>
              ) : filteredParts.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-24 text-center">
                    <p className="font-bold font-oswald uppercase tracking-widest text-[#7a7a7a] text-[10px]">
                      NO PARTS DETECTED IN INVENTORY
                    </p>
                  </td>
                </tr>
              ) : (
                filteredParts.map((item) => (
                  <tr
                    key={item.partID}
                    className="group hover:bg-[#f8f8f8] transition-all duration-300"
                  >
                    <td className="pl-10 py-8 border-b border-black/5">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-[20px] bg-[#f8f8f8] border border-black/5 flex items-center justify-center text-[#111111]/30 shadow-sm group-hover:scale-110 group-hover:bg-[#fcd20b] group-hover:text-[#111111] transition-all duration-500">
                          <ImageIcon size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-lg text-[#111111] m-0 leading-none mb-2 font-oswald italic uppercase tracking-tighter">
                            {item.partName || item.PartName}
                          </p>
                          <p className="text-[10px] text-[#7a7a7a] font-bold uppercase tracking-widest">
                            SKU: {item.partID.toString().padStart(6, "0")}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-8 border-b border-black/5">
                      <span className="text-[9px] font-bold text-[#111111] bg-[#fcd20b] px-4 py-1.5 rounded-full tracking-widest uppercase font-oswald">
                        {item.category || item.Category}
                      </span>
                    </td>
                    <td className="py-8 border-b border-black/5">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full shadow-sm ${item.stockQuantity <= (item.reorderLevel || item.ReorderLevel || 10) ? "bg-rose-500 animate-pulse" : "bg-emerald-500"}`}
                          ></div>
                          <span
                            className={`text-[10px] font-bold uppercase tracking-widest font-oswald ${item.stockQuantity <= (item.reorderLevel || item.ReorderLevel || 10) ? "text-rose-600" : "text-emerald-600"}`}
                          >
                            {item.stockQuantity <=
                            (item.reorderLevel || item.ReorderLevel || 10)
                              ? "CRITICAL LEVEL"
                              : "STOCK OPTIMAL"}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#7a7a7a] m-0 font-bold tracking-tighter uppercase font-oswald italic">
                          {item.stockQuantity} UNITS AVAILABLE
                        </p>
                      </div>
                    </td>
                    <td className="py-8 border-b border-black/5">
                      <p className="text-xl font-bold m-0 text-[#111111] tracking-tighter font-oswald italic">
                        $
                        {(item.sellingPrice || item.SellingPrice || 0).toFixed(
                          2,
                        )}
                      </p>
                    </td>
                    <td className="pr-10 py-8 border-b border-black/5 text-right">
                      <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                        <button
                          onClick={() => handleEdit(item)}
                          className="w-10 h-10 rounded-xl bg-white text-[#111111] hover:bg-[#111111] hover:text-[#fcd20b] border border-black/5 transition-all shadow-sm flex items-center justify-center"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(item.partID)}
                          className="w-10 h-10 rounded-xl bg-white text-rose-500 hover:bg-rose-500 hover:text-white border border-black/5 transition-all shadow-sm flex items-center justify-center"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="p-8 bg-[#f8f8f8]/50 flex justify-center">
          <Pagination
            totalItems={parts.length}
            itemsPerPage={10}
            currentPage={1}
          />
        </div>
      </div>
    </div>
  );
};

export default PartsManagement;

</code>

src\pages\admin\PurchaseInvoice.jsx:
<code>
import React, { useState, useEffect } from "react";
import {
  FileCheck,
  Download,
  Search,
  MoreVertical,
  Truck,
  ArrowUpRight,
  ArrowDownLeft,
  Calendar,
  ShieldCheck,
  Briefcase,
  Filter,
  RefreshCw,
  Box,
  X,
  Plus,
  Loader2,
  Save,
  Send,
  Trash2,
  ChevronRight,
} from "lucide-react";
import Pagination from "../../components/Pagination";
import {
  purchasesService,
  vendorService,
  partsService,
} from "../../services/api";

const ProcureStat = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col gap-3 transition-all hover:scale-[1.02] duration-300 border border-slate-100 group">
    <div
      className="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300"
      style={{ backgroundColor: `${color}15`, color: color }}
    >
      <Icon size={24} />
    </div>
    <div>
      <h3 className="m-0 text-2xl font-black text-slate-900 leading-tight tracking-tight">
        {value}
      </h3>
      <p className="m-0 text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">
        {title}
      </p>
    </div>
  </div>
);

const PurchaseInvoice = () => {
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [vendors, setVendors] = useState([]);
  const [parts, setParts] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [purchaseItems, setPurchaseItems] = useState([]);
  const [vendorSearch, setVendorSearch] = useState("");
  const [partSearch, setPartSearch] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (selectedVendor) {
      const vendorParts = parts
        .filter((p) => p.vendorID === selectedVendor.vendorID)
        .map((p) => ({
          partID: p.partID,
          partName: p.partName,
          unitPrice: p.costPrice || 0,
          quantity: 0,
        }));
      setPurchaseItems(vendorParts);
    } else {
      setPurchaseItems([]);
    }
  }, [selectedVendor, parts]);

  const loadData = async () => {
    try {
      const [venRes, partRes, purRes] = await Promise.all([
        vendorService.getAll(),
        partsService.getAll(),
        purchasesService.getAll(),
      ]);
      setVendors(venRes.data);
      setParts(partRes.data);
      setPurchases(purRes.data);
    } catch (error) {
      console.error("Error loading procurement data:", error);
    } finally {
      setFetching(false);
    }
  };

  const removeItem = (partID) => {
    updateItem(partID, "quantity", 0);
  };

  const updateItem = (partID, field, value) => {
    setPurchaseItems(
      purchaseItems.map((item) =>
        item.partID === partID ? { ...item, [field]: value } : item,
      ),
    );
  };

  const totalAmount = purchaseItems.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0,
  );

  const handleSubmit = async () => {
    if (!selectedVendor) return alert("Please select a supplier");
    const activeItems = purchaseItems.filter((item) => item.quantity > 0);
    if (activeItems.length === 0)
      return alert("No parts selected for purchase");

    setLoading(true);
    try {
      const purchaseData = {
        vendorId: selectedVendor.vendorID,
        items: activeItems.map((item) => ({
          partId: item.partID,
          quantity: item.quantity,
          unitCost: Number(item.unitPrice),
        })),
      };
      await purchasesService.create(purchaseData);
      alert("Purchase order placed successfully");
      setPurchaseItems([]);
      setSelectedVendor(null);
      loadData();
    } catch (error) {
      alert("Purchase order submission failed");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <Loader2 size={48} className="text-blue-600 animate-spin mb-4" />
        <p className="text-slate-500 font-black tracking-widest uppercase text-xs animate-pulse">
          Establishing Supply Chain Connection...
        </p>
      </div>
    );
  }

  return (
    <div className="pb-10 font-inter">
      {/* Strategic Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h2 className="text-3xl font-black text-slate-900 m-0 leading-tight tracking-tight">
            Procurement Intelligence
          </h2>
          <p className="text-slate-500 text-sm font-medium mt-1">
            Analyze inbound supply chains, verify vendor invoicing, and manage
            inventory valuation.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={loadData}
            className="px-5 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-slate-50 shadow-sm transition-all active:scale-95"
          >
            <RefreshCw size={16} /> Sync ERP
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-8 py-3 rounded-2xl bg-slate-900 text-white text-xs font-black uppercase tracking-widest flex items-center gap-3 hover:bg-black shadow-xl transition-all transform active:scale-95 disabled:opacity-50"
          >
            {loading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <FileCheck size={18} />
            )}
            {loading ? "Submitting..." : "Submit Purchase Order"}
          </button>
        </div>
      </div>

      {/* Procurement Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <ProcureStat
          title="Purchase Orders"
          value={purchases.length}
          icon={Briefcase}
          color="#1A73E8"
        />
        <ProcureStat
          title="Vendor Network"
          value={vendors.length}
          icon={Truck}
          color="#FB8C00"
        />
        <ProcureStat
          title="Procured (MTD)"
          value={`$${Math.round(purchases.reduce((acc, p) => acc + (p.totalCost || p.totalAmount || 0), 0) / 1000)}k`}
          icon={ArrowUpRight}
          color="#D81B60"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-10">
          {/* Active Item Builder */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col min-h-[500px]">
            <div className="bg-slate-900 p-6 flex justify-between items-center text-white">
              <h4 className="m-0 font-bold flex items-center gap-2 uppercase tracking-widest text-[10px]">
                <Box size={16} className="text-blue-400" />
                Inbound Stock Reconciliation
              </h4>
              <div className="relative w-64 group">
                <Search
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400"
                />
                <input
                  type="text"
                  placeholder={
                    selectedVendor
                      ? "Search Parts..."
                      : "Select Supplier First..."
                  }
                  disabled={!selectedVendor}
                  className="w-full bg-white/10 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-[10px] text-white outline-none focus:bg-white/20 transition-all uppercase font-bold disabled:opacity-50"
                  value={partSearch}
                  onChange={(e) => setPartSearch(e.target.value)}
                />

              </div>
            </div>

            <div className="flex-1">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="pl-8 py-4 text-[10px] uppercase text-slate-500 font-black border-b border-slate-100 tracking-widest">
                      Part Details
                    </th>
                    <th className="py-4 text-[10px] uppercase text-slate-500 font-black border-b border-slate-100 tracking-widest">
                      Cost/Unit
                    </th>
                    <th className="py-4 text-[10px] uppercase text-slate-500 font-black border-b border-slate-100 tracking-widest">
                      Qty
                    </th>
                    <th className="py-4 text-[10px] uppercase text-slate-500 font-black border-b border-slate-100 tracking-widest">
                      Total Cost
                    </th>
                    <th className="pr-8 py-4 border-b border-slate-100"></th>
                  </tr>
                </thead>
                <tbody>
                  {purchaseItems.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="py-24 text-center">
                        <Box
                          size={48}
                          className="mx-auto text-slate-100 mb-4"
                        />
                        <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">
                          {selectedVendor
                            ? "No parts found in vendor catalog"
                            : "Select supplier to load parts catalog"}
                        </p>
                      </td>
                    </tr>
                  ) : (
                    (() => {
                      const filtered = purchaseItems.filter((item) =>
                        item.partName
                          .toLowerCase()
                          .includes(partSearch.toLowerCase())
                      );
                      if (filtered.length === 0) {
                        return (
                          <tr>
                            <td colSpan="5" className="py-12 text-center text-slate-400 text-xs font-bold uppercase tracking-wider">
                              No matching parts found
                            </td>
                          </tr>
                        );
                      }
                      return filtered.map((item) => (
                        <tr
                          key={item.partID}
                          className={`group hover:bg-slate-50 transition-colors ${item.quantity > 0 ? "bg-blue-50/20" : ""}`}
                        >
                          <td className="pl-8 py-5 border-b border-slate-100">
                            <div>
                              <p className="font-bold text-sm m-0 text-slate-900 tracking-tight leading-none mb-1">
                                {item.partName}
                              </p>
                              <p className="text-[9px] text-slate-400 m-0 font-black uppercase tracking-widest">
                                ID: PRT-{item.partID}
                              </p>
                            </div>
                          </td>
                          <td className="py-5 border-b border-slate-100">
                            <div className="flex items-center gap-1">
                              <span className="text-slate-400 font-bold">$</span>
                              <input
                                type="number"
                                value={item.unitPrice}
                                onChange={(e) =>
                                  updateItem(
                                    item.partID,
                                    "unitPrice",
                                    Number(e.target.value)
                                  )
                                }
                                className="w-20 bg-transparent border-none text-sm font-black text-slate-900 focus:ring-0 outline-none p-0"
                              />
                            </div>
                          </td>
                          <td className="py-5 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() =>
                                  updateItem(
                                    item.partID,
                                    "quantity",
                                    Math.max(0, item.quantity - 1)
                                  )
                                }
                                className="w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-blue-600 active:scale-95 transition-all text-sm font-bold shadow-sm"
                              >
                                -
                              </button>
                              <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) =>
                                  updateItem(
                                    item.partID,
                                    "quantity",
                                    Math.max(0, Number(e.target.value))
                                  )
                                }
                                className="w-10 bg-transparent border-none text-sm font-black text-slate-900 text-center focus:ring-0 outline-none p-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                              />
                              <button
                                onClick={() =>
                                  updateItem(
                                    item.partID,
                                    "quantity",
                                    item.quantity + 1
                                  )
                                }
                                className="w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-blue-600 active:scale-95 transition-all text-sm font-bold shadow-sm"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="py-5 border-b border-slate-100">
                            <p className="text-sm font-black text-blue-600 m-0 tracking-tight">
                              ${(item.unitPrice * item.quantity).toFixed(2)}
                            </p>
                          </td>
                          <td className="pr-8 py-5 border-b border-slate-100 text-right">
                            {item.quantity > 0 && (
                              <button
                                onClick={() => removeItem(item.partID)}
                                className="p-2 rounded-xl bg-white text-rose-400 hover:text-rose-600 hover:shadow-md border border-slate-100 transition-all"
                              >
                                <Trash2 size={16} />
                              </button>
                            )}
                          </td>
                        </tr>
                      ));
                    })()
                  )}
                </tbody>
              </table>
            </div>

            <div className="p-8 bg-slate-900 flex justify-between items-center text-white">
              <div>
                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">
                  Estimated Order Total
                </p>
                <h3 className="text-3xl font-black m-0 tracking-tighter">
                  $
                  {totalAmount.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}
                </h3>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                  Items Selected
                </p>
                <p className="text-xl font-black m-0">{purchaseItems.length}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {/* Vendor Intelligence Selector */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="bg-blue-600 p-6 text-white flex justify-between items-center">
              <h4 className="m-0 text-xs font-black uppercase tracking-widest">
                Supply Network
              </h4>
              <Truck size={18} className="text-white/60" />
            </div>
            <div className="p-8">
              {selectedVendor ? (
                <div className="animate-in fade-in slide-in-from-right-4 duration-300 p-5 rounded-3xl bg-slate-50 border border-slate-100 group relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600">
                      <Briefcase size={22} />
                    </div>
                    <div>
                      <h4 className="m-0 text-base font-black text-slate-900 tracking-tight">
                        {selectedVendor.vendorName}
                      </h4>
                      <p className="m-0 text-[9px] font-black text-slate-400 uppercase tracking-widest mt-0.5">
                        Partner #VEN-{selectedVendor.vendorID}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
                      <ShieldCheck size={14} className="text-slate-400" />
                      System Registered Partner
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedVendor(null)}
                    className="absolute top-4 right-4 text-slate-300 hover:text-rose-500"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <div className="relative group">
                    <Search
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      placeholder="Identify Strategic Partner..."
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 text-sm font-black text-slate-900 outline-none focus:bg-white focus:border-blue-500 transition-all"
                      value={vendorSearch}
                      onChange={(e) => setVendorSearch(e.target.value)}
                    />
                  </div>
                  <div className="max-h-64 overflow-y-auto space-y-2 pr-1">
                    {vendors
                      .filter((v) =>
                        v.vendorName
                          .toLowerCase()
                          .includes(vendorSearch.toLowerCase())
                      )
                      .map((vendor) => (
                        <div
                          key={vendor.vendorID}
                          onClick={() => {
                            setSelectedVendor(vendor);
                            setVendorSearch("");
                          }}
                          className="p-4 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-blue-50/50 hover:border-blue-200 cursor-pointer transition-all flex items-center justify-between group/item"
                        >
                          <div>
                            <p className="text-xs font-bold text-slate-900 m-0">
                              {vendor.vendorName}
                            </p>
                            <p className="text-[9px] text-slate-400 m-0 font-bold tracking-widest uppercase">
                              ID: V-{vendor.vendorID.toString().padStart(4, "0")}
                            </p>
                          </div>
                          <ChevronRight
                            size={16}
                            className="text-slate-300 group-hover/item:text-blue-500 group-hover/item:translate-x-1 transition-all"
                          />
                        </div>
                      ))}
                    {vendors.filter((v) =>
                      v.vendorName
                        .toLowerCase()
                        .includes(vendorSearch.toLowerCase())
                    ).length === 0 && (
                      <p className="text-slate-400 text-center text-xs py-4">
                        No partners match search
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl text-white p-8 shadow-xl relative overflow-hidden group">
            <div className="absolute -right-6 -bottom-6 text-white/5 group-hover:scale-110 transition-transform duration-700">
              <ShieldCheck size={120} />
            </div>
            <div className="relative z-10">
              <h4 className="m-0 text-[10px] font-black text-blue-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <ShieldCheck size={16} />
                Compliance Protocol
              </h4>
              <ul className="m-0 pl-0 space-y-4 list-none">
                {[
                  "Verify physical manifest arrival.",
                  "Audit unit cost against ERP base.",
                  "Finalize stock injection immediately.",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-xs font-bold text-slate-400 leading-relaxed group/item"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 group-hover/item:scale-150 transition-transform"></div>{" "}
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseInvoice;

</code>

src\pages\admin\StaffManagement.jsx:
<code>
import React, { useState, useEffect } from "react";
import {
  Users,
  Plus,
  Search,
  Filter,
  Edit2,
  Trash2,
  Shield,
  Mail,
  Phone,
  Calendar,
  MoreVertical,
  Activity,
  ShieldCheck,
  Clock,
  Award,
  UserPlus,
  X,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import Pagination from "../../components/Pagination";
import { staffService } from "../../services/api";

const PerformanceMetric = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col gap-4 transition-all hover:scale-[1.02] duration-300 border border-slate-100 group">
    <div
      className="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-sm"
      style={{ backgroundColor: `${color}15`, color: color }}
    >
      <Icon size={24} />
    </div>
    <div>
      <h4 className="m-0 text-3xl font-black text-slate-900 tracking-tighter leading-none">
        {value}
      </h4>
      <p className="m-0 text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">
        {title}
      </p>
    </div>
  </div>
);

const StaffManagement = () => {
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingStaffId, setEditingStaffId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    staffPosition: "Inventory Manager",
    role: "Staff",
  });

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      const response = await staffService.getAll();
      setStaffList(response.data);
    } catch (error) {
      console.error("Error fetching staff:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (editingStaffId) {
        await staffService.update(editingStaffId, {
          fullName: formData.fullName,
          phoneNumber: formData.phoneNumber,
          address: formData.address,
          staffPosition: formData.staffPosition,
          role: formData.role,
        });
      } else {
        await staffService.create(formData);
      }
      setSuccessMsg(
        editingStaffId
          ? "Personnel profile updated successfully."
          : "Personnel profile synchronized successfully.",
      );
      setTimeout(() => setSuccessMsg(""), 5000);
      resetForm();
      fetchStaff();
    } catch (error) {
      alert(error.response?.data || "Error creating staff");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setEditingStaffId(null);
    setShowAddForm(false);
    setFormData({
      fullName: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
      staffPosition: "Inventory Manager",
      role: "Staff",
    });
  };

  const handleEdit = (staff) => {
    setEditingStaffId(staff.id);
    setFormData({
      fullName: staff.fullName || "",
      email: staff.email || "",
      password: "",
      phoneNumber: staff.phoneNumber || "",
      address: staff.address || "",
      staffPosition: staff.staffPosition || "Inventory Manager",
      role: staff.role || "Staff",
    });
    setShowAddForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Initiate removal of this personnel record?")) {
      try {
        await staffService.delete(id);
        fetchStaff();
      } catch (error) {
        alert("Security violation: Error deleting staff");
      }
    }
  };

  const filteredStaff = staffList.filter(
    (s) =>
      s.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="pb-10 font-inter">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h2 className="text-3xl font-black text-slate-900 m-0 tracking-tight">
            Team Operations & Roles
          </h2>
          <p className="text-slate-500 text-sm font-medium mt-1">
            Oversee workforce permissions, track system activity, and manage
            credentials.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-slate-50 shadow-sm transition-all active:scale-95">
            <Activity size={16} /> Audit Logs
          </button>
          <button
            className="px-6 py-3 rounded-2xl bg-slate-900 text-white text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-black shadow-xl transition-all transform active:scale-95"
            onClick={() => (showAddForm ? resetForm() : setShowAddForm(true))}
          >
            {showAddForm ? <X size={18} /> : <UserPlus size={18} />}
            {showAddForm ? "Close Portal" : "Register Personnel"}
          </button>
        </div>
      </div>

      {successMsg && (
        <div className="mb-8 p-6 bg-emerald-50 border border-emerald-100 rounded-3xl flex items-center gap-4 text-emerald-700 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm">
            <CheckCircle2 size={24} />
          </div>
          <p className="font-bold text-sm m-0">{successMsg}</p>
        </div>
      )}

      {/* Team Health Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <PerformanceMetric
          title="Total Workforce"
          value={staffList.length}
          icon={Users}
          color="#1A73E8"
        />
        <PerformanceMetric
          title="Security Admins"
          value={staffList.filter((s) => s.role === "Admin").length}
          icon={ShieldCheck}
          color="#D81B60"
        />
        <PerformanceMetric
          title="Session Uptime"
          value="99.9%"
          icon={Clock}
          color="#43A047"
        />
        <PerformanceMetric
          title="Active Nodes"
          value={staffList.length}
          icon={Activity}
          color="#FB8C00"
        />
      </div>

      {showAddForm && (
        <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 mb-10 overflow-hidden animate-in slide-in-from-top-4 duration-500 relative">
          <div className="absolute top-0 right-0 p-8 text-slate-100">
            <Users size={120} />
          </div>
          <div className="bg-slate-900 p-8 flex justify-between items-center relative z-10">
            <div>
              <h3 className="text-white font-black m-0 flex items-center gap-3 uppercase tracking-widest text-xs">
                <UserPlus size={20} className="text-blue-400" />
              {editingStaffId ? "Update Personnel Profile" : "New Personnel Registration"}
              </h3>
              <p className="text-slate-400 text-[10px] font-bold mt-1 uppercase tracking-wider">
                Credential provisioning in progress
              </p>
            </div>
            <button
              onClick={resetForm}
              className="text-white/40 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-10 relative z-10 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block ml-1">
                  Full Legal Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Johnathan Doe"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-slate-900 outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block ml-1">
                  Corporate Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={Boolean(editingStaffId)}
                  placeholder="j.doe@autopart.corp"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-slate-900 outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all disabled:opacity-60"
                />
              </div>
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block ml-1">
                  Secure Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required={!editingStaffId}
                  disabled={Boolean(editingStaffId)}
                  placeholder="••••••••"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-slate-900 outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all disabled:opacity-60"
                />
              </div>
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block ml-1">
                  Assigned Position
                </label>
                <select
                  name="staffPosition"
                  value={formData.staffPosition}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-slate-900 outline-none focus:bg-white focus:border-blue-500 transition-all cursor-pointer appearance-none"
                >
                  <option>Systems Administrator</option>
                  <option>Inventory Manager</option>
                  <option>Senior Technician</option>
                  <option>Sales Associate</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block ml-1">
                  Access Privilege
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-slate-900 outline-none focus:bg-white focus:border-blue-500 transition-all cursor-pointer appearance-none"
                >
                  <option value="Staff">Standard Operator</option>
                  <option value="Admin">System Administrator</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block ml-1">
                  Contact Protocol
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+1 555-000-0000"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-slate-900 outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all"
                />
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-10">
              <button
                type="button"
                onClick={resetForm}
                className="px-8 py-4 rounded-2xl bg-slate-50 text-slate-600 font-bold text-xs uppercase tracking-widest hover:bg-slate-100 transition-colors"
              >
                Discard
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="px-10 py-4 rounded-2xl bg-blue-600 text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-95 disabled:opacity-50"
              >
                {submitting ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  editingStaffId ? "Save Changes" : "Finalize Registration"
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Main Staff Directory */}
      <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
        <div className="bg-slate-900 p-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <h4 className="text-white font-black m-0 uppercase tracking-widest text-xs">
              Personnel Archive
            </h4>
            <p className="text-slate-400 text-[10px] font-bold mt-1 uppercase tracking-wider">
              Historical & Active Staff Records
            </p>
          </div>
          <div className="bg-white/10 rounded-2xl px-6 py-3 flex items-center gap-3 border border-white/10 w-full sm:w-80 focus-within:bg-white/20 transition-all">
            <Search size={18} className="text-blue-400" />
            <input
              type="text"
              placeholder="Query by identity..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none text-white text-sm font-bold outline-none w-full placeholder:text-white/30"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="pl-10 py-5 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">
                  Personnel Identity
                </th>
                <th className="py-5 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">
                  Access Layer
                </th>
                <th className="py-5 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">
                  Operational Role
                </th>
                <th className="py-5 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">
                  Enrollment
                </th>
                <th className="pr-10 py-5 text-right text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 tracking-widest">
                  Management
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="py-24 text-center">
                    <Loader2
                      size={40}
                      className="text-blue-600 animate-spin mx-auto mb-4"
                    />
                    <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">
                      Synchronizing Security Clearance...
                    </p>
                  </td>
                </tr>
              ) : filteredStaff.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-24 text-center">
                    <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center mx-auto mb-4 border border-slate-100">
                      <Users size={32} className="text-slate-200" />
                    </div>
                    <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">
                      Query returned zero records
                    </p>
                  </td>
                </tr>
              ) : (
                filteredStaff.map((staff) => (
                  <tr
                    key={staff.id}
                    className="group hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="pl-10 py-6 border-b border-slate-100">
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-slate-900 text-blue-400 flex items-center justify-center font-black text-xs shadow-lg group-hover:scale-110 transition-transform">
                          {staff.fullName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <p className="font-black text-slate-900 m-0 leading-tight tracking-tight">
                            {staff.fullName}
                          </p>
                          <p className="text-[11px] font-bold text-slate-400 m-0 mt-1 uppercase">
                            {staff.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <span
                          className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm border ${staff.role === "Admin" ? "bg-rose-50 text-rose-600 border-rose-100" : "bg-blue-50 text-blue-600 border-blue-100"}`}
                        >
                          {staff.role}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]" />
                      </div>
                    </td>
                    <td className="py-6 border-b border-slate-100">
                      <p className="text-xs font-black text-slate-700 m-0 uppercase tracking-widest">
                        {staff.staffPosition}
                      </p>
                    </td>
                    <td className="py-6 border-b border-slate-100">
                      <div className="flex items-center gap-2 text-slate-400 font-bold">
                        <Calendar size={14} className="text-slate-300" />
                        <span className="text-[11px] uppercase">
                          {new Date(staff.dateJoined).toLocaleDateString(
                            undefined,
                            { year: "numeric", month: "short", day: "numeric" },
                          )}
                        </span>
                      </div>
                    </td>
                    <td className="pr-10 py-6 border-b border-slate-100 text-right">
                      <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                        <button
                          onClick={() => handleEdit(staff)}
                          className="p-2.5 rounded-xl bg-white text-slate-400 hover:text-blue-600 hover:shadow-xl border border-slate-100 transition-all active:scale-90"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(staff.id)}
                          className="p-2.5 rounded-xl bg-white text-rose-400 hover:text-rose-600 hover:shadow-xl border border-slate-100 transition-all active:scale-90"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="p-8 bg-slate-50/50">
          <Pagination
            totalItems={filteredStaff.length}
            itemsPerPage={10}
            currentPage={1}
          />
        </div>
      </div>
    </div>
  );
};

export default StaffManagement;

</code>

src\pages\admin\VendorManagement.jsx:
<code>
import React, { useState, useEffect } from "react";
import {
  Truck,
  Star,
  Phone,
  Mail,
  MapPin,
  Plus,
  Search,
  MoreVertical,
  Edit2,
  Trash2,
  ShieldCheck,
  Globe,
  Briefcase,
  Activity,
  Package,
  X,
  Loader2,
  Zap,
  ChevronRight,
} from "lucide-react";
import Pagination from "../../components/Pagination";
import { vendorService } from "../../services/api";

const VendorStat = ({ title, value, icon: Icon }) => (
  <div className="bg-white rounded-[30px] p-8 shadow-xl border border-black/5 transition-all hover:-translate-y-1 duration-500 group overflow-hidden relative">
    <div className="absolute -right-4 -bottom-4 text-black/5 group-hover:text-[#fcd20b]/10 transition-colors">
      <Icon size={100} />
    </div>
    <div className="flex items-center gap-6 relative z-10">
      <div className="w-16 h-16 rounded-2xl bg-[#111111] text-[#fcd20b] flex items-center justify-center group-hover:bg-[#fcd20b] group-hover:text-[#111111] transition-all duration-500 shadow-lg">
        <Icon size={28} />
      </div>
      <div>
        <p className="m-0 text-[10px] font-bold text-[#7a7a7a] uppercase tracking-[0.2em] font-oswald italic mb-1">
          {title}
        </p>
        <h4 className="m-0 text-3xl font-bold text-[#111111] font-oswald italic uppercase tracking-tighter leading-none">
          {value}
        </h4>
      </div>
    </div>
  </div>
);

const VendorManagement = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingVendorId, setEditingVendorId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    vendorName: "",
    vendorPhone: "",
    vendorEmail: "",
    vendorAddress: "",
  });

  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    try {
      const response = await vendorService.getAll();
      setVendors(response.data);
    } catch (error) {
      console.error("Error fetching vendors:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingVendorId) {
        await vendorService.update(editingVendorId, formData);
      } else {
        await vendorService.create(formData);
      }
      setShowAddForm(false);
      setEditingVendorId(null);
      fetchVendors();
      setFormData({
        vendorName: "",
        vendorPhone: "",
        vendorEmail: "",
        vendorAddress: "",
      });
    } catch (error) {
      alert("Error creating vendor");
    }
  };

  const handleEdit = (vendor) => {
    setEditingVendorId(vendor.vendorID);
    setFormData({
      vendorName: vendor.vendorName || "",
      vendorPhone: vendor.vendorPhone || "",
      vendorEmail: vendor.vendorEmail || "",
      vendorAddress: vendor.vendorAddress || "",
    });
    setShowAddForm(true);
  };

  const resetForm = () => {
    setEditingVendorId(null);
    setFormData({
      vendorName: "",
      vendorPhone: "",
      vendorEmail: "",
      vendorAddress: "",
    });
    setShowAddForm(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this vendor?")) {
      try {
        await vendorService.delete(id);
        fetchVendors();
      } catch (error) {
        alert("Error deleting vendor");
      }
    }
  };

  const filteredVendors = vendors.filter(
    (v) =>
      v.vendorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.vendorEmail.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="pb-20 font-roboto">
      {/* Strategic Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 animate-xtra">
        <div>
          <h2 className="text-5xl font-bold text-[#111111] m-0 tracking-tighter font-oswald italic uppercase leading-none mb-2">
            SUPPLY <span className="text-[#fcd20b]">CHAIN</span>
          </h2>
          <p className="text-[#7a7a7a] text-sm font-medium uppercase tracking-widest italic">
            Manage Supplier Partnerships & Vendor Registry
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-8 py-4 rounded-full border-2 border-black/5 bg-white text-[#111111] text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-[#fcd20b] hover:border-[#fcd20b] transition-all shadow-sm font-oswald">
            <Activity size={16} /> VENDOR AUDIT
          </button>
          <button
            className={`px-10 py-4 rounded-full font-oswald font-bold uppercase tracking-widest text-[10px] flex items-center gap-3 transition-all shadow-2xl transform active:scale-95 ${showAddForm ? "bg-[#111111] text-white hover:bg-black" : "bg-[#fcd20b] text-[#111111] hover:bg-[#111111] hover:text-[#fcd20b]"}`}
            onClick={() => (showAddForm ? resetForm() : setShowAddForm(true))}
          >
            {showAddForm ? <X size={20} /> : <Plus size={20} />}
            {showAddForm ? "CLOSE FORM" : "ADD NEW SUPPLIER"}
          </button>
        </div>
      </div>

      {/* Supply Chain Insights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 animate-xtra">
        <VendorStat
          title="ACTIVE PARTNERS"
          value={vendors.length}
          icon={Truck}
        />
      </div>

      {showAddForm && (
        <div className="bg-white rounded-[40px] shadow-2xl border border-black/5 mb-16 overflow-hidden animate-xtra">
          <div className="bg-[#111111] p-10 flex justify-between items-center text-white">
            <h3 className="font-bold m-0 font-oswald italic uppercase tracking-tighter text-2xl flex items-center gap-4">
              <Zap size={24} className="text-[#fcd20b]" />
              {editingVendorId ? "UPDATE" : "REGISTER"}{" "}
              <span className="text-[#fcd20b]">SUPPLIER</span>
            </h3>
            <button
              onClick={resetForm}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-rose-500 transition-all"
            >
              <X size={20} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                  Supplier Name
                </label>
                <input
                  type="text"
                  name="vendorName"
                  value={formData.vendorName}
                  onChange={handleChange}
                  required
                  placeholder="BOSCH AUTOMOTIVE"
                  className="w-full px-6 py-4 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                  Email Address
                </label>
                <input
                  type="email"
                  name="vendorEmail"
                  value={formData.vendorEmail}
                  onChange={handleChange}
                  required
                  placeholder="ORDERS@VENDOR.COM"
                  className="w-full px-6 py-4 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="vendorPhone"
                  value={formData.vendorPhone}
                  onChange={handleChange}
                  required
                  placeholder="+1 234 567 890"
                  className="w-full px-6 py-4 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                  Location Address
                </label>
                <input
                  type="text"
                  name="vendorAddress"
                  value={formData.vendorAddress}
                  onChange={handleChange}
                  placeholder="MAIN ST, CITY, COUNTRY"
                  className="w-full px-6 py-4 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30"
                />
              </div>
            </div>
            <div className="flex justify-end gap-5 mt-12 border-t border-black/5 pt-10">
              <button
                type="button"
                onClick={resetForm}
                className="px-10 py-4 rounded-full bg-[#f8f8f8] text-[#7a7a7a] font-bold text-[10px] uppercase tracking-widest hover:bg-[#111111] hover:text-white transition-all font-oswald"
              >
                CANCEL
              </button>
              <button
                type="submit"
                className="px-12 py-4 rounded-full bg-[#fcd20b] text-[#111111] font-bold text-[10px] uppercase tracking-widest shadow-xl shadow-[#fcd20b]/20 hover:bg-[#111111] hover:text-[#fcd20b] transition-all active:scale-95 font-oswald italic"
              >
                {editingVendorId ? "UPDATE SUPPLIER" : "ADD SUPPLIER"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Rich Vendor Registry Card */}
      <div
        className="bg-white rounded-[40px] shadow-2xl border border-black/5 overflow-hidden animate-xtra"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="bg-[#111111] p-10 flex flex-col sm:flex-row justify-between items-center gap-6 text-white">
          <h4 className="font-bold m-0 font-oswald italic uppercase tracking-tighter text-xl">
            SUPPLIER / <span className="text-[#fcd20b]">VENDOR</span> REGISTRY
          </h4>
          <div className="bg-white/5 rounded-full px-8 py-3 flex items-center gap-4 border border-white/10 w-full sm:w-80 focus-within:bg-white focus-within:border-[#fcd20b] transition-all group">
            <Search
              size={18}
              className="text-white/40 group-focus-within:text-[#111111]"
            />
            <input
              type="text"
              placeholder="SEARCH SUPPLIERS..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none text-white text-[10px] font-bold outline-none w-full placeholder:text-white/20 group-focus-within:text-[#111111]"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#f8f8f8]">
                <th className="pl-10 py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 tracking-[0.2em] font-oswald italic">
                  Supplier / Vendor Name
                </th>
                <th className="py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 tracking-[0.2em] font-oswald italic">
                  Contact Information
                </th>
                <th className="py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 tracking-[0.2em] font-oswald italic">
                  Location / Address
                </th>
                <th className="py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 tracking-[0.2em] font-oswald italic">
                  Rating
                </th>
                <th className="pr-10 py-6 text-right text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 tracking-[0.2em] font-oswald italic">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="py-24 text-center">
                    <Loader2
                      size={40}
                      className="animate-spin mx-auto mb-4 text-[#fcd20b]"
                    />
                    <p className="font-bold font-oswald uppercase tracking-widest text-[#7a7a7a] text-[10px]">
                      Connecting to Supply Network...
                    </p>
                  </td>
                </tr>
              ) : filteredVendors.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-24 text-center">
                    <p className="font-bold font-oswald uppercase tracking-widest text-[#7a7a7a] text-[10px]">
                      NO STRATEGIC PARTNERS DETECTED
                    </p>
                  </td>
                </tr>
              ) : (
                filteredVendors.map((vendor) => (
                  <tr
                    key={vendor.vendorID}
                    className="group hover:bg-[#f8f8f8] transition-all duration-300"
                  >
                    <td className="pl-10 py-8 border-b border-black/5">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-[20px] bg-[#f8f8f8] border border-black/5 flex items-center justify-center text-[#111111]/30 shadow-sm group-hover:scale-110 group-hover:bg-[#fcd20b] group-hover:text-[#111111] transition-all duration-500">
                          <Globe size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-lg text-[#111111] m-0 leading-none mb-2 font-oswald italic uppercase tracking-tighter">
                            {vendor.vendorName}
                          </p>
                          <p className="text-[10px] text-[#7a7a7a] font-bold uppercase tracking-widest">
                            PARTNER ID: V-
                            {vendor.vendorID.toString().padStart(4, "0")}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-8 border-b border-black/5">
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-3 text-[11px] font-bold text-[#111111] font-oswald uppercase">
                          <Mail size={14} className="text-[#fcd20b]" />{" "}
                          {vendor.vendorEmail}
                        </div>
                        <div className="flex items-center gap-3 text-[10px] text-[#7a7a7a] font-bold uppercase tracking-widest">
                          <Phone size={13} className="text-[#fcd20b]" />{" "}
                          {vendor.vendorPhone}
                        </div>
                      </div>
                    </td>
                    <td className="py-8 border-b border-black/5">
                      <div className="flex items-center gap-3 text-[11px] font-bold text-[#111111] font-oswald uppercase">
                        <MapPin size={16} className="text-[#fcd20b]" />
                        {vendor.vendorAddress || "INTERNATIONAL HUB"}
                      </div>
                    </td>
                    <td className="py-8 border-b border-black/5">
                      <div className="flex items-center gap-2 bg-[#fcd20b]/10 px-4 py-2 rounded-full border border-[#fcd20b]/20 w-fit">
                        <Star
                          size={14}
                          className="text-[#fcd20b] fill-[#fcd20b]"
                        />
                        <span className="text-[11px] font-bold text-[#111111] font-oswald">
                          4.8
                        </span>
                      </div>
                    </td>
                    <td className="pr-10 py-8 border-b border-black/5 text-right">
                      <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                        <button
                          onClick={() => handleEdit(vendor)}
                          className="w-10 h-10 rounded-xl bg-white text-[#111111] hover:bg-[#111111] hover:text-[#fcd20b] border border-black/5 transition-all shadow-sm flex items-center justify-center"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(vendor.vendorID)}
                          className="w-10 h-10 rounded-xl bg-white text-rose-500 hover:bg-rose-500 hover:text-white border border-black/5 transition-all shadow-sm flex items-center justify-center"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="p-8 bg-[#f8f8f8]/50 flex justify-center">
          <Pagination
            totalItems={vendors.length}
            itemsPerPage={10}
            currentPage={1}
          />
        </div>
      </div>
    </div>
  );
};

export default VendorManagement;

</code>

src\pages\common\MenuOverview.jsx:
<code>
import React from "react";
import {
  LayoutGrid,
  Users,
  Package,
  ShoppingCart,
  Truck,
  Settings,
  User,
  FileText,
  Bell,
  ChevronRight,
} from "lucide-react";

const MenuOverview = ({ setActiveScreen }) => {
  const modules = [
    { id: "Financial", label: "Financials", icon: LayoutGrid },
    { id: "Staff", label: "Team", icon: Users },
    { id: "Parts", label: "Inventory", icon: Package },
    { id: "SalesInvoice", label: "Sales", icon: ShoppingCart },
    { id: "Purchases", label: "Purchases", icon: Truck },
    { id: "Settings", label: "Settings", icon: Settings },
    { id: "Profile", label: "Account", icon: User },
    { id: "CustomerReports", label: "Reports", icon: FileText },
    { id: "Notifications", label: "Alerts", icon: Bell },
  ];

  return (
    <div className="pb-20 font-roboto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#111111] m-0 tracking-tighter font-oswald italic uppercase">
          SYSTEM <span className="text-[#fcd20b]">MODULES</span>
        </h1>
        <p className="text-[#7a7a7a] text-sm font-medium mt-2 uppercase tracking-widest">
          Rapid Command & Control Gateway
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules.map((mod) => (
          <div
            key={mod.id}
            onClick={() => setActiveScreen(mod.id)}
            className="group bg-white p-10 rounded-[30px] shadow-xl border border-black/5 flex flex-col items-center text-center cursor-pointer transition-all duration-500 hover:bg-[#111111] hover:-translate-y-2 relative overflow-hidden"
          >
            {/* Background Decoration */}
            <div className="absolute -right-6 -bottom-6 text-black/5 group-hover:text-white/5 transition-colors">
              <mod.icon size={120} />
            </div>

            <div className="w-20 h-20 rounded-3xl bg-[#f8f8f8] text-[#111111] flex items-center justify-center mb-6 transition-all group-hover:bg-[#fcd20b] group-hover:scale-110 duration-500 shadow-sm relative z-10">
              <mod.icon size={32} />
            </div>

            <h5 className="font-bold text-[#111111] m-0 tracking-tighter text-xl font-oswald uppercase italic group-hover:text-white transition-colors relative z-10">
              {mod.label}
            </h5>

            <div className="mt-8 flex items-center gap-2 text-[#fcd20b] font-oswald text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 relative z-10">
              EXECUTE MODULE <ChevronRight size={14} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuOverview;

</code>

src\pages\common\Notifications.jsx:
<code>
import React, { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  AlertTriangle,
  Bell,
  Check,
  CheckCircle,
  CreditCard,
  FileText,
  Loader2,
  Package,
  RefreshCw,
  Send,
} from "lucide-react";
import {
  customerSelfServiceService,
  partsService,
  reportService,
} from "../../services/api";

const typeStyles = {
  inventory: { color: "#ec4899", icon: Package },
  financial: { color: "#f59e0b", icon: CreditCard },
  service: { color: "#3b82f6", icon: FileText },
  system: { color: "#10b981", icon: CheckCircle },
};

const Notifications = ({ user }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [triggering, setTriggering] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const role = user?.role?.toLowerCase();
  const canTrigger = role === "admin" || role === "staff";

  const buildAdminNotifications = async () => {
    const [lowStockRes, creditRes] = await Promise.all([
      partsService.getLowStock(),
      reportService.getPendingCredits(),
    ]);

    const lowStockAlerts = (lowStockRes.data || []).map((part) => ({
      id: `part-${part.partID}`,
      type: "inventory",
      title: "Low Stock Alert",
      msg: `${part.partName} has ${part.stockQuantity} units left. Reorder level is ${part.reorderLevel}.`,
      time: "Live",
      action: "Restock from procurement",
    }));

    const creditAlerts = (creditRes.data || []).map((customer) => ({
      id: `credit-${customer.customerID}`,
      type: "financial",
      title: "Pending Customer Credit",
      msg: `${customer.fullName} has an outstanding balance of $${Number(
        customer.creditBalance || 0,
      ).toLocaleString(undefined, { minimumFractionDigits: 2 })}.`,
      time: "Live",
      action: "Review credit report",
    }));

    return [...lowStockAlerts, ...creditAlerts];
  };

  const buildCustomerNotifications = async () => {
    const historyRes = await customerSelfServiceService.getHistory();
    const history = historyRes.data || {};

    const appointmentAlerts = (history.serviceHistory || [])
      .filter((appointment) => appointment.appointmentStatus === "Pending")
      .map((appointment) => ({
        id: `appointment-${appointment.appointmentID}`,
        type: "service",
        title: "Pending Appointment",
        msg: `${appointment.serviceType} is scheduled for ${new Date(
          appointment.appointmentDate,
        ).toLocaleDateString()} at ${appointment.appointmentTime?.slice(0, 5)}.`,
        time: "Live",
        action: "Open appointments",
      }));

    const partAlerts = (history.partRequests || [])
      .filter((request) => request.requestStatus === "Pending")
      .map((request) => ({
        id: `request-${request.partRequestID}`,
        type: "inventory",
        title: "Part Request Pending",
        msg: `${request.requestedPartName} is still awaiting staff review.`,
        time: "Live",
        action: "Track request",
      }));

    const creditAlert =
      history.creditBalance > 0
        ? [
            {
              id: "customer-credit",
              type: "financial",
              title: "Outstanding Credit Balance",
              msg: `Your current outstanding credit balance is $${Number(
                history.creditBalance,
              ).toLocaleString(undefined, { minimumFractionDigits: 2 })}.`,
              time: "Live",
              action: "View purchase history",
            },
          ]
        : [];

    return [...creditAlert, ...appointmentAlerts, ...partAlerts];
  };

  const loadNotifications = async () => {
    try {
      setLoading(true);
      setError("");
      setSuccess("");
      const liveNotifications = canTrigger
        ? await buildAdminNotifications()
        : await buildCustomerNotifications();
      setNotifications(liveNotifications);
    } catch (err) {
      setError(err.response?.data?.message || "Unable to load live notifications.");
      setNotifications([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNotifications();
  }, [role]);

  const filteredNotifications = useMemo(() => {
    if (activeTab === "All") return notifications;
    return notifications.filter((notification) => notification.type === activeTab.toLowerCase());
  }, [activeTab, notifications]);

  const handleTriggerNotifications = async () => {
    try {
      setTriggering(true);
      setError("");
      setSuccess("");
      const response = await reportService.triggerNotifications();
      setSuccess(response.data?.message || "Notification job triggered successfully.");
      await loadNotifications();
    } catch (err) {
      setError(err.response?.data?.message || "Unable to trigger notification job.");
    } finally {
      setTriggering(false);
    }
  };

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
        <div className="absolute top-0 left-0 right-0 min-h-16 rounded-t-xl flex items-center px-8 py-4 text-white shadow-header bg-dark-gradient">
          <div className="flex flex-col sm:flex-row justify-between w-full items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <Bell size={18} className="text-white/60" />
              <h4 className="m-0 text-base font-bold">
                Live Notification Center
              </h4>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={loadNotifications}
                className="px-4 py-1.5 rounded-lg bg-white/10 text-white text-[10px] font-extrabold uppercase tracking-widest hover:bg-white/20 transition-all border border-white/10 flex items-center gap-2"
              >
                <RefreshCw size={14} /> Refresh
              </button>
              {canTrigger && (
                <button
                  onClick={handleTriggerNotifications}
                  disabled={triggering}
                  className="px-4 py-1.5 rounded-lg bg-white/10 text-white text-[10px] font-extrabold uppercase tracking-widest hover:bg-white/20 transition-all border border-white/10 flex items-center gap-2 disabled:opacity-60"
                >
                  {triggering ? (
                    <Loader2 size={14} className="animate-spin" />
                  ) : (
                    <Send size={14} />
                  )}
                  Trigger Emails
                </button>
              )}
              <button className="px-4 py-1.5 rounded-lg bg-white/10 text-white text-[10px] font-extrabold uppercase tracking-widest hover:bg-white/20 transition-all border border-white/10 flex items-center gap-2">
                <Check size={14} /> Mark Read
              </button>
            </div>
          </div>
        </div>

        <div className="p-8 pt-28">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl text-red-800 text-xs font-bold flex gap-2 items-center">
              <AlertCircle size={16} className="shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-xl text-green-800 text-xs font-bold flex gap-2 items-center">
              <CheckCircle size={16} className="shrink-0" />
              <span>{success}</span>
            </div>
          )}

          <div className="flex flex-wrap gap-3 mb-8 border-b border-slate-100 pb-6">
            <Tab label="All" />
            <Tab label="Inventory" />
            <Tab label="Financial" />
            <Tab label="Service" />
          </div>

          {loading ? (
            <div className="text-center py-24">
              <Loader2 size={44} className="mx-auto text-blue-500 animate-spin mb-4" />
              <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                Loading live alerts...
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredNotifications.map((notification) => {
                const style = typeStyles[notification.type] || typeStyles.system;
                const Icon = style.icon;

                return (
                  <div
                    key={notification.id}
                    className="relative bg-white rounded-2xl border border-slate-100 p-6 flex gap-6 hover:shadow-material transition-all group overflow-hidden"
                  >
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1.5 group-hover:w-2 transition-all"
                      style={{ background: style.color }}
                    />
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-header shrink-0 group-hover:scale-110 transition-transform"
                      style={{ background: style.color }}
                    >
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h5 className="m-0 text-base font-extrabold text-text-main tracking-tight group-hover:text-blue-500 transition-colors">
                          {notification.title}
                        </h5>
                        <span className="text-xs font-extrabold text-text-muted uppercase tracking-widest">
                          {notification.time}
                        </span>
                      </div>
                      <p className="m-0 text-sm text-text-muted font-medium leading-relaxed mb-5">
                        {notification.msg}
                      </p>
                      <span className="px-5 py-2 rounded-xl bg-slate-50 border border-slate-100 text-[11px] font-extrabold uppercase tracking-widest text-text-main inline-flex items-center gap-2">
                        {notification.action}
                      </span>
                    </div>
                  </div>
                );
              })}

              {filteredNotifications.length === 0 && (
                <div className="text-center py-24 border-2 border-dashed border-slate-100 rounded-3xl">
                  <Bell size={64} className="mx-auto text-slate-100 mb-6" />
                  <p className="text-lg font-extrabold text-text-main tracking-tight m-0">
                    All System Logs Clear
                  </p>
                  <p className="text-sm font-medium text-text-muted mt-1">
                    No active {activeTab.toLowerCase()} alerts were returned by the backend.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;

</code>

src\pages\common\Profile.jsx:
<code>
import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Shield,
  Camera,
  History,
  CheckCircle,
  Star,
  Award,
  MapPin,
  Smartphone,
  Key,
  Loader2,
  AlertCircle,
  MessageSquare,
} from "lucide-react";
import { customerSelfServiceService } from "../../services/api";

const Profile = ({ user }) => {
  const [reviews, setReviews] = useState([]);
  const [profile, setProfile] = useState(null);
  const [profileForm, setProfileForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [profileSaving, setProfileSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  // Review form state
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const isCustomer = user?.role?.toLowerCase() === "customer";

  const fetchProfile = async () => {
    if (!isCustomer) return;
    try {
      const response = await customerSelfServiceService.getProfile();
      const nextProfile = response.data || {};
      setProfile(nextProfile);
      setProfileForm({
        fullName: nextProfile.fullName || "",
        email: nextProfile.email || "",
        phoneNumber: nextProfile.phoneNumber || "",
        address: nextProfile.address || "",
      });
    } catch (err) {
      console.error("Failed to load customer profile:", err);
    }
  };

  const fetchReviews = async () => {
    if (!isCustomer) return;
    try {
      setLoading(true);
      const response = await customerSelfServiceService.getReviews();
      setReviews(response.data || []);
    } catch (err) {
      console.error("Failed to load customer reviews:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
    fetchReviews();
  }, [user]);

  const handleProfileChange = (e) => {
    setProfileForm({ ...profileForm, [e.target.name]: e.target.value });
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      setProfileSaving(true);
      const response = await customerSelfServiceService.updateProfile(profileForm);
      const nextProfile = response.data;
      setProfile(nextProfile);
      setProfileForm({
        fullName: nextProfile.fullName || "",
        email: nextProfile.email || "",
        phoneNumber: nextProfile.phoneNumber || "",
        address: nextProfile.address || "",
      });
      const savedUser = JSON.parse(localStorage.getItem("user") || "{}");
      const nextUser = {
        ...savedUser,
        fullName: nextProfile.fullName,
        email: nextProfile.email,
        phoneNumber: nextProfile.phoneNumber,
        address: nextProfile.address,
      };
      localStorage.setItem("user", JSON.stringify(nextUser));
      setSuccess("Profile updated successfully.");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update profile.");
    } finally {
      setProfileSaving(false);
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!comment.trim()) {
      setError("Please write a comment for your review.");
      return;
    }

    try {
      setSubmitLoading(true);
      await customerSelfServiceService.submitReview({
        rating,
        comment: comment.trim(),
      });
      setSuccess("Thank you! Your feedback has been registered.");
      setComment("");
      setRating(5);
      
      // refresh reviews
      const response = await customerSelfServiceService.getReviews();
      setReviews(response.data || []);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit review.");
    } finally {
      setSubmitLoading(false);
    }
  };

  const adminActivities = [
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

  const displayUser = {
    ...user,
    ...profile,
  };

  const initials = displayUser?.fullName
    ? displayUser.fullName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "U";

  return (
    <div className="pb-10 font-sans">
      {/* Profile Header Card */}
      <div className="bg-white rounded-3xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] relative overflow-hidden mt-6 border border-slate-100">
        <div className="h-16 rounded-t-3xl flex items-center px-6 text-white shadow-header bg-slate-900">
          <div className="flex justify-between w-full items-center">
            <h4 className="m-0 text-sm font-black uppercase tracking-wider">
              Secure Operations Account
            </h4>
            <span className="text-[10px] font-black px-3.5 py-1 bg-white/20 rounded-md uppercase tracking-wider border border-white/10">
              Verified {user?.role || "USER"}
            </span>
          </div>
        </div>

        <div className="pt-8 px-6 pb-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
            {/* Left Sidebar Info */}
            <div className="flex flex-col items-center">
              <div className="relative w-36 mb-6">
                <div className="w-36 h-36 rounded-3xl bg-blue-600 flex items-center justify-center text-4xl font-black text-white shadow-lg shadow-blue-600/15">
                  {initials}
                </div>
                <button className="absolute -bottom-2 -right-2 w-9 h-9 rounded-xl bg-white flex items-center justify-center cursor-pointer shadow-md text-slate-500 hover:text-blue-600 transition-colors border border-slate-200">
                  <Camera size={18} />
                </button>
              </div>

              <div className="text-center mb-6">
                <h2 className="text-xl font-black m-0 mb-1 text-slate-800 tracking-tight leading-tight">
                  {displayUser?.fullName}
                </h2>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                  System {user?.role}
                </p>
                <div className="flex justify-center gap-2 mt-3">
                  <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded text-[9px] font-black text-slate-500 uppercase tracking-widest">
                    ACTIVE NODE
                  </span>
                </div>
              </div>

              <div className="w-full flex flex-col gap-4 border-t border-slate-100 pt-6">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                  Contact Coordinates
                </p>
                <div className="flex flex-col gap-3 text-xs font-semibold text-slate-600">
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-slate-400 shrink-0" />
                    <span className="truncate">{displayUser?.email}</span>
                  </div>
                  {displayUser?.phoneNumber && (
                    <div className="flex items-center gap-3">
                      <Smartphone size={16} className="text-slate-400 shrink-0" />
                      <span>{displayUser.phoneNumber}</span>
                    </div>
                  )}
                  {displayUser?.address && (
                    <div className="flex items-center gap-3">
                      <MapPin size={16} className="text-slate-400 shrink-0" />
                      <span className="truncate">{displayUser.address}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Detailed Content */}
            <div className="pt-2">
              {isCustomer ? (
                /* Customer Feedback & Reviews Sourced Live */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="md:col-span-2 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-2 mb-4">
                      <User size={18} className="text-blue-500" />
                      <h4 className="m-0 text-sm font-black text-slate-800 uppercase tracking-wider">
                        Customer Profile Details
                      </h4>
                    </div>

                    <form
                      onSubmit={handleProfileSubmit}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                          Full Name
                        </span>
                        <input
                          name="fullName"
                          value={profileForm.fullName}
                          onChange={handleProfileChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 text-xs font-bold text-slate-800 transition-all"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                          Email
                        </span>
                        <input
                          type="email"
                          name="email"
                          value={profileForm.email}
                          onChange={handleProfileChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 text-xs font-bold text-slate-800 transition-all"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                          Phone
                        </span>
                        <input
                          name="phoneNumber"
                          value={profileForm.phoneNumber}
                          onChange={handleProfileChange}
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 text-xs font-bold text-slate-800 transition-all"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                          Address
                        </span>
                        <input
                          name="address"
                          value={profileForm.address}
                          onChange={handleProfileChange}
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 text-xs font-bold text-slate-800 transition-all"
                        />
                      </div>
                      <div className="md:col-span-2 flex justify-end">
                        <button
                          type="submit"
                          disabled={profileSaving}
                          className="px-6 py-3 bg-slate-900 hover:bg-blue-600 text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all shadow-md disabled:opacity-75"
                        >
                          {profileSaving ? (
                            <div className="flex items-center gap-2">
                              <Loader2 size={14} className="animate-spin" />
                              Saving...
                            </div>
                          ) : (
                            "Save Profile"
                          )}
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Feedback Form */}
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-2 mb-4">
                      <MessageSquare size={18} className="text-blue-500" />
                      <h4 className="m-0 text-sm font-black text-slate-800 uppercase tracking-wider">
                        Submit Service Feedback
                      </h4>
                    </div>

                    {error && (
                      <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 rounded-r-xl text-red-800 text-xs font-bold flex gap-2 items-center">
                        <AlertCircle size={14} className="shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    {success && (
                      <div className="mb-4 p-3 bg-green-50 border-l-4 border-green-500 rounded-r-xl text-green-800 text-xs font-bold flex gap-2 items-center">
                        <CheckCircle size={14} className="shrink-0" />
                        <span>{success}</span>
                      </div>
                    )}

                    <form onSubmit={handleReviewSubmit} className="flex flex-col gap-4">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                          Rating Score
                        </span>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setRating(star)}
                              className="p-1 bg-transparent border-none outline-none cursor-pointer"
                            >
                              <Star
                                size={24}
                                className={
                                  star <= rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-slate-300"
                                }
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                          Comments / Suggestions
                        </span>
                        <textarea
                          placeholder="Tell us about your experience with our services, staff, or parts catalog..."
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 text-xs font-bold text-slate-800 h-24 resize-none transition-all"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={submitLoading}
                        className="w-full py-3 bg-slate-900 hover:bg-blue-600 text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all shadow-md disabled:opacity-75"
                      >
                        {submitLoading ? (
                          <div className="flex items-center justify-center gap-2">
                            <Loader2 size={14} className="animate-spin" />
                            Submitting...
                          </div>
                        ) : (
                          "Submit Review Log"
                        )}
                      </button>
                    </form>
                  </div>

                  {/* Reviews Ledger */}
                  <div>
                    <h4 className="text-sm font-black text-slate-800 m-0 mb-4 uppercase tracking-wider">
                      Feedback History Ledger
                    </h4>

                    {loading ? (
                      <div className="py-10 flex items-center justify-center">
                        <Loader2 size={24} className="text-blue-500 animate-spin" />
                      </div>
                    ) : reviews.length === 0 ? (
                      <div className="p-8 text-center bg-slate-50 border border-slate-100 rounded-2xl text-slate-400 text-xs font-bold">
                        No feedback logs submitted yet.
                      </div>
                    ) : (
                      <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto pr-1">
                        {reviews.map((rev) => (
                          <div
                            key={rev.reviewID}
                            className="p-4 bg-slate-50 border border-slate-100 rounded-2xl"
                          >
                            <div className="flex justify-between items-center mb-2">
                              <div className="flex gap-0.5">
                                {[1, 2, 3, 4, 5].map((s) => (
                                  <Star
                                    key={s}
                                    size={12}
                                    className={
                                      s <= rev.rating
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-slate-200"
                                    }
                                  />
                                ))}
                              </div>
                              <span className="text-[9px] text-slate-400 font-bold">
                                {new Date(rev.reviewDate).toLocaleDateString()}
                              </span>
                            </div>
                            <p className="m-0 text-xs font-semibold text-slate-700 leading-relaxed">
                              {rev.comment}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                /* Admin or Staff generic biography / credentials */
                <div className="mb-10">
                  <h4 className="text-lg font-extrabold text-slate-800 m-0 mb-4 border-b-2 border-blue-500 w-fit pb-1 tracking-tight">
                    Professional Statement
                  </h4>
                  <p className="text-[15px] text-slate-500 font-medium leading-relaxed m-0">
                    Logged in as system operator for the AutoParts selling operations node. Your security clearance is elevated.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div>
                      <h4 className="text-sm font-black text-slate-800 m-0 mb-4 uppercase tracking-wider">
                        Recent Activity Log
                      </h4>
                      <div className="flex flex-col gap-5">
                        {adminActivities.map((act, i) => (
                          <div key={i} className="flex gap-4 group">
                            <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors shadow-sm border border-slate-100 shrink-0">
                              <act.icon size={16} />
                            </div>
                            <div>
                              <p className="text-sm font-extrabold text-slate-800 m-0">
                                {act.action}
                              </p>
                              <p className="text-xs text-slate-400 font-bold m-0 mt-0.5">
                                {act.target} • {act.time}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-black text-slate-800 m-0 mb-4 uppercase tracking-wider">
                        Credentials & Access
                      </h4>
                      <div className="flex flex-col gap-3">
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center">
                          <div className="flex gap-3 items-center">
                            <Smartphone size={16} className="text-slate-400" />
                            <span className="text-xs font-bold text-slate-700">
                              Two-Factor Authentication
                            </span>
                          </div>
                          <span className="text-[9px] font-black text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-100 uppercase tracking-widest">
                            ENABLED
                          </span>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center">
                          <div className="flex gap-3 items-center">
                            <Key size={16} className="text-slate-400" />
                            <span className="text-xs font-bold text-slate-700">
                              Hardware Security Key
                            </span>
                          </div>
                          <span className="text-[9px] font-bold text-slate-400">
                            14d ago
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

</code>

src\pages\common\Settings.jsx:
<code>
import React, { useState } from "react";
import {
  Settings as SettingsIcon,
  Globe,
  Bell,
  Lock,
  Palette,
  Smartphone,
  Mail,
  ShieldCheck,
  Database,
  Sliders,
  Moon,
  Sun,
  DollarSign,
  Layout,
  Key,
  LogOut,
  AlertTriangle,
  ShieldAlert,
  Monitor,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

const Settings = () => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const SectionHeader = ({ title, desc }) => (
    <div className="mb-8 border-b border-slate-100 pb-4">
      <h4 className="m-0 text-lg font-extrabold text-text-main tracking-tight">
        {title}
      </h4>
      <p className="m-0 text-sm font-medium text-text-muted mt-1">{desc}</p>
    </div>
  );

  const Toggle = ({ label, desc, checked }) => (
    <div className="flex justify-between items-center py-5 border-b border-slate-50 last:border-0 group cursor-pointer">
      <div>
        <p className="m-0 text-sm font-extrabold text-text-main tracking-tight group-hover:text-blue-500 transition-colors">
          {label}
        </p>
        <p className="m-0 text-[11px] font-medium text-text-muted uppercase tracking-widest mt-1">
          {desc}
        </p>
      </div>
      <div
        className={`w-12 h-6 rounded-full relative transition-all duration-300 ${checked ? "bg-blue-500 shadow-lg" : "bg-slate-200"}`}
      >
        <div
          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${checked ? "right-1" : "left-1 shadow-sm"}`}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="pb-16">
      <div className="bg-white rounded-xl shadow-material relative overflow-hidden mt-10 border border-slate-100">
        <div className="absolute top-0 left-0 right-0 h-16 rounded-t-xl flex items-center px-8 text-white shadow-header bg-dark-gradient">
          <div className="flex items-center gap-3">
            <SettingsIcon size={18} className="text-white/60" />
            <h4 className="m-0 text-base font-bold">Advanced System Control</h4>
          </div>
        </div>

        <div className="p-10 pt-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* COLUMN 1: Account & Security */}
          <div className="space-y-10">
            <div>
              <SectionHeader
                title="Security & Authentication"
                desc="Protect your account and manage access credentials."
              />

              {/* Change Password Section */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 shadow-sm border border-blue-100">
                      <Key size={20} />
                    </div>
                    <div>
                      <p className="m-0 text-sm font-extrabold text-text-main tracking-tight">
                        Access Credentials
                      </p>
                      <p className="m-0 text-[10px] font-extrabold text-text-muted uppercase tracking-widest mt-0.5">
                        Last updated 14 days ago
                      </p>
                    </div>
                  </div>
                  <button
                    className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 text-[10px] font-extrabold uppercase tracking-widest text-text-main hover:bg-white hover:shadow-sm transition-all"
                    onClick={() => setShowPasswordForm(!showPasswordForm)}
                  >
                    {showPasswordForm ? "Cancel" : "Update"}
                  </button>
                </div>

                {showPasswordForm && (
                  <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100 space-y-4 shadow-inner mb-6 animate-in slide-in-from-top-4 duration-300">
                    <input
                      type="password"
                      placeholder="Current Password"
                      className="w-full px-5 py-3 rounded-xl border border-slate-200 text-sm font-bold text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm transition-all"
                    />
                    <input
                      type="password"
                      placeholder="New Password"
                      className="w-full px-5 py-3 rounded-xl border border-slate-200 text-sm font-bold text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm transition-all"
                    />
                    <input
                      type="password"
                      placeholder="Confirm New Password"
                      className="w-full px-5 py-3 rounded-xl border border-slate-200 text-sm font-bold text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm transition-all"
                    />
                    <button className="w-full py-3.5 rounded-xl bg-blue-500 text-white text-xs font-extrabold uppercase tracking-widest hover:bg-black shadow-header transition-all">
                      Sync Security Key
                    </button>
                  </div>
                )}
              </div>

              <Toggle
                label="Two-Factor Authentication"
                desc="Extra security layer via encrypted SMS/Push."
                checked={true}
              />
              <Toggle
                label="Biometric Recognition"
                desc="Secure entry via fingerprint or facial scan."
                checked={false}
              />

              <div className="mt-10">
                <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-[0.2em] mb-4">
                  Active System Nodes
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-4 bg-blue-50 border border-blue-100 rounded-2xl">
                    <div className="flex gap-4 items-center">
                      <Monitor size={20} className="text-blue-500" />
                      <div>
                        <p className="text-sm font-extrabold text-text-main tracking-tight m-0">
                          Chrome on Windows 11
                        </p>
                        <p className="text-[10px] text-blue-600 font-extrabold uppercase tracking-widest m-0 mt-0.5">
                          Primary Session
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
                    <div className="flex gap-4 items-center">
                      <Smartphone size={20} className="text-text-muted" />
                      <div>
                        <p className="text-sm font-extrabold text-text-main tracking-tight m-0">
                          iPhone 15 Pro Max
                        </p>
                        <p className="text-[10px] text-text-muted font-extrabold uppercase tracking-widest m-0 mt-0.5">
                          Last sync: 2 hours ago
                        </p>
                      </div>
                    </div>
                    <button className="text-[10px] font-extrabold text-red-500 uppercase tracking-widest hover:underline">
                      Revoke
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Preferences & System */}
          <div className="space-y-10">
            <div>
              <SectionHeader
                title="Environment & Analytics"
                desc="Configure workspace aesthetics and report cycles."
              />

              <div className="mb-10">
                <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-[0.2em] mb-4">
                  Aesthetic Theme
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-2 border-blue-500 rounded-2xl p-6 flex flex-col items-center gap-2 bg-white shadow-material transition-all cursor-pointer">
                    <Sun size={24} className="text-blue-500" />
                    <p className="text-[11px] font-extrabold text-text-main uppercase tracking-widest m-0">
                      Light
                    </p>
                  </div>
                  <div className="border border-slate-100 rounded-2xl p-6 flex flex-col items-center gap-2 bg-dark-gradient text-white hover:border-blue-500 transition-all cursor-pointer">
                    <Moon size={24} />
                    <p className="text-[11px] font-extrabold uppercase tracking-widest m-0">
                      Dark
                    </p>
                  </div>
                </div>
              </div>

              <Toggle
                label="Inventory Predictive Alerts"
                desc="Auto-notify on low stock thresholds."
                checked={true}
              />
              <Toggle
                label="Weekly Fiscal Summary"
                desc="Generate automated P&L every Sunday."
                checked={false}
              />

              <div className="mt-12">
                <div className="bg-red-50 border border-red-100 rounded-3xl p-8 relative overflow-hidden group">
                  <div className="absolute -right-4 -bottom-4 text-red-100 opacity-20 group-hover:rotate-12 transition-transform duration-700">
                    <ShieldAlert size={120} />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-red-500 shadow-sm border border-red-100">
                        <AlertTriangle size={20} />
                      </div>
                      <h6 className="m-0 text-base font-extrabold text-red-900 tracking-tight leading-none">
                        Security Purge Zone
                      </h6>
                    </div>
                    <p className="m-0 text-sm text-red-800/70 font-medium leading-relaxed mb-6">
                      Initiating a system purge will permanently remove all
                      credentials and audit logs from the primary server node.
                      This cannot be undone.
                    </p>
                    <button className="w-full py-4 rounded-2xl bg-red-600 text-white text-xs font-extrabold uppercase tracking-widest hover:bg-black shadow-header transition-all transform active:scale-95">
                      Authorize Account Deletion
                    </button>
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

export default Settings;

</code>

src\pages\customer\AppointmentRequests.jsx:
<code>
import React, { useState, useEffect } from "react";
import {
  Calendar,
  PenTool,
  MessageSquare,
  CheckCircle,
  Car,
  Clock,
  AlertTriangle,
  ShieldCheck,
  Search,
  ArrowRight,
  Loader2,
  Trash2,
  AlertCircle,
} from "lucide-react";
import { customerSelfServiceService } from "../../services/api";

const AppointmentRequests = () => {
  const [vehicles, setVehicles] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [partRequests, setPartRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form states - Booking
  const [bookingForm, setBookingForm] = useState({
    vehicleID: "",
    appointmentDate: "",
    appointmentTime: "09:00",
    serviceType: "",
  });
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingError, setBookingError] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState("");

  // Form states - Part Sourcing
  const [partName, setPartName] = useState("");
  const [sourcingLoading, setSourcingLoading] = useState(false);
  const [sourcingError, setSourcingError] = useState("");
  const [sourcingSuccess, setSourcingSuccess] = useState("");

  const loadData = async () => {
    try {
      setLoading(true);
      const [vehiclesRes, appointmentsRes, partRequestsRes] = await Promise.all([
        customerSelfServiceService.getVehicles(),
        customerSelfServiceService.getAppointments(),
        customerSelfServiceService.getPartRequests(),
      ]);

      setVehicles(vehiclesRes.data);
      setAppointments(appointmentsRes.data);
      setPartRequests(partRequestsRes.data);

      if (vehiclesRes.data.length > 0) {
        setBookingForm((prev) => ({
          ...prev,
          vehicleID: vehiclesRes.data[0].vehicleID.toString(),
        }));
      }
    } catch (err) {
      console.error("Failed to load customer details:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleBookAppointment = async (e) => {
    e.preventDefault();
    setBookingError("");
    setBookingSuccess("");

    if (!bookingForm.vehicleID) {
      setBookingError("Please select a vehicle first. Register one if needed.");
      return;
    }
    if (!bookingForm.appointmentDate) {
      setBookingError("Please select an appointment date.");
      return;
    }
    if (!bookingForm.serviceType.trim()) {
      setBookingError("Please enter a service type or description.");
      return;
    }

    try {
      setBookingLoading(true);
      
      // format time to include seconds for .NET TimeSpan (e.g. 09:00:00)
      const timeSpan = `${bookingForm.appointmentTime}:00`;

      await customerSelfServiceService.bookAppointment({
        vehicleID: parseInt(bookingForm.vehicleID),
        appointmentDate: bookingForm.appointmentDate,
        appointmentTime: timeSpan,
        serviceType: bookingForm.serviceType.trim(),
      });

      setBookingSuccess("Service appointment request initialized successfully!");
      setBookingForm((prev) => ({
        ...prev,
        serviceType: "",
      }));

      // reload
      const appointmentsRes = await customerSelfServiceService.getAppointments();
      setAppointments(appointmentsRes.data);
    } catch (err) {
      setBookingError(
        err.response?.data?.message ||
          "Failed to request appointment. Check if date is in the future."
      );
    } finally {
      setBookingLoading(false);
    }
  };

  const handleRequestPart = async (e) => {
    e.preventDefault();
    setSourcingError("");
    setSourcingSuccess("");

    if (!partName.trim()) {
      setSourcingError("Please enter the part name or SKU.");
      return;
    }

    try {
      setSourcingLoading(true);
      await customerSelfServiceService.requestPart({
        requestedPartName: partName.trim(),
      });

      setSourcingSuccess("Part procurement request dispatched successfully!");
      setPartName("");

      // reload
      const partRequestsRes = await customerSelfServiceService.getPartRequests();
      setPartRequests(partRequestsRes.data);
    } catch (err) {
      setSourcingError(
        err.response?.data?.message ||
          "Failed to request part. Please try again."
      );
    } finally {
      setSourcingLoading(false);
    }
  };

  const handleCancelAppointment = async (id) => {
    if (!window.confirm("Are you sure you want to cancel this appointment booking?")) {
      return;
    }

    try {
      await customerSelfServiceService.cancelAppointment(id);
      // reload
      const appointmentsRes = await customerSelfServiceService.getAppointments();
      setAppointments(appointmentsRes.data);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to cancel appointment.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <Loader2 size={40} className="text-blue-500 animate-spin" />
        <p className="text-slate-500 font-bold text-sm uppercase tracking-widest animate-pulse">
          Retrieving Orchestration Nodes...
        </p>
      </div>
    );
  }

  return (
    <div className="pb-10 font-sans">
      {/* Strategic Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-black text-slate-800 m-0 tracking-tight leading-none">
            Service Orchestration
          </h2>
          <p className="text-slate-500 text-sm mt-2 font-medium">
            Schedule advanced maintenance and track specialty parts procurement.
          </p>
        </div>
        <div className="hidden sm:flex bg-white px-6 py-3 rounded-2xl border border-slate-200 items-center gap-4 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
            <Clock size={20} />
          </div>
          <div>
            <p className="m-0 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              RESPONSE TIME
            </p>
            <span className="text-xs font-black text-slate-700 uppercase tracking-tight">
              Avg. 2 Hours
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Advanced Maintenance Booking */}
        <div className="bg-white rounded-3xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] border border-slate-100 p-8">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center shadow-md shadow-blue-500/10">
              <Calendar size={20} />
            </div>
            <h4 className="m-0 text-lg font-black text-slate-800">
              Maintenance Scheduler
            </h4>
          </div>

          {bookingError && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl text-red-800 text-xs font-bold flex gap-2 items-center">
              <AlertCircle size={16} className="shrink-0" />
              <span>{bookingError}</span>
            </div>
          )}

          {bookingSuccess && (
            <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-xl text-green-800 text-xs font-bold flex gap-2 items-center">
              <CheckCircle size={16} className="shrink-0" />
              <span>{bookingSuccess}</span>
            </div>
          )}

          <form onSubmit={handleBookAppointment} className="flex flex-col gap-6">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                Vehicle Selection
              </p>
              {vehicles.length === 0 ? (
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-xs font-bold leading-relaxed">
                  No vehicles registered yet. Please go back to the Dashboard to register a vehicle first.
                </div>
              ) : (
                <div className="relative">
                  <Car className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <select
                    value={bookingForm.vehicleID}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, vehicleID: e.target.value })
                    }
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-blue-600 focus:bg-white transition-all appearance-none cursor-pointer"
                  >
                    {vehicles.map((v) => (
                      <option key={v.vehicleID} value={v.vehicleID}>
                        {v.brand} {v.model} ({v.vehicleNumber})
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                  Appointment Date
                </p>
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={bookingForm.appointmentDate}
                  onChange={(e) =>
                    setBookingForm({ ...bookingForm, appointmentDate: e.target.value })
                  }
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-blue-600 focus:bg-white transition-all"
                />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                  Time Slot
                </p>
                <input
                  type="time"
                  value={bookingForm.appointmentTime}
                  onChange={(e) =>
                    setBookingForm({ ...bookingForm, appointmentTime: e.target.value })
                  }
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-blue-600 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                Service Description
              </p>
              <input
                type="text"
                placeholder="e.g. 50k Mile Routine Checkup, Brake Squeaking"
                value={bookingForm.serviceType}
                onChange={(e) =>
                  setBookingForm({ ...bookingForm, serviceType: e.target.value })
                }
                className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-blue-600 focus:bg-white transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={bookingLoading || vehicles.length === 0}
              className="w-full py-4.5 bg-blue-500 text-white rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10 hover:bg-slate-900 transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {bookingLoading ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Scheduling...
                </>
              ) : (
                <>
                  <ShieldCheck size={18} /> Initialize Booking Request
                </>
              )}
            </button>
          </form>
        </div>

        {/* Specialty Parts Sourcing */}
        <div className="bg-white rounded-3xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] border border-slate-100 p-8">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-pink-500 text-white flex items-center justify-center shadow-md shadow-pink-500/10">
              <PenTool size={20} />
            </div>
            <h4 className="m-0 text-lg font-black text-slate-800">
              Strategic Component Sourcing
            </h4>
          </div>

          <div className="p-5 bg-rose-50/60 border border-rose-100 rounded-2xl flex gap-4 mb-6">
            <div className="w-10 h-10 rounded-xl bg-rose-500 flex items-center justify-center text-white shrink-0 shadow-md">
              <AlertTriangle size={20} />
            </div>
            <div>
              <h4 className="m-0 text-[10px] font-black text-rose-700 uppercase tracking-widest mb-1">
                Critical Sourcing Policy
              </h4>
              <p className="text-xs text-rose-900/80 m-0 font-semibold leading-relaxed">
                If the required part is unavailable or discontinued, provide the component nomenclature below. We will source it globally.
              </p>
            </div>
          </div>

          {sourcingError && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl text-red-800 text-xs font-bold flex gap-2 items-center">
              <AlertCircle size={16} className="shrink-0" />
              <span>{sourcingError}</span>
            </div>
          )}

          {sourcingSuccess && (
            <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-xl text-green-800 text-xs font-bold flex gap-2 items-center">
              <CheckCircle size={16} className="shrink-0" />
              <span>{sourcingSuccess}</span>
            </div>
          )}

          <form onSubmit={handleRequestPart} className="flex flex-col gap-6">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                Part Nomenclature / SKU
              </p>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  required
                  placeholder="e.g. OEM Brembo Carbon Ceramic Rotors"
                  value={partName}
                  onChange={(e) => setPartName(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-pink-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={sourcingLoading}
              className="w-full py-4.5 bg-slate-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg hover:bg-pink-600 transition-all transform active:scale-95 disabled:opacity-50"
            >
              {sourcingLoading ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Dispatching...
                </>
              ) : (
                <>
                  <MessageSquare size={18} /> Dispatch Procurement Request
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Lists Section: Your Bookings and Sourcing Requests */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        {/* Active Appointments list */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]">
          <h4 className="m-0 text-lg font-black text-slate-800 mb-6">
            Service Request Ledger
          </h4>

          {appointments.length === 0 ? (
            <div className="p-10 text-center bg-slate-50 rounded-2xl text-slate-400 font-semibold text-sm">
              No appointments scheduled yet.
            </div>
          ) : (
            <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-2">
              {appointments.map((a) => (
                <div
                  key={a.appointmentID}
                  className="p-5 bg-slate-50 border border-slate-100 rounded-2xl flex justify-between items-center hover:bg-white hover:shadow-md transition-all border-l-4 border-l-blue-500"
                >
                  <div>
                    <h5 className="m-0 text-sm font-bold text-slate-800">
                      {a.serviceType}
                    </h5>
                    <p className="m-0 text-xs text-slate-500 mt-1 font-semibold">
                      Vehicle: {a.vehicleName} ({a.vehicleNumber})
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-[11px] text-slate-400 font-bold">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(a.appointmentDate).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {a.appointmentTime.slice(0, 5)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-[9px] font-black px-2.5 py-1 rounded-md tracking-wider border uppercase ${
                        a.appointmentStatus === "Completed"
                          ? "bg-green-50 text-green-600 border-green-100"
                          : a.appointmentStatus === "Cancelled"
                            ? "bg-red-50 text-red-500 border-red-100"
                            : "bg-blue-50 text-blue-600 border-blue-100"
                      }`}
                    >
                      {a.appointmentStatus}
                    </span>
                    {a.appointmentStatus === "Pending" && (
                      <button
                        onClick={() => handleCancelAppointment(a.appointmentID)}
                        className="p-2 rounded-lg bg-red-50 border border-red-100 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                        title="Cancel Appointment"
                      >
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Part Requests list */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]">
          <h4 className="m-0 text-lg font-black text-slate-800 mb-6">
            Component Procurement Ledger
          </h4>

          {partRequests.length === 0 ? (
            <div className="p-10 text-center bg-slate-50 rounded-2xl text-slate-400 font-semibold text-sm">
              No component requests logged.
            </div>
          ) : (
            <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-2">
              {partRequests.map((r) => (
                <div
                  key={r.partRequestID}
                  className="p-5 bg-slate-50 border border-slate-100 rounded-2xl flex justify-between items-center hover:bg-white hover:shadow-md transition-all border-l-4 border-l-pink-500"
                >
                  <div>
                    <h5 className="m-0 text-sm font-bold text-slate-800">
                      {r.requestedPartName}
                    </h5>
                    <p className="m-0 text-[11px] text-slate-400 mt-1 font-semibold flex items-center gap-1">
                      <Calendar size={12} />
                      Requested: {new Date(r.requestDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <span
                      className={`text-[9px] font-black px-2.5 py-1 rounded-md tracking-wider border uppercase ${
                        r.requestStatus === "Fulfilled" || r.requestStatus === "Approved"
                          ? "bg-green-50 text-green-600 border-green-100"
                          : r.requestStatus === "Rejected"
                            ? "bg-red-50 text-red-500 border-red-100"
                            : "bg-yellow-50 text-yellow-600 border-yellow-100"
                      }`}
                    >
                      {r.requestStatus}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentRequests;

</code>

src\pages\customer\AssetDetails.jsx:
<code>
import React from "react";
import {
  ArrowLeft,
  Car,
  ShieldCheck,
  Zap,
  History,
  CreditCard,
  Calendar,
  MapPin,
  Share2,
  Heart,
  ChevronRight,
  Gauge,
  Activity,
  Fuel,
  Settings,
  Info,
} from "lucide-react";

const AssetDetails = ({ asset, onBack }) => {
  if (!asset) return null;

  return (
    <div className="pb-20 animate-in fade-in duration-500">
      {/* Navigation Header */}
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-3 text-text-muted hover:text-blue-500 transition-all font-extrabold text-xs uppercase tracking-widest group"
        >
          <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
            <ArrowLeft size={18} />
          </div>
          Back to Marketplace
        </button>
        <div className="flex gap-4">
          <button className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-text-muted hover:text-red-500 transition-all hover:bg-red-50">
            <Heart size={18} />
          </button>
          <button className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-text-muted hover:text-blue-500 transition-all hover:bg-blue-50">
            <Share2 size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Media & Core Info (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {/* Main Visual Component */}
          <div className="bg-white rounded-[2.5rem] shadow-material overflow-hidden border border-slate-100 relative group">
            <div className="h-[450px] bg-slate-50 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
              {asset.type === "Vehicle" ? (
                <Car size={180} className="text-slate-200" />
              ) : (
                <Settings size={180} className="text-slate-200" />
              )}

              <div className="absolute bottom-8 left-8 flex gap-3">
                <span className="px-4 py-2 bg-white/80 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg border border-white/50">
                  Exterior 360°
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-widest text-white shadow-lg border border-white/10">
                  Interior 4K
                </span>
              </div>
            </div>
            <div className="p-10">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-blue-50 text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] rounded-lg border border-blue-100">
                  {asset.type}
                </span>
                {asset.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-50 text-text-muted text-[10px] font-black uppercase tracking-[0.2em] rounded-lg border border-slate-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl font-black text-text-main tracking-tighter m-0 mb-4">
                {asset.name}
              </h1>
              <p className="text-lg text-text-muted font-medium leading-relaxed max-w-2xl">
                Precision-engineered {asset.type.toLowerCase()} featuring
                advanced performance metrics and certified quality assurance.
                This asset has been rigorously tested by our technical logistics
                team.
              </p>
            </div>
          </div>

          {/* Technical Specs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Transmission", val: "Electronic", icon: Gauge },
              { label: "Fuel Type", val: "Electric", icon: Fuel },
              { label: "Performance", val: "Tier 1", icon: Activity },
              { label: "System Check", val: "Pass", icon: ShieldCheck },
            ].map((spec, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-material transition-all group"
              >
                <spec.icon
                  size={20}
                  className="text-blue-500 mb-3 group-hover:scale-110 transition-transform"
                />
                <p className="m-0 text-[10px] font-black text-text-muted uppercase tracking-widest leading-none mb-1">
                  {spec.label}
                </p>
                <p className="m-0 text-sm font-black text-text-main tracking-tight">
                  {spec.val}
                </p>
              </div>
            ))}
          </div>

          {/* Description / Ledger */}
          <div className="bg-white rounded-[2rem] p-10 shadow-material border border-slate-100">
            <h4 className="text-xl font-black text-text-main tracking-tighter mb-6 flex items-center gap-3">
              <Info size={22} className="text-blue-500" />
              Strategic Overview
            </h4>
            <div className="space-y-6">
              <p className="text-text-muted font-medium leading-loose text-[15px]">
                The {asset.name} represents the pinnacle of modern automotive
                design, integrating high-performance components with
                cutting-edge software. Every unit in our marketplace undergoas a
                150-point technical audit before listing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-50">
                <div>
                  <h5 className="text-xs font-black uppercase tracking-widest text-text-main mb-4">
                    Core Specifications
                  </h5>
                  <ul className="space-y-3 p-0 m-0 list-none">
                    <li className="flex justify-between text-sm">
                      <span className="text-text-muted font-bold">
                        Certification
                      </span>{" "}
                      <span className="font-black text-green-500 uppercase tracking-tighter">
                        Gold Standard
                      </span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span className="text-text-muted font-bold">
                        Ownership
                      </span>{" "}
                      <span className="font-black">Single Node</span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span className="text-text-muted font-bold">
                        Warranty
                      </span>{" "}
                      <span className="font-black">24 Months</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xs font-black uppercase tracking-widest text-text-main mb-4">
                    Security Features
                  </h5>
                  <ul className="space-y-3 p-0 m-0 list-none">
                    <li className="flex items-center gap-2 text-sm font-bold text-text-muted">
                      <ShieldCheck size={16} className="text-blue-500" />{" "}
                      Anti-Theft GPS Node
                    </li>
                    <li className="flex items-center gap-2 text-sm font-bold text-text-muted">
                      <ShieldCheck size={16} className="text-blue-500" /> Remote
                      Diagnostics
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Acquisition Hub (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-dark-gradient rounded-[2.5rem] p-10 text-white shadow-header relative overflow-hidden group border border-white/5 sticky top-28">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] group-hover:scale-125 transition-transform duration-1000"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <span className="px-3 py-1 bg-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest border border-white/10">
                  Investment Value
                </span>
                <div className="flex items-center gap-1 text-blue-400">
                  <ShieldCheck size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    Insured
                  </span>
                </div>
              </div>

              <h2 className="text-5xl font-black tracking-tighter m-0 mb-2">
                {asset.price}
              </h2>
              <p className="text-xs text-white/50 font-bold uppercase tracking-widest mb-10">
                + Registration & Logistics Fee
              </p>

              <div className="space-y-4 mb-10">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group/item">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <CreditCard size={20} className="text-blue-400" />
                      <span className="text-sm font-extrabold uppercase tracking-widest">
                        Financing
                      </span>
                    </div>
                    <ChevronRight
                      size={18}
                      className="text-white/20 group-hover/item:translate-x-1 transition-transform"
                    />
                  </div>
                  <p className="text-[10px] text-white/40 font-bold mt-2 leading-none uppercase">
                    From $450/mo · 3.9% APR
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group/item">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Calendar size={20} className="text-blue-400" />
                      <span className="text-sm font-extrabold uppercase tracking-widest">
                        Test Drive
                      </span>
                    </div>
                    <ChevronRight
                      size={18}
                      className="text-white/20 group-hover/item:translate-x-1 transition-transform"
                    />
                  </div>
                  <p className="text-[10px] text-white/40 font-bold mt-2 leading-none uppercase">
                    Nearest Node: Central Hub
                  </p>
                </div>
              </div>

              <button className="w-full py-5 rounded-2xl bg-blue-500 text-white text-xs font-black uppercase tracking-[0.2em] shadow-lg hover:shadow-blue-500/40 hover:bg-white hover:text-black transition-all transform active:scale-95 mb-4">
                Reserve Asset Now
              </button>

              <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all transform active:scale-95">
                Contact Strategy Team
              </button>

              <div className="mt-8 flex items-center justify-center gap-2 text-[10px] text-white/30 font-black uppercase tracking-widest">
                <Zap size={14} className="text-blue-400" /> Secure Protocol v4.0
                Enabled
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetDetails;

</code>

src\pages\customer\BuySell.jsx:
<code>
import React, { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  Car,
  CheckCircle2,
  Filter,
  Loader2,
  Package,
  Search,
  ShieldCheck,
  ShoppingBag,
  Tag,
  Upload,
} from "lucide-react";
import { customerSelfServiceService, partsService } from "../../services/api";

const APPRAISAL_KEY = "vehiclePartsAppraisalRequests";

const formatCurrency = (value = 0) =>
  `$${Number(value).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const BuySell = ({ onExploreAsset }) => {
  const [activeTab, setActiveTab] = useState("buy");
  const [parts, setParts] = useState([]);
  const [appraisals, setAppraisals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [partRequestName, setPartRequestName] = useState("");
  const [partRequestStatus, setPartRequestStatus] = useState("");
  const [sellStatus, setSellStatus] = useState("");
  const [error, setError] = useState("");

  const loadCatalog = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await partsService.getAll();
      setParts(response.data || []);
    } catch (err) {
      setError(err.response?.data?.message || "Unable to load marketplace catalog.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCatalog();
    const storedRequests = JSON.parse(localStorage.getItem(APPRAISAL_KEY) || "[]");
    setAppraisals(storedRequests);
  }, []);

  const inventoryItems = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return parts
      .filter((part) => {
        if (!query) return true;
        return (
          part.partName?.toLowerCase().includes(query) ||
          part.category?.toLowerCase().includes(query) ||
          String(part.partID).includes(query)
        );
      })
      .map((part) => ({
        id: part.partID,
        name: part.partName,
        type: "Part",
        price: formatCurrency(part.sellingPrice),
        rawPrice: part.sellingPrice,
        status: part.stockQuantity <= part.reorderLevel ? "Low Stock" : "In Stock",
        tags: [part.category, `Stock ${part.stockQuantity}`].filter(Boolean),
        source: part,
      }));
  }, [parts, searchTerm]);

  const handlePartRequest = async (event) => {
    event.preventDefault();
    if (!partRequestName.trim()) return;

    try {
      setPartRequestStatus("");
      setError("");
      await customerSelfServiceService.requestPart({
        requestedPartName: partRequestName.trim(),
      });
      setPartRequestStatus("Part request submitted to staff for review.");
      setPartRequestName("");
    } catch (err) {
      setError(err.response?.data?.message || "Unable to submit part request.");
    }
  };

  const handleSellSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const request = {
      id: Date.now(),
      itemType: formData.get("itemType"),
      itemName: formData.get("itemName"),
      condition: formData.get("condition"),
      mileage: formData.get("mileage") || "N/A",
      createdAt: new Date().toISOString(),
      status: "Submitted",
    };
    const nextAppraisals = [request, ...appraisals];
    setAppraisals(nextAppraisals);
    localStorage.setItem(APPRAISAL_KEY, JSON.stringify(nextAppraisals));
    event.currentTarget.reset();
    setSellStatus("Appraisal request saved and ready for staff follow-up.");
    setTimeout(() => setSellStatus(""), 4000);
  };

  return (
    <div className="pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
        <div>
          <h2 className="text-3xl font-extrabold text-text-main m-0 tracking-tighter leading-none">
            Marketplace
          </h2>
          <p className="text-text-muted text-[15px] font-medium mt-2 opacity-80">
            Browse live parts inventory, request unavailable parts, or submit an appraisal request.
          </p>
        </div>
        <button
          onClick={loadCatalog}
          className="px-6 py-3.5 bg-white border border-slate-200 rounded-xl text-text-main text-[11px] uppercase tracking-widest font-extrabold hover:bg-slate-50 transition-all shadow-sm"
        >
          Refresh Catalog
        </button>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl text-red-800 text-xs font-bold flex gap-2 items-center">
          <AlertCircle size={16} className="shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="flex gap-4 mb-10 border-b border-slate-100 pb-5">
        <button
          onClick={() => setActiveTab("buy")}
          className={`flex items-center gap-2 px-8 py-3.5 rounded-xl text-[11px] uppercase tracking-widest font-extrabold transition-all duration-300 ${
            activeTab === "buy"
              ? "bg-blue-gradient text-white shadow-header border border-white/10"
              : "bg-transparent text-text-muted hover:bg-slate-50 hover:text-text-main"
          }`}
        >
          <ShoppingBag size={18} /> Buy Parts
        </button>
        <button
          onClick={() => setActiveTab("sell")}
          className={`flex items-center gap-2 px-8 py-3.5 rounded-xl text-[11px] uppercase tracking-widest font-extrabold transition-all duration-300 ${
            activeTab === "sell"
              ? "bg-dark-gradient text-white shadow-header border border-white/10"
              : "bg-transparent text-text-muted hover:bg-slate-50 hover:text-text-main"
          }`}
        >
          <Tag size={18} /> Sell / Appraisal
        </button>
      </div>

      {activeTab === "buy" && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 mb-10">
            <div className="flex gap-4">
              <div className="flex-1 bg-white border border-slate-200 rounded-xl px-5 py-3.5 flex items-center gap-4 shadow-sm focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all group">
                <Search
                  size={20}
                  className="text-text-muted group-focus-within:text-blue-500 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Search live parts catalog..."
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  className="border-none outline-none w-full text-sm font-extrabold text-text-main placeholder:text-text-muted/50"
                />
              </div>
              <button className="hidden sm:flex items-center gap-2 px-8 py-3.5 bg-white border border-slate-200 rounded-xl text-text-main text-[11px] uppercase tracking-widest font-extrabold hover:bg-slate-50 transition-all shadow-sm">
                <Filter size={18} /> Live Stock
              </button>
            </div>

            <form
              onSubmit={handlePartRequest}
              className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex gap-3"
            >
              <input
                type="text"
                placeholder="Request unavailable part..."
                value={partRequestName}
                onChange={(event) => setPartRequestName(event.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-bold outline-none focus:bg-white focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all"
              >
                Request
              </button>
            </form>
          </div>

          {partRequestStatus && (
            <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-xl text-green-800 text-xs font-bold flex gap-2 items-center">
              <CheckCircle2 size={16} className="shrink-0" />
              <span>{partRequestStatus}</span>
            </div>
          )}

          {loading ? (
            <div className="py-24 text-center">
              <Loader2 size={48} className="mx-auto text-blue-500 animate-spin mb-4" />
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
                Loading live marketplace...
              </p>
            </div>
          ) : inventoryItems.length === 0 ? (
            <div className="p-16 text-center bg-white rounded-3xl border border-slate-100">
              <Package size={56} className="mx-auto text-slate-200 mb-4" />
              <p className="text-slate-400 font-bold text-sm">
                No catalog parts matched your search.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {inventoryItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-material overflow-hidden flex flex-col group hover:scale-[1.02] transition-all duration-500 border border-slate-100"
                >
                  <div className="h-52 bg-slate-50 flex items-center justify-center relative overflow-hidden">
                    <Package
                      size={84}
                      className="text-slate-200 group-hover:scale-110 group-hover:text-blue-200 transition-all duration-700"
                    />
                    <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                      <span
                        className={`px-3 py-1.5 rounded-lg text-[9px] font-extrabold shadow-sm bg-white uppercase tracking-widest border border-slate-100 ${
                          item.status === "In Stock" ? "text-green-500" : "text-orange-500"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-[9px] font-extrabold text-blue-500 bg-blue-50 px-2.5 py-1 rounded-md uppercase tracking-widest border border-blue-100">
                        {item.type}
                      </span>
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-extrabold text-text-muted bg-slate-50 px-2.5 py-1 rounded-md uppercase tracking-widest border border-slate-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="m-0 text-xl font-extrabold text-text-main flex-1 tracking-tighter leading-tight mb-6 group-hover:text-blue-500 transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-50">
                      <span className="text-2xl font-extrabold text-text-main tracking-tighter">
                        {item.price}
                      </span>
                      <button
                        onClick={() => onExploreAsset(item)}
                        className="px-6 py-2.5 bg-text-main text-white rounded-xl text-[10px] font-extrabold uppercase tracking-widest hover:bg-blue-500 shadow-sm transition-all transform active:scale-95"
                      >
                        Explore Item
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {activeTab === "sell" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-8">
            <div className="p-10 rounded-2xl bg-dark-gradient text-white shadow-header relative overflow-hidden group border border-white/10">
              <div className="absolute -right-10 -top-10 opacity-10 rotate-12 group-hover:scale-110 transition-all duration-700">
                <ShieldCheck size={240} />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/20 shadow-inner group-hover:bg-white/20 transition-all">
                <Car size={32} className="text-blue-400" />
              </div>
              <h3 className="text-3xl font-extrabold m-0 mb-4 tracking-tighter leading-none">
                Submit an Appraisal Request
              </h3>
              <p className="text-base text-white/70 m-0 mb-8 font-medium leading-relaxed opacity-80">
                Store a vehicle or component appraisal request for staff follow-up. These requests persist locally until a backend appraisal endpoint is added.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-sm font-extrabold text-white/90">
                  <CheckCircle2 size={20} className="text-blue-400" /> Saved with timestamp and status
                </div>
                <div className="flex items-center gap-4 text-sm font-extrabold text-white/90">
                  <CheckCircle2 size={20} className="text-blue-400" /> Visible in your appraisal ledger
                </div>
              </div>
            </div>

            {sellStatus && (
              <div className="bg-green-50 border border-green-200 p-6 rounded-2xl flex items-center gap-5 text-green-700 shadow-md animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center text-white shadow-lg">
                  <CheckCircle2 size={28} />
                </div>
                <div>
                  <h4 className="m-0 text-[11px] font-extrabold uppercase tracking-widest">
                    Request Submitted Successfully
                  </h4>
                  <p className="m-0 text-sm font-bold opacity-80 mt-1">
                    {sellStatus}
                  </p>
                </div>
              </div>
            )}

            <div className="bg-white rounded-2xl border border-slate-100 p-6">
              <h4 className="m-0 text-sm font-black text-slate-800 uppercase tracking-wider mb-4">
                Appraisal Ledger
              </h4>
              {appraisals.length === 0 ? (
                <p className="m-0 text-xs font-bold text-slate-400">
                  No appraisal requests submitted yet.
                </p>
              ) : (
                <div className="flex flex-col gap-3">
                  {appraisals.map((request) => (
                    <div
                      key={request.id}
                      className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex justify-between gap-4"
                    >
                      <div>
                        <p className="m-0 text-sm font-black text-slate-900">
                          {request.itemName}
                        </p>
                        <p className="m-0 mt-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          {request.itemType} • {request.condition}
                        </p>
                      </div>
                      <span className="text-[9px] font-black px-2.5 py-1 rounded-md tracking-wider border uppercase bg-blue-50 text-blue-600 border-blue-100 h-fit">
                        {request.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-material relative overflow-hidden border border-slate-100">
            <div className="absolute top-0 left-0 right-0 h-16 rounded-t-xl flex items-center px-8 text-white shadow-header bg-blue-gradient">
              <h4 className="m-0 text-base font-bold">
                Appraisal Request Form
              </h4>
            </div>
            <form onSubmit={handleSellSubmit} className="p-8 mt-14 flex flex-col gap-8">
              <div>
                <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-4">
                  Select Item Classification
                </p>
                <div className="flex gap-10">
                  <label className="flex items-center gap-3 text-sm font-extrabold text-text-main cursor-pointer group">
                    <input
                      type="radio"
                      name="itemType"
                      value="vehicle"
                      defaultChecked
                      className="w-5 h-5 text-blue-500 accent-blue-500"
                    />
                    <span className="group-hover:text-blue-500 transition-colors tracking-tight">
                      Complete Vehicle
                    </span>
                  </label>
                  <label className="flex items-center gap-3 text-sm font-extrabold text-text-main cursor-pointer group">
                    <input
                      type="radio"
                      name="itemType"
                      value="part"
                      className="w-5 h-5 text-blue-500 accent-blue-500"
                    />
                    <span className="group-hover:text-blue-500 transition-colors tracking-tight">
                      Component / Accessory
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-2">
                  Item Name & Specifications
                </p>
                <input
                  type="text"
                  name="itemName"
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-200 text-sm font-extrabold text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm placeholder:text-text-muted/50 transition-all"
                  placeholder="e.g. 2019 Porsche 911 Carrera S"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-2">
                    Operational Condition
                  </p>
                  <select
                    name="condition"
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 text-sm font-extrabold text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm bg-white cursor-pointer appearance-none transition-all"
                  >
                    <option>Showroom Quality</option>
                    <option>Good / Daily Driven</option>
                    <option>Fair / High Mileage</option>
                    <option>Restoration Required</option>
                  </select>
                </div>
                <div>
                  <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-2">
                    Current Mileage
                  </p>
                  <input
                    type="number"
                    name="mileage"
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 text-sm font-extrabold text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm placeholder:text-text-muted/50 transition-all"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-3">
                  Item Photo Upload
                </p>
                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-10 text-center bg-slate-50 hover:bg-slate-100 hover:border-blue-400 cursor-pointer transition-all group shadow-inner">
                  <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-text-muted mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Upload size={24} />
                  </div>
                  <p className="m-0 text-sm font-extrabold text-text-main tracking-tight group-hover:text-blue-500 transition-colors">
                    Attachments are captured when the backend appraisal endpoint is available
                  </p>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-10 py-4 bg-blue-500 text-white rounded-xl text-[11px] font-extrabold uppercase tracking-widest flex items-center gap-3 hover:bg-black shadow-lg hover:shadow-xl transition-all transform active:scale-95 group"
                >
                  Submit Appraisal Request
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuySell;

</code>

src\pages\customer\CustomerDashboard.jsx:
<code>
import React, { useState, useEffect } from "react";
import {
  Car,
  Calendar,
  Clock,
  Wrench,
  CheckCircle,
  ArrowRight,
  User,
  Phone,
  ShieldCheck,
  Plus,
  X,
  CreditCard,
  FileText,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { customerSelfServiceService } from "../../services/api";

const QuickStat = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white rounded-2xl p-6 flex flex-col gap-3 transition-all hover:scale-[1.02] duration-300 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
    <div
      className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner"
      style={{ backgroundColor: `${color}12`, color: color }}
    >
      <Icon size={24} />
    </div>
    <div>
      <h3 className="m-0 text-3xl font-black text-slate-800 tracking-tight leading-none">
        {value}
      </h3>
      <p className="m-0 text-xs font-bold text-slate-400 mt-2 uppercase tracking-wider">
        {title}
      </p>
    </div>
  </div>
);

const CustomerDashboard = ({ user, setActiveScreen }) => {
  const [loading, setLoading] = useState(true);
  const [historyData, setHistoryData] = useState(null);
  const [showVehicleModal, setShowVehicleModal] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [newVehicle, setNewVehicle] = useState({
    vehicleNumber: "",
    brand: "",
    model: "",
    year: new Date().getFullYear(),
  });

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const response = await customerSelfServiceService.getHistory();
      setHistoryData(response.data);
    } catch (err) {
      console.error("Failed to fetch dashboard data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const handleRegisterVehicle = async (e) => {
    e.preventDefault();
    if (!newVehicle.vehicleNumber.trim()) {
      setRegisterError("Vehicle license number is required.");
      return;
    }

    try {
      setRegisterLoading(true);
      setRegisterError("");
      await customerSelfServiceService.registerVehicle(newVehicle);
      setNewVehicle({
        vehicleNumber: "",
        brand: "",
        model: "",
        year: new Date().getFullYear(),
      });
      setShowVehicleModal(false);
      // Refresh dashboard data
      fetchDashboardData();
    } catch (err) {
      setRegisterError(
        err.response?.data?.message ||
          "Failed to register vehicle. Please verify input data."
      );
    } finally {
      setRegisterLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <Loader2 size={40} className="text-blue-500 animate-spin" />
        <p className="text-slate-500 font-bold text-sm uppercase tracking-widest animate-pulse">
          Synchronizing Portal Node...
        </p>
      </div>
    );
  }

  const activeAppointments = historyData?.serviceHistory?.filter(
    (a) => a.appointmentStatus === "Pending"
  ).length || 0;

  const totalServices = historyData?.totalAppointments || 0;
  const totalSpent = historyData?.totalSpent || 0;
  const creditBalance = historyData?.creditBalance || 0;

  return (
    <div className="pb-10 font-sans">
      {/* Personalized Welcome Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-10">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-3xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20 transform rotate-3 hover:rotate-0 transition-all duration-300 shrink-0">
            <User size={40} className="text-white" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-3xl font-black text-slate-800 m-0 tracking-tight leading-tight">
                Welcome, {historyData?.fullName || user?.fullName || "Valued Customer"}
              </h2>
              <span className="text-[10px] font-black px-3.5 py-1 rounded-full bg-slate-900 text-[#fcd20b] shadow-sm uppercase tracking-wider border border-white/10">
                {historyData?.customerType || "REGULAR"} MEMBER
              </span>
            </div>
            <p className="text-slate-500 text-sm mt-1.5 font-medium leading-relaxed">
              {historyData?.vehicles && historyData.vehicles.length > 0
                ? `Managing ${historyData.vehicles.length} vehicle${historyData.vehicles.length > 1 ? "s" : ""}. Rest assured, our expert team has you covered.`
                : "Register your vehicle to schedule service appointments and track history."}
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => setShowVehicleModal(true)}
            className="px-6 py-3.5 rounded-xl border-2 border-slate-200 text-slate-700 bg-white hover:border-slate-800 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all active:scale-95 shadow-sm"
          >
            <Plus size={16} /> Register Vehicle
          </button>
          <button
            onClick={() => setActiveScreen("Appointments")}
            className="px-6 py-3.5 rounded-xl bg-blue-600 text-white hover:bg-slate-900 text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-blue-600/10 transition-all transform active:scale-95"
          >
            <Calendar size={16} /> Book Service
          </button>
        </div>
      </div>

      {/* Overview Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <QuickStat
          title="Active Bookings"
          value={activeAppointments}
          icon={Calendar}
          color="#2563eb"
        />
        <QuickStat
          title="Service Actions"
          value={totalServices}
          icon={Wrench}
          color="#16a34a"
        />
        <QuickStat
          title="Credit Balance"
          value={`$${creditBalance.toLocaleString("en-US", { minimumFractionDigits: 2 })}`}
          icon={CreditCard}
          color="#eab308"
        />
        <QuickStat
          title="Total Spent (YTD)"
          value={`$${totalSpent.toLocaleString("en-US", { minimumFractionDigits: 2 })}`}
          icon={ShieldCheck}
          color="#db2777"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Service Bookings */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]">
          <div className="flex justify-between items-center mb-6">
            <h4 className="m-0 text-lg font-black text-slate-800">
              Active Booking Ledger
            </h4>
            <button
              onClick={() => setActiveScreen("History")}
              className="bg-slate-50 border border-slate-100 hover:bg-slate-100 text-slate-600 px-4 py-2 rounded-xl text-[10px] font-bold transition-all uppercase tracking-wider flex items-center gap-2"
            >
              Purchase History <ArrowRight size={12} />
            </button>
          </div>

          {!historyData?.serviceHistory || historyData.serviceHistory.length === 0 ? (
            <div className="p-12 text-center flex flex-col items-center gap-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Calendar size={48} className="text-slate-300" />
              <p className="text-slate-500 font-bold text-sm tracking-tight leading-relaxed max-w-sm m-0">
                No service bookings registered yet. Register your vehicle and schedule a checkup.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="pb-4 text-[10px] uppercase text-slate-400 font-black tracking-wider text-left">
                      SERVICE TYPE
                    </th>
                    <th className="pb-4 text-[10px] uppercase text-slate-400 font-black tracking-wider text-left">
                      VEHICLE
                    </th>
                    <th className="pb-4 text-[10px] uppercase text-slate-400 font-black tracking-wider text-left">
                      DATE / TIME
                    </th>
                    <th className="pb-4 text-[10px] uppercase text-slate-400 font-black tracking-wider text-right">
                      STATUS
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {historyData.serviceHistory.slice(0, 5).map((row) => (
                    <tr key={row.appointmentID} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600">
                            <Wrench size={18} />
                          </div>
                          <p className="font-bold text-sm m-0 text-slate-800 tracking-tight">
                            {row.serviceType}
                          </p>
                        </div>
                      </td>
                      <td className="py-4 text-sm font-semibold text-slate-600">
                        {row.vehicleName}
                      </td>
                      <td className="py-4">
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-slate-800">
                            {new Date(row.appointmentDate).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                            {row.appointmentTime.slice(0, 5)}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 text-right">
                        <span
                          className={`text-[9px] font-black px-2.5 py-1 rounded-md tracking-wider border uppercase shadow-sm ${
                            row.appointmentStatus === "Completed"
                              ? "bg-green-50 text-green-600 border-green-100"
                              : row.appointmentStatus === "Cancelled"
                                ? "bg-red-50 text-red-500 border-red-100"
                                : "bg-blue-50 text-blue-600 border-blue-100"
                          }`}
                        >
                          {row.appointmentStatus}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {historyData.serviceHistory.length > 5 && (
                <div className="pt-6 text-center border-t border-slate-100">
                  <button
                    onClick={() => setActiveScreen("Appointments")}
                    className="bg-transparent border-none text-blue-600 text-[11px] font-black cursor-pointer hover:text-blue-800 transition-all tracking-widest uppercase flex items-center gap-2 mx-auto justify-center"
                  >
                    View All Appointments <ArrowRight size={14} />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Registered Vehicles Panel */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]">
            <h4 className="m-0 text-lg font-black text-slate-800 mb-6">
              Registered Fleet
            </h4>

            {!historyData?.vehicles || historyData.vehicles.length === 0 ? (
              <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center gap-3">
                <Car size={36} className="text-slate-300" />
                <p className="text-xs text-slate-500 font-bold m-0 leading-relaxed">
                  No vehicles registered. Register your vehicle details to begin orchestration.
                </p>
                <button
                  onClick={() => setShowVehicleModal(true)}
                  className="mt-2 w-full py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider transition-all"
                >
                  Register First Vehicle
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {historyData.vehicles.map((vehicle) => (
                  <div
                    key={vehicle.vehicleID}
                    className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4 shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-slate-500 border border-slate-200 shadow-sm shrink-0">
                      <Car size={22} className="group-hover:scale-115 transition-transform" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h5 className="m-0 font-bold text-sm text-slate-800 truncate">
                        {vehicle.brand} {vehicle.model}
                      </h5>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] bg-slate-200 px-2 py-0.5 rounded font-black text-slate-600 uppercase tracking-tight">
                          {vehicle.vehicleNumber}
                        </span>
                        <span className="text-[10px] text-slate-400 font-bold">
                          {vehicle.year}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-slate-900 rounded-3xl text-white p-8 shadow-xl relative overflow-hidden group">
            <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <ShieldCheck size={160} />
            </div>
            <div className="relative z-10">
              <h4 className="m-0 text-xl font-black tracking-tight">
                Elite Diagnostics
              </h4>
              <p className="text-xs text-slate-300 my-5 font-bold leading-relaxed">
                Book scheduled services or request custom OEM parts through your self-service portal dashboard.
              </p>
              <button
                onClick={() => setActiveScreen("Appointments")}
                className="w-full bg-white text-slate-900 py-3.5 rounded-xl font-bold text-[11px] uppercase tracking-wider shadow-lg hover:bg-slate-100 transition-all transform active:scale-95 flex items-center justify-center gap-2"
              >
                Schedule Service Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Vehicle Registration Modal */}
      {showVehicleModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md p-8 border border-slate-100 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => {
                setShowVehicleModal(false);
                setRegisterError("");
              }}
              className="absolute top-6 right-6 w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-800 bg-slate-50 cursor-pointer"
            >
              <X size={16} />
            </button>
            <h3 className="m-0 text-2xl font-black text-slate-800 mb-6">
              Register Vehicle
            </h3>

            {registerError && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-2xl text-red-800 text-xs font-bold flex gap-2 items-center">
                <AlertCircle size={16} className="shrink-0" />
                <span>{registerError}</span>
              </div>
            )}

            <form onSubmit={handleRegisterVehicle} className="flex flex-col gap-5">
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                  License Number / Plate
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. BA-1-PA-1234"
                  value={newVehicle.vehicleNumber}
                  onChange={(e) =>
                    setNewVehicle({ ...newVehicle, vehicleNumber: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-600 focus:bg-white text-sm font-bold text-slate-800 transition-all uppercase"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ford"
                    value={newVehicle.brand}
                    onChange={(e) =>
                      setNewVehicle({ ...newVehicle, brand: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-600 focus:bg-white text-sm font-bold text-slate-800 transition-all"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                    Model Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mustang"
                    value={newVehicle.model}
                    onChange={(e) =>
                      setNewVehicle({ ...newVehicle, model: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-600 focus:bg-white text-sm font-bold text-slate-800 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                  Manufacture Year
                </label>
                <input
                  type="number"
                  required
                  min="1900"
                  max={new Date().getFullYear() + 1}
                  value={newVehicle.year}
                  onChange={(e) =>
                    setNewVehicle({ ...newVehicle, year: parseInt(e.target.value) || 2024 })
                  }
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-600 focus:bg-white text-sm font-bold text-slate-800 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={registerLoading}
                className="mt-2 w-full py-4 bg-slate-900 hover:bg-blue-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {registerLoading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Registering...
                  </>
                ) : (
                  "Complete Registration"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerDashboard;

</code>

src\pages\customer\PurchaseHistory.jsx:
<code>
import React, { useState, useEffect } from "react";
import {
  Clock,
  FileText,
  Eye,
  X,
  Printer,
  ChevronRight,
  Loader2,
  AlertCircle,
  TrendingDown,
} from "lucide-react";
import { customerSelfServiceService } from "../../services/api";

const PurchaseHistory = ({ user }) => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const fetchHistory = async () => {
    try {
      setLoading(true);
      const response = await customerSelfServiceService.getHistory();
      setHistory(response.data.purchaseHistory || []);
    } catch (err) {
      console.error("Failed to load purchase history:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <Loader2 size={40} className="text-blue-500 animate-spin" />
        <p className="text-slate-500 font-bold text-sm uppercase tracking-widest animate-pulse">
          Loading Ledger Records...
        </p>
      </div>
    );
  }

  return (
    <div className="pb-10 font-sans">
      {/* Header */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-3xl font-black text-slate-800 m-0 tracking-tight leading-none">
            Purchase History
          </h1>
          <p className="text-slate-500 text-sm mt-2 font-medium">
            Keep track of your vehicle parts acquisitions and financial receipts.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] border border-slate-100 p-8">
        <div className="flex justify-between items-center mb-6">
          <h4 className="m-0 text-lg font-black text-slate-800">
            Transaction Ledger
          </h4>
        </div>

        {history.length === 0 ? (
          <div className="p-16 text-center flex flex-col items-center gap-4 bg-slate-50 rounded-2xl border border-slate-100">
            <FileText size={48} className="text-slate-300" />
            <p className="text-slate-500 font-bold text-sm tracking-tight leading-relaxed max-w-sm m-0">
              No transactions recorded. When you purchase parts, invoices will be synchronized here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="pb-4 text-[10px] uppercase text-slate-400 font-black tracking-wider text-left">
                    INVOICE ID
                  </th>
                  <th className="pb-4 text-[10px] uppercase text-slate-400 font-black tracking-wider text-left">
                    TRANSACTION DATE
                  </th>
                  <th className="pb-4 text-[10px] uppercase text-slate-400 font-black tracking-wider text-left">
                    ISSUED BY
                  </th>
                  <th className="pb-4 text-[10px] uppercase text-slate-400 font-black tracking-wider text-right">
                    TOTAL AMOUNT
                  </th>
                  <th className="pb-4 text-[10px] uppercase text-slate-400 font-black tracking-wider text-center">
                    PAYMENT STATUS
                  </th>
                  <th className="pb-4 text-[10px] uppercase text-slate-400 font-black tracking-wider text-right">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {history.map((item) => (
                  <tr
                    key={item.salesInvoiceID}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 shadow-inner">
                          <FileText size={16} />
                        </div>
                        <span className="font-black text-sm text-slate-800 tracking-tight">
                          INV-{item.salesInvoiceID.toString().padStart(5, "0")}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {new Date(item.invoiceDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    <td className="py-4 text-sm font-semibold text-slate-600">
                      {item.staffName}
                    </td>
                    <td className="py-4 text-right font-black text-slate-800 text-sm tracking-tight">
                      ${item.totalAmount.toFixed(2)}
                    </td>
                    <td className="py-4 text-center">
                      <span
                        className={`text-[9px] font-black px-2.5 py-1 rounded-md tracking-wider border uppercase ${
                          item.paymentStatus === "Paid"
                            ? "bg-green-50 text-green-600 border-green-100"
                            : "bg-yellow-50 text-yellow-600 border-yellow-100"
                        }`}
                      >
                        {item.paymentStatus}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <button
                        onClick={() => setSelectedInvoice(item)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-bold text-slate-700 uppercase tracking-wider hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm group"
                      >
                        <Eye
                          size={14}
                          className="group-hover:scale-110 transition-transform"
                        />
                        View Invoice
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Detailed Invoice Modal */}
      {selectedInvoice && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-2xl p-8 border border-slate-100 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            {/* Modal Actions */}
            <div className="absolute top-6 right-6 flex gap-3">
              <button
                onClick={handlePrint}
                className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-800 bg-slate-50 cursor-pointer"
                title="Print Invoice"
              >
                <Printer size={16} />
              </button>
              <button
                onClick={() => setSelectedInvoice(null)}
                className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-800 bg-slate-50 cursor-pointer"
                title="Close"
              >
                <X size={16} />
              </button>
            </div>

            {/* Printable Invoice Container */}
            <div id="invoice-printable" className="p-2 font-mono text-slate-800">
              <div className="border-b-4 border-slate-900 pb-6 mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-1 uppercase font-sans">
                      VEHICLE PARTS SYSTEM
                    </h2>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      INVOICE SLIP
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold bg-slate-900 text-white px-3 py-1 rounded uppercase tracking-wider">
                      {selectedInvoice.paymentStatus}
                    </span>
                    <h4 className="text-sm font-bold text-slate-800 mt-3 m-0">
                      INV-{selectedInvoice.salesInvoiceID.toString().padStart(5, "0")}
                    </h4>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8 text-xs font-semibold">
                <div>
                  <p className="text-slate-400 font-bold uppercase tracking-wider mb-2 m-0 text-[10px]">
                    Billed To:
                  </p>
                  <p className="text-slate-800 m-0 font-bold">{user?.fullName}</p>
                  <p className="text-slate-500 m-0 mt-0.5">{user?.email}</p>
                  <p className="text-slate-500 m-0 mt-0.5">{user?.phoneNumber}</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-400 font-bold uppercase tracking-wider mb-2 m-0 text-[10px]">
                    Invoice Date:
                  </p>
                  <p className="text-slate-800 m-0">
                    {new Date(selectedInvoice.invoiceDate).toLocaleString()}
                  </p>
                  <p className="text-slate-400 font-bold uppercase tracking-wider mt-3 mb-1 m-0 text-[10px]">
                    Served By:
                  </p>
                  <p className="text-slate-800 m-0">{selectedInvoice.staffName}</p>
                </div>
              </div>

              <table className="w-full border-collapse mb-8 text-xs">
                <thead>
                  <tr className="border-b-2 border-slate-900 bg-slate-50">
                    <th className="py-2 text-left text-slate-800 font-bold">ITEM DESCRIPTION</th>
                    <th className="py-2 text-right text-slate-800 font-bold">QTY</th>
                    <th className="py-2 text-right text-slate-800 font-bold">UNIT PRICE</th>
                    <th className="py-2 text-right text-slate-800 font-bold">LINE TOTAL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {selectedInvoice.items?.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50">
                      <td className="py-3 font-semibold">{item.partName}</td>
                      <td className="py-3 text-right">{item.quantitySold}</td>
                      <td className="py-3 text-right">${item.unitPrice.toFixed(2)}</td>
                      <td className="py-3 text-right font-bold">${item.lineTotal.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex justify-end">
                <div className="w-64 flex flex-col gap-2 text-xs font-semibold">
                  <div className="flex justify-between text-slate-500">
                    <span>Subtotal:</span>
                    <span>${selectedInvoice.subtotal.toFixed(2)}</span>
                  </div>
                  {selectedInvoice.discountAmount > 0 && (
                    <div className="flex justify-between text-rose-500">
                      <span className="flex items-center gap-1">
                        <TrendingDown size={12} /> Discount:
                      </span>
                      <span>-${selectedInvoice.discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  {selectedInvoice.creditAmount > 0 && (
                    <div className="flex justify-between text-slate-500">
                      <span>Credited Balance:</span>
                      <span>${selectedInvoice.creditAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm font-black border-t border-slate-200 pt-2 text-slate-900">
                    <span>Total Amount:</span>
                    <span>${selectedInvoice.totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 mt-10 pt-6 text-center">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider m-0">
                  Thank you for your business. For refunds or returns, contact support.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PurchaseHistory;

</code>

src\pages\staff\CustomerDetails.jsx:
<code>
import React, { useState, useEffect } from "react";
import {
  User,
  Car,
  History,
  CreditCard,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ExternalLink,
  ShieldCheck,
  MoreHorizontal,
  Package,
  Loader2,
  ArrowLeft,
  TrendingUp,
  Briefcase,
  Plus,
} from "lucide-react";
import { customerService } from "../../services/api";

const CustomerDetails = ({ customerId, onBack }) => {
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (customerId) {
      fetchCustomerDetails();
    }
  }, [customerId]);

  const fetchCustomerDetails = async () => {
    try {
      const response = await customerService.getById(customerId);
      setCustomer(response.data);
    } catch (error) {
      console.error("Error fetching customer details:", error);
      try {
        const response = await customerService.getAll();
        const basicCustomer = response.data.find(
          (item) => item.customerID === customerId,
        );

        if (basicCustomer) {
          setCustomer({
            ...basicCustomer,
            totalSpent: 0,
            totalInvoices: 0,
            salesHistory: [],
          });
        }
      } catch (fallbackError) {
        console.error("Error fetching basic customer profile:", fallbackError);
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <Loader2 size={48} className="text-slate-900 animate-spin mb-4" />
        <p className="text-slate-500 font-black tracking-widest uppercase text-xs animate-pulse">
          Loading Customer Profile...
        </p>
      </div>
    );
  }

  if (!customer) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center mb-4 border border-slate-100">
          <User size={32} className="text-slate-200" />
        </div>
        <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">
          Profile not found
        </p>
        <button
          onClick={onBack}
          className="mt-6 text-blue-600 font-black uppercase tracking-widest text-xs flex items-center gap-2"
        >
          <ArrowLeft size={16} /> Return to Registry
        </button>
      </div>
    );
  }

  const totalSpent = customer.totalSpent || 0;

  return (
    <div className="pb-10 font-inter animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Strategic Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-3 rounded-2xl bg-white border border-slate-100 text-slate-400 hover:text-slate-900 hover:shadow-xl transition-all active:scale-90"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h2 className="text-3xl font-black text-slate-900 m-0 tracking-tight">
              Customer Profile Details
            </h2>
            <p className="text-slate-500 text-sm font-medium mt-1 uppercase tracking-widest text-[10px]">
              Reference: CST-{customer.customerID}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-slate-50 shadow-sm transition-all active:scale-95">
            <Mail size={16} /> Contact Hub
          </button>
          <button className="px-8 py-3 rounded-2xl bg-slate-900 text-white text-xs font-black uppercase tracking-widest flex items-center gap-3 hover:bg-black shadow-xl transition-all transform active:scale-95">
            <ShieldCheck size={18} /> Verify Profile
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Core Identity */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden relative">
            <div className="h-32 bg-slate-900 relative">
              <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                <TrendingUp size={120} className="text-white" />
              </div>
            </div>
            <div className="px-8 pb-10 -mt-16 relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-[2rem] bg-white p-2 shadow-2xl mb-6 group hover:rotate-6 transition-transform duration-500">
                  <div className="w-full h-full rounded-[1.5rem] bg-slate-900 flex items-center justify-center text-blue-400 text-4xl font-black tracking-tighter">
                    {customer.fullName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
                <h3 className="text-3xl font-black text-slate-900 m-0 tracking-tight leading-none">
                  {customer.fullName}
                </h3>
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mt-3 mb-8 bg-blue-50 px-3 py-1 rounded-full">
                  Primary Account Holder
                </p>

                <div className="w-full grid grid-cols-2 gap-4 mb-10">
                  <div className="bg-slate-50/50 p-5 rounded-3xl border border-slate-100">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 leading-none">
                      TOTAL SPENT
                    </p>
                    <p className="text-xl font-black text-slate-900 tracking-tighter">
                      ${totalSpent.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-slate-50/50 p-5 rounded-3xl border border-slate-100">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 leading-none">
                      VEHICLES
                    </p>
                    <p className="text-xl font-black text-slate-900 tracking-tighter">
                      {customer.vehicles?.length || 0}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all border border-slate-100 shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest m-0 leading-none mb-1.5">
                      Communication
                    </p>
                    <p className="text-sm font-black text-slate-900 m-0 tracking-tight">
                      Email Registry Active
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-pink-50 group-hover:text-pink-600 transition-all border border-slate-100 shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest m-0 leading-none mb-1.5">
                      Mobile Access
                    </p>
                    <p className="text-sm font-black text-slate-900 m-0 tracking-tight">
                      {customer.phoneNumber}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-all border border-slate-100 shadow-sm">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest m-0 leading-none mb-1.5">
                      Loyalty Tier
                    </p>
                    <p className="text-sm font-black text-emerald-600 m-0 tracking-tight uppercase">
                      Verified Partner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Assets & History */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          {/* Asset Registry */}
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-10 overflow-hidden relative">
            <div className="absolute -right-8 -top-8 text-slate-50">
              <Car size={160} />
            </div>
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 shadow-sm">
                    <Car size={24} />
                  </div>
                  <div>
                    <h4 className="m-0 text-xl font-black text-slate-900 tracking-tight">
                    Registered Vehicles
                  </h4>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1">
                    Vehicle Details & Models
                  </p>
                </div>
              </div>
              <button className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all flex items-center gap-2 shadow-xl active:scale-95">
                <Plus size={16} /> Add Vehicle
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {!customer.vehicles || customer.vehicles.length === 0 ? (
                <div className="col-span-2 py-12 text-center bg-slate-50/50 rounded-[2rem] border-2 border-dashed border-slate-100">
                  <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">
                    No vehicles currently registered
                  </p>
                </div>
                ) : (
                  customer.vehicles.map((vehicle) => (
                    <div
                      key={vehicle.vehicleID}
                      className="p-8 rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all cursor-pointer group relative overflow-hidden"
                    >
                      <div className="absolute -right-4 -bottom-4 text-blue-500/5 group-hover:scale-110 transition-transform duration-700">
                        <Car size={80} />
                      </div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="px-4 py-1.5 bg-white rounded-xl border border-slate-200 text-xs font-black tracking-widest shadow-sm group-hover:border-blue-500 transition-colors uppercase">
                          {vehicle.vehicleNumber}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-slate-900 transition-all">
                          <ExternalLink size={18} />
                        </div>
                      </div>
                      <p className="m-0 text-lg font-black text-slate-900 tracking-tight mb-2 leading-none">
                        {vehicle.brand} {vehicle.model}
                      </p>
                      <p className="m-0 text-[10px] text-slate-400 font-black uppercase tracking-widest flex items-center gap-2">
                        <ShieldCheck size={12} className="text-emerald-500" />{" "}
                        Vehicle Info Verified
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Ledger / History */}
          <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100">
            <div className="bg-slate-900 p-8 flex justify-between items-center text-white">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4 className="m-0 text-xs font-black uppercase tracking-widest">
                    Transaction History
                  </h4>
                  <p className="text-slate-400 text-[10px] font-bold mt-1 uppercase tracking-wider">
                    Past Sales & Orders
                  </p>
                </div>
              </div>
              <button className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all border border-white/10">
                <TrendingUp size={20} />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="pl-10 py-5 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">
                      Timeline
                    </th>
                    <th className="py-5 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">
                      Description
                    </th>
                    <th className="py-5 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">
                      Revenue
                    </th>
                    <th className="pr-10 py-5 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-right tracking-widest">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {!customer.salesHistory ||
                  customer.salesHistory.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="py-24 text-center">
                        <History
                          size={48}
                          className="mx-auto text-slate-100 mb-4"
                        />
                        <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">
                          No historical transactions detected
                        </p>
                      </td>
                    </tr>
                  ) : (
                    customer.salesHistory.map((row) => (
                      <tr
                        key={row.salesInvoiceID}
                        className="hover:bg-slate-50/50 transition-colors group"
                      >
                        <td className="pl-10 py-6 border-b border-slate-100">
                          <p className="text-xs font-black text-slate-900 m-0 tracking-tight">
                            {new Date(row.invoiceDate).toLocaleDateString(
                              undefined,
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              },
                            )}
                          </p>
                        </td>
                        <td className="py-6 border-b border-slate-100">
                          <p className="text-xs font-bold text-slate-600 m-0 tracking-tight uppercase leading-tight">
                            Sale Transaction #{row.salesInvoiceID}
                          </p>
                        </td>
                        <td className="py-6 border-b border-slate-100">
                          <p className="text-sm font-black text-blue-600 m-0 tracking-tighter">
                            ${row.totalAmount.toFixed(2)}
                          </p>
                        </td>
                        <td className="pr-10 py-6 border-b border-slate-100 text-right">
                          <span className="text-[9px] font-black px-3 py-1.5 rounded-xl tracking-widest border border-emerald-100 bg-emerald-50 text-emerald-600 uppercase shadow-sm">
                            FINALIZED
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
      </div>
    </div>
  );
};

export default CustomerDetails;

</code>

src\pages\staff\CustomerRegistration.jsx:
<code>
import React, { useState } from "react";
import {
  UserPlus,
  Car,
  Info,
  Save,
  User,
  MapPin,
  Phone,
  Mail,
  Hash,
  ShieldCheck,
  ChevronRight,
  Loader2,
  CheckCircle2,
  Calendar,
  Zap,
} from "lucide-react";
import { customerService } from "../../services/api";

const CustomerRegistration = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    brand: "",
    model: "",
    vehicleNumber: "",
    vehicleYear: new Date().getFullYear().toString(),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await customerService.registerWithVehicle(formData);
      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        address: "",
        brand: "",
        model: "",
        vehicleNumber: "",
        vehicleYear: new Date().getFullYear().toString(),
      });
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      alert(
        "Error registering customer: " +
          (error.response?.data?.message || "Server error"),
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pb-20 font-roboto">
      {/* Strategic Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 animate-xtra">
        <div>
          <h2 className="text-5xl font-bold text-[#111111] m-0 tracking-tighter font-oswald italic uppercase leading-none mb-2">
            CUSTOMER <span className="text-[#fcd20b]">REGISTRATION</span>
          </h2>
          <p className="text-[#7a7a7a] text-sm font-medium uppercase tracking-widest italic">
            Register new customer details and their primary vehicle
          </p>
        </div>
        <button
          type="submit"
          form="registration-form"
          disabled={loading}
          className="px-10 py-5 rounded-full bg-[#fcd20b] text-[#111111] font-oswald font-bold uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-[#111111] hover:text-[#fcd20b] shadow-2xl shadow-[#fcd20b]/20 transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <Save size={18} />
          )}
          {loading ? "PROCESSING..." : "COMPLETE REGISTRATION"}
        </button>
      </div>

      {success && (
        <div className="mb-12 p-8 bg-emerald-50 border border-emerald-100 rounded-[30px] flex items-center gap-6 text-emerald-700 animate-xtra">
          <div className="w-16 h-16 rounded-[20px] bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm">
            <CheckCircle2 size={32} />
          </div>
          <div>
            <p className="font-bold m-0 uppercase tracking-[0.2em] text-[10px] font-oswald italic">
              REGISTRATION SUCCESSFUL
            </p>
            <p className="text-sm font-medium opacity-80 m-0 uppercase tracking-tight">
              Customer profile established in the central registry database.
            </p>
          </div>
        </div>
      )}

      <form
        id="registration-form"
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
      >
        {/* Personal Information Card */}
        <div
          className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-black/5 animate-xtra"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="bg-[#111111] p-10 flex items-center gap-4 text-white">
            <User size={24} className="text-[#fcd20b]" />
            <h4 className="m-0 text-xl font-bold font-oswald italic uppercase tracking-tighter">
              PERSONAL <span className="text-[#fcd20b]">DETAILS</span>
            </h4>
          </div>

          <div className="p-12 flex flex-col gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                Full Legal Name
              </label>
              <div className="relative group">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#111111]/30 group-focus-within:text-[#fcd20b] transition-colors">
                  <User size={20} />
                </div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="e.g. JANE DOE"
                  className="w-full pl-16 pr-6 py-5 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                  Primary Phone
                </label>
                <div className="relative group">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#111111]/30 group-focus-within:text-[#fcd20b] transition-colors">
                    <Phone size={20} />
                  </div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    placeholder="+1 (555) 000-0000"
                    className="w-full pl-16 pr-6 py-5 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#111111]/30 group-focus-within:text-[#fcd20b] transition-colors">
                    <Mail size={20} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="JANE@EXAMPLE.COM"
                    className="w-full pl-16 pr-6 py-5 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                Service Address
              </label>
              <div className="relative group">
                <div className="absolute left-6 top-6 text-[#111111]/30 group-focus-within:text-[#fcd20b] transition-colors">
                  <MapPin size={20} />
                </div>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="STREET, CITY, STATE, ZIP CODE"
                  className="w-full pl-16 pr-6 py-6 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30 h-40 resize-none uppercase"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Vehicle Specification Card */}
        <div
          className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-black/5 animate-xtra"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="bg-[#111111] p-10 flex items-center gap-4 text-white">
            <Car size={24} className="text-[#fcd20b]" />
            <h4 className="m-0 text-xl font-bold font-oswald italic uppercase tracking-tighter">
              VEHICLE <span className="text-[#fcd20b]">SPECS</span>
            </h4>
          </div>

          <div className="p-12 flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                  License Plate
                </label>
                <div className="relative group">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#111111]/30 group-focus-within:text-[#fcd20b] transition-colors">
                    <Hash size={20} />
                  </div>
                  <input
                    type="text"
                    name="vehicleNumber"
                    value={formData.vehicleNumber}
                    onChange={handleChange}
                    required
                    placeholder="ABC-1234"
                    className="w-full pl-16 pr-6 py-5 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30 uppercase"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                  Model Year
                </label>
                <div className="relative group">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#111111]/30 group-focus-within:text-[#fcd20b] transition-colors">
                    <Calendar size={20} />
                  </div>
                  <input
                    type="number"
                    name="vehicleYear"
                    value={formData.vehicleYear}
                    onChange={handleChange}
                    required
                    placeholder="2024"
                    className="w-full pl-16 pr-6 py-5 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                  Vehicle Brand
                </label>
                <div className="relative group">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#111111]/30 group-focus-within:text-[#fcd20b] transition-colors">
                    <ShieldCheck size={20} />
                  </div>
                  <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    required
                    placeholder="e.g. TOYOTA"
                    className="w-full pl-16 pr-6 py-5 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30 uppercase"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                  Vehicle Model
                </label>
                <div className="relative group">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#111111]/30 group-focus-within:text-[#fcd20b] transition-colors">
                    <ShieldCheck size={20} />
                  </div>
                  <input
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    required
                    placeholder="e.g. CAMRY SE"
                    className="w-full pl-16 pr-6 py-5 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30 uppercase"
                  />
                </div>
              </div>
            </div>

            <div className="p-8 bg-[#fcd20b]/5 rounded-[30px] border border-[#fcd20b]/10 flex gap-6 items-start shadow-inner mt-8">
              <div className="w-14 h-14 rounded-[18px] bg-white shadow-md flex items-center justify-center text-[#fcd20b] shrink-0">
                <Info size={28} />
              </div>
              <div>
                <p className="m-0 text-[10px] font-bold text-[#111111] tracking-[0.1em] uppercase font-oswald italic">
                  Data Validation
                </p>
                <p className="m-0 text-[11px] text-[#7a7a7a] mt-2 leading-relaxed font-bold uppercase tracking-tight">
                  Customer details and vehicle information will be securely saved to the database.
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CustomerRegistration;

</code>

src\pages\staff\CustomerReports.jsx:
<code>
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

</code>

src\pages\staff\CustomerSearch.jsx:
<code>
import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Eye,
  Phone,
  MapPin,
  Car,
  Hash,
  ArrowRight,
  User,
  MoreVertical,
  ShieldCheck,
  Mail,
  Loader2,
  Plus,
  Users,
} from "lucide-react";
import Pagination from "../../components/Pagination";
import { customerService } from "../../services/api";

const CustomerSearch = ({ setActiveScreen, setSelectedCustomerId }) => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All Vehicle Types");

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await customerService.getAll();
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCustomers = customers.filter((c) => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      c.fullName.toLowerCase().includes(searchLower) ||
      (c.phoneNumber || "").includes(searchLower) ||
      c.vehicles?.some((v) =>
        (v.vehicleNumber || "").toLowerCase().includes(searchLower),
      );

    return matchesSearch;
  });

  const handleViewProfile = (id) => {
    setSelectedCustomerId(id);
    setActiveScreen("CustomerDetails");
  };

  return (
    <div className="pb-10 font-inter">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h2 className="text-3xl font-black text-slate-900 m-0 tracking-tight">
            Customer Database
          </h2>
          <p className="text-slate-500 text-sm font-medium mt-1">
            Search for customers using name, vehicle plates, or phone numbers.
          </p>
        </div>
        <button
          onClick={() => setActiveScreen("Registration")}
          className="px-6 py-3 rounded-2xl bg-slate-900 text-white text-xs font-black uppercase tracking-widest flex items-center gap-3 hover:bg-black shadow-xl transition-all transform active:scale-95"
        >
          <Plus size={18} /> New Registration
        </button>
      </div>

      {/* Advanced Search & Filter Bar */}
      <div className="bg-white rounded-[2rem] shadow-2xl p-8 mb-10 border border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          <div className="md:col-span-2 relative group">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search Name, Phone, or Plate (e.g. ABC-1234)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-6 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-slate-900 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 shadow-sm transition-all placeholder:text-slate-400"
            />
          </div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-slate-900 outline-none focus:bg-white focus:border-blue-500 shadow-sm cursor-pointer appearance-none transition-all"
          >
            <option>All Vehicle Types</option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Truck / Utility</option>
            <option>Performance</option>
          </select>
          <div className="bg-blue-600 text-white p-4 rounded-2xl text-center font-black uppercase text-[10px] tracking-widest shadow-lg shadow-blue-600/20">
            {filteredCustomers.length} Records Found
          </div>
        </div>
      </div>

      {/* Main Results Directory */}
      <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100">
        <div className="bg-slate-900 p-8 flex justify-between items-center text-white">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
              <Users size={24} />
            </div>
            <div>
              <h4 className="m-0 text-xs font-black uppercase tracking-widest">
                Customer List
              </h4>
              <p className="text-slate-400 text-[10px] font-bold mt-1 uppercase tracking-wider">
                Search results from customer database
              </p>
            </div>
          </div>
          <button
            onClick={fetchCustomers}
            className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all border border-white/10"
          >
            <Filter size={18} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="pl-10 py-5 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">
                  Customer Identity
                </th>
                <th className="py-5 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">
                  Primary Vehicle
                </th>
                <th className="py-5 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">
                  Contact Info
                </th>
                <th className="py-5 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">
                  Status
                </th>
                <th className="pr-10 py-5 text-right text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 tracking-widest">
                  Management
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="py-24 text-center">
                    <Loader2
                      size={40}
                      className="text-blue-600 animate-spin mx-auto mb-4"
                    />
                    <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">
                      Loading customers...
                    </p>
                  </td>
                </tr>
              ) : filteredCustomers.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-24 text-center">
                    <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center mx-auto mb-4 border border-slate-100 text-slate-300">
                      <Search size={32} />
                    </div>
                    <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">
                      No records match your query parameters
                    </p>
                  </td>
                </tr>
              ) : (
                filteredCustomers.map((item) => (
                  <tr
                    key={item.customerID}
                    className="group hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="pl-10 py-6 border-b border-slate-100">
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-slate-900 text-blue-400 flex items-center justify-center font-black text-xs shadow-lg group-hover:scale-110 transition-transform">
                          {item.fullName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <p className="font-black text-slate-900 m-0 leading-tight tracking-tight">
                            {item.fullName}
                          </p>
                          <p className="text-[10px] text-slate-400 m-0 font-black uppercase tracking-widest mt-1">
                            ID: CST-{item.customerID}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 border-b border-slate-100">
                      {item.vehicles && item.vehicles.length > 0 ? (
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-blue-500 transition-colors">
                            <Car size={18} />
                          </div>
                          <div>
                            <p className="text-xs font-black text-slate-900 m-0 tracking-tight">
                              {item.vehicles[0].vehicleNumber}
                            </p>
                            <p className="text-[10px] text-slate-400 m-0 font-bold uppercase tracking-widest">
                              {item.vehicles[0].brand} {item.vehicles[0].model}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                          No Vehicles
                        </span>
                      )}
                    </td>
                    <td className="py-6 border-b border-slate-100">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                        <Phone size={14} className="text-slate-300" />{" "}
                        {item.phoneNumber}
                      </div>
                    </td>
                    <td className="py-6 border-b border-slate-100">
                      <span className="text-[9px] font-black px-3 py-1.5 rounded-xl tracking-widest border border-emerald-100 bg-emerald-50 text-emerald-600 uppercase shadow-sm">
                        ACTIVE
                      </span>
                    </td>
                    <td className="pr-10 py-6 border-b border-slate-100 text-right">
                      <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                        <button
                          onClick={() => handleViewProfile(item.customerID)}
                          className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-black transition-all shadow-xl active:scale-95 group/btn"
                        >
                          Profile{" "}
                          <ArrowRight
                            size={14}
                            className="group-hover/btn:translate-x-1 transition-transform"
                          />
                        </button>
                        <button className="p-2.5 rounded-xl bg-white text-slate-400 hover:text-slate-900 hover:shadow-xl border border-slate-100 transition-all active:scale-90">
                          <MoreVertical size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <Pagination
            totalItems={filteredCustomers.length}
            itemsPerPage={10}
            currentPage={1}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerSearch;

</code>

src\pages\staff\EmailInvoice.jsx:
<code>
import React, { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  CreditCard,
  FileText,
  Loader2,
  Mail,
  RefreshCw,
  Search,
  Send,
  User,
} from "lucide-react";
import { salesService } from "../../services/api";

const formatCurrency = (value = 0) =>
  `$${Number(value).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const EmailInvoice = () => {
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [sendingId, setSendingId] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const loadInvoices = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await salesService.getAllInvoices();
      const invoiceRows = response.data || [];
      setInvoices(invoiceRows);
      setSelectedInvoiceId((currentId) => currentId || invoiceRows[0]?.salesInvoiceID || null);
    } catch (err) {
      setError(err.response?.data?.message || "Unable to load invoices.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInvoices();
  }, []);

  const filteredInvoices = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return invoices;

    return invoices.filter((invoice) => {
      const invoiceId = String(invoice.salesInvoiceID || "");
      return (
        invoiceId.includes(query) ||
        invoice.customerName?.toLowerCase().includes(query) ||
        invoice.paymentStatus?.toLowerCase().includes(query)
      );
    });
  }, [invoices, searchTerm]);

  const selectedInvoice = invoices.find(
    (invoice) => invoice.salesInvoiceID === selectedInvoiceId,
  );

  const handleSendEmail = async (invoiceId) => {
    try {
      setSendingId(invoiceId);
      setError("");
      setSuccess("");
      await salesService.sendEmail(invoiceId);
      setSuccess(`Invoice #INV-${String(invoiceId).padStart(5, "0")} was emailed successfully.`);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to send invoice email. Confirm the customer has an email address.",
      );
    } finally {
      setSendingId(null);
    }
  };

  return (
    <div className="pb-10 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h2 className="text-3xl font-black text-slate-900 m-0 tracking-tight">
            Dispatch Digital Invoice
          </h2>
          <p className="text-slate-500 text-sm font-medium mt-1">
            Select a saved sales invoice and send the backend-generated invoice email.
          </p>
        </div>
        <button
          onClick={loadInvoices}
          className="px-5 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-slate-50 shadow-sm transition-all active:scale-95"
        >
          <RefreshCw size={16} /> Refresh
        </button>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl text-red-800 text-xs font-bold flex gap-2 items-center">
          <AlertCircle size={16} className="shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-xl text-green-800 text-xs font-bold flex gap-2 items-center">
          <CheckCircle2 size={16} className="shrink-0" />
          <span>{success}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="bg-slate-900 p-6 text-white">
            <div className="flex items-center gap-3 mb-5">
              <Mail size={18} className="text-blue-400" />
              <h4 className="m-0 text-xs font-black uppercase tracking-widest">
                Invoice Queue
              </h4>
            </div>
            <div className="relative">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
              />
              <input
                type="text"
                placeholder="Search invoices..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/10 text-xs font-bold text-white outline-none placeholder:text-white/30 focus:bg-white focus:text-slate-900"
              />
            </div>
          </div>

          <div className="max-h-[620px] overflow-y-auto">
            {loading ? (
              <div className="py-20 text-center">
                <Loader2 size={36} className="mx-auto text-blue-500 animate-spin mb-4" />
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Loading invoice queue...
                </p>
              </div>
            ) : filteredInvoices.length === 0 ? (
              <div className="p-10 text-center text-slate-400 text-xs font-bold">
                No invoices matched your search.
              </div>
            ) : (
              filteredInvoices.map((invoice) => (
                <button
                  key={invoice.salesInvoiceID}
                  onClick={() => setSelectedInvoiceId(invoice.salesInvoiceID)}
                  className={`w-full text-left p-5 border-b border-slate-100 transition-all ${
                    selectedInvoiceId === invoice.salesInvoiceID
                      ? "bg-blue-50"
                      : "bg-white hover:bg-slate-50"
                  }`}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <p className="m-0 text-sm font-black text-slate-900">
                        INV-{String(invoice.salesInvoiceID).padStart(5, "0")}
                      </p>
                      <p className="m-0 mt-1 text-xs font-bold text-slate-500">
                        {invoice.customerName}
                      </p>
                    </div>
                    <span className="text-[9px] font-black px-2.5 py-1 rounded-md tracking-wider border uppercase bg-slate-50 text-slate-600 border-slate-100">
                      {invoice.paymentStatus}
                    </span>
                  </div>
                  <p className="m-0 mt-3 text-lg font-black text-slate-900">
                    {formatCurrency(invoice.totalAmount)}
                  </p>
                </button>
              ))
            )}
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="bg-slate-900 p-8 flex justify-between items-center text-white">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                <FileText size={24} />
              </div>
              <div>
                <h4 className="m-0 text-xs font-black uppercase tracking-widest">
                  Email Preview
                </h4>
                <p className="text-slate-400 text-[10px] font-bold mt-1 uppercase tracking-wider">
                  Backend template and SMTP/mock delivery
                </p>
              </div>
            </div>
            {selectedInvoice && (
              <button
                onClick={() => handleSendEmail(selectedInvoice.salesInvoiceID)}
                disabled={sendingId === selectedInvoice.salesInvoiceID}
                className="px-6 py-3 rounded-2xl bg-blue-600 text-white text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-blue-700 shadow-lg transition-all active:scale-95 disabled:opacity-60"
              >
                {sendingId === selectedInvoice.salesInvoiceID ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
                Send Email
              </button>
            )}
          </div>

          {!selectedInvoice ? (
            <div className="p-16 text-center">
              <FileText size={56} className="mx-auto text-slate-200 mb-4" />
              <p className="text-slate-400 font-bold text-sm">
                Select an invoice from the queue to preview delivery details.
              </p>
            </div>
          ) : (
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <User size={18} className="text-blue-500 mb-3" />
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest m-0">
                    Customer
                  </p>
                  <p className="text-sm font-black text-slate-900 m-0 mt-1">
                    {selectedInvoice.customerName}
                  </p>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <CreditCard size={18} className="text-blue-500 mb-3" />
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest m-0">
                    Payment
                  </p>
                  <p className="text-sm font-black text-slate-900 m-0 mt-1">
                    {selectedInvoice.paymentStatus}
                  </p>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <Mail size={18} className="text-blue-500 mb-3" />
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest m-0">
                    Total
                  </p>
                  <p className="text-sm font-black text-slate-900 m-0 mt-1">
                    {formatCurrency(selectedInvoice.totalAmount)}
                  </p>
                </div>
              </div>

              <div className="border border-slate-100 rounded-2xl overflow-hidden">
                <table className="w-full border-collapse text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="p-4 text-left text-[10px] font-black text-slate-500 uppercase tracking-widest">
                        Part
                      </th>
                      <th className="p-4 text-right text-[10px] font-black text-slate-500 uppercase tracking-widest">
                        Qty
                      </th>
                      <th className="p-4 text-right text-[10px] font-black text-slate-500 uppercase tracking-widest">
                        Line Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedInvoice.items?.map((item) => (
                      <tr key={item.salesInvoiceItemID} className="border-t border-slate-100">
                        <td className="p-4 font-bold text-slate-800">{item.partName}</td>
                        <td className="p-4 text-right font-bold text-slate-500">
                          {item.quantitySold}
                        </td>
                        <td className="p-4 text-right font-black text-slate-900">
                          {formatCurrency(item.lineTotal)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 flex justify-end">
                <div className="w-full max-w-xs flex flex-col gap-2 text-sm font-bold">
                  <div className="flex justify-between text-slate-500">
                    <span>Subtotal</span>
                    <span>{formatCurrency(selectedInvoice.subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-emerald-600">
                    <span>Discount</span>
                    <span>-{formatCurrency(selectedInvoice.discountAmount)}</span>
                  </div>
                  <div className="flex justify-between text-amber-600">
                    <span>Outstanding Credit</span>
                    <span>{formatCurrency(selectedInvoice.creditAmount)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-black text-slate-900 border-t border-slate-200 pt-3 mt-2">
                    <span>Total</span>
                    <span>{formatCurrency(selectedInvoice.totalAmount)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailInvoice;

</code>

src\pages\staff\SalesInvoice.jsx:
<code>
import React, { useState, useEffect } from "react";
import {
  FileText,
  Plus,
  Search,
  Trash2,
  Send,
  Printer,
  Download,
  Save,
  User,
  Mail,
  Phone,
  Hash,
  ChevronDown,
  AlertCircle,
  CheckCircle2,
  MoreVertical,
  Calendar,
  CreditCard,
  Box,
  X,
  Loader2,
  UserPlus,
  Zap,
} from "lucide-react";
import {
  salesService,
  customerService,
  partsService,
} from "../../services/api";

const SalesInvoice = () => {
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [customers, setCustomers] = useState([]);
  const [parts, setParts] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [salesItems, setSalesItems] = useState([]);
  const [paymentStatus, setPaymentStatus] = useState("Paid");
  const [creditAmount, setCreditAmount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [partSearch, setPartSearch] = useState("");

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    try {
      const [custRes, partsRes] = await Promise.all([
        customerService.getAll(),
        partsService.getAll(),
      ]);
      setCustomers(custRes.data);
      setParts(partsRes.data);
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setFetching(false);
    }
  };

  const addItem = (part) => {
    const existing = salesItems.find((item) => item.partID === part.partID);
    if (existing) {
      setSalesItems(
        salesItems.map((item) =>
          item.partID === part.partID
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setSalesItems([
        ...salesItems,
        {
          partID: part.partID,
          partName: part.partName,
          partPrice: part.sellingPrice || 0,
          quantity: 1,
        },
      ]);
    }
  };

  const removeItem = (partID) => {
    setSalesItems(salesItems.filter((item) => item.partID !== partID));
  };

  const updateQty = (partID, delta) => {
    setSalesItems(
      salesItems.map((item) => {
        if (item.partID === partID) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      }),
    );
  };

  const subtotal = salesItems.reduce(
    (acc, item) => acc + item.partPrice * item.quantity,
    0,
  );
  
  const loyaltyDiscount = subtotal > 5000 ? subtotal * 0.10 : 0;
  const netSubtotal = subtotal - loyaltyDiscount;
  const total = netSubtotal;

  const handleSubmit = async () => {
    if (!selectedCustomer) return alert("Please select a customer");
    if (salesItems.length === 0) return alert("Please add at least one item");

    setLoading(true);
    try {
      const userString = localStorage.getItem("user");
      const user = userString ? JSON.parse(userString) : null;
      const staffID = user?.StaffID || user?.staffID || 1;
      const normalizedCredit =
        paymentStatus === "Partial" ? Number(creditAmount) : 0;

      if (
        paymentStatus === "Partial" &&
        (normalizedCredit <= 0 || normalizedCredit >= total)
      ) {
        alert("Partial payment requires a credit amount greater than 0 and less than the invoice total.");
        setLoading(false);
        return;
      }

      const invoiceData = {
        customerID: selectedCustomer.customerID,
        staffID: staffID,
        paymentStatus,
        creditAmount: normalizedCredit,
        items: salesItems.map((item) => ({
          partID: item.partID,
          quantity: item.quantity,
        })),
      };
      await salesService.createInvoice(invoiceData);
      alert("Invoice created successfully!");
      setSalesItems([]);
      setSelectedCustomer(null);
      setPaymentStatus("Paid");
      setCreditAmount(0);
      loadInitialData();
    } catch (error) {
      alert(
        "Error creating invoice: " +
          (error.response?.data?.message || "Server error"),
      );
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center font-roboto">
        <Loader2 size={60} className="text-[#fcd20b] animate-spin mb-6" />
        <p className="text-[#7a7a7a] font-bold font-oswald uppercase tracking-[0.3em] text-xs animate-pulse">
          Initializing Billing Engine Database...
        </p>
      </div>
    );
  }

  return (
    <div className="pb-20 font-roboto">
      {/* Dynamic Strategic Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 animate-xtra">
        <div>
          <div className="flex items-center gap-6 mb-4">
            <h2 className="text-5xl font-bold text-[#111111] m-0 tracking-tighter font-oswald italic uppercase leading-none">
              BILLING <span className="text-[#fcd20b]">TERMINAL</span>
            </h2>
            <span className="px-5 py-2 rounded-full bg-[#111111] text-[9px] font-bold text-[#fcd20b] uppercase tracking-[0.2em] shadow-lg font-oswald">
              LIVE SESSION ACTIVE
            </span>
          </div>
          <p className="text-[#7a7a7a] text-sm font-medium uppercase tracking-widest italic">
            Point of Sale Checkout & Invoice Generation
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-8 py-4 rounded-full border-2 border-black/5 bg-white text-[#111111] text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-[#fcd20b] hover:border-[#fcd20b] transition-all shadow-sm font-oswald">
            <Save size={16} /> SAVE PROGRESS
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-10 py-5 rounded-full bg-[#fcd20b] text-[#111111] font-oswald font-bold uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-[#111111] hover:text-[#fcd20b] shadow-2xl shadow-[#fcd20b]/20 transition-all transform active:scale-95 disabled:opacity-50"
          >
            {loading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Send size={18} />
            )}
            {loading ? "SUBMITTING..." : "FINALIZE & SUBMIT"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 flex flex-col gap-10">
          {/* Main Item Builder */}
          <div
            className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-black/5 flex flex-col animate-xtra"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="bg-[#111111] p-10 flex flex-col sm:flex-row justify-between items-center gap-6 text-white">
              <h4 className="m-0 font-bold font-oswald italic uppercase tracking-tighter text-xl">
                LINE ASSET <span className="text-[#fcd20b]">MANIFEST</span>
              </h4>
              <div className="relative w-full sm:w-80 group">
                <Search
                  size={18}
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-[#fcd20b]"
                />
                <input
                  type="text"
                  placeholder="SCAN OR SEARCH ASSETS..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-16 pr-6 text-[10px] text-white outline-none focus:bg-white focus:text-[#111111] focus:border-[#fcd20b] transition-all uppercase font-bold tracking-widest"
                  value={partSearch}
                  onChange={(e) => setPartSearch(e.target.value)}
                />
                {partSearch && (
                  <div className="absolute top-full left-0 right-0 mt-4 bg-white rounded-[30px] shadow-3xl border border-black/5 z-50 max-h-80 overflow-y-auto p-4 animate-in fade-in slide-in-from-top-4 duration-300">
                    {parts
                      .filter((p) =>
                        p.partName
                          .toLowerCase()
                          .includes(partSearch.toLowerCase()),
                      )
                      .map((part) => (
                        <button
                          key={part.partID}
                          onClick={() => {
                            addItem(part);
                            setPartSearch("");
                          }}
                          className="w-full p-5 rounded-2xl hover:bg-[#f8f8f8] text-left flex justify-between items-center transition-all group/item"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[#f8f8f8] flex items-center justify-center text-[#111111]/30 group-hover/item:bg-[#fcd20b] group-hover/item:text-[#111111] transition-all">
                              <Box size={18} />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-[#111111] m-0 font-oswald italic uppercase tracking-tight">
                                {part.partName}
                              </p>
                              <p className="text-[9px] text-[#7a7a7a] m-0 font-bold tracking-widest uppercase">
                                STOCK: {part.stockQuantity} UNITS
                              </p>
                            </div>
                          </div>
                          <p className="text-sm font-bold text-[#fcd20b] bg-[#111111] px-4 py-1.5 rounded-full font-oswald tracking-tighter">
                            ${(part.sellingPrice || 0).toFixed(2)}
                          </p>
                        </button>
                      ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1 min-h-[400px]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#f8f8f8]">
                    <th className="pl-10 py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 text-left tracking-[0.2em] font-oswald italic">
                      Specification
                    </th>
                    <th className="py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 text-left tracking-[0.2em] font-oswald italic">
                      Unit Price
                    </th>
                    <th className="py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 text-left tracking-[0.2em] font-oswald italic">
                      Qty
                    </th>
                    <th className="py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 text-left tracking-[0.2em] font-oswald italic">
                      Subtotal
                    </th>
                    <th className="pr-10 py-6 border-b border-black/5 text-right"></th>
                  </tr>
                </thead>
                <tbody>
                  {salesItems.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="py-32 text-center">
                        <Box
                          size={80}
                          className="mx-auto text-[#f8f8f8] mb-6"
                        />
                        <p className="text-[#7a7a7a] font-bold uppercase tracking-[0.3em] text-[10px] font-oswald italic">
                          MANIFEST EMPTY · AWAITING ASSET SCAN
                        </p>
                      </td>
                    </tr>
                  ) : (
                    salesItems.map((item) => (
                      <tr
                        key={item.partID}
                        className="group hover:bg-[#f8f8f8] transition-all duration-300"
                      >
                        <td className="pl-10 py-8 border-b border-black/5">
                          <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-[20px] bg-[#f8f8f8] border border-black/5 flex items-center justify-center text-[#111111]/30 shadow-sm group-hover:scale-110 group-hover:bg-[#fcd20b] group-hover:text-[#111111] transition-all duration-500">
                              <Box size={24} />
                            </div>
                            <div>
                              <p className="font-bold text-lg m-0 text-[#111111] tracking-tighter leading-none mb-2 font-oswald italic uppercase">
                                {item.partName}
                              </p>
                              <p className="text-[10px] text-[#7a7a7a] m-0 font-bold uppercase tracking-widest">
                                SKU: {item.partID.toString().padStart(6, "0")}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-8 border-b border-black/5">
                          <p className="text-xl font-bold text-[#111111] m-0 tracking-tighter font-oswald italic">
                            ${item.partPrice.toFixed(2)}
                          </p>
                        </td>
                        <td className="py-8 border-b border-black/5">
                          <div className="flex items-center gap-4">
                            <button
                              onClick={() => updateQty(item.partID, -1)}
                              className="w-10 h-10 rounded-xl border border-black/5 bg-white flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-[#fcd20b] transition-all shadow-sm font-oswald font-bold"
                            >
                              -
                            </button>
                            <span className="text-xl font-bold text-[#111111] w-8 text-center font-oswald italic">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQty(item.partID, 1)}
                              className="w-10 h-10 rounded-xl border border-black/5 bg-white flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-[#fcd20b] transition-all shadow-sm font-oswald font-bold"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-8 border-b border-black/5">
                          <p className="text-xl font-bold text-[#fcd20b] bg-[#111111] px-5 py-2 rounded-full w-fit tracking-tighter font-oswald italic">
                            ${(item.partPrice * item.quantity).toFixed(2)}
                          </p>
                        </td>
                        <td className="pr-10 py-8 border-b border-black/5 text-right">
                          <button
                            onClick={() => removeItem(item.partID)}
                            className="w-10 h-10 rounded-xl bg-white text-rose-500 hover:bg-rose-500 hover:text-white border border-black/5 transition-all shadow-sm opacity-0 group-hover:opacity-100 flex items-center justify-center"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>

              <div className="p-12 border-t border-black/5 flex flex-col md:flex-row justify-between gap-12 bg-[#f8f8f8]/50">
                <div className="flex-1">
                  <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] mb-4 block ml-1 font-oswald italic">
                    Payment Handling
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
                    <select
                      value={paymentStatus}
                      onChange={(e) => {
                        setPaymentStatus(e.target.value);
                        if (e.target.value !== "Partial") setCreditAmount(0);
                      }}
                      className="w-full px-5 py-4 rounded-2xl bg-white border-2 border-transparent outline-none focus:border-[#fcd20b] shadow-xl text-sm font-bold text-[#111111] font-oswald italic"
                    >
                      <option value="Paid">Paid in full</option>
                      <option value="Partial">Partial payment</option>
                      <option value="Unpaid">Unpaid credit</option>
                    </select>
                    <input
                      type="number"
                      min="0"
                      max={Math.max(total - 0.01, 0)}
                      value={paymentStatus === "Partial" ? creditAmount : 0}
                      onChange={(e) => setCreditAmount(e.target.value)}
                      disabled={paymentStatus !== "Partial"}
                      className="w-full px-5 py-4 rounded-2xl bg-white border-2 border-transparent outline-none focus:border-[#fcd20b] shadow-xl text-sm font-bold text-[#111111] font-oswald italic disabled:opacity-50"
                      placeholder="Outstanding credit"
                    />
                  </div>
                  <p className="text-[10px] text-[#7a7a7a] font-bold mt-4 uppercase tracking-widest">
                    Discounts, stock reduction, credit balance, and invoice email are handled by the backend.
                  </p>
                </div>
                <div className="w-full md:w-96 flex flex-col gap-6">
                  <div className="flex justify-between items-center group/total">
                    <span className="text-[11px] font-bold text-[#7a7a7a] tracking-[0.2em] uppercase font-oswald italic group-hover/total:text-[#111111] transition-colors">
                      Manifest Subtotal
                    </span>
                    <span className="text-xl font-bold text-[#111111] font-oswald italic">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  {loyaltyDiscount > 0 && (
                    <div className="flex justify-between items-center group/total">
                      <span className="text-[11px] font-bold text-emerald-500 tracking-[0.2em] uppercase font-oswald italic transition-colors flex items-center gap-2">
                        <Zap size={14} className="fill-emerald-500" /> Loyalty Discount (10%)
                      </span>
                      <span className="text-xl font-bold text-emerald-500 font-oswald italic">
                        -${loyaltyDiscount.toFixed(2)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between items-center mt-4 pt-10 border-t-4 border-[#111111]">
                    <span className="text-sm font-bold text-[#111111] tracking-[0.3em] uppercase font-oswald italic">
                      Backend Invoice Total
                    </span>
                    <span className="text-6xl font-bold text-[#111111] tracking-tighter font-oswald italic leading-none">
                      <span className="text-[#fcd20b] text-4xl mr-1">$</span>
                      {total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Internal Memo Card */}
          <div
            className="bg-white rounded-[40px] shadow-2xl p-10 border border-black/5 animate-xtra"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[#f8f8f8] flex items-center justify-center text-[#111111]/30 shadow-sm border border-black/5">
                <FileText size={24} />
              </div>
              <h4 className="m-0 text-xl font-bold text-[#111111] font-oswald italic uppercase tracking-tighter">
                BILLING NOTES <span className="text-[#fcd20b]">& LEGAL</span>
              </h4>
            </div>
            <textarea
              placeholder="INCLUDE SPECIFIC WARRANTY TERMS OR SERVICE NOTES..."
              className="w-full px-8 py-6 rounded-[30px] bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30 h-40 resize-none uppercase tracking-widest text-[11px]"
            ></textarea>
          </div>
        </div>

        {/* Right Information Hub */}
        <div className="flex flex-col gap-10">
          <div
            className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-black/5 animate-xtra"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="bg-[#111111] p-10 text-white flex justify-between items-center">
              <h4 className="m-0 text-xl font-bold font-oswald italic uppercase tracking-tighter">
                CLIENT <span className="text-[#fcd20b]">METADATA</span>
              </h4>
              <UserPlus
                size={24}
                className="cursor-pointer hover:text-[#fcd20b] transition-all hover:scale-110"
              />
            </div>
            <div className="p-10">
              <div className="relative mb-10 group">
                <Search
                  size={20}
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-[#111111]/30 group-focus-within:text-[#fcd20b]"
                />
                <input
                  type="text"
                  placeholder="SCAN CLIENT DATABASE..."
                  className="w-full pl-16 pr-6 py-5 rounded-full bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] text-[10px] tracking-widest"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <div className="absolute top-full left-0 right-0 mt-4 bg-white rounded-[30px] shadow-3xl border border-black/5 z-50 max-h-64 overflow-y-auto p-4 animate-in fade-in slide-in-from-top-4 duration-300">
                    {customers
                      .filter((c) =>
                        c.fullName
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()),
                      )
                      .map((customer) => (
                        <button
                          key={customer.customerID}
                          onClick={() => {
                            setSelectedCustomer(customer);
                            setSearchTerm("");
                          }}
                          className="w-full p-5 rounded-2xl hover:bg-[#f8f8f8] text-left font-bold text-[11px] text-[#111111] font-oswald uppercase tracking-widest transition-all"
                        >
                          {customer.fullName}
                        </button>
                      ))}
                  </div>
                )}
              </div>

              {selectedCustomer ? (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="flex items-center gap-6 mb-10 p-8 rounded-[35px] bg-[#111111] text-white shadow-2xl group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                      <CreditCard size={80} />
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-[#fcd20b] shadow-inner relative z-10">
                      <User size={32} />
                    </div>
                    <div className="relative z-10">
                      <h4 className="m-0 text-xl font-bold font-oswald italic uppercase tracking-tighter">
                        {selectedCustomer.fullName}
                      </h4>
                      <p className="m-0 text-[10px] font-bold text-[#fcd20b] uppercase tracking-[0.2em] mt-1 font-oswald">
                        ID:{" "}
                        {selectedCustomer.customerID
                          .toString()
                          .padStart(5, "0")}{" "}
                        · ACTIVE
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedCustomer(null)}
                      className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <div className="space-y-6 px-4">
                    <div className="flex items-center gap-6 group/info">
                      <div className="w-12 h-12 rounded-xl bg-[#f8f8f8] flex items-center justify-center text-[#111111]/30 border border-black/5 group-hover/info:bg-[#fcd20b] group-hover/info:text-[#111111] transition-all">
                        <Mail size={18} />
                      </div>
                      <span className="text-[11px] font-bold text-[#111111] tracking-widest uppercase font-oswald">
                        {selectedCustomer.email}
                      </span>
                    </div>
                    <div className="flex items-center gap-6 group/info">
                      <div className="w-12 h-12 rounded-xl bg-[#f8f8f8] flex items-center justify-center text-[#111111]/30 border border-black/5 group-hover/info:bg-[#fcd20b] group-hover/info:text-[#111111] transition-all">
                        <Phone size={18} />
                      </div>
                      <span className="text-[11px] font-bold text-[#111111] tracking-widest uppercase font-oswald">
                        {selectedCustomer.phoneNumber}
                      </span>
                    </div>
                  </div>

                  <div className="mt-12 pt-10 border-t border-black/5">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-bold text-[#7a7a7a] uppercase tracking-[0.2em] font-oswald italic">
                        Account Loyalty Status
                      </span>
                      <span className="text-[10px] font-bold text-emerald-500 font-oswald uppercase tracking-widest">
                        OPTIMAL
                      </span>
                    </div>
                    <div className="h-3 bg-[#f8f8f8] rounded-full overflow-hidden shadow-inner border border-black/5">
                      <div className="h-full w-[94%] bg-[#111111] rounded-full shadow-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-[#fcd20b]/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-16 text-center border-4 border-dashed border-[#f8f8f8] rounded-[40px] group hover:border-[#fcd20b]/20 transition-all cursor-pointer">
                  <UserPlus
                    size={48}
                    className="mx-auto text-[#f8f8f8] mb-4 group-hover:text-[#fcd20b] transition-all"
                  />
                  <p className="text-[10px] text-[#7a7a7a] font-bold uppercase tracking-[0.2em] font-oswald italic">
                    INITIALIZE CLIENT SELECTION
                  </p>
                </div>
              )}
            </div>
          </div>

          <div
            className="bg-[#111111] rounded-[40px] p-10 shadow-2xl relative overflow-hidden group animate-xtra"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="absolute -right-6 -bottom-6 text-white/5 group-hover:scale-110 transition-transform duration-1000">
              <AlertCircle size={140} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#fcd20b] flex items-center justify-center text-[#111111] shadow-xl">
                  <AlertCircle size={24} />
                </div>
                <h4 className="m-0 text-xl font-bold text-white font-oswald italic uppercase tracking-tighter">
                  PROTOCOL <span className="text-[#fcd20b]">VERIFICATION</span>
                </h4>
              </div>
              <ul className="m-0 pl-0 space-y-5 list-none">
                {[
                  "CROSS-REFERENCE PART IDS WITH ERP LABELS.",
                  "APPLY LOYALTY DISCOUNTS IF APPLICABLE.",
                  "MANAGER OVERRIDE NEEDED FOR TRANSACTIONS >$5K.",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex gap-4 text-[10px] font-bold text-white/60 leading-relaxed font-oswald uppercase tracking-widest"
                  >
                    <CheckCircle2
                      size={16}
                      className="shrink-0 text-[#fcd20b] mt-0.5"
                    />{" "}
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesInvoice;

</code>

src\pages\staff\StaffDashboard.jsx:
<code>
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

</code>

src\pages\Auth.jsx:
<code>
import React, { useState } from "react";
import {
  User,
  Lock,
  Mail,
  ChevronRight,
  ArrowLeft,
  ShieldCheck,
  UserPlus,
  Car,
  Settings,
  Phone,
  MapPin,
  Package,
  Sparkles,
} from "lucide-react";
import { authService } from "../services/api";

const Auth = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgot, setIsForgot] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Form states
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (isLogin) {
        const response = await authService.login({
          email: formData.email,
          password: formData.password,
        });

        const { token, user } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        onLogin(user);
      } else {
        await authService.register(formData);
        setIsLogin(true);
        setError("Registration successful! Please login.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.response?.data ||
          "An error occurred. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (isForgot) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#111111] p-6 font-roboto">
        <div className="max-w-md w-full bg-white rounded-[30px] p-12 shadow-2xl animate-xtra">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-[#fcd20b] rounded-3xl flex items-center justify-center text-[#111111] mx-auto mb-6 shadow-lg shadow-[#fcd20b]/20">
              <Lock size={36} />
            </div>
            <h2 className="text-3xl font-bold text-[#111111] font-oswald italic uppercase">
              RESTORE <span className="text-[#fcd20b]">ACCESS</span>
            </h2>
            <p className="text-[#7a7a7a] text-sm mt-3 font-medium">
              Verify your email to reset security credentials.
            </p>
          </div>

          <div className="mb-8">
            <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] mb-3 block ml-1 font-oswald">
              Email Identification
            </label>
            <div className="relative">
              <Mail
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#111111]/40"
                size={20}
              />
              <input
                type="email"
                placeholder="OPERATOR@SYSTEM.COM"
                className="w-full pl-14 pr-6 py-4 bg-[#f8f8f8] border-2 border-transparent rounded-2xl outline-none focus:border-[#fcd20b] focus:bg-white transition-all font-bold text-[#111111]"
              />
            </div>
          </div>

          <button className="w-full bg-[#111111] hover:bg-[#fcd20b] hover:text-[#111111] text-[#fcd20b] py-5 rounded-full font-oswald font-bold uppercase tracking-widest transition-all shadow-xl shadow-black/10">
            SEND RECOVERY LINK
          </button>

          <button
            onClick={() => setIsForgot(false)}
            className="w-full mt-8 bg-transparent border-none text-[#7a7a7a] flex items-center justify-center gap-2 cursor-pointer text-[10px] font-bold uppercase tracking-widest hover:text-[#111111] transition-colors"
          >
            <ArrowLeft size={16} /> RETURN TO GATEWAY
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-[#111111] font-roboto overflow-hidden">
      {/* Left Visual Panel - Cinematic Automotive Look */}
      <div className="hidden lg:flex flex-1 relative px-20 flex-col justify-center text-white border-r border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Car"
            className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]/80" />
        </div>

        <div className="relative z-10 max-w-xl animate-xtra">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-16 h-16 bg-[#fcd20b] rounded-[20px] flex items-center justify-center text-[#111111] shadow-2xl shadow-[#fcd20b]/30 transform -rotate-3">
              <Package size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold font-oswald italic tracking-tighter m-0 uppercase leading-none">
                VEHICLE <span className="text-[#fcd20b]">PARTS</span>
              </h1>
              <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] m-0 mt-1">
                Management Engine v8.0
              </p>
            </div>
          </div>

          <h2 className="text-6xl font-bold font-oswald uppercase leading-[0.95] tracking-tighter mb-8 italic">
            DOMINATE YOUR <br />
            <span className="text-[#fcd20b] text-7xl">OPERATIONS.</span>
          </h2>

          <p className="text-lg text-white/60 font-medium leading-relaxed mb-12 max-w-md">
            The world's most aggressive platform for inventory synchronization,
            staff performance, and financial intelligence.
          </p>

          <div className="grid grid-cols-2 gap-12">
            <div className="flex items-start gap-5">
              <div className="mt-1 p-3 bg-[#fcd20b]/10 rounded-2xl border border-[#fcd20b]/20 text-[#fcd20b]">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold font-oswald uppercase tracking-tighter mb-1">
                  ENCRYPTED
                </h4>
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                  Enterprise Security
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="mt-1 p-3 bg-white/5 rounded-2xl border border-white/10 text-white">
                <Sparkles size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold font-oswald uppercase tracking-tighter mb-1">
                  REAL-TIME
                </h4>
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                  Instant Processing
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Status Indicator */}
        <div
          className="absolute bottom-12 left-12 right-12 flex items-center gap-8 animate-xtra"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full border-4 border-[#111111] bg-[#222222] overflow-hidden ring-1 ring-white/10"
              >
                <img
                  src={`https://i.pravatar.cc/150?u=automotive${i}`}
                  alt="Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div>
            <p className="text-xs font-bold text-white m-0">
              942+ ACTIVE OPERATORS
            </p>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest m-0">
                Synchronized Across 4 Nodes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Auth Form Panel */}
      <div className="flex-1 flex items-center justify-center p-8 bg-[#111111]">
        <div className="max-w-md w-full bg-white rounded-[40px] p-12 lg:p-14 shadow-2xl animate-xtra">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-[#111111] mb-2 tracking-tighter font-oswald italic uppercase">
              <span
                dangerouslySetInnerHTML={{
                  __html: isLogin
                    ? 'SYSTEM <span class="text-[#fcd20b]">LOGIN</span>'
                    : 'CREATE <span class="text-[#fcd20b]">IDENTITY</span>',
                }}
              />
            </h2>
            <div className="h-1.5 w-12 bg-[#fcd20b] mx-auto rounded-full mt-4"></div>
          </div>

          {error && (
            <div className="mb-8 p-5 bg-rose-50 border-l-4 border-rose-500 text-rose-800 text-xs font-bold rounded-r-2xl animate-xtra">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald">
Real Name                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-[#111111]/30"
                      size={18}
                    />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="FULL NAME"
                      className="w-full pl-14 pr-6 py-4 bg-[#f8f8f8] border-2 border-transparent rounded-2xl outline-none focus:border-[#fcd20b] focus:bg-white transition-all font-bold text-[#111111]"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald">
Phone Number                    </label>
                    <div className="relative">
                      <Phone
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-[#111111]/30"
                        size={18}
                      />
                      <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="PHONE"
                        className="w-full pl-14 pr-6 py-4 bg-[#f8f8f8] border-2 border-transparent rounded-2xl outline-none focus:border-[#fcd20b] focus:bg-white transition-all font-bold text-[#111111]"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald">
                      Location
                    </label>
                    <div className="relative">
                      <MapPin
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-[#111111]/30"
                        size={18}
                      />
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="CITY"
                        className="w-full pl-14 pr-6 py-4 bg-[#f8f8f8] border-2 border-transparent rounded-2xl outline-none focus:border-[#fcd20b] focus:bg-white transition-all font-bold text-[#111111]"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald">
                Enail
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-[#111111]/30"
                  size={18}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="USER@DOMAIN.COM"
                  className="w-full pl-14 pr-6 py-4 bg-[#f8f8f8] border-2 border-transparent rounded-2xl outline-none focus:border-[#fcd20b] focus:bg-white transition-all font-bold text-[#111111]"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] font-oswald">
                  Password
                </label>
                {isLogin && (
                  <button
                    type="button"
                    onClick={() => setIsForgot(true)}
                    className="border-none background-transparent text-[#fcd20b] bg-[#111111] px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-black transition-colors"
                  >
                    Lost Key?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-[#111111]/30"
                  size={18}
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-14 pr-6 py-4 bg-[#f8f8f8] border-2 border-transparent rounded-2xl outline-none focus:border-[#fcd20b] focus:bg-white transition-all font-bold text-[#111111]"
                  required
                />
              </div>
            </div>

            <button
              disabled={loading}
              className={`w-full bg-[#111111] hover:bg-black text-[#fcd20b] py-5 rounded-full font-oswald font-bold uppercase tracking-[0.2em] transition-all shadow-2xl flex items-center justify-center gap-4 group ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-[#fcd20b]/30 border-t-[#fcd20b] rounded-full animate-spin" />
              ) : (
                <>
                  {isLogin ? "AUTHENTICATE" : "INITIALIZE"}
                  <ChevronRight
                    size={18}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </>
              )}
            </button>
          </form>

          <p className="text-center mt-10 text-[11px] font-bold text-[#7a7a7a] uppercase tracking-widest font-oswald">
            {isLogin ? "NEW TO THE CORE?" : "RECOGNIZED OPERATOR?"}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
              }}
              className="ml-2 text-[#111111] font-black border-b-2 border-[#fcd20b] hover:text-[#fcd20b] transition-all"
            >
              {isLogin ? "CREATE PROFILE" : "GATEWAY LOGIN"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;

</code>

src\services\api.js:
<code>
import axios from "axios";

const API_BASE_URL = "http://localhost:5051/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the JWT token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export const authService = {
  login: (credentials) => api.post("/Auth/login", credentials),
  register: (userData) => api.post("/Auth/register", userData),
};

export const staffService = {
  getAll: () => api.get("/Staff"),
  getById: (id) => api.get(`/Staff/${id}`),
  create: (data) => api.post("/Staff", data),
  update: (id, data) => api.put(`/Staff/${id}`, data),
  delete: (id) => api.delete(`/Staff/${id}`),
};

export const vendorService = {
  getAll: () => api.get("/Vendors"),
  getById: (id) => api.get(`/Vendors/${id}`),
  create: (data) => api.post("/Vendors", data),
  update: (id, data) => api.put(`/Vendors/${id}`, data),
  delete: (id) => api.delete(`/Vendors/${id}`),
};

export const partsService = {
  getAll: () => api.get("/Parts"),
  getById: (id) => api.get(`/Parts/${id}`),
  create: (data) => api.post("/Parts", data),
  update: (id, data) => api.put(`/Parts/${id}`, data),
  delete: (id) => api.delete(`/Parts/${id}`),
  getLowStock: () => api.get("/Parts/low-stock"),
};

export const customerService = {
  getAll: () => api.get("/Customers"),
  getById: (id) => api.get(`/Customers/${id}/details`),
  search: (term) => api.get(`/Customers/search?term=${term}`),
  registerWithVehicle: (data) =>
    api.post("/Customers/register-with-vehicle", data),
  getHistory: (id) => api.get(`/Customers/${id}/history`),
};

export const salesService = {
  createInvoice: (data) => api.post("/SalesInvoice", data),
  getAllInvoices: () => api.get("/SalesInvoice"),
  getInvoice: (id) => api.get(`/SalesInvoice/${id}`),
  updatePayment: (id, data) => api.put(`/SalesInvoice/${id}/payment`, data),
  sendEmail: (id) => api.post(`/SalesInvoice/${id}/send-email`),
};

export const purchasesService = {
  getAll: () => api.get("/Purchases"),
  getById: (id) => api.get(`/Purchases/${id}`),
  create: (data) => api.post("/Purchases", data),
};

export const customerSelfServiceService = {
  getProfile: () => api.get("/customer-self-service/profile"),
  updateProfile: (data) => api.put("/customer-self-service/profile", data),
  getHistory: () => api.get("/customer-self-service/history"),
  getVehicles: () => api.get("/customer-self-service/vehicles"),
  registerVehicle: (data) => api.post("/customer-self-service/vehicles", data),
  updateVehicle: (id, data) => api.put(`/customer-self-service/vehicles/${id}`, data),
  deleteVehicle: (id) => api.delete(`/customer-self-service/vehicles/${id}`),
  bookAppointment: (data) => api.post("/customer-self-service/appointments", data),
  getAppointments: () => api.get("/customer-self-service/appointments"),
  cancelAppointment: (id) => api.put(`/customer-self-service/appointments/${id}/cancel`),
  submitReview: (data) => api.post("/customer-self-service/reviews", data),
  getReviews: () => api.get("/customer-self-service/reviews"),
  requestPart: (data) => api.post("/customer-self-service/part-requests", data),
  getPartRequests: () => api.get("/customer-self-service/part-requests"),
};

export const reportService = {
  getDailyFinancial: () => api.get("/Reports/financial/daily"),
  getMonthlyFinancial: () => api.get("/Reports/financial/monthly"),
  getYearlyFinancial: () => api.get("/Reports/financial/yearly"),
  getFinancialSummary: () => api.get("/Reports/financial/summary"),
  getRegularCustomers: () => api.get("/Reports/regular-customers"),
  getTopSpenders: () => api.get("/Reports/top-spenders"),
  getPendingCredits: () => api.get("/Reports/pending-credits"),
  triggerNotifications: () => api.post("/Reports/trigger-notifications"),
};

export default api;

</code>

src\App.jsx:
<code>
import React, { useCallback, useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Auth from "./pages/Auth";

// Admin Pages
import FinancialDashboard from "./pages/admin/FinancialDashboard";
import StaffManagement from "./pages/admin/StaffManagement";
import PartsManagement from "./pages/admin/PartsManagement";
import PurchaseInvoice from "./pages/admin/PurchaseInvoice";
import VendorManagement from "./pages/admin/VendorManagement";

// Staff Pages
import CustomerRegistration from "./pages/staff/CustomerRegistration";
import SalesInvoice from "./pages/staff/SalesInvoice";
import CustomerSearch from "./pages/staff/CustomerSearch";
import CustomerDetails from "./pages/staff/CustomerDetails";
import CustomerReports from "./pages/staff/CustomerReports";
import EmailInvoice from "./pages/staff/EmailInvoice";
import StaffDashboard from "./pages/staff/StaffDashboard";

// Customer Pages
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import PurchaseHistory from "./pages/customer/PurchaseHistory";
import AppointmentRequests from "./pages/customer/AppointmentRequests";
import BuySell from "./pages/customer/BuySell";
import AssetDetails from "./pages/customer/AssetDetails";

// Common Pages
import Profile from "./pages/common/Profile";
import Settings from "./pages/common/Settings";
import Notifications from "./pages/common/Notifications";
import MenuOverview from "./pages/common/MenuOverview";

const SCREEN_ROUTES = {
  Financial: { path: "/admin/financial", roles: ["admin"] },
  Staff: { path: "/admin/staff", roles: ["admin"] },
  Parts: { path: "/admin/parts", roles: ["admin"] },
  Purchases: { path: "/admin/purchases", roles: ["admin"] },
  Vendors: { path: "/admin/vendors", roles: ["admin"] },
  StaffDash: { path: "/staff/dashboard", roles: ["staff"] },
  Registration: { path: "/staff/customers/new", roles: ["staff"] },
  SalesInvoice: { path: "/staff/sales-invoice", roles: ["staff"] },
  CustomerSearch: { path: "/staff/customers", roles: ["staff"] },
  CustomerDetails: { path: "/staff/customers/details", roles: ["staff"] },
  CustomerReports: { path: "/staff/reports", roles: ["staff"] },
  EmailInvoice: { path: "/staff/email-invoice", roles: ["staff"] },
  CustomerDash: { path: "/customer/dashboard", roles: ["customer"] },
  History: { path: "/customer/history", roles: ["customer"] },
  Appointments: { path: "/customer/appointments", roles: ["customer"] },
  Marketplace: { path: "/customer/marketplace", roles: ["customer"] },
  AssetDetails: { path: "/customer/asset-details", roles: ["customer"] },
  Profile: { path: "/profile" },
  Settings: { path: "/settings" },
  Notifications: { path: "/notifications" },
  MenuOverview: { path: "/menu" },
};

const getDefaultScreen = (role) => {
  const normalizedRole = role?.toLowerCase();
  if (normalizedRole === "admin") return "Financial";
  if (normalizedRole === "staff") return "StaffDash";
  if (normalizedRole === "customer") return "CustomerDash";
  return "Financial";
};

const getScreenFromPath = (pathname) => {
  return Object.entries(SCREEN_ROUTES).find(
    ([, route]) => route.path === pathname,
  )?.[0];
};

const isScreenAllowed = (screen, role) => {
  const route = SCREEN_ROUTES[screen];
  const normalizedRole = role?.toLowerCase();
  return Boolean(route && (!route.roles || route.roles.includes(normalizedRole)));
};

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeScreen, setActiveScreen] = useState("Financial");
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      const routeScreen = getScreenFromPath(window.location.pathname);
      const nextScreen =
        routeScreen && isScreenAllowed(routeScreen, parsedUser.role)
          ? routeScreen
          : getDefaultScreen(parsedUser.role);

      setUser(parsedUser);
      setActiveScreen(nextScreen);

      if (!routeScreen || !isScreenAllowed(routeScreen, parsedUser.role)) {
        window.history.replaceState(null, "", SCREEN_ROUTES[nextScreen].path);
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!user) return undefined;

    const handlePopState = () => {
      const routeScreen = getScreenFromPath(window.location.pathname);
      const nextScreen =
        routeScreen && isScreenAllowed(routeScreen, user.role)
          ? routeScreen
          : getDefaultScreen(user.role);
      setActiveScreen(nextScreen);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [user]);

  const navigateToScreen = useCallback(
    (screen, options = {}) => {
      if (!user) return;

      const nextScreen = isScreenAllowed(screen, user.role)
        ? screen
        : getDefaultScreen(user.role);
      const path = SCREEN_ROUTES[nextScreen]?.path || "/";

      setActiveScreen(nextScreen);

      if (window.location.pathname !== path) {
        const historyMethod = options.replace ? "replaceState" : "pushState";
        window.history[historyMethod](null, "", path);
      }
    },
    [user],
  );

  const handleLogin = (userData) => {
    const nextScreen = getDefaultScreen(userData.role);
    setUser(userData);
    setActiveScreen(nextScreen);
    window.history.replaceState(null, "", SCREEN_ROUTES[nextScreen].path);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setSelectedAsset(null);
    setSelectedCustomerId(null);
    window.history.replaceState(null, "", "/login");
  };

  const handleExploreAsset = (asset) => {
    setSelectedAsset(asset);
    navigateToScreen("AssetDetails");
  };

  const renderScreen = () => {
    switch (activeScreen) {
      // Admin
      case "Financial":
        return <FinancialDashboard />;
      case "Staff":
        return <StaffManagement />;
      case "Parts":
        return <PartsManagement />;
      case "Purchases":
        return <PurchaseInvoice />;
      case "Vendors":
        return <VendorManagement />;

      // Staff
      case "StaffDash":
        return <StaffDashboard setActiveScreen={navigateToScreen} />;
      case "Registration":
        return <CustomerRegistration />;
      case "SalesInvoice":
        return <SalesInvoice />;
      case "CustomerSearch":
        return (
          <CustomerSearch
            setActiveScreen={navigateToScreen}
            setSelectedCustomerId={setSelectedCustomerId}
          />
        );
      case "CustomerDetails":
        return (
          <CustomerDetails
            customerId={selectedCustomerId}
            onBack={() => setActiveScreen("CustomerSearch")}
          />
        );
      case "CustomerReports":
        return <CustomerReports />;
      case "EmailInvoice":
        return <EmailInvoice />;

      // Customer
      case "CustomerDash":
        return <CustomerDashboard user={user} setActiveScreen={navigateToScreen} />;
      case "History":
        return <PurchaseHistory user={user} />;
      case "Appointments":
        return <AppointmentRequests user={user} />;
      case "Marketplace":
        return <BuySell onExploreAsset={handleExploreAsset} />;
      case "AssetDetails":
        return selectedAsset ? (
          <AssetDetails
            asset={selectedAsset}
            onBack={() => navigateToScreen("Marketplace")}
          />
        ) : (
          <BuySell onExploreAsset={handleExploreAsset} />
        );

      // Common
      case "Profile":
        return <Profile user={user} />;
      case "Settings":
        return <Settings />;
      case "Notifications":
        return <Notifications user={user} />;
      case "MenuOverview":
        return <MenuOverview setActiveScreen={navigateToScreen} />;

      default:
        return (
          <div className="p-10 text-center">
            Screen "{activeScreen}" coming soon.
          </div>
        );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="w-12 h-12 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <div className="flex min-h-screen bg-[#f8f8f8] overflow-x-hidden font-roboto">
      <Sidebar
        activeScreen={activeScreen}
        setActiveScreen={navigateToScreen}
        userRole={user.role}
        onLogout={handleLogout}
      />

      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300 lg:pl-[300px]">
        <Navbar
          activeScreen={activeScreen}
          setActiveScreen={navigateToScreen}
          user={user}
        />

        <main className="flex-1 p-6 lg:p-12 pt-4">
          <div className="max-w-7xl mx-auto animate-xtra">{renderScreen()}</div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;

</code>

src\index.css:
<code>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&family=Roboto:wght@400;500;700&display=swap');
@import "tailwindcss";

@theme {
  --color-primary: #fcd20b;
  --color-primary-hover: #e5bd0a;
  --color-secondary: #111111;
  --color-secondary-light: #222222;
  
  --color-text-main: #111111;
  --color-text-muted: #7a7a7a;
  
  --font-oswald: "Oswald", sans-serif;
  --font-roboto: "Roboto", sans-serif;

  --radius-card: 20px;
  --radius-pill: 50px;

  --shadow-soft: 0px 10px 30px rgba(0, 0, 0, 0.05);
  --shadow-hover: 0px 15px 40px rgba(0, 0, 0, 0.1);
}

@layer base {
  body {
    @apply font-roboto bg-[#f8f8f8] text-[#111111] antialiased m-0;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-oswald uppercase font-bold tracking-tight m-0 italic;
  }
}

@layer components {
  .btn-xtra-primary {
    @apply bg-[#fcd20b] text-[#111111] px-9 py-4 rounded-full font-oswald font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:bg-[#111111] hover:text-[#fcd20b] hover:-translate-y-0.5 active:scale-95 shadow-lg shadow-[#fcd20b]/20 flex items-center justify-center gap-3;
  }

  .card-xtra {
    @apply bg-white rounded-[30px] p-8 shadow-xl border border-black/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden relative;
  }

  .input-xtra {
    @apply w-full px-6 py-4 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none transition-all duration-300 focus:bg-white focus:border-[#fcd20b] font-bold text-[#111111] placeholder:text-[#7a7a7a]/40;
  }
}

/* Custom Utilities */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.animate-xtra {
  animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

</code>

src\main.jsx:
<code>
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

</code>

eslint.config.js:
<code>
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'react-hooks/exhaustive-deps': 'off',
      'react-hooks/immutability': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/static-components': 'off',
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrors: 'none',
          varsIgnorePattern: '^[A-Z_]',
        },
      ],
    },
  },
])

</code>

index.html:
<code>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>my-vehicle</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

</code>

package-lock.json:
<code>
{
  "name": "my-vehicle",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "my-vehicle",
      "version": "0.0.0",
      "dependencies": {
        "axios": "^1.16.1",
        "lucide-react": "^1.11.0",
        "react": "^19.2.5",
        "react-dom": "^19.2.5"
      },
      "devDependencies": {
        "@eslint/js": "^10.0.1",
        "@tailwindcss/postcss": "^4.2.4",
        "@tailwindcss/vite": "^4.2.4",
        "@types/react": "^19.2.14",
        "@types/react-dom": "^19.2.3",
        "@vitejs/plugin-react": "^6.0.1",
        "autoprefixer": "^10.5.0",
        "eslint": "^10.2.1",
        "eslint-plugin-react-hooks": "^7.1.1",
        "eslint-plugin-react-refresh": "^0.5.2",
        "globals": "^17.5.0",
        "postcss": "^8.5.12",
        "tailwindcss": "^4.2.4",
        "vite": "^8.0.10"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.29.0",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.29.0.tgz",
      "integrity": "sha512-9NhCeYjq9+3uxgdtp20LSiJXJvN0FeCtNGpJxuMFZ1Kv3cWUNb6DOhJwUvcVCzKGR66cw4njwM6hrJLqgOwbcw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.28.5",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.29.0",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.29.0.tgz",
      "integrity": "sha512-T1NCJqT/j9+cn8fvkt7jtwbLBfLC/1y1c7NtCeXFRgzGTsafi68MRv8yzkYSapBnFA6L3U2VSc02ciDzoAJhJg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.29.0",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.29.0.tgz",
      "integrity": "sha512-CGOfOJqWjg2qW/Mb6zNsDm+u5vFQ8DxXfbM09z69p5Z6+mE1ikP2jUXw+j42Pf1XTYED2Rni5f95npYeuwMDQA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.0",
        "@babel/generator": "^7.29.0",
        "@babel/helper-compilation-targets": "^7.28.6",
        "@babel/helper-module-transforms": "^7.28.6",
        "@babel/helpers": "^7.28.6",
        "@babel/parser": "^7.29.0",
        "@babel/template": "^7.28.6",
        "@babel/traverse": "^7.29.0",
        "@babel/types": "^7.29.0",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.29.1",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.29.1.tgz",
      "integrity": "sha512-qsaF+9Qcm2Qv8SRIMMscAvG4O3lJ0F1GuMo5HR/Bp02LopNgnZBC/EkbevHFeGs4ls/oPz9v+Bsmzbkbe+0dUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.29.0",
        "@babel/types": "^7.29.0",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.28.6",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.28.6.tgz",
      "integrity": "sha512-JYtls3hqi15fcx5GaSNL7SCTJ2MNmjrkHXg4FSpOA/grxK8KwyZ5bubHsCq8FXCkua6xhuaaBit+3b7+VZRfcA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.28.6",
        "@babel/helper-validator-option": "^7.27.1",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.28.0.tgz",
      "integrity": "sha512-+W6cISkXFa1jXsDEdYA8HeevQT/FULhxzR99pxphltZcVaugps53THCeiWA8SguxxpSp3gKPiuYfSWopkLQ4hw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.28.6",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.28.6.tgz",
      "integrity": "sha512-l5XkZK7r7wa9LucGw9LwZyyCUscb4x37JWTPz7swwFE/0FMQAGpiWUZn8u9DzkSBWEcK25jmvubfpw2dnAMdbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.28.6",
        "@babel/types": "^7.28.6"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.28.6",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.28.6.tgz",
      "integrity": "sha512-67oXFAYr2cDLDVGLXTEABjdBJZ6drElUSI7WKp70NrpyISso3plG9SAGEF6y7zbha/wOzUByWWTJvEDVNIUGcA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.28.6",
        "@babel/helper-validator-identifier": "^7.28.5",
        "@babel/traverse": "^7.28.6"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.27.1.tgz",
      "integrity": "sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.28.5.tgz",
      "integrity": "sha512-qSs4ifwzKJSV39ucNjsvc6WVHs6b7S03sOh2OcHF9UHfVPqWWALUsNUVzhSBiItjRZoLHx7nIarVjqKVusUZ1Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.27.1.tgz",
      "integrity": "sha512-YvjJow9FxbhFFKDSuFnVCe2WxXk1zWc22fFePVNEaWJEu8IrZVlda6N0uHwzZrUM1il7NC9Mlp4MaJYbYd9JSg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.29.2",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.29.2.tgz",
      "integrity": "sha512-HoGuUs4sCZNezVEKdVcwqmZN8GoHirLUcLaYVNBK2J0DadGtdcqgr3BCbvH8+XUo4NGjNl3VOtSjEKNzqfFgKw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.28.6",
        "@babel/types": "^7.29.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.29.2",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.29.2.tgz",
      "integrity": "sha512-4GgRzy/+fsBa72/RZVJmGKPmZu9Byn8o4MoLpmNe1m8ZfYnz5emHLQz3U4gLud6Zwl0RZIcgiLD7Uq7ySFuDLA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.29.0"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.28.6",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.28.6.tgz",
      "integrity": "sha512-YA6Ma2KsCdGb+WC6UpBVFJGXL58MDA6oyONbjyF/+5sBgxY/dwkhLogbMT2GXXyU84/IhRw/2D1Os1B/giz+BQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.28.6",
        "@babel/parser": "^7.28.6",
        "@babel/types": "^7.28.6"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.29.0",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.29.0.tgz",
      "integrity": "sha512-4HPiQr0X7+waHfyXPZpWPfWL/J7dcN1mx9gL6WdQVMbPnF3+ZhSMs8tCxN7oHddJE9fhNE7+lxdnlyemKfJRuA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.0",
        "@babel/generator": "^7.29.0",
        "@babel/helper-globals": "^7.28.0",
        "@babel/parser": "^7.29.0",
        "@babel/template": "^7.28.6",
        "@babel/types": "^7.29.0",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.29.0",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.29.0.tgz",
      "integrity": "sha512-LwdZHpScM4Qz8Xw2iKSzS+cfglZzJGvofQICy7W7v4caru4EaAmyUuO6BGrbyQ2mYV11W0U8j5mBhd14dd3B0A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.28.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@emnapi/core": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/@emnapi/core/-/core-1.10.0.tgz",
      "integrity": "sha512-yq6OkJ4p82CAfPl0u9mQebQHKPJkY7WrIuk205cTYnYe+k2Z8YBh11FrbRG/H6ihirqcacOgl2BIO8oyMQLeXw==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/wasi-threads": "1.2.1",
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.10.0.tgz",
      "integrity": "sha512-ewvYlk86xUoGI0zQRNq/mC+16R1QeDlKQy21Ki3oSYXNgLb45GV1P6A0M+/s6nyCuNDqe5VpaY84BzXGwVbwFA==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/wasi-threads": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@emnapi/wasi-threads/-/wasi-threads-1.2.1.tgz",
      "integrity": "sha512-uTII7OYF+/Mes/MrcIOYp5yOtSMLBWSIoLPpcgwipoiKbli6k322tcoFsxoIIxPDqW01SQGAgko4EzZi2BNv2w==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.9.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.9.1.tgz",
      "integrity": "sha512-phrYmNiYppR7znFEdqgfWHXR6NCkZEK7hwWDHZUjit/2/U0r6XvkDl0SYnoM51Hq7FhCGdLDT6zxCCOY1hexsQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.2",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.2.tgz",
      "integrity": "sha512-EriSTlt5OC9/7SXkRSCAhfSxxoSUgBm33OH+IkwbdpgoqsSsUg7y3uh+IICI/Qg4BBWr3U2i39RpmycbxMq4ew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/config-array": {
      "version": "0.23.5",
      "resolved": "https://registry.npmjs.org/@eslint/config-array/-/config-array-0.23.5.tgz",
      "integrity": "sha512-Y3kKLvC1dvTOT+oGlqNQ1XLqK6D1HU2YXPc52NmAlJZbMMWDzGYXMiPRJ8TYD39muD/OTjlZmNJ4ib7dvSrMBA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/object-schema": "^3.0.5",
        "debug": "^4.3.1",
        "minimatch": "^10.2.4"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      }
    },
    "node_modules/@eslint/config-helpers": {
      "version": "0.5.5",
      "resolved": "https://registry.npmjs.org/@eslint/config-helpers/-/config-helpers-0.5.5.tgz",
      "integrity": "sha512-eIJYKTCECbP/nsKaaruF6LW967mtbQbsw4JTtSVkUQc9MneSkbrgPJAbKl9nWr0ZeowV8BfsarBmPpBzGelA2w==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^1.2.1"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      }
    },
    "node_modules/@eslint/core": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@eslint/core/-/core-1.2.1.tgz",
      "integrity": "sha512-MwcE1P+AZ4C6DWlpin/OmOA54mmIZ/+xZuJiQd4SyB29oAJjN30UW9wkKNptW2ctp4cEsvhlLY/CsQ1uoHDloQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@types/json-schema": "^7.0.15"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      }
    },
    "node_modules/@eslint/js": {
      "version": "10.0.1",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-10.0.1.tgz",
      "integrity": "sha512-zeR9k5pd4gxjZ0abRoIaxdc7I3nDktoXZk2qOv9gCNWx3mVwEn32VRhyLaRsDiJjTs0xq/T8mfPtyuXu7GWBcA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      },
      "peerDependencies": {
        "eslint": "^10.0.0"
      },
      "peerDependenciesMeta": {
        "eslint": {
          "optional": true
        }
      }
    },
    "node_modules/@eslint/object-schema": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/@eslint/object-schema/-/object-schema-3.0.5.tgz",
      "integrity": "sha512-vqTaUEgxzm+YDSdElad6PiRoX4t8VGDjCtt05zn4nU810UIx/uNEV7/lZJ6KwFThKZOzOxzXy48da+No7HZaMw==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      }
    },
    "node_modules/@eslint/plugin-kit": {
      "version": "0.7.1",
      "resolved": "https://registry.npmjs.org/@eslint/plugin-kit/-/plugin-kit-0.7.1.tgz",
      "integrity": "sha512-rZAP3aVgB9ds9KOeUSL+zZ21hPmo8dh6fnIFwRQj5EAZl9gzR7wxYbYXYysAM8CTqGmUGyp2S4kUdV17MnGuWQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^1.2.1",
        "levn": "^0.4.1"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      }
    },
    "node_modules/@humanfs/core": {
      "version": "0.19.2",
      "resolved": "https://registry.npmjs.org/@humanfs/core/-/core-0.19.2.tgz",
      "integrity": "sha512-UhXNm+CFMWcbChXywFwkmhqjs3PRCmcSa/hfBgLIb7oQ5HNb1wS0icWsGtSAUNgefHeI+eBrA8I1fxmbHsGdvA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanfs/types": "^0.15.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/node": {
      "version": "0.16.8",
      "resolved": "https://registry.npmjs.org/@humanfs/node/-/node-0.16.8.tgz",
      "integrity": "sha512-gE1eQNZ3R++kTzFUpdGlpmy8kDZD/MLyHqDwqjkVQI0JMdI1D51sy1H958PNXYkM2rAac7e5/CnIKZrHtPh3BQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanfs/core": "^0.19.2",
        "@humanfs/types": "^0.15.0",
        "@humanwhocodes/retry": "^0.4.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/types": {
      "version": "0.15.0",
      "resolved": "https://registry.npmjs.org/@humanfs/types/-/types-0.15.0.tgz",
      "integrity": "sha512-ZZ1w0aoQkwuUuC7Yf+7sdeaNfqQiiLcSRbfI08oAxqLtpXQr9AIVX7Ay7HLDuiLYAaFPu8oBYNq/QIi9URHJ3Q==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/retry": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.4.3.tgz",
      "integrity": "sha512-bV0Tgo9K4hfPCek+aMAn81RppFKv2ySDQeMoSZuvTASywNTnVJCArCZE2FWqpvIatKu7VMRLWlR1EazvVhDyhQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@napi-rs/wasm-runtime": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@napi-rs/wasm-runtime/-/wasm-runtime-1.1.4.tgz",
      "integrity": "sha512-3NQNNgA1YSlJb/kMH1ildASP9HW7/7kYnRI2szWJaofaS1hWmbGI4H+d3+22aGzXXN9IJ+n+GiFVcGipJP18ow==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@tybys/wasm-util": "^0.10.1"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/Brooooooklyn"
      },
      "peerDependencies": {
        "@emnapi/core": "^1.7.1",
        "@emnapi/runtime": "^1.7.1"
      }
    },
    "node_modules/@oxc-project/types": {
      "version": "0.127.0",
      "resolved": "https://registry.npmjs.org/@oxc-project/types/-/types-0.127.0.tgz",
      "integrity": "sha512-aIYXQBo4lCbO4z0R3FHeucQHpF46l2LbMdxRvqvuRuW2OxdnSkcng5B8+K12spgLDj93rtN3+J2Vac/TIO+ciQ==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/Boshen"
      }
    },
    "node_modules/@rolldown/binding-android-arm64": {
      "version": "1.0.0-rc.17",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-android-arm64/-/binding-android-arm64-1.0.0-rc.17.tgz",
      "integrity": "sha512-s70pVGhw4zqGeFnXWvAzJDlvxhlRollagdCCKRgOsgUOH3N1l0LIxf83AtGzmb5SiVM4Hjl5HyarMRfdfj3DaQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-arm64": {
      "version": "1.0.0-rc.17",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-arm64/-/binding-darwin-arm64-1.0.0-rc.17.tgz",
      "integrity": "sha512-4ksWc9n0mhlZpZ9PMZgTGjeOPRu8MB1Z3Tz0Mo02eWfWCHMW1zN82Qz/pL/rC+yQa+8ZnutMF0JjJe7PjwasYw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-x64": {
      "version": "1.0.0-rc.17",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-x64/-/binding-darwin-x64-1.0.0-rc.17.tgz",
      "integrity": "sha512-SUSDOI6WwUVNcWxd02QEBjLdY1VPHvlEkw6T/8nYG322iYWCTxRb1vzk4E+mWWYehTp7ERibq54LSJGjmouOsw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-freebsd-x64": {
      "version": "1.0.0-rc.17",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-freebsd-x64/-/binding-freebsd-x64-1.0.0-rc.17.tgz",
      "integrity": "sha512-hwnz3nw9dbJ05EDO/PvcjaaewqqDy7Y1rn1UO81l8iIK1GjenME75dl16ajbvSSMfv66WXSRCYKIqfgq2KCfxw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm-gnueabihf": {
      "version": "1.0.0-rc.17",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm-gnueabihf/-/binding-linux-arm-gnueabihf-1.0.0-rc.17.tgz",
      "integrity": "sha512-IS+W7epTcwANmFSQFrS1SivEXHtl1JtuQA9wlxrZTcNi6mx+FDOYrakGevvvTwgj2JvWiK8B29/qD9BELZPyXQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-gnu": {
      "version": "1.0.0-rc.17",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-gnu/-/binding-linux-arm64-gnu-1.0.0-rc.17.tgz",
      "integrity": "sha512-e6usGaHKW5BMNZOymS1UcEYGowQMWcgZ71Z17Sl/h2+ZziNJ1a9n3Zvcz6LdRyIW5572wBCTH/Z+bKuZouGk9Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-musl": {
      "version": "1.0.0-rc.17",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-musl/-/binding-linux-arm64-musl-1.0.0-rc.17.tgz",
      "integrity": "sha512-b/CgbwAJpmrRLp02RPfhbudf5tZnN9nsPWK82znefso832etkem8H7FSZwxrOI9djcdTP7U6YfNhbRnh7djErg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-ppc64-gnu": {
      "version": "1.0.0-rc.17",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-ppc64-gnu/-/binding-linux-ppc64-gnu-1.0.0-rc.17.tgz",
      "integrity": "sha512-4EII1iNGRUN5WwGbF/kOh/EIkoDN9HsupgLQoXfY+D1oyJm7/F4t5PYU5n8SWZgG0FEwakyM8pGgwcBYruGTlA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-s390x-gnu": {
      "version": "1.0.0-rc.17",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-s390x-gnu/-/binding-linux-s390x-gnu-1.0.0-rc.17.tgz",
      "integrity": "sha512-AH8oq3XqQo4IibpVXvPeLDI5pzkpYn0WiZAfT05kFzoJ6tQNzwRdDYQ45M8I/gslbodRZwW8uxLhbSBbkv96rA==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-gnu": {
      "version": "1.0.0-rc.17",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-gnu/-/binding-linux-x64-gnu-1.0.0-rc.17.tgz",
      "integrity": "sha512-cLnjV3xfo7KslbU41Z7z8BH/E1y5mzUYzAqih1d1MDaIGZRCMqTijqLv76/P7fyHuvUcfGsIpqCdddbxLLK9rA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-musl": {
      "version": "1.0.0-rc.17",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-musl/-/binding-linux-x64-musl-1.0.0-rc.17.tgz",
      "integrity": "sha512-0phclDw1spsL7dUB37sIARuis2tAgomCJXAHZlpt8PXZ4Ba0dRP1e+66lsRqrfhISeN9bEGNjQs+T/Fbd7oYGw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-openharmony-arm64": {
      "version": "1.0.0-rc.17",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-openharmony-arm64/-/binding-openharmony-arm64-1.0.0-rc.17.tgz",
      "integrity": "sha512-0ag/hEgXOwgw4t8QyQvUCxvEg+V0KBcA6YuOx9g0r02MprutRF5dyljgm3EmR02O292UX7UeS6HzWHAl6KgyhA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-wasm32-wasi": {
      "version": "1.0.0-rc.17",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-wasm32-wasi/-/binding-wasm32-wasi-1.0.0-rc.17.tgz",
      "integrity": "sha512-LEXei6vo0E5wTGwpkJ4KoT3OZJRnglwldt5ziLzOlc6qqb55z4tWNq2A+PFqCJuvWWdP53CVhG1Z9NtToDPJrA==",
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "1.10.0",
        "@emnapi/runtime": "1.10.0",
        "@napi-rs/wasm-runtime": "^1.1.4"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-arm64-msvc": {
      "version": "1.0.0-rc.17",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-arm64-msvc/-/binding-win32-arm64-msvc-1.0.0-rc.17.tgz",
      "integrity": "sha512-gUmyzBl3SPMa6hrqFUth9sVfcLBlYsbMzBx5PlexMroZStgzGqlZ26pYG89rBb45Mnia+oil6YAIFeEWGWhoZA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-x64-msvc": {
      "version": "1.0.0-rc.17",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-x64-msvc/-/binding-win32-x64-msvc-1.0.0-rc.17.tgz",
      "integrity": "sha512-3hkiolcUAvPB9FLb3UZdfjVVNWherN1f/skkGWJP/fgSQhYUZpSIRr0/I8ZK9TkF3F7kxvJAk0+IcKvPHk9qQg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.0-rc.7",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.0-rc.7.tgz",
      "integrity": "sha512-qujRfC8sFVInYSPPMLQByRh7zhwkGFS4+tyMQ83srV1qrxL4g8E2tyxVVyxd0+8QeBM1mIk9KbWxkegRr76XzA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.2.4.tgz",
      "integrity": "sha512-Ai7+yQPxz3ddrDQzFfBKdHEVBg0w3Zl83jnjuwxnZOsnH9pGn93QHQtpU0p/8rYWxvbFZHneni6p1BSLK4DkGA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/remapping": "^2.3.5",
        "enhanced-resolve": "^5.19.0",
        "jiti": "^2.6.1",
        "lightningcss": "1.32.0",
        "magic-string": "^0.30.21",
        "source-map-js": "^1.2.1",
        "tailwindcss": "4.2.4"
      }
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.2.4.tgz",
      "integrity": "sha512-9El/iI069DKDSXwTvB9J4BwdO5JhRrOweGaK25taBAvBXyXqJAX+Jqdvs8r8gKpsI/1m0LeJLyQYTf/WLrBT1Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 20"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.2.4",
        "@tailwindcss/oxide-darwin-arm64": "4.2.4",
        "@tailwindcss/oxide-darwin-x64": "4.2.4",
        "@tailwindcss/oxide-freebsd-x64": "4.2.4",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.2.4",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.2.4",
        "@tailwindcss/oxide-linux-arm64-musl": "4.2.4",
        "@tailwindcss/oxide-linux-x64-gnu": "4.2.4",
        "@tailwindcss/oxide-linux-x64-musl": "4.2.4",
        "@tailwindcss/oxide-wasm32-wasi": "4.2.4",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.2.4",
        "@tailwindcss/oxide-win32-x64-msvc": "4.2.4"
      }
    },
    "node_modules/@tailwindcss/oxide-android-arm64": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.2.4.tgz",
      "integrity": "sha512-e7MOr1SAn9U8KlZzPi1ZXGZHeC5anY36qjNwmZv9pOJ8E4Q6jmD1vyEHkQFmNOIN7twGPEMXRHmitN4zCMN03g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-arm64": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.2.4.tgz",
      "integrity": "sha512-tSC/Kbqpz/5/o/C2sG7QvOxAKqyd10bq+ypZNf+9Fi2TvbVbv1zNpcEptcsU7DPROaSbVgUXmrzKhurFvo5eDg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-x64": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.2.4.tgz",
      "integrity": "sha512-yPyUXn3yO/ufR6+Kzv0t4fCg2qNr90jxXc5QqBpjlPNd0NqyDXcmQb/6weunH/MEDXW5dhyEi+agTDiqa3WsGg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-freebsd-x64": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.2.4.tgz",
      "integrity": "sha512-BoMIB4vMQtZsXdGLVc2z+P9DbETkiopogfWZKbWwM8b/1Vinbs4YcUwo+kM/KeLkX3Ygrf4/PsRndKaYhS8Eiw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.2.4.tgz",
      "integrity": "sha512-7pIHBLTHYRAlS7V22JNuTh33yLH4VElwKtB3bwchK/UaKUPpQ0lPQiOWcbm4V3WP2I6fNIJ23vABIvoy2izdwA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.2.4.tgz",
      "integrity": "sha512-+E4wxJ0ZGOzSH325reXTWB48l42i93kQqMvDyz5gqfRzRZ7faNhnmvlV4EPGJU3QJM/3Ab5jhJ5pCRUsKn6OQw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-musl": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.2.4.tgz",
      "integrity": "sha512-bBADEGAbo4ASnppIziaQJelekCxdMaxisrk+fB7Thit72IBnALp9K6ffA2G4ruj90G9XRS2VQ6q2bCKbfFV82g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.2.4.tgz",
      "integrity": "sha512-7Mx25E4WTfnht0TVRTyC00j3i0M+EeFe7wguMDTlX4mRxafznw0CA8WJkFjWYH5BlgELd1kSjuU2JiPnNZbJDA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-musl": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.2.4.tgz",
      "integrity": "sha512-2wwJRF7nyhOR0hhHoChc04xngV3iS+akccHTGtz965FwF0up4b2lOdo6kI1EbDaEXKgvcrFBYcYQQ/rrnWFVfA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-wasm32-wasi/-/oxide-wasm32-wasi-4.2.4.tgz",
      "integrity": "sha512-FQsqApeor8Fo6gUEklzmaa9994orJZZDBAlQpK2Mq+DslRKFJeD6AjHpBQ0kZFQohVr8o85PPh8eOy86VlSCmw==",
      "bundleDependencies": [
        "@napi-rs/wasm-runtime",
        "@emnapi/core",
        "@emnapi/runtime",
        "@tybys/wasm-util",
        "@emnapi/wasi-threads",
        "tslib"
      ],
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.8.1",
        "@emnapi/runtime": "^1.8.1",
        "@emnapi/wasi-threads": "^1.1.0",
        "@napi-rs/wasm-runtime": "^1.1.1",
        "@tybys/wasm-util": "^0.10.1",
        "tslib": "^2.8.1"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-arm64-msvc": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.2.4.tgz",
      "integrity": "sha512-L9BXqxC4ToVgwMFqj3pmZRqyHEztulpUJzCxUtLjobMCzTPsGt1Fa9enKbOpY2iIyVtaHNeNvAK8ERP/64sqGQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-x64-msvc": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.2.4.tgz",
      "integrity": "sha512-ESlKG0EpVJQwRjXDDa9rLvhEAh0mhP1sF7sap9dNZT0yyl9SAG6T7gdP09EH0vIv0UNTlo6jPWyujD6559fZvw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/postcss": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/postcss/-/postcss-4.2.4.tgz",
      "integrity": "sha512-wgAVj6nUWAolAu8YFvzT2cTBIElWHkjZwFYovF+xsqKsW2ADxM/X2opxj5NsF/qVccAOjRNe8X2IdPzMsWyHTg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "@tailwindcss/node": "4.2.4",
        "@tailwindcss/oxide": "4.2.4",
        "postcss": "^8.5.6",
        "tailwindcss": "4.2.4"
      }
    },
    "node_modules/@tailwindcss/vite": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/@tailwindcss/vite/-/vite-4.2.4.tgz",
      "integrity": "sha512-pCvohwOCspk3ZFn6eJzrrX3g4n2JY73H6MmYC87XfGPyTty4YsCjYTMArRZm/zOI8dIt3+EcrLHAFPe5A4bgtw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@tailwindcss/node": "4.2.4",
        "@tailwindcss/oxide": "4.2.4",
        "tailwindcss": "4.2.4"
      },
      "peerDependencies": {
        "vite": "^5.2.0 || ^6 || ^7 || ^8"
      }
    },
    "node_modules/@tybys/wasm-util": {
      "version": "0.10.1",
      "resolved": "https://registry.npmjs.org/@tybys/wasm-util/-/wasm-util-0.10.1.tgz",
      "integrity": "sha512-9tTaPJLSiejZKx+Bmog4uSubteqTvFrVrURwkmHixBo0G4seD0zUxp98E1DzUBJxLQ3NPwXrGKDiVjwx/DpPsg==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@types/esrecurse": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@types/esrecurse/-/esrecurse-4.3.1.tgz",
      "integrity": "sha512-xJBAbDifo5hpffDBuHl0Y8ywswbiAp/Wi7Y/GtAgSlZyIABppyurxVueOPE8LUQOxdlgi6Zqce7uoEpqNTeiUw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/estree": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.8.tgz",
      "integrity": "sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.15",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
      "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/react": {
      "version": "19.2.14",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.14.tgz",
      "integrity": "sha512-ilcTH/UniCkMdtexkoCN0bI7pMcJDvmQFPvuPvmEaYA/NSfFTAgdUSLAoVjaRJm7+6PvcM+q1zYOwS4wTYMF9w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.2.3.tgz",
      "integrity": "sha512-jp2L/eY6fn+KgVVQAOqYItbF0VY/YApe5Mz2F0aykSO8gx31bYCZyvSeYxCHKvzHG5eZjc+zyaS5BrBWya2+kQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.2.0"
      }
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-6.0.1.tgz",
      "integrity": "sha512-l9X/E3cDb+xY3SWzlG1MOGt2usfEHGMNIaegaUGFsLkb3RCn/k8/TOXBcab+OndDI4TBtktT8/9BwwW8Vi9KUQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@rolldown/pluginutils": "1.0.0-rc.7"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "peerDependencies": {
        "@rolldown/plugin-babel": "^0.1.7 || ^0.2.0",
        "babel-plugin-react-compiler": "^1.0.0",
        "vite": "^8.0.0"
      },
      "peerDependenciesMeta": {
        "@rolldown/plugin-babel": {
          "optional": true
        },
        "babel-plugin-react-compiler": {
          "optional": true
        }
      }
    },
    "node_modules/acorn": {
      "version": "8.16.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.16.0.tgz",
      "integrity": "sha512-UVJyE9MttOsBQIDKw1skb9nAwQuR5wuGD3+82K6JgJlm/Y+KI92oNsMNGZCYdDsVtRHSak0pcV5Dno5+4jh9sw==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/agent-base": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-6.0.2.tgz",
      "integrity": "sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "4"
      },
      "engines": {
        "node": ">= 6.0.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.15.0",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.15.0.tgz",
      "integrity": "sha512-fgFx7Hfoq60ytK2c7DhnF8jIvzYgOMxfugjLOSMHjLIPgenqa7S7oaagATUq99mV6IYvN2tRmC0wnTYX6iPbMw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q==",
      "license": "MIT"
    },
    "node_modules/autoprefixer": {
      "version": "10.5.0",
      "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.5.0.tgz",
      "integrity": "sha512-FMhOoZV4+qR6aTUALKX2rEqGG+oyATvwBt9IIzVR5rMa2HRWPkxf+P+PAJLD1I/H5/II+HuZcBJYEFBpq39ong==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/autoprefixer"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "browserslist": "^4.28.2",
        "caniuse-lite": "^1.0.30001787",
        "fraction.js": "^5.3.4",
        "picocolors": "^1.1.1",
        "postcss-value-parser": "^4.2.0"
      },
      "bin": {
        "autoprefixer": "bin/autoprefixer"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      },
      "peerDependencies": {
        "postcss": "^8.1.0"
      }
    },
    "node_modules/axios": {
      "version": "1.16.1",
      "resolved": "https://registry.npmjs.org/axios/-/axios-1.16.1.tgz",
      "integrity": "sha512-caYkukvroVPO8KrzuJEb50Hm07KwfBZPEC3VeFHTsqWHvKTsy54hjJz9BS/cdaypROE2rH6xvm9mHX4fgWkr3A==",
      "license": "MIT",
      "dependencies": {
        "follow-redirects": "^1.16.0",
        "form-data": "^4.0.5",
        "https-proxy-agent": "^5.0.1",
        "proxy-from-env": "^2.1.0"
      }
    },
    "node_modules/balanced-match": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-4.0.4.tgz",
      "integrity": "sha512-BLrgEcRTwX2o6gGxGOCNyMvGSp35YofuYzw9h1IMTRmKqttAZZVU67bdb9Pr2vUHA8+j3i2tJfjO6C6+4myGTA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.10.23",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.10.23.tgz",
      "integrity": "sha512-xwVXGqevyKPsiuQdLj+dZMVjidjJV508TBqexND5HrF89cGdCYCJFB3qhcxRHSeMctdCfbR1jrxBajhDy7o29g==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.cjs"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/brace-expansion": {
      "version": "5.0.5",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-5.0.5.tgz",
      "integrity": "sha512-VZznLgtwhn+Mact9tfiwx64fA9erHH/MCXEUfB/0bX/6Fz6ny5EGTXYltMocqg4xFAQZtnO3DHWWXi8RiuN7cQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^4.0.2"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/browserslist": {
      "version": "4.28.2",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.28.2.tgz",
      "integrity": "sha512-48xSriZYYg+8qXna9kwqjIVzuQxi+KYWp2+5nCYnYKPTr0LvD89Jqk2Or5ogxz0NUMfIjhh2lIUX/LyX9B4oIg==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "baseline-browser-mapping": "^2.10.12",
        "caniuse-lite": "^1.0.30001782",
        "electron-to-chromium": "^1.5.328",
        "node-releases": "^2.0.36",
        "update-browserslist-db": "^1.2.3"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001791",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001791.tgz",
      "integrity": "sha512-yk0l/YSrOnFZk3UROpDLQD9+kC1l4meK/wed583AXrzoarMGJcbRi2Q4RaUYbKxYAsZ8sWmaSa/DsLmdBeI1vQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/combined-stream": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
      "license": "MIT",
      "dependencies": {
        "delayed-stream": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.344",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.344.tgz",
      "integrity": "sha512-4MxfbmNDm+KPh066EZy+eUnkcDPcZ35wNmOWzFuh/ijvHsve6kbLTLURy88uCNK5FbpN+yk2nQY6BYh1GEt+wg==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/enhanced-resolve": {
      "version": "5.21.0",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.21.0.tgz",
      "integrity": "sha512-otxSQPw4lkOZWkHpB3zaEQs6gWYEsmX4xQF68ElXC/TWvGxGMSGOvoNbaLXm6/cS/fSfHtsEdw90y20PCd+sCA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.3.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
      "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz",
      "integrity": "sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "10.2.1",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-10.2.1.tgz",
      "integrity": "sha512-wiyGaKsDgqXvF40P8mDwiUp/KQjE1FdrIEJsM8PZ3XCiniTMXS3OHWWUe5FI5agoCnr8x4xPrTDZuxsBlNHl+Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.8.0",
        "@eslint-community/regexpp": "^4.12.2",
        "@eslint/config-array": "^0.23.5",
        "@eslint/config-helpers": "^0.5.5",
        "@eslint/core": "^1.2.1",
        "@eslint/plugin-kit": "^0.7.1",
        "@humanfs/node": "^0.16.6",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@humanwhocodes/retry": "^0.4.2",
        "@types/estree": "^1.0.6",
        "ajv": "^6.14.0",
        "cross-spawn": "^7.0.6",
        "debug": "^4.3.2",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^9.1.2",
        "eslint-visitor-keys": "^5.0.1",
        "espree": "^11.2.0",
        "esquery": "^1.7.0",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^8.0.0",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "minimatch": "^10.2.4",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      },
      "peerDependencies": {
        "jiti": "*"
      },
      "peerDependenciesMeta": {
        "jiti": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-plugin-react-hooks": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-7.1.1.tgz",
      "integrity": "sha512-f2I7Gw6JbvCexzIInuSbZpfdQ44D7iqdWX01FKLvrPgqxoE7oMj8clOfto8U6vYiz4yd5oKu39rRSVOe1zRu0g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.24.4",
        "@babel/parser": "^7.24.4",
        "hermes-parser": "^0.25.1",
        "zod": "^3.25.0 || ^4.0.0",
        "zod-validation-error": "^3.5.0 || ^4.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0 || ^10.0.0"
      }
    },
    "node_modules/eslint-plugin-react-refresh": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-refresh/-/eslint-plugin-react-refresh-0.5.2.tgz",
      "integrity": "sha512-hmgTH57GfzoTFjVN0yBwTggnsVUF2tcqi7RJZHqi9lIezSs4eFyAMktA68YD4r5kNw1mxyY4dmkyoFDb3FIqrA==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "eslint": "^9 || ^10"
      }
    },
    "node_modules/eslint-scope": {
      "version": "9.1.2",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-9.1.2.tgz",
      "integrity": "sha512-xS90H51cKw0jltxmvmHy2Iai1LIqrfbw57b79w/J7MfvDfkIkFZ+kj6zC3BjtUwh150HsSSdxXZcsuv72miDFQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "@types/esrecurse": "^4.3.1",
        "@types/estree": "^1.0.8",
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-5.0.1.tgz",
      "integrity": "sha512-tD40eHxA35h0PEIZNeIjkHoDR4YjjJp34biM0mDvplBe//mB+IHCqHDGV7pxF+7MklTvighcCPPZC7ynWyjdTA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/espree": {
      "version": "11.2.0",
      "resolved": "https://registry.npmjs.org/espree/-/espree-11.2.0.tgz",
      "integrity": "sha512-7p3DrVEIopW1B1avAGLuCSh1jubc01H2JHc8B4qqGblmg5gI9yumBgACjWo4JlIc04ufug4xJ3SQI8HkS/Rgzw==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.16.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^5.0.1"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.7.0.tgz",
      "integrity": "sha512-Ap6G0WQwcU/LHsvLwON1fAQX9Zp0A2Y6Y/cJBl9r/JbW90Zyg4/zbG6zzKa2OTALELarYHmKu0GhpM5EO+7T0g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/file-entry-cache": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-8.0.0.tgz",
      "integrity": "sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^4.0.0"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-4.0.1.tgz",
      "integrity": "sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.4"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/flatted": {
      "version": "3.4.2",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.4.2.tgz",
      "integrity": "sha512-PjDse7RzhcPkIJwy5t7KPWQSZ9cAbzQXcafsetQoD7sOJRQlGikNbx7yZp2OotDnJyrDcbyRq3Ttb18iYOqkxA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/follow-redirects": {
      "version": "1.16.0",
      "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.16.0.tgz",
      "integrity": "sha512-y5rN/uOsadFT/JfYwhxRS5R7Qce+g3zG97+JrtFZlC9klX/W5hD7iiLzScI4nZqUS7DNUdhPgw4xI8W2LuXlUw==",
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/RubenVerborgh"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=4.0"
      },
      "peerDependenciesMeta": {
        "debug": {
          "optional": true
        }
      }
    },
    "node_modules/form-data": {
      "version": "4.0.5",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-4.0.5.tgz",
      "integrity": "sha512-8RipRLol37bNs2bhoV67fiTEvdTrbMUYcFTiy3+wuuOnUog2QBHCZWXDRijWQfAkhBj2Uf5UnVaiWwA5vdd82w==",
      "license": "MIT",
      "dependencies": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.8",
        "es-set-tostringtag": "^2.1.0",
        "hasown": "^2.0.2",
        "mime-types": "^2.1.12"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fraction.js": {
      "version": "5.3.4",
      "resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-5.3.4.tgz",
      "integrity": "sha512-1X1NTtiJphryn/uLQz3whtY6jK3fTqoE3ohKs0tT+Ujr1W59oopxmoEh7Lu5p6vBaPbgoM0bzveAW4Qi5RyWDQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/rawify"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/globals": {
      "version": "17.5.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-17.5.0.tgz",
      "integrity": "sha512-qoV+HK2yFl/366t2/Cb3+xxPUo5BuMynomoDmiaZBIdbs+0pYbjfZU+twLhGKp4uCZ/+NbtpVepH5bGCxRyy2g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
      "integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
      "license": "MIT",
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.3.tgz",
      "integrity": "sha512-ej4AhfhfL2Q2zpMmLo7U1Uv9+PyhIZpgQLGT1F9miIGmiCJIoCgSmczFdrc97mWT4kVY72KA+WnnhJ5pghSvSg==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/hermes-estree": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-estree/-/hermes-estree-0.25.1.tgz",
      "integrity": "sha512-0wUoCcLp+5Ev5pDW2OriHC2MJCbwLwuRx+gAqMTOkGKJJiBCLjtrvy4PWUGn6MIVefecRpzoOZ/UV6iGdOr+Cw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/hermes-parser": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-parser/-/hermes-parser-0.25.1.tgz",
      "integrity": "sha512-6pEjquH3rqaI6cYAXYPcz9MS4rY6R4ngRgrgfDshRptUZIc3lw0MCIJIGDj9++mfySOuPTHB4nrSW99BCvOPIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hermes-estree": "0.25.1"
      }
    },
    "node_modules/https-proxy-agent": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-5.0.1.tgz",
      "integrity": "sha512-dFcAjpTQFgoLMzC2VwU+C/CbS7uRL0lWmxDITmqm7C+7F0Odmj6s9l6alZc6AELXhrnggM2CeWSXHGOdX2YtwA==",
      "license": "MIT",
      "dependencies": {
        "agent-base": "6",
        "debug": "4"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/jiti": {
      "version": "2.6.1",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.6.1.tgz",
      "integrity": "sha512-ekilCSN1jwRvIbgeg/57YFh8qQDNbwDb9xT/qu2DAHbFFZUicIl4ygVaAvzveMhMVr3LnpSKTNnwt8PoOfmKhQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.32.0.tgz",
      "integrity": "sha512-NXYBzinNrblfraPGyrbPoD19C1h9lfI/1mzgWYvXUTe414Gz/X1FD2XBZSZM7rRTrMA8JL3OtAaGifrIKhQ5yQ==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.32.0",
        "lightningcss-darwin-arm64": "1.32.0",
        "lightningcss-darwin-x64": "1.32.0",
        "lightningcss-freebsd-x64": "1.32.0",
        "lightningcss-linux-arm-gnueabihf": "1.32.0",
        "lightningcss-linux-arm64-gnu": "1.32.0",
        "lightningcss-linux-arm64-musl": "1.32.0",
        "lightningcss-linux-x64-gnu": "1.32.0",
        "lightningcss-linux-x64-musl": "1.32.0",
        "lightningcss-win32-arm64-msvc": "1.32.0",
        "lightningcss-win32-x64-msvc": "1.32.0"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.32.0.tgz",
      "integrity": "sha512-YK7/ClTt4kAK0vo6w3X+Pnm0D2cf2vPHbhOXdoNti1Ga0al1P4TBZhwjATvjNwLEBCnKvjJc2jQgHXH0NEwlAg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.32.0.tgz",
      "integrity": "sha512-RzeG9Ju5bag2Bv1/lwlVJvBE3q6TtXskdZLLCyfg5pt+HLz9BqlICO7LZM7VHNTTn/5PRhHFBSjk5lc4cmscPQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.32.0.tgz",
      "integrity": "sha512-U+QsBp2m/s2wqpUYT/6wnlagdZbtZdndSmut/NJqlCcMLTWp5muCrID+K5UJ6jqD2BFshejCYXniPDbNh73V8w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.32.0.tgz",
      "integrity": "sha512-JCTigedEksZk3tHTTthnMdVfGf61Fky8Ji2E4YjUTEQX14xiy/lTzXnu1vwiZe3bYe0q+SpsSH/CTeDXK6WHig==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.32.0.tgz",
      "integrity": "sha512-x6rnnpRa2GL0zQOkt6rts3YDPzduLpWvwAF6EMhXFVZXD4tPrBkEFqzGowzCsIWsPjqSK+tyNEODUBXeeVHSkw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.32.0.tgz",
      "integrity": "sha512-0nnMyoyOLRJXfbMOilaSRcLH3Jw5z9HDNGfT/gwCPgaDjnx0i8w7vBzFLFR1f6CMLKF8gVbebmkUN3fa/kQJpQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.32.0.tgz",
      "integrity": "sha512-UpQkoenr4UJEzgVIYpI80lDFvRmPVg6oqboNHfoH4CQIfNA+HOrZ7Mo7KZP02dC6LjghPQJeBsvXhJod/wnIBg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.32.0.tgz",
      "integrity": "sha512-V7Qr52IhZmdKPVr+Vtw8o+WLsQJYCTd8loIfpDaMRWGUZfBOYEJeyJIkqGIDMZPwPx24pUMfwSxxI8phr/MbOA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.32.0.tgz",
      "integrity": "sha512-bYcLp+Vb0awsiXg/80uCRezCYHNg1/l3mt0gzHnWV9XP1W5sKa5/TCdGWaR/zBM2PeF/HbsQv/j2URNOiVuxWg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.32.0.tgz",
      "integrity": "sha512-8SbC8BR40pS6baCM8sbtYDSwEVQd4JlFTOlaD3gWGHfThTcABnNDBda6eTZeqbofalIJhFx0qKzgHJmcPTnGdw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.32.0.tgz",
      "integrity": "sha512-Amq9B/SoZYdDi1kFrojnoqPLxYhQ4Wo5XiL8EVJrVsB8ARoC1PWW6VGtT0WKCemjy8aC+louJnjS7U18x3b06Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/lucide-react": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/lucide-react/-/lucide-react-1.11.0.tgz",
      "integrity": "sha512-UOhjdztXCgdBReRcIhsvz2siIBogfv/lhJEIViCpLt924dO+GDms9T7DNoucI23s6kEPpe988m5N0D2ajnzb2g==",
      "license": "ISC",
      "peerDependencies": {
        "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/minimatch": {
      "version": "10.2.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.2.5.tgz",
      "integrity": "sha512-MULkVLfKGYDFYejP07QOurDLLQpcjk7Fw+7jXS2R2czRQzR56yHRveU5NDJEOviH+hETZKSkIk5c+T23GjFUMg==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "brace-expansion": "^5.0.5"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/nanoid": {
      "version": "3.3.11",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz",
      "integrity": "sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/node-releases": {
      "version": "2.0.38",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.38.tgz",
      "integrity": "sha512-3qT/88Y3FbH/Kx4szpQQ4HzUbVrHPKTLVpVocKiLfoYvw9XSGOX2FmD2d6DrXbVYyAQTF2HeF6My8jmzx7/CRw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.4.tgz",
      "integrity": "sha512-QP88BAKvMam/3NxH6vj2o21R6MjxZUAd6nlwAS/pnGvN9IVLocLHxGYIzFhg6fUQ+5th6P4dv4eW9jX3DSIj7A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.12",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.12.tgz",
      "integrity": "sha512-W62t/Se6rA0Az3DfCL0AqJwXuKwBeYg6nOaIgzP+xZ7N5BFCI7DYi1qs6ygUYT6rvfi6t9k65UMLJC+PHZpDAA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.11",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/postcss-value-parser": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
      "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/proxy-from-env": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/proxy-from-env/-/proxy-from-env-2.1.0.tgz",
      "integrity": "sha512-cJ+oHTW1VAEa8cJslgmUZrc+sjRKgAKl3Zyse6+PV38hZe/V6Z14TbCuXcan9F9ghlz4QrFr2c92TNF82UkYHA==",
      "license": "MIT",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/react": {
      "version": "19.2.5",
      "resolved": "https://registry.npmjs.org/react/-/react-19.2.5.tgz",
      "integrity": "sha512-llUJLzz1zTUBrskt2pwZgLq59AemifIftw4aB7JxOqf1HY2FDaGDxgwpAPVzHU1kdWabH7FauP4i1oEeer2WCA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.2.5",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.2.5.tgz",
      "integrity": "sha512-J5bAZz+DXMMwW/wV3xzKke59Af6CHY7G4uYLN1OvBcKEsWOs4pQExj86BBKamxl/Ik5bx9whOrvBlSDfWzgSag==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.27.0"
      },
      "peerDependencies": {
        "react": "^19.2.5"
      }
    },
    "node_modules/rolldown": {
      "version": "1.0.0-rc.17",
      "resolved": "https://registry.npmjs.org/rolldown/-/rolldown-1.0.0-rc.17.tgz",
      "integrity": "sha512-ZrT53oAKrtA4+YtBWPQbtPOxIbVDbxT0orcYERKd63VJTF13zPcgXTvD4843L8pcsI7M6MErt8QtON6lrB9tyA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@oxc-project/types": "=0.127.0",
        "@rolldown/pluginutils": "1.0.0-rc.17"
      },
      "bin": {
        "rolldown": "bin/cli.mjs"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "optionalDependencies": {
        "@rolldown/binding-android-arm64": "1.0.0-rc.17",
        "@rolldown/binding-darwin-arm64": "1.0.0-rc.17",
        "@rolldown/binding-darwin-x64": "1.0.0-rc.17",
        "@rolldown/binding-freebsd-x64": "1.0.0-rc.17",
        "@rolldown/binding-linux-arm-gnueabihf": "1.0.0-rc.17",
        "@rolldown/binding-linux-arm64-gnu": "1.0.0-rc.17",
        "@rolldown/binding-linux-arm64-musl": "1.0.0-rc.17",
        "@rolldown/binding-linux-ppc64-gnu": "1.0.0-rc.17",
        "@rolldown/binding-linux-s390x-gnu": "1.0.0-rc.17",
        "@rolldown/binding-linux-x64-gnu": "1.0.0-rc.17",
        "@rolldown/binding-linux-x64-musl": "1.0.0-rc.17",
        "@rolldown/binding-openharmony-arm64": "1.0.0-rc.17",
        "@rolldown/binding-wasm32-wasi": "1.0.0-rc.17",
        "@rolldown/binding-win32-arm64-msvc": "1.0.0-rc.17",
        "@rolldown/binding-win32-x64-msvc": "1.0.0-rc.17"
      }
    },
    "node_modules/rolldown/node_modules/@rolldown/pluginutils": {
      "version": "1.0.0-rc.17",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.0-rc.17.tgz",
      "integrity": "sha512-n8iosDOt6Ig1UhJ2AYqoIhHWh/isz0xpicHTzpKBeotdVsTEcxsSA/i3EVM7gQAj0rU27OLAxCjzlj15IWY7bg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/scheduler": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.27.0.tgz",
      "integrity": "sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/tailwindcss": {
      "version": "4.2.4",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.2.4.tgz",
      "integrity": "sha512-HhKppgO81FQof5m6TEnuBWCZGgfRAWbaeOaGT00KOy/Pf/j6oUihdvBpA7ltCeAvZpFhW3j0PTclkxsd4IXYDA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tapable": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.3.3.tgz",
      "integrity": "sha512-uxc/zpqFg6x7C8vOE7lh6Lbda8eEL9zmVm/PLeTPBRhh1xCgdWaQ+J1CUieGpIfm2HdtsUpRv+HshiasBMcc6A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.16",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.16.tgz",
      "integrity": "sha512-pn99VhoACYR8nFHhxqix+uvsbXineAasWm5ojXoN8xEwK5Kd3/TrhNn1wByuD52UxWRLy8pu+kRMniEi6Eq9Zg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.4"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "dev": true,
      "license": "0BSD",
      "optional": true
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/update-browserslist-db": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.2.3.tgz",
      "integrity": "sha512-Js0m9cx+qOgDxo0eMiFGEueWztz+d4+M3rGlmKPT+T4IS/jP4ylw3Nwpu6cpTTP8R1MAC1kF4VbdLt3ARf209w==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/vite": {
      "version": "8.0.10",
      "resolved": "https://registry.npmjs.org/vite/-/vite-8.0.10.tgz",
      "integrity": "sha512-rZuUu9j6J5uotLDs+cAA4O5H4K1SfPliUlQwqa6YEwSrWDZzP4rhm00oJR5snMewjxF5V/K3D4kctsUTsIU9Mw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "lightningcss": "^1.32.0",
        "picomatch": "^4.0.4",
        "postcss": "^8.5.10",
        "rolldown": "1.0.0-rc.17",
        "tinyglobby": "^0.2.16"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^20.19.0 || >=22.12.0",
        "@vitejs/devtools": "^0.1.0",
        "esbuild": "^0.27.0 || ^0.28.0",
        "jiti": ">=1.21.0",
        "less": "^4.0.0",
        "sass": "^1.70.0",
        "sass-embedded": "^1.70.0",
        "stylus": ">=0.54.8",
        "sugarss": "^5.0.0",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "@vitejs/devtools": {
          "optional": true
        },
        "esbuild": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/zod": {
      "version": "4.3.6",
      "resolved": "https://registry.npmjs.org/zod/-/zod-4.3.6.tgz",
      "integrity": "sha512-rftlrkhHZOcjDwkGlnUtZZkvaPHCsDATp4pGpuOOMDaTdDDXF91wuVDJoWoPsKX/3YPQ5fHuF3STjcYyKr+Qhg==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    },
    "node_modules/zod-validation-error": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/zod-validation-error/-/zod-validation-error-4.0.2.tgz",
      "integrity": "sha512-Q6/nZLe6jxuU80qb/4uJ4t5v2VEZ44lzQjPDhYJNztRQ4wyWc6VF3D3Kb/fAuPetZQnhS3hnajCf9CsWesghLQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      },
      "peerDependencies": {
        "zod": "^3.25.0 || ^4.0.0"
      }
    }
  }
}

</code>

package.json:
<code>
{
  "name": "my-vehicle",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "start": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.16.1",
    "lucide-react": "^1.11.0",
    "react": "^19.2.5",
    "react-dom": "^19.2.5"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@tailwindcss/postcss": "^4.2.4",
    "@tailwindcss/vite": "^4.2.4",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "autoprefixer": "^10.5.0",
    "eslint": "^10.2.1",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.5.0",
    "postcss": "^8.5.12",
    "tailwindcss": "^4.2.4",
    "vite": "^8.0.10"
  }
}

</code>

postcss.config.js:
<code>
export default {
  plugins: {
    autoprefixer: {},
  },
}

</code>

README.md:
<code>
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

</code>

vite.config.js:
<code>
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

</code>

