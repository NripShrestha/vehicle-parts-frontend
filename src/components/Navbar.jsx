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
