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
