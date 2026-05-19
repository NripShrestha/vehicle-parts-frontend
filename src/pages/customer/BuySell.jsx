import React, { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Filter,
  Loader2,
  Package,
  Search,
  ShoppingBag,
} from "lucide-react";
import { customerSelfServiceService, resolvePartImageUrl } from "../../services/api";

const formatCurrency = (value = 0) =>
  `$${Number(value).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const normalizePart = (part) => ({
  partID: part.partID ?? part.PartID,
  partName: part.partName ?? part.PartName ?? "",
  category: part.category ?? part.Category ?? "",
  sellingPrice: part.sellingPrice ?? part.SellingPrice ?? 0,
  stockQuantity: part.stockQuantity ?? part.StockQuantity ?? 0,
  reorderLevel: part.reorderLevel ?? part.ReorderLevel ?? 0,
  imageUrl: part.imageUrl ?? part.ImageUrl ?? null,
});

const BuySell = ({ onExploreAsset }) => {
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [partRequestName, setPartRequestName] = useState("");
  const [partRequestStatus, setPartRequestStatus] = useState("");
  const [error, setError] = useState("");

  const loadCatalog = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await customerSelfServiceService.getCatalog();
      const catalog = (response.data || []).map(normalizePart);
      setParts(catalog);
    } catch (err) {
      setError(err.response?.data?.message || "Unable to load marketplace catalog.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCatalog();
  }, []);

  const inventoryItems = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return parts
      .filter((part) => part.stockQuantity > 0)
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
        imageUrl: resolvePartImageUrl(part.imageUrl),
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

  return (
    <div className="pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
        <div>
          <h2 className="text-3xl font-extrabold text-text-main m-0 tracking-tighter leading-none">
            Marketplace
          </h2>
          <p className="text-slate-500 text-[15px] font-medium mt-2">
            Browse parts available to buy and request items not currently in stock.
          </p>
        </div>
        <button
          type="button"
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

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 mb-10">
        <div className="flex gap-4">
          <div className="flex-1 bg-white border border-slate-200 rounded-xl px-5 py-3.5 flex items-center gap-4 shadow-sm focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all group">
            <Search
              size={20}
              className="text-text-muted group-focus-within:text-blue-500 transition-colors"
            />
            <input
              type="text"
              placeholder="Search available parts..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="border-none outline-none w-full text-sm font-extrabold text-text-main placeholder:text-text-muted/50"
            />
          </div>
          <button
            type="button"
            className="hidden sm:flex items-center gap-2 px-8 py-3.5 bg-white border border-slate-200 rounded-xl text-text-main text-[11px] uppercase tracking-widest font-extrabold hover:bg-slate-50 transition-all shadow-sm"
          >
            <Filter size={18} /> In Stock
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
            Loading marketplace...
          </p>
        </div>
      ) : inventoryItems.length === 0 ? (
        <div className="p-16 text-center bg-white rounded-3xl border border-slate-100">
          <Package size={56} className="mx-auto text-slate-200 mb-4" />
          <p className="text-slate-400 font-bold text-sm">
            No parts are currently available to buy.
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
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
                      item.status === "In Stock" ? "text-green-500" : "text-orange-500"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-[9px] font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md uppercase tracking-widest border border-blue-100">
                    {item.type}
                  </span>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold text-slate-600 bg-slate-100/80 px-2.5 py-1 rounded-md uppercase tracking-widest border border-slate-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="m-0 text-xl font-extrabold text-slate-900 flex-1 tracking-tighter leading-tight mb-6 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h3>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-50">
                  <span className="text-2xl font-extrabold text-text-main tracking-tighter">
                    {item.price}
                  </span>
                  <button
                    type="button"
                    onClick={() => onExploreAsset(item)}
                    className="px-6 py-2.5 bg-text-main text-white rounded-xl text-[10px] font-extrabold uppercase tracking-widest hover:bg-blue-500 shadow-sm transition-all transform active:scale-95"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BuySell;
