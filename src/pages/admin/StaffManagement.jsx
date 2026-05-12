import React, { useState, useEffect } from 'react';
import { 
  Users, Plus, Search, Filter, Edit2, Trash2, 
  Shield, Mail, Phone, Calendar, MoreVertical,
  Activity, ShieldCheck, Clock, Award, UserPlus, X, Loader2, CheckCircle2
} from 'lucide-react';
import Pagination from '../../components/Pagination';
import { staffService } from '../../services/api';

const PerformanceMetric = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col gap-4 transition-all hover:scale-[1.02] duration-300 border border-slate-100 group">
    <div className="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-sm" style={{ backgroundColor: `${color}15`, color: color }}>
      <Icon size={24} />
    </div>
    <div>
      <h4 className="m-0 text-3xl font-black text-slate-900 tracking-tighter leading-none">{value}</h4>
      <p className="m-0 text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">{title}</p>
    </div>
  </div>
);

const StaffManagement = () => {
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    staffPosition: 'Inventory Manager',
    role: 'Staff'
  });

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      const response = await staffService.getAll();
      setStaffList(response.data);
    } catch (error) {
      console.error('Error fetching staff:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await staffService.create(formData);
      setSuccessMsg('Personnel profile synchronized successfully.');
      setTimeout(() => setSuccessMsg(''), 5000);
      setShowAddForm(false);
      fetchStaff();
      setFormData({
        fullName: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: '',
        staffPosition: 'Inventory Manager',
        role: 'Staff'
      });
    } catch (error) {
      alert(error.response?.data || 'Error creating staff');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Initiate removal of this personnel record?')) {
      try {
        await staffService.delete(id);
        fetchStaff();
      } catch (error) {
        alert('Security violation: Error deleting staff');
      }
    }
  };

  const filteredStaff = staffList.filter(s => 
    s.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pb-10 font-inter">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h2 className="text-3xl font-black text-slate-900 m-0 tracking-tight">Team Operations & Roles</h2>
          <p className="text-slate-500 text-sm font-medium mt-1">Oversee workforce permissions, track system activity, and manage credentials.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-slate-50 shadow-sm transition-all active:scale-95">
            <Activity size={16} /> Audit Logs
          </button>
          <button 
            className="px-6 py-3 rounded-2xl bg-slate-900 text-white text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-black shadow-xl transition-all transform active:scale-95" 
            onClick={() => setShowAddForm(!showAddForm)}
          >
            {showAddForm ? <X size={18} /> : <UserPlus size={18} />}
            {showAddForm ? 'Close Portal' : 'Register Personnel'}
          </button>
        </div>
      </div>

      {successMsg && (
        <div className="mb-8 p-6 bg-emerald-50 border border-emerald-100 rounded-3xl flex items-center gap-4 text-emerald-700 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm">
            <CheckCircle2 size={24} />
          </div>
          <p className="font-bold text-sm m-0">{successMsg}</p>
        </div>
      )}

      {/* Team Health Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <PerformanceMetric title="Total Workforce" value={staffList.length} icon={Users} color="#1A73E8" />
        <PerformanceMetric title="Security Admins" value={staffList.filter(s => s.role === 'Admin').length} icon={ShieldCheck} color="#D81B60" />
        <PerformanceMetric title="Session Uptime" value="99.9%" icon={Clock} color="#43A047" />
        <PerformanceMetric title="Active Nodes" value={staffList.length} icon={Activity} color="#FB8C00" />
      </div>

      {showAddForm && (
        <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 mb-10 overflow-hidden animate-in slide-in-from-top-4 duration-500 relative">
          <div className="absolute top-0 right-0 p-8 text-slate-100"><Users size={120} /></div>
          <div className="bg-slate-900 p-8 flex justify-between items-center relative z-10">
            <div>
              <h3 className="text-white font-black m-0 flex items-center gap-3 uppercase tracking-widest text-xs">
                <UserPlus size={20} className="text-blue-400" />
                New Personnel Registration
              </h3>
              <p className="text-slate-400 text-[10px] font-bold mt-1 uppercase tracking-wider">Credential provisioning in progress</p>
            </div>
            <button onClick={() => setShowAddForm(false)} className="text-white/40 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-10 relative z-10 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block ml-1">Full Legal Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Johnathan Doe" className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-slate-900 outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all" />
              </div>
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block ml-1">Corporate Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="j.doe@autopart.corp" className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-slate-900 outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all" />
              </div>
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block ml-1">Secure Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="••••••••" className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-slate-900 outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all" />
              </div>
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block ml-1">Assigned Position</label>
                <select name="staffPosition" value={formData.staffPosition} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-slate-900 outline-none focus:bg-white focus:border-blue-500 transition-all cursor-pointer appearance-none">
                  <option>Systems Administrator</option>
                  <option>Inventory Manager</option>
                  <option>Senior Technician</option>
                  <option>Sales Associate</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block ml-1">Access Privilege</label>
                <select name="role" value={formData.role} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-slate-900 outline-none focus:bg-white focus:border-blue-500 transition-all cursor-pointer appearance-none">
                  <option value="Staff">Standard Operator</option>
                  <option value="Admin">System Administrator</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block ml-1">Contact Protocol</label>
                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="+1 555-000-0000" className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-slate-900 outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 transition-all" />
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-10">
              <button type="button" onClick={() => setShowAddForm(false)} className="px-8 py-4 rounded-2xl bg-slate-50 text-slate-600 font-bold text-xs uppercase tracking-widest hover:bg-slate-100 transition-colors">Discard</button>
              <button 
                type="submit" 
                disabled={submitting}
                className="px-10 py-4 rounded-2xl bg-blue-600 text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-95 disabled:opacity-50"
              >
                {submitting ? <Loader2 size={18} className="animate-spin" /> : 'Finalize Registration'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Main Staff Directory */}
      <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
        <div className="bg-slate-900 p-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <h4 className="text-white font-black m-0 uppercase tracking-widest text-xs">Personnel Archive</h4>
            <p className="text-slate-400 text-[10px] font-bold mt-1 uppercase tracking-wider">Historical & Active Staff Records</p>
          </div>
          <div className="bg-white/10 rounded-2xl px-6 py-3 flex items-center gap-3 border border-white/10 w-full sm:w-80 focus-within:bg-white/20 transition-all">
            <Search size={18} className="text-blue-400" />
            <input 
              type="text" 
              placeholder="Query by identity..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none text-white text-sm font-bold outline-none w-full placeholder:text-white/30" 
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="pl-10 py-5 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">Personnel Identity</th>
                <th className="py-5 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">Access Layer</th>
                <th className="py-5 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">Operational Role</th>
                <th className="py-5 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">Enrollment</th>
                <th className="pr-10 py-5 text-right text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 tracking-widest">Management</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="py-24 text-center">
                    <Loader2 size={40} className="text-blue-600 animate-spin mx-auto mb-4" />
                    <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">Synchronizing Security Clearance...</p>
                  </td>
                </tr>
              ) : filteredStaff.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-24 text-center">
                    <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center mx-auto mb-4 border border-slate-100">
                      <Users size={32} className="text-slate-200" />
                    </div>
                    <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">Query returned zero records</p>
                  </td>
                </tr>
              ) : filteredStaff.map((staff) => (
                <tr key={staff.id} className="group hover:bg-slate-50/50 transition-colors">
                  <td className="pl-10 py-6 border-b border-slate-100">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-slate-900 text-blue-400 flex items-center justify-center font-black text-xs shadow-lg group-hover:scale-110 transition-transform">
                        {staff.fullName.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-black text-slate-900 m-0 leading-tight tracking-tight">{staff.fullName}</p>
                        <p className="text-[11px] font-bold text-slate-400 m-0 mt-1 uppercase">{staff.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm border ${staff.role === 'Admin' ? 'bg-rose-50 text-rose-600 border-rose-100' : 'bg-blue-50 text-blue-600 border-blue-100'}`}>
                        {staff.role}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]" />
                    </div>
                  </td>
                  <td className="py-6 border-b border-slate-100">
                    <p className="text-xs font-black text-slate-700 m-0 uppercase tracking-widest">{staff.staffPosition}</p>
                  </td>
                  <td className="py-6 border-b border-slate-100">
                    <div className="flex items-center gap-2 text-slate-400 font-bold">
                      <Calendar size={14} className="text-slate-300" />
                      <span className="text-[11px] uppercase">{new Date(staff.dateJoined).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    </div>
                  </td>
                  <td className="pr-10 py-6 border-b border-slate-100 text-right">
                    <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                      <button className="p-2.5 rounded-xl bg-white text-slate-400 hover:text-blue-600 hover:shadow-xl border border-slate-100 transition-all active:scale-90"><Edit2 size={16} /></button>
                      <button onClick={() => handleDelete(staff.id)} className="p-2.5 rounded-xl bg-white text-rose-400 hover:text-rose-600 hover:shadow-xl border border-slate-100 transition-all active:scale-90"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-8 bg-slate-50/50">
          <Pagination totalItems={filteredStaff.length} itemsPerPage={10} currentPage={1} />
        </div>
      </div>
    </div>
  );
};

export default StaffManagement;


