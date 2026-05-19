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
