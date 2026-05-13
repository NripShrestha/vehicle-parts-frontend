import React, { useState } from 'react';
import { Search, Filter, Eye, Phone, MapPin, Car, Hash, ArrowRight, User, MoreVertical, ShieldCheck, Mail } from 'lucide-react';
import Pagination from '../../components/Pagination';

const CustomerSearch = () => {
  return (
    <div className="pb-10">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-2xl font-extrabold text-text-main m-0 tracking-tight">Customer Intelligence Hub</h2>
          <p className="text-text-muted text-sm font-medium mt-1">Query customer databases using vehicle plates, phone numbers, or unique identifiers.</p>
        </div>
      </div>

      {/* Advanced Search & Filter Bar */}
      <div className="bg-white rounded-xl shadow-material p-6 mb-10 border border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          <div className="md:col-span-2 relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-blue-500 transition-colors">
              <Search size={18} />
            </div>
            <input 
              type="text" 
              placeholder="Search Name, Phone, or Plate (e.g. ABC-1234)..." 
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 text-sm font-extrabold text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm transition-all placeholder:text-text-muted/40" 
            />
          </div>
          <select className="px-4 py-3 rounded-xl border border-slate-200 text-sm font-extrabold text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm bg-white cursor-pointer appearance-none transition-all">
            <option>All Vehicle Types</option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Truck / Utility</option>
            <option>Performance</option>
          </select>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-xl text-xs font-extrabold uppercase tracking-widest hover:bg-black shadow-header transition-all transform active:scale-95 flex items-center justify-center gap-2">
            <Search size={16} /> Execute Search
          </button>
        </div>
      </div>

      {/* Main Results Directory */}
      <div className="bg-white rounded-xl shadow-material relative overflow-hidden border border-slate-100">
        <div className="absolute top-0 left-0 right-0 h-16 rounded-t-xl flex items-center px-6 text-white shadow-header bg-dark-gradient">
          <div className="flex justify-between w-full items-center">
            <h4 className="m-0 text-base font-bold">Search Results Portfolio</h4>
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-extrabold text-white/50 uppercase tracking-widest">3 RESULTS FOUND</span>
              <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all border border-white/10"><Filter size={14} /></button>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="pl-6 py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">CUSTOMER IDENTITY</th>
                <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">PRIMARY VEHICLE</th>
                <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">COMMUNICATION</th>
                <th className="py-4 text-[11px] uppercase text-text-muted font-extrabold border-b border-[#f0f2f5] text-left">STATUS</th>
                <th className="pr-6 py-4 border-b border-[#f0f2f5] text-right text-[11px] uppercase text-text-muted font-extrabold">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 'C-001', name: 'Jane Doe', plate: 'ABC-1234', type: 'Toyota Camry SE', phone: '+1 555-1234', status: 'ACTIVE', color: '#10b981' },
                { id: 'C-002', name: 'Robert Smith', plate: 'XYZ-9876', type: 'Honda Civic Sport', phone: '+1 555-5678', status: 'ACTIVE', color: '#10b981' },
                { id: 'C-003', name: 'Alice Wilson', plate: 'GHI-5566', type: 'Ford F-150 Raptor', phone: '+1 555-9012', status: 'CREDIT HOLD', color: '#f59e0b' }
              ].map(item => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="pl-6 py-5 border-b border-[#f0f2f5]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-dark-gradient text-white flex items-center justify-center font-extrabold text-[14px] shadow-header group-hover:scale-110 transition-transform">
                        {item.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-extrabold text-sm m-0 text-text-main tracking-tight leading-none mb-1">{item.name}</p>
                        <p className="text-[10px] text-text-muted m-0 font-extrabold uppercase tracking-widest">ID: {item.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 border-b border-[#f0f2f5]">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-text-muted shadow-sm border border-slate-100">
                        <Car size={18} />
                      </div>
                      <div>
                        <p className="text-[13px] font-extrabold text-text-main m-0 tracking-tight">{item.plate}</p>
                        <p className="text-[11px] text-text-muted m-0 font-medium">{item.type}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 border-b border-[#f0f2f5]">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-[13px] font-extrabold text-text-main">
                        <Phone size={14} className="text-text-muted" /> {item.phone}
                      </div>
                    </div>
                  </td>
                  <td className="py-5 border-b border-[#f0f2f5]">
                    <span className="text-[10px] font-extrabold px-3 py-1 rounded-md tracking-wider border uppercase shadow-sm" style={{ color: item.color, backgroundColor: `${item.color}15`, borderColor: `${item.color}30` }}>
                      {item.status}
                    </span>
                  </td>
                  <td className="pr-6 py-5 border-b border-[#f0f2f5] text-right">
                    <div className="flex justify-end gap-2">
                      <button className="px-4 py-2 rounded-xl bg-slate-50 text-text-main text-[11px] font-extrabold uppercase tracking-widest flex items-center gap-2 hover:bg-blue-500 hover:text-white transition-all shadow-sm border border-slate-100 transform active:scale-95 group/btn">
                        Profile <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                      <button className="p-2 rounded-xl bg-slate-50 text-text-muted hover:text-text-main hover:bg-white transition-all shadow-sm border border-slate-100"><MoreVertical size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination totalItems={156} itemsPerPage={10} currentPage={1} />
        </div>
      </div>
    </div>
  );
};

export default CustomerSearch;
