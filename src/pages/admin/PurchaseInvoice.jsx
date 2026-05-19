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

  const addItem = (part) => {
    const existing = purchaseItems.find((item) => item.partID === part.partID);
    if (existing) {
      setPurchaseItems(
        purchaseItems.map((item) =>
          item.partID === part.partID
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setPurchaseItems([
        ...purchaseItems,
        {
          partID: part.partID,
          partName: part.partName,
          unitPrice: part.partPrice, // Use current part price as default unit price for purchase
          quantity: 1,
        },
      ]);
    }
  };

  const removeItem = (partID) => {
    setPurchaseItems(purchaseItems.filter((item) => item.partID !== partID));
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
    if (!selectedVendor) return alert("Please select a strategic partner");
    if (purchaseItems.length === 0)
      return alert("No inventory assets staged for procurement");

    setLoading(true);
    try {
      const purchaseData = {
        vendorID: selectedVendor.vendorID,
        purchaseItems: purchaseItems.map((item) => ({
          partID: item.partID,
          quantity: item.quantity,
          unitPrice: Number(item.unitPrice),
        })),
      };
      await purchasesService.create(purchaseData);
      alert("Procurement order finalized successfully");
      setPurchaseItems([]);
      setSelectedVendor(null);
      loadData();
    } catch (error) {
      alert("Procurement reconciliation failed");
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
            {loading ? "Reconciling..." : "Finalize Procurement"}
          </button>
        </div>
      </div>

      {/* Procurement Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <ProcureStat
          title="Inbound Assets"
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
          title="Audit Score"
          value="98.2%"
          icon={ShieldCheck}
          color="#43A047"
        />
        <ProcureStat
          title="Procured (MTD)"
          value={`$${Math.round(purchases.reduce((acc, p) => acc + p.totalAmount, 0) / 1000)}k`}
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
                  placeholder="Stage Catalog Assets..."
                  className="w-full bg-white/10 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-[10px] text-white outline-none focus:bg-white/20 transition-all uppercase font-bold"
                  value={partSearch}
                  onChange={(e) => setPartSearch(e.target.value)}
                />
                {partSearch && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 max-h-64 overflow-y-auto p-2">
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
                          className="w-full p-3 rounded-xl hover:bg-slate-50 text-left flex justify-between items-center transition-colors"
                        >
                          <div>
                            <p className="text-xs font-black text-slate-900 m-0">
                              {part.partName}
                            </p>
                            <p className="text-[9px] text-slate-400 m-0 font-bold tracking-widest uppercase">
                              Inventory: {part.stockQuantity}
                            </p>
                          </div>
                          <p className="text-xs font-black text-blue-600">
                            ${part.partPrice.toFixed(2)}
                          </p>
                        </button>
                      ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="pl-8 py-4 text-[10px] uppercase text-slate-500 font-black border-b border-slate-100 tracking-widest">
                      Asset Details
                    </th>
                    <th className="py-4 text-[10px] uppercase text-slate-500 font-black border-b border-slate-100 tracking-widest">
                      Cost/Unit
                    </th>
                    <th className="py-4 text-[10px] uppercase text-slate-500 font-black border-b border-slate-100 tracking-widest">
                      Qty
                    </th>
                    <th className="py-4 text-[10px] uppercase text-slate-500 font-black border-b border-slate-100 tracking-widest">
                      Valuation
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
                          No assets staged for procurement
                        </p>
                      </td>
                    </tr>
                  ) : (
                    purchaseItems.map((item) => (
                      <tr
                        key={item.partID}
                        className="group hover:bg-slate-50 transition-colors"
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
                                  e.target.value,
                                )
                              }
                              className="w-20 bg-transparent border-none text-sm font-black text-slate-900 focus:ring-0 outline-none p-0"
                            />
                          </div>
                        </td>
                        <td className="py-5 border-b border-slate-100">
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                              updateItem(
                                item.partID,
                                "quantity",
                                Number(e.target.value),
                              )
                            }
                            className="w-16 bg-transparent border-none text-sm font-black text-slate-900 focus:ring-0 outline-none p-0"
                          />
                        </td>
                        <td className="py-5 border-b border-slate-100">
                          <p className="text-sm font-black text-blue-600 m-0 tracking-tight">
                            ${(item.unitPrice * item.quantity).toFixed(2)}
                          </p>
                        </td>
                        <td className="pr-8 py-5 border-b border-slate-100 text-right">
                          <button
                            onClick={() => removeItem(item.partID)}
                            className="p-2 rounded-xl bg-white text-rose-400 hover:text-rose-600 hover:shadow-md border border-slate-100 transition-all opacity-0 group-hover:opacity-100"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="p-8 bg-slate-900 flex justify-between items-center text-white">
              <div>
                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">
                  Estimated Inbound Total
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
                  Assets Staged
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
              <div className="relative mb-6 group">
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
                {vendorSearch && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 max-h-48 overflow-y-auto p-2">
                    {vendors
                      .filter((v) =>
                        v.vendorName
                          .toLowerCase()
                          .includes(vendorSearch.toLowerCase()),
                      )
                      .map((vendor) => (
                        <button
                          key={vendor.vendorID}
                          onClick={() => {
                            setSelectedVendor(vendor);
                            setVendorSearch("");
                          }}
                          className="w-full p-3 rounded-xl hover:bg-slate-50 text-left font-bold text-sm text-slate-700 transition-colors"
                        >
                          {vendor.vendorName}
                        </button>
                      ))}
                  </div>
                )}
              </div>

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
                      <Calendar size={14} className="text-slate-400" />
                      Active since 2024
                    </div>
                    <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
                      <RefreshCw size={14} className="text-slate-400" />
                      48h Lead Time
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
                <div className="py-12 text-center border-2 border-dashed border-slate-100 rounded-3xl">
                  <Truck size={32} className="mx-auto text-slate-200 mb-2" />
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">
                    No strategic partner identified
                  </p>
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
