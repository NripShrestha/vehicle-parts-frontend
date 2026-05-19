import React from "react";
import {
  Mail,
  Send,
  FileText,
  CheckCircle2,
  ChevronRight,
  User,
  Paperclip,
  Clock,
  ShieldCheck,
} from "lucide-react";

const EmailInvoice = () => {
  return (
    <div className="pb-10">
      {/* Strategic Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-2xl font-extrabold text-text-main m-0 tracking-tight">
            Dispatch Digital Invoice
          </h2>
          <p className="text-text-muted text-sm font-medium mt-1">
            Direct encrypted communication for billing assets and service
            documentation.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Main Compose Interface */}
          <div className="bg-white rounded-xl shadow-material relative overflow-hidden border border-slate-100">
            <div className="absolute top-0 left-0 right-0 h-16 rounded-t-xl flex items-center px-8 text-white shadow-header bg-blue-gradient">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-white/60" />
                <h4 className="m-0 text-base font-bold">
                  Encrypted Message Composer
                </h4>
              </div>
            </div>

            <div className="mt-16 p-8 flex flex-col gap-6">
              <div>
                <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-2">
                  Authenticated Recipient
                </p>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted transition-colors">
                    <User size={18} />
                  </div>
                  <input
                    type="email"
                    value="jane.doe@example.com"
                    readOnly
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-100 bg-slate-50 text-sm font-extrabold text-text-main outline-none shadow-inner"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <span className="text-[9px] font-extrabold text-green-500 uppercase tracking-widest">
                      Verified
                    </span>
                    <ShieldCheck size={14} className="text-green-500" />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-2">
                  Subject Header
                </p>
                <input
                  type="text"
                  defaultValue="Invoice for Service: Toyota Camry (ABC-1234)"
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-200 text-sm font-extrabold text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm transition-all"
                />
              </div>

              <div>
                <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-widest mb-2">
                  Contextual Message Body
                </p>
                <textarea
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 text-sm font-medium text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm h-64 resize-none transition-all leading-relaxed"
                  defaultValue={`Dear Jane Doe,

Thank you for choosing AutoPart Pro for your recent vehicle service. Please find your detailed invoice attached for the maintenance performed on your Toyota Camry.

Total Amount: $125.00
Status: Paid

If you have any questions, feel free to reply to this email.

Best regards,
AutoPart Pro Team`}
                ></textarea>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-slate-100 mt-2">
                <div className="flex items-center gap-4 text-text-muted">
                  <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors">
                    <Paperclip size={20} />
                  </button>
                  <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors">
                    <Clock size={20} />
                  </button>
                </div>
                <button
                  className="px-8 py-3.5 rounded-xl bg-blue-500 text-white text-xs font-extrabold uppercase tracking-widest flex items-center gap-2 hover:bg-black shadow-header transition-all transform active:scale-95"
                  onClick={() => alert("Invoice Dispatched!")}
                >
                  <Send size={18} /> Transmit Assets Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {/* Attachment Visualization */}
          <div className="bg-white rounded-xl shadow-material p-8 border border-slate-100 border-dashed relative overflow-hidden group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 shadow-sm border border-blue-100">
                <FileText size={20} />
              </div>
              <h4 className="m-0 text-base font-bold text-text-main">
                Digital Attachment
              </h4>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center relative z-10">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 mx-auto mb-4 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform duration-500">
                <FileText size={32} />
              </div>
              <p className="text-[10px] font-extrabold text-text-muted uppercase tracking-widest mb-1">
                GENERATED PDF LEDGER
              </p>
              <p className="text-sm font-extrabold text-text-main m-0 tracking-tight">
                INV-2024-042.pdf
              </p>
              <p className="text-[11px] text-text-muted mt-1 font-medium">
                Size: 245 KB · CRC Verified
              </p>
            </div>
          </div>

          {/* Compliance Check */}
          <div className="bg-green-50 border border-green-100 rounded-2xl p-6 shadow-sm flex gap-4 items-start relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 text-green-100 group-hover:rotate-12 transition-transform duration-700">
              <CheckCircle2 size={100} />
            </div>
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-green-500 shadow-sm border border-green-100 shrink-0 relative z-10">
              <CheckCircle2 size={20} />
            </div>
            <div className="relative z-10">
              <p className="m-0 text-sm font-extrabold text-green-900 tracking-tight leading-none mb-2">
                Deliverability Confirmed
              </p>
              <p className="m-0 text-[11px] text-green-800/70 font-bold leading-relaxed">
                Recipient has a verified SPF/DKIM record and is active in the
                digital billing registry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailInvoice;
