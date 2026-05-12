import React, { useState, useEffect } from 'react';
import { 
  FileText, Plus, Search, Trash2, 
  Send, Printer, Download, Save,
  User, Mail, Phone, Hash,
  ChevronDown, AlertCircle, CheckCircle2,
  MoreVertical, Calendar, CreditCard, Box, X, Loader2, DollarSign, UserPlus, Zap
} from 'lucide-react';
import { salesService, customerService, partsService } from '../../services/api';

const SalesInvoice = () => {
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [customers, setCustomers] = useState([]);
  const [parts, setParts] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [salesItems, setSalesItems] = useState([]);
  const [serviceFee, setServiceFee] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [partSearch, setPartSearch] = useState('');

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    try {
      const [custRes, partsRes] = await Promise.all([
        customerService.getAll(),
        partsService.getAll()
      ]);
      setCustomers(custRes.data);
      setParts(partsRes.data);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setFetching(false);
    }
  };

  const addItem = (part) => {
    const existing = salesItems.find(item => item.partID === part.partID);
    if (existing) {
      setSalesItems(salesItems.map(item => 
        item.partID === part.partID ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setSalesItems([...salesItems, {
        partID: part.partID,
        partName: part.partName,
        partPrice: part.partPrice,
        quantity: 1
      }]);
    }
  };

  const removeItem = (partID) => {
    setSalesItems(salesItems.filter(item => item.partID !== partID));
  };

  const updateQty = (partID, delta) => {
    setSalesItems(salesItems.map(item => {
      if (item.partID === partID) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const subtotal = salesItems.reduce((acc, item) => acc + (item.partPrice * item.quantity), 0);
  const tax = subtotal * 0.15;
  const total = subtotal + tax + Number(serviceFee);

  const handleSubmit = async () => {
    if (!selectedCustomer) return alert('Please select a customer');
    if (salesItems.length === 0) return alert('Please add at least one item');

    setLoading(true);
    try {
      const invoiceData = {
        customerID: selectedCustomer.customerID,
        serviceFee: Number(serviceFee),
        salesItems: salesItems.map(item => ({
          partID: item.partID,
          quantity: item.quantity,
          unitPrice: item.partPrice
        }))
      };
      await salesService.createInvoice(invoiceData);
      alert('Invoice created successfully!');
      setSalesItems([]);
      setSelectedCustomer(null);
      setServiceFee(0);
    } catch (error) {
      alert('Error creating invoice');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center font-roboto">
        <Loader2 size={60} className="text-[#fcd20b] animate-spin mb-6" />
        <p className="text-[#7a7a7a] font-bold font-oswald uppercase tracking-[0.3em] text-xs animate-pulse">Initializing Billing Engine Database...</p>
      </div>
    );
  }

  return (
    <div className="pb-20 font-roboto">
      {/* Dynamic Strategic Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 animate-xtra">
        <div>
          <div className="flex items-center gap-6 mb-4">
            <h2 className="text-5xl font-bold text-[#111111] m-0 tracking-tighter font-oswald italic uppercase leading-none">BILLING <span className="text-[#fcd20b]">TERMINAL</span></h2>
            <span className="px-5 py-2 rounded-full bg-[#111111] text-[9px] font-bold text-[#fcd20b] uppercase tracking-[0.2em] shadow-lg font-oswald">LIVE SESSION ACTIVE</span>
          </div>
          <p className="text-[#7a7a7a] text-sm font-medium uppercase tracking-widest italic">High-Fidelity Transaction Matrix & Asset Reconciliation</p>
        </div>
        <div className="flex gap-4">
          <button className="px-8 py-4 rounded-full border-2 border-black/5 bg-white text-[#111111] text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-[#fcd20b] hover:border-[#fcd20b] transition-all shadow-sm font-oswald">
            <Save size={16} /> SAVE CACHE
          </button>
          <button 
            onClick={handleSubmit}
            disabled={loading}
            className="px-10 py-5 rounded-full bg-[#fcd20b] text-[#111111] font-oswald font-bold uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-[#111111] hover:text-[#fcd20b] shadow-2xl shadow-[#fcd20b]/20 transition-all transform active:scale-95 disabled:opacity-50"
          >
            {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
            {loading ? 'TRANSMITTING...' : 'FINALIZE & TRANSMIT'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 flex flex-col gap-10">
          {/* Main Item Builder */}
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-black/5 flex flex-col animate-xtra" style={{animationDelay: '0.1s'}}>
            <div className="bg-[#111111] p-10 flex flex-col sm:flex-row justify-between items-center gap-6 text-white">
              <h4 className="m-0 font-bold font-oswald italic uppercase tracking-tighter text-xl">LINE ASSET <span className="text-[#fcd20b]">MANIFEST</span></h4>
              <div className="relative w-full sm:w-80 group">
                <Search size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-[#fcd20b]" />
                <input 
                  type="text" 
                  placeholder="SCAN OR SEARCH ASSETS..." 
                  className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-16 pr-6 text-[10px] text-white outline-none focus:bg-white focus:text-[#111111] focus:border-[#fcd20b] transition-all uppercase font-bold tracking-widest"
                  value={partSearch}
                  onChange={(e) => setPartSearch(e.target.value)}
                />
                {partSearch && (
                  <div className="absolute top-full left-0 right-0 mt-4 bg-white rounded-[30px] shadow-3xl border border-black/5 z-50 max-h-80 overflow-y-auto p-4 animate-in fade-in slide-in-from-top-4 duration-300">
                    {parts.filter(p => p.partName.toLowerCase().includes(partSearch.toLowerCase())).map(part => (
                      <button 
                        key={part.partID}
                        onClick={() => { addItem(part); setPartSearch(''); }}
                        className="w-full p-5 rounded-2xl hover:bg-[#f8f8f8] text-left flex justify-between items-center transition-all group/item"
                      >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[#f8f8f8] flex items-center justify-center text-[#111111]/30 group-hover/item:bg-[#fcd20b] group-hover/item:text-[#111111] transition-all">
                                <Box size={18} />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-[#111111] m-0 font-oswald italic uppercase tracking-tight">{part.partName}</p>
                                <p className="text-[9px] text-[#7a7a7a] m-0 font-bold tracking-widest uppercase">STOCK: {part.stockQuantity} UNITS</p>
                            </div>
                        </div>
                        <p className="text-sm font-bold text-[#fcd20b] bg-[#111111] px-4 py-1.5 rounded-full font-oswald tracking-tighter">${part.partPrice.toFixed(2)}</p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex-1 min-h-[400px]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#f8f8f8]">
                    <th className="pl-10 py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 text-left tracking-[0.2em] font-oswald italic">Specification</th>
                    <th className="py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 text-left tracking-[0.2em] font-oswald italic">Unit Price</th>
                    <th className="py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 text-left tracking-[0.2em] font-oswald italic">Qty</th>
                    <th className="py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 text-left tracking-[0.2em] font-oswald italic">Subtotal</th>
                    <th className="pr-10 py-6 border-b border-black/5 text-right"></th>
                  </tr>
                </thead>
                <tbody>
                  {salesItems.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="py-32 text-center">
                        <Box size={80} className="mx-auto text-[#f8f8f8] mb-6" />
                        <p className="text-[#7a7a7a] font-bold uppercase tracking-[0.3em] text-[10px] font-oswald italic">MANIFEST EMPTY · AWAITING ASSET SCAN</p>
                      </td>
                    </tr>
                  ) : salesItems.map(item => (
                    <tr key={item.partID} className="group hover:bg-[#f8f8f8] transition-all duration-300">
                      <td className="pl-10 py-8 border-b border-black/5">
                        <div className="flex items-center gap-6">
                          <div className="w-16 h-16 rounded-[20px] bg-[#f8f8f8] border border-black/5 flex items-center justify-center text-[#111111]/30 shadow-sm group-hover:scale-110 group-hover:bg-[#fcd20b] group-hover:text-[#111111] transition-all duration-500">
                            <Box size={24} />
                          </div>
                          <div>
                            <p className="font-bold text-lg m-0 text-[#111111] tracking-tighter leading-none mb-2 font-oswald italic uppercase">{item.partName}</p>
                            <p className="text-[10px] text-[#7a7a7a] m-0 font-bold uppercase tracking-widest">SKU: {item.partID.toString().padStart(6, '0')}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-8 border-b border-black/5">
                        <p className="text-xl font-bold text-[#111111] m-0 tracking-tighter font-oswald italic">${item.partPrice.toFixed(2)}</p>
                      </td>
                      <td className="py-8 border-b border-black/5">
                        <div className="flex items-center gap-4">
                          <button onClick={() => updateQty(item.partID, -1)} className="w-10 h-10 rounded-xl border border-black/5 bg-white flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-[#fcd20b] transition-all shadow-sm font-oswald font-bold">-</button>
                          <span className="text-xl font-bold text-[#111111] w-8 text-center font-oswald italic">{item.quantity}</span>
                          <button onClick={() => updateQty(item.partID, 1)} className="w-10 h-10 rounded-xl border border-black/5 bg-white flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-[#fcd20b] transition-all shadow-sm font-oswald font-bold">+</button>
                        </div>
                      </td>
                      <td className="py-8 border-b border-black/5">
                        <p className="text-xl font-bold text-[#fcd20b] bg-[#111111] px-5 py-2 rounded-full w-fit tracking-tighter font-oswald italic">${(item.partPrice * item.quantity).toFixed(2)}</p>
                      </td>
                      <td className="pr-10 py-8 border-b border-black/5 text-right">
                        <button onClick={() => removeItem(item.partID)} className="w-10 h-10 rounded-xl bg-white text-rose-500 hover:bg-rose-500 hover:text-white border border-black/5 transition-all shadow-sm opacity-0 group-hover:opacity-100 flex items-center justify-center"><Trash2 size={16} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <div className="p-12 border-t border-black/5 flex flex-col md:flex-row justify-between gap-12 bg-[#f8f8f8]/50">
                <div className="flex-1">
                  <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] mb-4 block ml-1 font-oswald italic">Service & Technical Labor Fee</label>
                  <div className="relative w-64 group">
                    <DollarSign size={20} className="absolute left-6 top-1/2 -translate-y-1/2 text-[#111111]/30 group-focus-within:text-[#fcd20b]" />
                    <input 
                      type="number" 
                      value={serviceFee}
                      onChange={(e) => setServiceFee(e.target.value)}
                      className="w-full pl-16 pr-6 py-5 rounded-2xl bg-white border-2 border-transparent outline-none focus:border-[#fcd20b] shadow-xl text-xl font-bold text-[#111111] placeholder:text-[#7a7a7a]/30 font-oswald italic"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <div className="w-full md:w-96 flex flex-col gap-6">
                  <div className="flex justify-between items-center group/total">
                    <span className="text-[11px] font-bold text-[#7a7a7a] tracking-[0.2em] uppercase font-oswald italic group-hover/total:text-[#111111] transition-colors">Manifest Subtotal</span>
                    <span className="text-xl font-bold text-[#111111] font-oswald italic">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center group/total">
                    <span className="text-[11px] font-bold text-[#7a7a7a] tracking-[0.2em] uppercase font-oswald italic group-hover/total:text-[#111111] transition-colors">Taxation (VAT 15%)</span>
                    <span className="text-xl font-bold text-[#111111] font-oswald italic">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center group/total">
                    <span className="text-[11px] font-bold text-[#7a7a7a] tracking-[0.2em] uppercase font-oswald italic group-hover/total:text-[#111111] transition-colors">System Service Fee</span>
                    <span className="text-xl font-bold text-[#111111] font-oswald italic">${Number(serviceFee).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center mt-4 pt-10 border-t-4 border-[#111111]">
                    <span className="text-sm font-bold text-[#111111] tracking-[0.3em] uppercase font-oswald italic">Total Payable</span>
                    <span className="text-6xl font-bold text-[#111111] tracking-tighter font-oswald italic leading-none"><span className="text-[#fcd20b] text-4xl mr-1">$</span>{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Internal Memo Card */}
          <div className="bg-white rounded-[40px] shadow-2xl p-10 border border-black/5 animate-xtra" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[#f8f8f8] flex items-center justify-center text-[#111111]/30 shadow-sm border border-black/5">
                <FileText size={24} />
              </div>
              <h4 className="m-0 text-xl font-bold text-[#111111] font-oswald italic uppercase tracking-tighter">BILLING NOTES <span className="text-[#fcd20b]">& LEGAL</span></h4>
            </div>
            <textarea 
              placeholder="INCLUDE SPECIFIC WARRANTY TERMS OR SERVICE NOTES..." 
              className="w-full px-8 py-6 rounded-[30px] bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30 h-40 resize-none uppercase tracking-widest text-[11px]"
            ></textarea>
          </div>
        </div>

        {/* Right Information Hub */}
        <div className="flex flex-col gap-10">
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-black/5 animate-xtra" style={{animationDelay: '0.3s'}}>
            <div className="bg-[#111111] p-10 text-white flex justify-between items-center">
              <h4 className="m-0 text-xl font-bold font-oswald italic uppercase tracking-tighter">CLIENT <span className="text-[#fcd20b]">METADATA</span></h4>
              <UserPlus size={24} className="cursor-pointer hover:text-[#fcd20b] transition-all hover:scale-110" />
            </div>
            <div className="p-10">
              <div className="relative mb-10 group">
                <Search size={20} className="absolute left-6 top-1/2 -translate-y-1/2 text-[#111111]/30 group-focus-within:text-[#fcd20b]" />
                <input 
                  type="text" 
                  placeholder="SCAN CLIENT DATABASE..." 
                  className="w-full pl-16 pr-6 py-5 rounded-full bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] text-[10px] tracking-widest"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <div className="absolute top-full left-0 right-0 mt-4 bg-white rounded-[30px] shadow-3xl border border-black/5 z-50 max-h-64 overflow-y-auto p-4 animate-in fade-in slide-in-from-top-4 duration-300">
                    {customers.filter(c => c.fullName.toLowerCase().includes(searchTerm.toLowerCase())).map(customer => (
                      <button 
                        key={customer.customerID}
                        onClick={() => { setSelectedCustomer(customer); setSearchTerm(''); }}
                        className="w-full p-5 rounded-2xl hover:bg-[#f8f8f8] text-left font-bold text-[11px] text-[#111111] font-oswald uppercase tracking-widest transition-all"
                      >
                        {customer.fullName}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {selectedCustomer ? (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="flex items-center gap-6 mb-10 p-8 rounded-[35px] bg-[#111111] text-white shadow-2xl group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-700"><CreditCard size={80} /></div>
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-[#fcd20b] shadow-inner relative z-10">
                      <User size={32} />
                    </div>
                    <div className="relative z-10">
                      <h4 className="m-0 text-xl font-bold font-oswald italic uppercase tracking-tighter">{selectedCustomer.fullName}</h4>
                      <p className="m-0 text-[10px] font-bold text-[#fcd20b] uppercase tracking-[0.2em] mt-1 font-oswald">ID: {selectedCustomer.customerID.toString().padStart(5, '0')} · ACTIVE</p>
                    </div>
                    <button onClick={() => setSelectedCustomer(null)} className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors"><X size={20} /></button>
                  </div>
                  
                  <div className="space-y-6 px-4">
                    <div className="flex items-center gap-6 group/info">
                      <div className="w-12 h-12 rounded-xl bg-[#f8f8f8] flex items-center justify-center text-[#111111]/30 border border-black/5 group-hover/info:bg-[#fcd20b] group-hover/info:text-[#111111] transition-all">
                        <Mail size={18} />
                      </div>
                      <span className="text-[11px] font-bold text-[#111111] tracking-widest uppercase font-oswald">{selectedCustomer.email}</span>
                    </div>
                    <div className="flex items-center gap-6 group/info">
                      <div className="w-12 h-12 rounded-xl bg-[#f8f8f8] flex items-center justify-center text-[#111111]/30 border border-black/5 group-hover/info:bg-[#fcd20b] group-hover/info:text-[#111111] transition-all">
                        <Phone size={18} />
                      </div>
                      <span className="text-[11px] font-bold text-[#111111] tracking-widest uppercase font-oswald">{selectedCustomer.phoneNumber}</span>
                    </div>
                  </div>

                  <div className="mt-12 pt-10 border-t border-black/5">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-bold text-[#7a7a7a] uppercase tracking-[0.2em] font-oswald italic">Account Integrity Matrix</span>
                      <span className="text-[10px] font-bold text-emerald-500 font-oswald uppercase tracking-widest">OPTIMAL</span>
                    </div>
                    <div className="h-3 bg-[#f8f8f8] rounded-full overflow-hidden shadow-inner border border-black/5">
                      <div className="h-full w-[94%] bg-[#111111] rounded-full shadow-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-[#fcd20b]/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-16 text-center border-4 border-dashed border-[#f8f8f8] rounded-[40px] group hover:border-[#fcd20b]/20 transition-all cursor-pointer">
                  <UserPlus size={48} className="mx-auto text-[#f8f8f8] mb-4 group-hover:text-[#fcd20b] transition-all" />
                  <p className="text-[10px] text-[#7a7a7a] font-bold uppercase tracking-[0.2em] font-oswald italic">INITIALIZE CLIENT SELECTION</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-[#111111] rounded-[40px] p-10 shadow-2xl relative overflow-hidden group animate-xtra" style={{animationDelay: '0.4s'}}>
            <div className="absolute -right-6 -bottom-6 text-white/5 group-hover:scale-110 transition-transform duration-1000">
              <AlertCircle size={140} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#fcd20b] flex items-center justify-center text-[#111111] shadow-xl"><AlertCircle size={24} /></div>
                <h4 className="m-0 text-xl font-bold text-white font-oswald italic uppercase tracking-tighter">PROTOCOL <span className="text-[#fcd20b]">VERIFICATION</span></h4>
              </div>
              <ul className="m-0 pl-0 space-y-5 list-none">
                {[
                  'CROSS-REFERENCE PART IDS WITH ERP LABELS.',
                  'APPLY LOYALTY DISCOUNTS IF APPLICABLE.',
                  'MANAGER OVERRIDE NEEDED FOR TRANSACTIONS >$5K.'
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 text-[10px] font-bold text-white/60 leading-relaxed font-oswald uppercase tracking-widest">
                    <CheckCircle2 size={16} className="shrink-0 text-[#fcd20b] mt-0.5" /> {text}
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

export default SalesInvoice;
