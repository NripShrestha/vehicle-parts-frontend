import React, { useState } from "react";
import {
  ShoppingBag,
  Tag,
  Search,
  Filter,
  Car,
  Package,
  Upload,
  DollarSign,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const BuySell = ({ onExploreAsset }) => {
  const [activeTab, setActiveTab] = useState("buy");
  const [sellSuccess, setSellSuccess] = useState(false);

  const inventoryItems = [
    {
      id: 1,
      name: "2023 Tesla Model 3 Long Range",
      type: "Vehicle",
      price: "$42,500",
      image: "car",
      status: "Available",
      tags: ["Electric", "AWD"],
    },
    {
      id: 2,
      name: "Brembo Ceramic Brake Kit",
      type: "Part",
      price: "$850",
      image: "package",
      status: "In Stock",
      tags: ["Performance", "Braking"],
    },
    {
      id: 3,
      name: "2021 Ford Mustang GT",
      type: "Vehicle",
      price: "$35,000",
      image: "car",
      status: "Available",
      tags: ["V8", "RWD"],
    },
    {
      id: 4,
      name: "Michelin Pilot Sport 4S (Set of 4)",
      type: "Part",
      price: "$1,200",
      image: "package",
      status: "In Stock",
      tags: ["Tires", "Summer"],
    },
    {
      id: 5,
      name: "KW V3 Coilover Suspension",
      type: "Part",
      price: "$2,800",
      image: "package",
      status: "Low Stock",
      tags: ["Suspension", "Track"],
    },
    {
      id: 6,
      name: "2022 BMW M3 Competition",
      type: "Vehicle",
      price: "$78,000",
      image: "car",
      status: "Reserved",
      tags: ["Turbo", "AWD"],
    },
  ];

  const handleSellSubmit = (e) => {
    e.preventDefault();
    setSellSuccess(true);
    setTimeout(() => setSellSuccess(false), 3000);
  };

  return (
    <div className="pb-10">
      {/* Header */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-extrabold text-text-main m-0 tracking-tighter leading-none">
            Marketplace
          </h2>
          <p className="text-text-muted text-[15px] font-medium mt-2 opacity-80">
            Browse premium inventory or request an appraisal for your vehicle.
          </p>
        </div>
      </div>

      {/* Tabs */}
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
          {/* Filters Bar */}
          <div className="flex gap-4 mb-10">
            <div className="flex-1 bg-white border border-slate-200 rounded-xl px-5 py-3.5 flex items-center gap-4 shadow-sm focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all group">
              <Search
                size={20}
                className="text-text-muted group-focus-within:text-blue-500 transition-colors"
              />
              <input
                type="text"
                placeholder="Search premium vehicles and certified parts..."
                className="border-none outline-none w-full text-sm font-extrabold text-text-main placeholder:text-text-muted/50"
              />
            </div>
            <button className="flex items-center gap-2 px-8 py-3.5 bg-white border border-slate-200 rounded-xl text-text-main text-[11px] uppercase tracking-widest font-extrabold hover:bg-slate-50 transition-all shadow-sm">
              <Filter size={18} /> Filter Results
            </button>
          </div>

          {/* Inventory Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inventoryItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-material overflow-hidden flex flex-col group hover:scale-[1.02] transition-all duration-500 border border-slate-100"
              >
                <div className="h-52 bg-slate-50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {item.image === "car" ? (
                    <Car
                      size={84}
                      className="text-slate-200 group-hover:scale-110 group-hover:text-blue-200 transition-all duration-700"
                    />
                  ) : (
                    <Package
                      size={84}
                      className="text-slate-200 group-hover:scale-110 group-hover:text-blue-200 transition-all duration-700"
                    />
                  )}
                  <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                    <span
                      className={`px-3 py-1.5 rounded-lg text-[9px] font-extrabold shadow-sm bg-white uppercase tracking-widest border border-slate-100 ${
                        item.status === "Available" ||
                        item.status === "In Stock"
                          ? "text-green-500"
                          : "text-orange-500"
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
        </>
      )}

      {activeTab === "sell" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Sell Info */}
          <div className="flex flex-col gap-8">
            <div className="p-10 rounded-2xl bg-dark-gradient text-white shadow-header relative overflow-hidden group border border-white/10">
              <div className="absolute -right-10 -top-10 opacity-10 rotate-12 group-hover:scale-110 transition-all duration-700">
                <ShieldCheck size={240} />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/20 shadow-inner group-hover:bg-white/20 transition-all">
                <ShieldCheck size={32} className="text-blue-400" />
              </div>
              <h3 className="text-3xl font-extrabold m-0 mb-4 tracking-tighter leading-none">
                Get a Premium Offer
              </h3>
              <p className="text-base text-white/70 m-0 mb-8 font-medium leading-relaxed opacity-80">
                Looking to sell your vehicle or high-performance parts? Submit
                your details below for a quick, competitive appraisal from our
                expert team.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-sm font-extrabold text-white/90 group-hover:translate-x-2 transition-transform">
                  <CheckCircle2 size={20} className="text-blue-400" /> Immediate
                  cash offers
                </div>
                <div className="flex items-center gap-4 text-sm font-extrabold text-white/90 group-hover:translate-x-2 transition-transform duration-500">
                  <CheckCircle2 size={20} className="text-blue-400" /> Trade-in
                  credit bonuses
                </div>
                <div className="flex items-center gap-4 text-sm font-extrabold text-white/90 group-hover:translate-x-2 transition-transform duration-700">
                  <CheckCircle2 size={20} className="text-blue-400" />{" "}
                  Hassle-free paperwork
                </div>
              </div>
            </div>

            {sellSuccess && (
              <div className="bg-green-50 border border-green-200 p-6 rounded-2xl flex items-center gap-5 text-green-700 shadow-md animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center text-white shadow-lg">
                  <CheckCircle2 size={28} />
                </div>
                <div>
                  <h4 className="m-0 text-[11px] font-extrabold uppercase tracking-widest">
                    Request Submitted Successfully
                  </h4>
                  <p className="m-0 text-sm font-bold opacity-80 mt-1">
                    Our review team will contact you within 24 business hours.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-material relative overflow-hidden border border-slate-100">
            <div className="absolute top-0 left-0 right-0 h-16 rounded-t-xl flex items-center px-8 text-white shadow-header bg-blue-gradient">
              <h4 className="m-0 text-base font-bold">
                Appraisal Request Form
              </h4>
            </div>
            <form
              onSubmit={handleSellSubmit}
              className="p-8 mt-14 flex flex-col gap-8"
            >
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
                  <select className="w-full px-5 py-3.5 rounded-xl border border-slate-200 text-sm font-extrabold text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm bg-white cursor-pointer appearance-none transition-all">
                    <option>Showroom Quality</option>
                    <option>Good / Daily Driven</option>
                    <option>Fair / High Mileage</option>
                    <option>Restoration Required</option>
                  </select>
                </div>
                <div>
                  <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-2">
                    Current Mileage (if applicable)
                  </p>
                  <input
                    type="number"
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 text-sm font-extrabold text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm placeholder:text-text-muted/50 transition-all"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-3">
                  Item Photo Upload (Max 5)
                </p>
                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-10 text-center bg-slate-50 hover:bg-slate-100 hover:border-blue-400 cursor-pointer transition-all group shadow-inner">
                  <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-text-muted mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Upload size={24} />
                  </div>
                  <p className="m-0 text-sm font-extrabold text-text-main tracking-tight group-hover:text-blue-500 transition-colors">
                    Drag and drop photos or click to browse
                  </p>
                  <p className="m-0 text-[10px] text-text-muted font-extrabold mt-1.5 uppercase tracking-widest">
                    HEIC, PNG, JPG UP TO 10MB EACH
                  </p>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-10 py-4 bg-blue-500 text-white rounded-xl text-[11px] font-extrabold uppercase tracking-widest flex items-center gap-3 hover:bg-black shadow-lg hover:shadow-xl transition-all transform active:scale-95 group"
                >
                  Submit Appraisal Request{" "}
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
