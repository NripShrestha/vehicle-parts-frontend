import React from "react";
import { Clock, FileText, Download, ChevronRight } from "lucide-react";

const PurchaseHistory = () => {
  const history = [
    {
      id: "INV-2024-042",
      date: "Apr 15, 2024",
      vehicle: "Toyota Camry",
      amount: "$125.00",
      status: "Completed",
    },
    {
      id: "INV-2024-031",
      date: "Mar 02, 2024",
      vehicle: "Toyota Camry",
      amount: "$450.00",
      status: "Completed",
    },
    {
      id: "INV-2023-982",
      date: "Dec 10, 2023",
      vehicle: "Honda Civic",
      amount: "$85.00",
      status: "Completed",
    },
  ];

  return (
    <div className="pb-10">
      {/* Header */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-3xl font-extrabold text-text-main m-0 tracking-tighter leading-none">
            Service & Purchase History
          </h1>
          <p className="text-text-muted text-[15px] font-medium mt-2 opacity-80">
            Keep track of your vehicle maintenance and part acquisitions.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-material relative overflow-hidden border border-slate-100">
        <div className="absolute top-0 left-0 right-0 h-16 rounded-t-xl flex items-center px-6 text-white shadow-header bg-dark-gradient">
          <div className="flex justify-between w-full items-center">
            <h4 className="m-0 text-base font-bold">Transaction Ledger</h4>
            <div className="flex gap-3">
              <button className="bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-lg text-[10px] font-extrabold cursor-pointer hover:bg-white/20 transition-all uppercase tracking-widest">
                FILTER BY YEAR
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="pl-6 py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">
                  INVOICE ID
                </th>
                <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">
                  SERVICE DATE
                </th>
                <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">
                  ASSOCIATED VEHICLE
                </th>
                <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">
                  AMOUNT
                </th>
                <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">
                  STATUS
                </th>
                <th className="pr-6 py-4 border-b border-[#f0f2f5] text-right text-[11px] uppercase text-text-muted font-extrabold">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody>
              {history.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="pl-6 py-5 border-b border-[#f0f2f5]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-text-muted shadow-sm border border-slate-100">
                        <FileText size={14} />
                      </div>
                      <span className="font-extrabold text-sm text-text-main tracking-tight">
                        {item.id}
                      </span>
                    </div>
                  </td>
                  <td className="py-5 border-b border-[#f0f2f5] text-[13px] text-text-muted font-extrabold uppercase tracking-tight">
                    {item.date}
                  </td>
                  <td className="py-5 border-b border-[#f0f2f5] text-sm font-extrabold text-text-main tracking-tight">
                    {item.vehicle}
                  </td>
                  <td className="py-5 border-b border-[#f0f2f5] text-sm font-extrabold text-text-main tracking-tight">
                    {item.amount}
                  </td>
                  <td className="py-5 border-b border-[#f0f2f5]">
                    <span className="px-3 py-1 rounded-md text-[9px] font-extrabold bg-green-50 text-green-600 border border-green-100 uppercase tracking-widest shadow-sm">
                      {item.status}
                    </span>
                  </td>
                  <td className="pr-6 py-5 border-b border-[#f0f2f5] text-right">
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-extrabold text-text-main uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition-all shadow-sm group">
                      <Download
                        size={14}
                        className="group-hover:scale-110 transition-transform"
                      />
                      Invoice
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-8 text-center bg-slate-50/50">
            <p className="m-0 text-xs font-bold text-text-muted italic">
              Showing your last 3 transactions. Visit our service center for
              full archive access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistory;
