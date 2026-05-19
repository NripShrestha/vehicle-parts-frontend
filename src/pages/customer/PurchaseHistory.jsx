import React, { useState, useEffect } from "react";
import {
  Clock,
  FileText,
  Eye,
  X,
  Printer,
  ChevronRight,
  Loader2,
  AlertCircle,
  TrendingDown,
} from "lucide-react";
import { customerSelfServiceService } from "../../services/api";

const PurchaseHistory = ({ user }) => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const fetchHistory = async () => {
    try {
      setLoading(true);
      const response = await customerSelfServiceService.getHistory();
      setHistory(response.data.purchaseHistory || []);
    } catch (err) {
      console.error("Failed to load purchase history:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <Loader2 size={40} className="text-blue-500 animate-spin" />
        <p className="text-slate-500 font-bold text-sm uppercase tracking-widest animate-pulse">
          Loading Ledger Records...
        </p>
      </div>
    );
  }

  return (
    <div className="pb-10 font-sans">
      {/* Header */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-3xl font-black text-slate-800 m-0 tracking-tight leading-none">
            Purchase History
          </h1>
          <p className="text-slate-500 text-sm mt-2 font-medium">
            Keep track of your vehicle parts acquisitions and financial receipts.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] border border-slate-100 p-8">
        <div className="flex justify-between items-center mb-6">
          <h4 className="m-0 text-lg font-black text-slate-800">
            Transaction Ledger
          </h4>
        </div>

        {history.length === 0 ? (
          <div className="p-16 text-center flex flex-col items-center gap-4 bg-slate-50 rounded-2xl border border-slate-100">
            <FileText size={48} className="text-slate-300" />
            <p className="text-slate-500 font-bold text-sm tracking-tight leading-relaxed max-w-sm m-0">
              No transactions recorded. When you purchase parts, invoices will be synchronized here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="pb-4 text-[10px] uppercase text-slate-400 font-black tracking-wider text-left">
                    INVOICE ID
                  </th>
                  <th className="pb-4 text-[10px] uppercase text-slate-400 font-black tracking-wider text-left">
                    TRANSACTION DATE
                  </th>
                  <th className="pb-4 text-[10px] uppercase text-slate-400 font-black tracking-wider text-left">
                    ISSUED BY
                  </th>
                  <th className="pb-4 text-[10px] uppercase text-slate-400 font-black tracking-wider text-right">
                    TOTAL AMOUNT
                  </th>
                  <th className="pb-4 text-[10px] uppercase text-slate-400 font-black tracking-wider text-center">
                    PAYMENT STATUS
                  </th>
                  <th className="pb-4 text-[10px] uppercase text-slate-400 font-black tracking-wider text-right">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {history.map((item) => (
                  <tr
                    key={item.salesInvoiceID}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 shadow-inner">
                          <FileText size={16} />
                        </div>
                        <span className="font-black text-sm text-slate-800 tracking-tight">
                          INV-{item.salesInvoiceID.toString().padStart(5, "0")}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {new Date(item.invoiceDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    <td className="py-4 text-sm font-semibold text-slate-600">
                      {item.staffName}
                    </td>
                    <td className="py-4 text-right font-black text-slate-800 text-sm tracking-tight">
                      ${item.totalAmount.toFixed(2)}
                    </td>
                    <td className="py-4 text-center">
                      <span
                        className={`text-[9px] font-black px-2.5 py-1 rounded-md tracking-wider border uppercase ${
                          item.paymentStatus === "Paid"
                            ? "bg-green-50 text-green-600 border-green-100"
                            : "bg-yellow-50 text-yellow-600 border-yellow-100"
                        }`}
                      >
                        {item.paymentStatus}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <button
                        onClick={() => setSelectedInvoice(item)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-bold text-slate-700 uppercase tracking-wider hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm group"
                      >
                        <Eye
                          size={14}
                          className="group-hover:scale-110 transition-transform"
                        />
                        View Invoice
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Detailed Invoice Modal */}
      {selectedInvoice && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-2xl p-8 border border-slate-100 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            {/* Modal Actions */}
            <div className="absolute top-6 right-6 flex gap-3">
              <button
                onClick={handlePrint}
                className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-800 bg-slate-50 cursor-pointer"
                title="Print Invoice"
              >
                <Printer size={16} />
              </button>
              <button
                onClick={() => setSelectedInvoice(null)}
                className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-800 bg-slate-50 cursor-pointer"
                title="Close"
              >
                <X size={16} />
              </button>
            </div>

            {/* Printable Invoice Container */}
            <div id="invoice-printable" className="p-2 font-mono text-slate-800">
              <div className="border-b-4 border-slate-900 pb-6 mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-1 uppercase font-sans">
                      VEHICLE PARTS SYSTEM
                    </h2>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      INVOICE SLIP
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold bg-slate-900 text-white px-3 py-1 rounded uppercase tracking-wider">
                      {selectedInvoice.paymentStatus}
                    </span>
                    <h4 className="text-sm font-bold text-slate-800 mt-3 m-0">
                      INV-{selectedInvoice.salesInvoiceID.toString().padStart(5, "0")}
                    </h4>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8 text-xs font-semibold">
                <div>
                  <p className="text-slate-400 font-bold uppercase tracking-wider mb-2 m-0 text-[10px]">
                    Billed To:
                  </p>
                  <p className="text-slate-800 m-0 font-bold">{user?.fullName}</p>
                  <p className="text-slate-500 m-0 mt-0.5">{user?.email}</p>
                  <p className="text-slate-500 m-0 mt-0.5">{user?.phoneNumber}</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-400 font-bold uppercase tracking-wider mb-2 m-0 text-[10px]">
                    Invoice Date:
                  </p>
                  <p className="text-slate-800 m-0">
                    {new Date(selectedInvoice.invoiceDate).toLocaleString()}
                  </p>
                  <p className="text-slate-400 font-bold uppercase tracking-wider mt-3 mb-1 m-0 text-[10px]">
                    Served By:
                  </p>
                  <p className="text-slate-800 m-0">{selectedInvoice.staffName}</p>
                </div>
              </div>

              <table className="w-full border-collapse mb-8 text-xs">
                <thead>
                  <tr className="border-b-2 border-slate-900 bg-slate-50">
                    <th className="py-2 text-left text-slate-800 font-bold">ITEM DESCRIPTION</th>
                    <th className="py-2 text-right text-slate-800 font-bold">QTY</th>
                    <th className="py-2 text-right text-slate-800 font-bold">UNIT PRICE</th>
                    <th className="py-2 text-right text-slate-800 font-bold">LINE TOTAL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {selectedInvoice.items?.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50">
                      <td className="py-3 font-semibold">{item.partName}</td>
                      <td className="py-3 text-right">{item.quantitySold}</td>
                      <td className="py-3 text-right">${item.unitPrice.toFixed(2)}</td>
                      <td className="py-3 text-right font-bold">${item.lineTotal.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex justify-end">
                <div className="w-64 flex flex-col gap-2 text-xs font-semibold">
                  <div className="flex justify-between text-slate-500">
                    <span>Subtotal:</span>
                    <span>${selectedInvoice.subtotal.toFixed(2)}</span>
                  </div>
                  {selectedInvoice.discountAmount > 0 && (
                    <div className="flex justify-between text-rose-500">
                      <span className="flex items-center gap-1">
                        <TrendingDown size={12} /> Discount:
                      </span>
                      <span>-${selectedInvoice.discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  {selectedInvoice.creditAmount > 0 && (
                    <div className="flex justify-between text-slate-500">
                      <span>Credited Balance:</span>
                      <span>${selectedInvoice.creditAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm font-black border-t border-slate-200 pt-2 text-slate-900">
                    <span>Total Amount:</span>
                    <span>${selectedInvoice.totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 mt-10 pt-6 text-center">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider m-0">
                  Thank you for your business. For refunds or returns, contact support.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PurchaseHistory;
