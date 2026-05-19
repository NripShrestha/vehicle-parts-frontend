import React, { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Filter,
  Loader2,
  Minus,
  Package,
  Plus,
  Search,
  ShoppingBag,
  ShoppingCart,
  Trash2,
  X,
} from "lucide-react";
import {
  customerSelfServiceService,
  resolvePartImageUrl,
} from "../../services/api";

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

const BuySell = ({
  onExploreAsset,
  cart = [],
  onAddToCart,
  onUpdateCartQty,
  onRemoveFromCart,
  onClearCart,
  onPurchaseComplete,
}) => {
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [partRequestName, setPartRequestName] = useState("");
  const [partRequestStatus, setPartRequestStatus] = useState("");
  const [error, setError] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("Paid");
  const [creditAmount, setCreditAmount] = useState("");

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

  const cartSubtotal = cart.reduce(
    (sum, item) => sum + item.sellingPrice * item.quantity,
    0,
  );
  const cartDiscount = cartSubtotal > 5000 ? cartSubtotal * 0.1 : 0;
  const cartTotal = cartSubtotal - cartDiscount;

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

  const handleCheckout = async () => {
    if (cart.length === 0) return;

    const normalizedCredit =
      paymentStatus === "Partial" ? Number(creditAmount) : 0;

    if (paymentStatus === "Partial") {
      if (
        !normalizedCredit ||
        normalizedCredit <= 0 ||
        normalizedCredit >= cartTotal
      ) {
        setError(
          "Partial payment requires a credit amount greater than 0 and less than the order total.",
        );
        return;
      }
    }

    try {
      setCheckoutLoading(true);
      setError("");
      setCheckoutSuccess("");
      const response = await customerSelfServiceService.createPurchase({
        paymentStatus,
        creditAmount: normalizedCredit,
        items: cart.map((item) => ({
          partID: item.partID,
          quantity: item.quantity,
        })),
      });
      const invoice = response.data;
      onClearCart?.();
      setShowCart(false);
      setPaymentStatus("Paid");
      setCreditAmount("");
      setCheckoutSuccess(
        `Order placed. Invoice INV-${String(invoice.salesInvoiceID).padStart(5, "0")} created.`,
      );
      onPurchaseComplete?.(invoice);
      await loadCatalog();
    } catch (err) {
      setError(err.response?.data?.message || "Unable to complete checkout.");
    } finally {
      setCheckoutLoading(false);
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
            Browse in-stock parts, add to cart, and complete your purchase online.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setShowCart(true)}
            className="px-6 py-3.5 bg-slate-900 text-white rounded-xl text-[11px] uppercase tracking-widest font-extrabold hover:bg-blue-600 transition-all shadow-sm flex items-center gap-2"
          >
            <ShoppingCart size={16} />
            Cart ({cart.length})
          </button>
          <button
            type="button"
            onClick={loadCatalog}
            className="px-6 py-3.5 bg-white border border-slate-200 rounded-xl text-text-main text-[11px] uppercase tracking-widest font-extrabold hover:bg-slate-50 transition-all shadow-sm"
          >
            Refresh Catalog
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl text-red-800 text-xs font-bold flex gap-2 items-center">
          <AlertCircle size={16} className="shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {checkoutSuccess && (
        <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-xl text-green-800 text-xs font-bold flex gap-2 items-center">
          <CheckCircle2 size={16} className="shrink-0" />
          <span>{checkoutSuccess}</span>
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
                <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-slate-50">
                  <span className="text-2xl font-extrabold text-text-main tracking-tighter">
                    {item.price}
                  </span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => onAddToCart?.(item.source, 1)}
                      className="flex-1 px-4 py-2.5 border border-slate-200 rounded-xl text-[10px] font-extrabold uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-1"
                    >
                      <ShoppingCart size={14} /> Add
                    </button>
                    <button
                      type="button"
                      onClick={() => onExploreAsset(item)}
                      className="flex-1 px-4 py-2.5 bg-text-main text-white rounded-xl text-[10px] font-extrabold uppercase tracking-widest hover:bg-blue-500 shadow-sm transition-all"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showCart && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg p-8 border border-slate-100 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setShowCart(false)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-800 bg-slate-50"
            >
              <X size={16} />
            </button>
            <h3 className="m-0 text-2xl font-black text-slate-800 mb-6 flex items-center gap-2">
              <ShoppingBag size={22} /> Your Cart
            </h3>

            {cart.length === 0 ? (
              <p className="text-sm font-bold text-slate-400">Your cart is empty.</p>
            ) : (
              <>
                <div className="flex flex-col gap-4 mb-6">
                  {cart.map((item) => (
                    <div
                      key={item.partID}
                      className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="m-0 text-sm font-bold text-slate-800 truncate">
                          {item.partName}
                        </p>
                        <p className="m-0 text-xs text-slate-500 font-semibold">
                          {formatCurrency(item.sellingPrice)} each
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            onUpdateCartQty?.(item.partID, item.quantity - 1)
                          }
                          className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-black w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            onUpdateCartQty?.(item.partID, item.quantity + 1)
                          }
                          className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemoveFromCart?.(item.partID)}
                        className="text-slate-400 hover:text-red-500"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>

                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                  Payment Status
                </label>
                <select
                  value={paymentStatus}
                  onChange={(event) => setPaymentStatus(event.target.value)}
                  className="w-full mb-4 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold outline-none focus:border-blue-500"
                >
                  <option value="Paid">Paid in full</option>
                  <option value="Partial">Partial payment</option>
                  <option value="Unpaid">Pay on credit</option>
                </select>

                {paymentStatus === "Partial" && (
                  <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    max={cartTotal}
                    value={creditAmount}
                    onChange={(event) => setCreditAmount(event.target.value)}
                    className="w-full mb-4 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold outline-none focus:border-blue-500"
                    placeholder="Outstanding credit amount"
                  />
                )}

                <div className="space-y-2 mb-6 text-sm font-semibold text-slate-600 border-t border-slate-100 pt-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatCurrency(cartSubtotal)}</span>
                  </div>
                  {cartDiscount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Loyalty discount</span>
                      <span>-{formatCurrency(cartDiscount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-lg font-black text-slate-900">
                    <span>Total</span>
                    <span>{formatCurrency(cartTotal)}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCheckout}
                  disabled={checkoutLoading}
                  className="w-full py-4 bg-blue-600 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-900 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {checkoutLoading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Processing...
                    </>
                  ) : (
                    "Complete Purchase"
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BuySell;

