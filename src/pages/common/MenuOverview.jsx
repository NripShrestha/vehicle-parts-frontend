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
