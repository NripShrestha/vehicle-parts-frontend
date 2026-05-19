import React from "react";
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
} from "lucide-react";

const AppointmentRequests = () => {
  return (
    <div className="pb-10">
      {/* Strategic Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-extrabold text-text-main m-0 tracking-tighter leading-none">
            Service Orchestration
          </h2>
          <p className="text-text-muted text-[15px] font-medium mt-2 opacity-80">
            Schedule advanced maintenance or initiate specialty parts
            procurement.
          </p>
        </div>
        <div className="bg-white px-6 py-3 rounded-2xl border border-slate-200 flex items-center gap-4 shadow-material group hover:border-blue-500 transition-all duration-500">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
            <Clock size={20} />
          </div>
          <div>
            <p className="m-0 text-[10px] font-extrabold text-text-muted uppercase tracking-widest opacity-60">
              RESPONSE TIME
            </p>
            <span className="text-xs font-extrabold text-text-main uppercase tracking-tight">
              Avg. 2 Hours
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Advanced Maintenance Booking */}
        <div className="bg-white rounded-2xl shadow-material relative overflow-hidden border border-slate-100">
          <div className="absolute top-0 left-0 right-0 h-16 rounded-t-xl flex items-center px-8 text-white shadow-header bg-blue-gradient">
            <div className="flex items-center gap-3">
              <Calendar size={20} className="text-white" />
              <h4 className="m-0 text-base font-bold">Maintenance Scheduler</h4>
            </div>
          </div>

          <div className="p-8 mt-14 flex flex-col gap-8">
            <div>
              <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-3">
                Vehicle Selection
              </p>
              <div className="relative group">
                <Car
                  size={18}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-blue-500 transition-colors"
                />
                <select className="w-full pl-14 pr-5 py-3.5 rounded-xl border border-slate-200 text-sm font-extrabold text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm bg-white cursor-pointer transition-all appearance-none">
                  <option>Tesla Model S (XYZ-001)</option>
                  <option>Toyota RAV4 (ABC-992)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-2">
                  Service Appointment Date
                </p>
                <input
                  type="date"
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-200 text-sm font-extrabold text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm transition-all"
                />
              </div>
              <div>
                <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-2">
                  Priority Level
                </p>
                <select className="w-full px-5 py-3.5 rounded-xl border border-slate-200 text-sm font-extrabold text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm bg-white cursor-pointer transition-all appearance-none">
                  <option>Standard / Preventive</option>
                  <option>Urgent / Performance Fix</option>
                  <option>Safety Audit Required</option>
                </select>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-4">
                Required Service Categories
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Engine Diagnostic",
                  "Brake Systems",
                  "Electrical Hub",
                  "Fluid Exchange",
                ].map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-4 p-4 border border-slate-100 rounded-2xl cursor-pointer hover:bg-slate-50 hover:border-blue-200 transition-all shadow-sm group"
                  >
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-blue-500 rounded-lg accent-blue-500 focus:ring-blue-500/20"
                    />
                    <span className="text-xs font-extrabold text-text-main group-hover:text-blue-600 transition-colors tracking-tight">
                      {service}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full py-4.5 bg-blue-500 text-white rounded-xl font-extrabold text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg hover:bg-black transition-all transform active:scale-95 mt-2">
              <ShieldCheck size={18} /> INITIALIZE BOOKING REQUEST
            </button>
          </div>
        </div>

        {/* Specialty Parts Sourcing */}
        <div className="bg-white rounded-2xl shadow-material relative overflow-hidden border border-slate-100">
          <div className="absolute top-0 left-0 right-0 h-16 rounded-t-xl flex items-center px-8 text-white shadow-header bg-pink-gradient">
            <div className="flex items-center gap-3">
              <PenTool size={20} className="text-white" />
              <h4 className="m-0 text-base font-bold">
                Strategic Component Sourcing
              </h4>
            </div>
          </div>

          <div className="p-8 mt-14 flex flex-col gap-8">
            <div className="p-5 bg-red-50 border border-red-100 rounded-2xl flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center text-white shrink-0 shadow-md">
                <AlertTriangle size={20} />
              </div>
              <div>
                <h4 className="m-0 text-[10px] font-extrabold text-red-600 uppercase tracking-widest mb-1">
                  Critical Sourcing Alert
                </h4>
                <p className="text-xs text-red-900 m-0 font-bold leading-relaxed opacity-80">
                  For rare or discontinued OEM components, provide the complete
                  17-digit VIN to ensure 100% fitment accuracy.
                </p>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-3">
                Part Nomenclature / SKU
              </p>
              <div className="relative group">
                <Search
                  size={18}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-pink-500 transition-colors"
                />
                <input
                  type="text"
                  placeholder="e.g. OEM Carbon Ceramic Rotors"
                  className="w-full pl-14 pr-5 py-3.5 rounded-xl border border-slate-200 text-sm font-extrabold text-text-main outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 shadow-sm transition-all placeholder:text-text-muted/50"
                />
              </div>
            </div>

            <div>
              <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-2">
                Detailed Engineering Specs
              </p>
              <textarea
                placeholder="Specify manufacturing years, trim variations, or material grade requirements..."
                className="w-full px-5 py-4 rounded-xl border border-slate-200 text-sm font-extrabold text-text-main outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 shadow-sm h-44 resize-none transition-all placeholder:text-text-muted/50 leading-relaxed"
              ></textarea>
            </div>

            <button className="w-full py-4.5 bg-text-main text-white rounded-xl font-extrabold text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg hover:bg-blue-600 transition-all transform active:scale-95 mt-2">
              <MessageSquare size={18} /> DISPATCH PROCUREMENT REQUEST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentRequests;
