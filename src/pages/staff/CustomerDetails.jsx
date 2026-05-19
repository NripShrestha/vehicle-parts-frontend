import React, { useState, useEffect } from "react";
import {
  User,
  Car,
  History,
  CreditCard,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ExternalLink,
  ShieldCheck,
  MoreHorizontal,
  Package,
  Loader2,
  ArrowLeft,
  TrendingUp,
  Briefcase,
  Plus,
} from "lucide-react";
import { customerService } from "../../services/api";

const CustomerDetails = ({ customerId, onBack }) => {
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (customerId) {
      fetchCustomerDetails();
    }
  }, [customerId]);

  const fetchCustomerDetails = async () => {
    try {
      const response = await customerService.getById(customerId);
      setCustomer(response.data);
    } catch (error) {
      console.error("Error fetching customer details:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <Loader2 size={48} className="text-slate-900 animate-spin mb-4" />
        <p className="text-slate-500 font-black tracking-widest uppercase text-xs animate-pulse">
          Decrypting Customer Profile...
        </p>
      </div>
    );
  }

  if (!customer) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center mb-4 border border-slate-100">
          <User size={32} className="text-slate-200" />
        </div>
        <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">
          Profile not found
        </p>
        <button
          onClick={onBack}
          className="mt-6 text-blue-600 font-black uppercase tracking-widest text-xs flex items-center gap-2"
        >
          <ArrowLeft size={16} /> Return to Registry
        </button>
      </div>
    );
  }

  const totalSpent =
    customer.salesInvoices?.reduce((acc, inv) => acc + inv.totalAmount, 0) || 0;

  return (
    <div className="pb-10 font-inter animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Strategic Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-3 rounded-2xl bg-white border border-slate-100 text-slate-400 hover:text-slate-900 hover:shadow-xl transition-all active:scale-90"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h2 className="text-3xl font-black text-slate-900 m-0 tracking-tight">
              Customer Strategic Profile
            </h2>
            <p className="text-slate-500 text-sm font-medium mt-1 uppercase tracking-widest text-[10px]">
              Reference: CST-{customer.customerID}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-slate-50 shadow-sm transition-all active:scale-95">
            <Mail size={16} /> Contact Hub
          </button>
          <button className="px-8 py-3 rounded-2xl bg-slate-900 text-white text-xs font-black uppercase tracking-widest flex items-center gap-3 hover:bg-black shadow-xl transition-all transform active:scale-95">
            <ShieldCheck size={18} /> Verify Credentials
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Core Identity */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden relative">
            <div className="h-32 bg-slate-900 relative">
              <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                <TrendingUp size={120} className="text-white" />
              </div>
            </div>
            <div className="px-8 pb-10 -mt-16 relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-[2rem] bg-white p-2 shadow-2xl mb-6 group hover:rotate-6 transition-transform duration-500">
                  <div className="w-full h-full rounded-[1.5rem] bg-slate-900 flex items-center justify-center text-blue-400 text-4xl font-black tracking-tighter">
                    {customer.fullName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
                <h3 className="text-3xl font-black text-slate-900 m-0 tracking-tight leading-none">
                  {customer.fullName}
                </h3>
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mt-3 mb-8 bg-blue-50 px-3 py-1 rounded-full">
                  Primary Account Holder
                </p>

                <div className="w-full grid grid-cols-2 gap-4 mb-10">
                  <div className="bg-slate-50/50 p-5 rounded-3xl border border-slate-100">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 leading-none">
                      TOTAL SPENT
                    </p>
                    <p className="text-xl font-black text-slate-900 tracking-tighter">
                      ${totalSpent.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-slate-50/50 p-5 rounded-3xl border border-slate-100">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 leading-none">
                      ASSETS
                    </p>
                    <p className="text-xl font-black text-slate-900 tracking-tighter">
                      {customer.vehicles?.length || 0}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all border border-slate-100 shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest m-0 leading-none mb-1.5">
                      Communication
                    </p>
                    <p className="text-sm font-black text-slate-900 m-0 tracking-tight">
                      Email Registry Active
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-pink-50 group-hover:text-pink-600 transition-all border border-slate-100 shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest m-0 leading-none mb-1.5">
                      Mobile Access
                    </p>
                    <p className="text-sm font-black text-slate-900 m-0 tracking-tight">
                      {customer.phoneNumber}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-all border border-slate-100 shadow-sm">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest m-0 leading-none mb-1.5">
                      Loyalty Tier
                    </p>
                    <p className="text-sm font-black text-emerald-600 m-0 tracking-tight uppercase">
                      Verified Partner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Assets & History */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          {/* Asset Registry */}
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-10 overflow-hidden relative">
            <div className="absolute -right-8 -top-8 text-slate-50">
              <Car size={160} />
            </div>
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 shadow-sm">
                    <Car size={24} />
                  </div>
                  <div>
                    <h4 className="m-0 text-xl font-black text-slate-900 tracking-tight">
                      Registered Vehicle Assets
                    </h4>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1">
                      Managed Technical Profiles
                    </p>
                  </div>
                </div>
                <button className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all flex items-center gap-2 shadow-xl active:scale-95">
                  <Plus size={16} /> Add Asset
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {!customer.vehicles || customer.vehicles.length === 0 ? (
                  <div className="col-span-2 py-12 text-center bg-slate-50/50 rounded-[2rem] border-2 border-dashed border-slate-100">
                    <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">
                      No assets currently registered
                    </p>
                  </div>
                ) : (
                  customer.vehicles.map((vehicle, i) => (
                    <div
                      key={vehicle.vehicleID}
                      className="p-8 rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all cursor-pointer group relative overflow-hidden"
                    >
                      <div className="absolute -right-4 -bottom-4 text-blue-500/5 group-hover:scale-110 transition-transform duration-700">
                        <Car size={80} />
                      </div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="px-4 py-1.5 bg-white rounded-xl border border-slate-200 text-xs font-black tracking-widest shadow-sm group-hover:border-blue-500 transition-colors uppercase">
                          {vehicle.vehiclePlateNumber}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-slate-900 transition-all">
                          <ExternalLink size={18} />
                        </div>
                      </div>
                      <p className="m-0 text-lg font-black text-slate-900 tracking-tight mb-2 leading-none">
                        {vehicle.vehicleModel}
                      </p>
                      <p className="m-0 text-[10px] text-slate-400 font-black uppercase tracking-widest flex items-center gap-2">
                        <ShieldCheck size={12} className="text-emerald-500" />{" "}
                        Technical Data Verified
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Ledger / History */}
          <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100">
            <div className="bg-slate-900 p-8 flex justify-between items-center text-white">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4 className="m-0 text-xs font-black uppercase tracking-widest">
                    Transaction Ledger
                  </h4>
                  <p className="text-slate-400 text-[10px] font-bold mt-1 uppercase tracking-wider">
                    Historical Fulfillment Data
                  </p>
                </div>
              </div>
              <button className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all border border-white/10">
                <TrendingUp size={20} />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="pl-10 py-5 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">
                      Timeline
                    </th>
                    <th className="py-5 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">
                      Description
                    </th>
                    <th className="py-5 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">
                      Revenue
                    </th>
                    <th className="pr-10 py-5 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-right tracking-widest">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {!customer.salesInvoices ||
                  customer.salesInvoices.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="py-24 text-center">
                        <History
                          size={48}
                          className="mx-auto text-slate-100 mb-4"
                        />
                        <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">
                          No historical transactions detected
                        </p>
                      </td>
                    </tr>
                  ) : (
                    customer.salesInvoices.map((row, i) => (
                      <tr
                        key={row.invoiceID}
                        className="hover:bg-slate-50/50 transition-colors group"
                      >
                        <td className="pl-10 py-6 border-b border-slate-100">
                          <p className="text-xs font-black text-slate-900 m-0 tracking-tight">
                            {new Date(row.invoiceDate).toLocaleDateString(
                              undefined,
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              },
                            )}
                          </p>
                        </td>
                        <td className="py-6 border-b border-slate-100">
                          <p className="text-xs font-bold text-slate-600 m-0 tracking-tight uppercase leading-tight">
                            Service / Part Fulfillment #{row.invoiceID}
                          </p>
                        </td>
                        <td className="py-6 border-b border-slate-100">
                          <p className="text-sm font-black text-blue-600 m-0 tracking-tighter">
                            ${row.totalAmount.toFixed(2)}
                          </p>
                        </td>
                        <td className="pr-10 py-6 border-b border-slate-100 text-right">
                          <span className="text-[9px] font-black px-3 py-1.5 rounded-xl tracking-widest border border-emerald-100 bg-emerald-50 text-emerald-600 uppercase shadow-sm">
                            FINALIZED
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
