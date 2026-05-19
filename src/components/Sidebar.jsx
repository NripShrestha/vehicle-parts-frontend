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
    { id: "Financial", label: "Financial Matrix", icon: Home },
    { id: "Staff", label: "Human Assets", icon: Users },
    { id: "Parts", label: "Inventory Core", icon: Package },
    { id: "Purchases", label: "Supply Chain", icon: Truck },
    { id: "Vendors", label: "Vendor Node", icon: Settings },
  ];

  const staffLinks = [
    { id: "Registration", label: "Onboarding", icon: UserPlus },
    { id: "SalesInvoice", label: "POS Terminal", icon: ShoppingCart },
    { id: "CustomerSearch", label: "Intelligence", icon: Search },
    { id: "CustomerDetails", label: "Profile Hub", icon: ClipboardList },
    { id: "CustomerReports", label: "Analytics", icon: BarChart },
    { id: "EmailInvoice", label: "Invoicing", icon: Mail },
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
            <NavItem id="CustomerDash" label="Performance" icon={Home} />
            <NavItem id="Marketplace" label="Marketplace" icon={ShoppingBag} />
            <NavItem id="History" label="Logbook" icon={Clock} />
            <NavItem id="Appointments" label="Requests" icon={Calendar} />
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
          Safe Termination
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
