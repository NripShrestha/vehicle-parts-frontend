import React, { useMemo, useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  Loader2,
  Minus,
  Package,
  Plus,
  ShoppingCart,
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

const AssetDetails = ({
  asset,
  onBack,
  onAddToCart,
  onPurchaseComplete,
}) => {
  const part = asset?.source;
  const [quantity, setQuantity] = useState(1);
  const [paymentStatus, setPaymentStatus] = useState("Paid");
  const [creditAmount, setCreditAmount] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const lineTotal = useMemo(() => {
    if (!part) return 0;
    return (part.sellingPrice ?? 0) * quantity;
  }, [part, quantity]);

  const loyaltyDiscount = lineTotal > 5000 ? lineTotal * 0.1 : 0;
  const totalDue = lineTotal - loyaltyDiscount;

  if (!asset || !part) return null;

  const maxQuantity = part.stockQuantity ?? 0;
  const imageUrl = asset.imageUrl || resolvePartImageUrl(part.imageUrl);

  const adjustQuantity = (delta) => {
    setQuantity((current) => {
      const next = current + delta;
      return Math.min(Math.max(1, next), maxQuantity);
    });
  };

  const handleAddToCart = () => {
    onAddToCart?.(part, quantity);
    setSuccess(`${part.partName} added to cart.`);
    setError("");
    setTimeout(() => setSuccess(""), 3000);
  };

  const handlePurchase = async () => {
    const normalizedCredit =
      paymentStatus === "Partial" ? Number(creditAmount) : 0;

    if (paymentStatus === "Partial") {
      if (
        !normalizedCredit ||
        normalizedCredit <= 0 ||
        normalizedCredit >= totalDue
      ) {
        setError(
          "Partial payment requires a credit amount greater than 0 and less than the order total.",
        );
        return;
      }
    }

    try {
      setSubmitting(true);
      setError("");
      setSuccess("");
      const response = await customerSelfServiceService.createPurchase({
        paymentStatus,
        creditAmount: normalizedCredit,
        items: [{ partID: part.partID, quantity }],
      });
      const invoice = response.data;
      setSuccess(
        `Purchase complete. Invoice INV-${String(invoice.salesInvoiceID).padStart(5, "0")} created.`,
      );
      onPurchaseComplete?.(invoice);
    } catch (err) {
      setError(err.response?.data?.message || "Unable to complete purchase.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pb-20 animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-3 text-slate-500 hover:text-blue-600 transition-all font-bold text-xs uppercase tracking-widest group"
        >
          <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
            <ArrowLeft size={18} />
          </div>
          Back to Marketplace
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-white rounded-3xl shadow-material overflow-hidden border border-slate-100">
            <div className="h-[360px] bg-slate-50 flex items-center justify-center relative">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={part.partName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Package size={120} className="text-slate-200" />
              )}
              <span
                className={`absolute top-4 right-4 px-3 py-1.5 rounded-lg text-[9px] font-extrabold shadow-sm bg-white uppercase tracking-widest border ${
                  maxQuantity > part.reorderLevel
                    ? "text-green-500 border-green-100"
                    : "text-orange-500 border-orange-100"
                }`}
              >
                {maxQuantity > 0 ? asset.status : "Out of Stock"}
              </span>
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-lg border border-blue-100">
                  {part.category || "Part"}
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest rounded-lg">
                  ID #{part.partID}
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest rounded-lg">
                  Stock {maxQuantity}
                </span>
              </div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight m-0 mb-3">
                {part.partName}
              </h1>
              <p className="text-slate-500 font-medium m-0">
                Unit price {formatCurrency(part.sellingPrice)} · Reorder level{" "}
                {part.reorderLevel}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-material p-8 sticky top-28">
            <h2 className="text-xl font-black text-slate-900 m-0 mb-6">
              Purchase Part
            </h2>

            {error && (
              <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl text-red-800 text-xs font-bold flex gap-2 items-center">
                <AlertCircle size={16} className="shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {success && (
              <div className="mb-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-xl text-green-800 text-xs font-bold flex gap-2 items-center">
                <CheckCircle2 size={16} className="shrink-0" />
                <span>{success}</span>
              </div>
            )}

            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
              Quantity
            </label>
            <div className="flex items-center gap-3 mb-6">
              <button
                type="button"
                onClick={() => adjustQuantity(-1)}
                disabled={quantity <= 1}
                className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center disabled:opacity-40"
              >
                <Minus size={16} />
              </button>
              <span className="text-xl font-black w-12 text-center">{quantity}</span>
              <button
                type="button"
                onClick={() => adjustQuantity(1)}
                disabled={quantity >= maxQuantity}
                className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center disabled:opacity-40"
              >
                <Plus size={16} />
              </button>
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
              <div className="mb-4">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                  Credit amount (outstanding)
                </label>
                <input
                  type="number"
                  min="0.01"
                  step="0.01"
                  max={totalDue}
                  value={creditAmount}
                  onChange={(event) => setCreditAmount(event.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold outline-none focus:border-blue-500"
                  placeholder="Amount to bill later"
                />
              </div>
            )}

            <div className="space-y-2 mb-6 text-sm font-semibold text-slate-600 border-t border-slate-100 pt-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatCurrency(lineTotal)}</span>
              </div>
              {loyaltyDiscount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Loyalty discount (10%)</span>
                  <span>-{formatCurrency(loyaltyDiscount)}</span>
                </div>
              )}
              <div className="flex justify-between text-lg font-black text-slate-900 pt-2 border-t border-slate-100">
                <span>Total</span>
                <span>{formatCurrency(totalDue)}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handlePurchase}
              disabled={submitting || maxQuantity < 1}
              className="w-full py-4 rounded-xl bg-blue-600 text-white text-xs font-black uppercase tracking-widest hover:bg-slate-900 transition-all disabled:opacity-60 flex items-center justify-center gap-2 mb-3"
            >
              {submitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Processing...
                </>
              ) : (
                "Buy Now"
              )}
            </button>

            <button
              type="button"
              onClick={handleAddToCart}
              disabled={maxQuantity < 1}
              className="w-full py-3.5 rounded-xl border border-slate-200 text-slate-800 text-xs font-black uppercase tracking-widest hover:bg-slate-50 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
            >
              <ShoppingCart size={16} /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetDetails;
