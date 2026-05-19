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
