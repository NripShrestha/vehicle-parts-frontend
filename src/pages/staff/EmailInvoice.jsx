import React, { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  CreditCard,
  FileText,
  Loader2,
  Mail,
  RefreshCw,
  Search,
  Send,
  User,
} from "lucide-react";
import { salesService } from "../../services/api";

const formatCurrency = (value = 0) =>
  `$${Number(value).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const EmailInvoice = () => {
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [sendingId, setSendingId] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const loadInvoices = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await salesService.getAllInvoices();
      const invoiceRows = response.data || [];
      setInvoices(invoiceRows);
      setSelectedInvoiceId((currentId) => currentId || invoiceRows[0]?.salesInvoiceID || null);
    } catch (err) {
      setError(err.response?.data?.message || "Unable to load invoices.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInvoices();
  }, []);

  const filteredInvoices = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return invoices;

    return invoices.filter((invoice) => {
      const invoiceId = String(invoice.salesInvoiceID || "");
      return (
        invoiceId.includes(query) ||
        invoice.customerName?.toLowerCase().includes(query) ||
        invoice.paymentStatus?.toLowerCase().includes(query)
      );
    });
  }, [invoices, searchTerm]);

  const selectedInvoice = invoices.find(
    (invoice) => invoice.salesInvoiceID === selectedInvoiceId,
  );

  const handleSendEmail = async (invoiceId) => {
    try {
      setSendingId(invoiceId);
      setError("");
      setSuccess("");
      await salesService.sendEmail(invoiceId);
      setSuccess(`Invoice #INV-${String(invoiceId).padStart(5, "0")} was emailed successfully.`);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to send invoice email. Confirm the customer has an email address.",
      );
    } finally {
      setSendingId(null);
    }
  };

  return (
    <div className="pb-10 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h2 className="text-3xl font-black text-slate-900 m-0 tracking-tight">
            Dispatch Digital Invoice
          </h2>
          <p className="text-slate-500 text-sm font-medium mt-1">
            Select a saved sales invoice and send the backend-generated invoice email.
          </p>
        </div>
        <button
          onClick={loadInvoices}
          className="px-5 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-slate-50 shadow-sm transition-all active:scale-95"
        >
          <RefreshCw size={16} /> Refresh
        </button>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl text-red-800 text-xs font-bold flex gap-2 items-center">
          <AlertCircle size={16} className="shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-xl text-green-800 text-xs font-bold flex gap-2 items-center">
          <CheckCircle2 size={16} className="shrink-0" />
          <span>{success}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="bg-slate-900 p-6 text-white">
            <div className="flex items-center gap-3 mb-5">
              <Mail size={18} className="text-blue-400" />
              <h4 className="m-0 text-xs font-black uppercase tracking-widest">
                Invoice Queue
              </h4>
            </div>
            <div className="relative">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
              />
              <input
                type="text"
                placeholder="Search invoices..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/10 text-xs font-bold text-white outline-none placeholder:text-white/30 focus:bg-white focus:text-slate-900"
              />
            </div>
          </div>

          <div className="max-h-[620px] overflow-y-auto">
            {loading ? (
              <div className="py-20 text-center">
                <Loader2 size={36} className="mx-auto text-blue-500 animate-spin mb-4" />
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Loading invoice queue...
                </p>
              </div>
            ) : filteredInvoices.length === 0 ? (
              <div className="p-10 text-center text-slate-400 text-xs font-bold">
                No invoices matched your search.
              </div>
            ) : (
              filteredInvoices.map((invoice) => (
                <button
                  key={invoice.salesInvoiceID}
                  onClick={() => setSelectedInvoiceId(invoice.salesInvoiceID)}
                  className={`w-full text-left p-5 border-b border-slate-100 transition-all ${
                    selectedInvoiceId === invoice.salesInvoiceID
                      ? "bg-blue-50"
                      : "bg-white hover:bg-slate-50"
                  }`}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <p className="m-0 text-sm font-black text-slate-900">
                        INV-{String(invoice.salesInvoiceID).padStart(5, "0")}
                      </p>
                      <p className="m-0 mt-1 text-xs font-bold text-slate-500">
                        {invoice.customerName}
                      </p>
                    </div>
                    <span className="text-[9px] font-black px-2.5 py-1 rounded-md tracking-wider border uppercase bg-slate-50 text-slate-600 border-slate-100">
                      {invoice.paymentStatus}
                    </span>
                  </div>
                  <p className="m-0 mt-3 text-lg font-black text-slate-900">
                    {formatCurrency(invoice.totalAmount)}
                  </p>
                </button>
              ))
            )}
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="bg-slate-900 p-8 flex justify-between items-center text-white">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                <FileText size={24} />
              </div>
              <div>
                <h4 className="m-0 text-xs font-black uppercase tracking-widest">
                  Email Preview
                </h4>
                <p className="text-slate-400 text-[10px] font-bold mt-1 uppercase tracking-wider">
                  Backend template and SMTP/mock delivery
                </p>
              </div>
            </div>
            {selectedInvoice && (
              <button
                onClick={() => handleSendEmail(selectedInvoice.salesInvoiceID)}
                disabled={sendingId === selectedInvoice.salesInvoiceID}
                className="px-6 py-3 rounded-2xl bg-blue-600 text-white text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-blue-700 shadow-lg transition-all active:scale-95 disabled:opacity-60"
              >
                {sendingId === selectedInvoice.salesInvoiceID ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
                Send Email
              </button>
            )}
          </div>

          {!selectedInvoice ? (
            <div className="p-16 text-center">
              <FileText size={56} className="mx-auto text-slate-200 mb-4" />
              <p className="text-slate-400 font-bold text-sm">
                Select an invoice from the queue to preview delivery details.
              </p>
            </div>
          ) : (
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <User size={18} className="text-blue-500 mb-3" />
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest m-0">
                    Customer
                  </p>
                  <p className="text-sm font-black text-slate-900 m-0 mt-1">
                    {selectedInvoice.customerName}
                  </p>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <CreditCard size={18} className="text-blue-500 mb-3" />
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest m-0">
                    Payment
                  </p>
                  <p className="text-sm font-black text-slate-900 m-0 mt-1">
                    {selectedInvoice.paymentStatus}
                  </p>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <Mail size={18} className="text-blue-500 mb-3" />
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest m-0">
                    Total
                  </p>
                  <p className="text-sm font-black text-slate-900 m-0 mt-1">
                    {formatCurrency(selectedInvoice.totalAmount)}
                  </p>
                </div>
              </div>

              <div className="border border-slate-100 rounded-2xl overflow-hidden">
                <table className="w-full border-collapse text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="p-4 text-left text-[10px] font-black text-slate-500 uppercase tracking-widest">
                        Part
                      </th>
                      <th className="p-4 text-right text-[10px] font-black text-slate-500 uppercase tracking-widest">
                        Qty
                      </th>
                      <th className="p-4 text-right text-[10px] font-black text-slate-500 uppercase tracking-widest">
                        Line Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedInvoice.items?.map((item) => (
                      <tr key={item.salesInvoiceItemID} className="border-t border-slate-100">
                        <td className="p-4 font-bold text-slate-800">{item.partName}</td>
                        <td className="p-4 text-right font-bold text-slate-500">
                          {item.quantitySold}
                        </td>
                        <td className="p-4 text-right font-black text-slate-900">
                          {formatCurrency(item.lineTotal)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 flex justify-end">
                <div className="w-full max-w-xs flex flex-col gap-2 text-sm font-bold">
                  <div className="flex justify-between text-slate-500">
                    <span>Subtotal</span>
                    <span>{formatCurrency(selectedInvoice.subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-emerald-600">
                    <span>Discount</span>
                    <span>-{formatCurrency(selectedInvoice.discountAmount)}</span>
                  </div>
                  <div className="flex justify-between text-amber-600">
                    <span>Outstanding Credit</span>
                    <span>{formatCurrency(selectedInvoice.creditAmount)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-black text-slate-900 border-t border-slate-200 pt-3 mt-2">
                    <span>Total</span>
                    <span>{formatCurrency(selectedInvoice.totalAmount)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailInvoice;
