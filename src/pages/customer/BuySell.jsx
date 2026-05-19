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
