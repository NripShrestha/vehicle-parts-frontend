import React, { useState, useEffect } from "react";
import {
  Truck,
  Star,
  Phone,
  Mail,
  MapPin,
  Plus,
  Search,
  MoreVertical,
  Edit2,
  Trash2,
  ShieldCheck,
  Globe,
  Briefcase,
  Activity,
  Package,
  X,
  Loader2,
  Zap,
  ChevronRight,
} from "lucide-react";
import Pagination from "../../components/Pagination";
import { vendorService } from "../../services/api";

const VendorStat = ({ title, value, icon: Icon }) => (
  <div className="bg-white rounded-[30px] p-8 shadow-xl border border-black/5 transition-all hover:-translate-y-1 duration-500 group overflow-hidden relative">
    <div className="absolute -right-4 -bottom-4 text-black/5 group-hover:text-[#fcd20b]/10 transition-colors">
      <Icon size={100} />
    </div>
    <div className="flex items-center gap-6 relative z-10">
      <div className="w-16 h-16 rounded-2xl bg-[#111111] text-[#fcd20b] flex items-center justify-center group-hover:bg-[#fcd20b] group-hover:text-[#111111] transition-all duration-500 shadow-lg">
        <Icon size={28} />
      </div>
      <div>
        <p className="m-0 text-[10px] font-bold text-[#7a7a7a] uppercase tracking-[0.2em] font-oswald italic mb-1">
          {title}
        </p>
        <h4 className="m-0 text-3xl font-bold text-[#111111] font-oswald italic uppercase tracking-tighter leading-none">
          {value}
        </h4>
      </div>
    </div>
  </div>
);

const VendorManagement = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    vendorName: "",
    vendorPhone: "",
    vendorEmail: "",
    vendorAddress: "",
  });

  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    try {
      const response = await vendorService.getAll();
      setVendors(response.data);
    } catch (error) {
      console.error("Error fetching vendors:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await vendorService.create(formData);
      setShowAddForm(false);
      fetchVendors();
      setFormData({
        vendorName: "",
        vendorPhone: "",
        vendorEmail: "",
        vendorAddress: "",
      });
    } catch (error) {
      alert("Error creating vendor");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this vendor?")) {
      try {
        await vendorService.delete(id);
        fetchVendors();
      } catch (error) {
        alert("Error deleting vendor");
      }
    }
  };

  const filteredVendors = vendors.filter(
    (v) =>
      v.vendorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.vendorEmail.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="pb-20 font-roboto">
      {/* Strategic Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 animate-xtra">
        <div>
          <h2 className="text-5xl font-bold text-[#111111] m-0 tracking-tighter font-oswald italic uppercase leading-none mb-2">
            SUPPLY <span className="text-[#fcd20b]">CHAIN</span>
          </h2>
          <p className="text-[#7a7a7a] text-sm font-medium uppercase tracking-widest italic">
            Manage Supplier Partnerships & Vendor Registry
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-8 py-4 rounded-full border-2 border-black/5 bg-white text-[#111111] text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-[#fcd20b] hover:border-[#fcd20b] transition-all shadow-sm font-oswald">
            <Activity size={16} /> VENDOR AUDIT
          </button>
          <button
            className={`px-10 py-4 rounded-full font-oswald font-bold uppercase tracking-widest text-[10px] flex items-center gap-3 transition-all shadow-2xl transform active:scale-95 ${showAddForm ? "bg-[#111111] text-white hover:bg-black" : "bg-[#fcd20b] text-[#111111] hover:bg-[#111111] hover:text-[#fcd20b]"}`}
            onClick={() => setShowAddForm(!showAddForm)}
          >
            {showAddForm ? <X size={20} /> : <Plus size={20} />}
            {showAddForm ? "CLOSE FORM" : "ADD NEW SUPPLIER"}
          </button>
        </div>
      </div>

      {/* Supply Chain Insights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 animate-xtra">
        <VendorStat
          title="ACTIVE PARTNERS"
          value={vendors.length}
          icon={Truck}
        />
      </div>

      {showAddForm && (
        <div className="bg-white rounded-[40px] shadow-2xl border border-black/5 mb-16 overflow-hidden animate-xtra">
          <div className="bg-[#111111] p-10 flex justify-between items-center text-white">
            <h3 className="font-bold m-0 font-oswald italic uppercase tracking-tighter text-2xl flex items-center gap-4">
              <Zap size={24} className="text-[#fcd20b]" />
              REGISTER <span className="text-[#fcd20b]">NEW SUPPLIER</span>
            </h3>
            <button
              onClick={() => setShowAddForm(false)}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-rose-500 transition-all"
            >
              <X size={20} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                  Supplier Name
                </label>
                <input
                  type="text"
                  name="vendorName"
                  value={formData.vendorName}
                  onChange={handleChange}
                  required
                  placeholder="BOSCH AUTOMOTIVE"
                  className="w-full px-6 py-4 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                  Email Address
                </label>
                <input
                  type="email"
                  name="vendorEmail"
                  value={formData.vendorEmail}
                  onChange={handleChange}
                  required
                  placeholder="ORDERS@VENDOR.COM"
                  className="w-full px-6 py-4 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="vendorPhone"
                  value={formData.vendorPhone}
                  onChange={handleChange}
                  required
                  placeholder="+1 234 567 890"
                  className="w-full px-6 py-4 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                  Location Address
                </label>
                <input
                  type="text"
                  name="vendorAddress"
                  value={formData.vendorAddress}
                  onChange={handleChange}
                  placeholder="MAIN ST, CITY, COUNTRY"
                  className="w-full px-6 py-4 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30"
                />
              </div>
            </div>
            <div className="flex justify-end gap-5 mt-12 border-t border-black/5 pt-10">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-10 py-4 rounded-full bg-[#f8f8f8] text-[#7a7a7a] font-bold text-[10px] uppercase tracking-widest hover:bg-[#111111] hover:text-white transition-all font-oswald"
              >
                CANCEL
              </button>
              <button
                type="submit"
                className="px-12 py-4 rounded-full bg-[#fcd20b] text-[#111111] font-bold text-[10px] uppercase tracking-widest shadow-xl shadow-[#fcd20b]/20 hover:bg-[#111111] hover:text-[#fcd20b] transition-all active:scale-95 font-oswald italic"
              >
                ADD SUPPLIER
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Rich Vendor Registry Card */}
      <div
        className="bg-white rounded-[40px] shadow-2xl border border-black/5 overflow-hidden animate-xtra"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="bg-[#111111] p-10 flex flex-col sm:flex-row justify-between items-center gap-6 text-white">
          <h4 className="font-bold m-0 font-oswald italic uppercase tracking-tighter text-xl">
            SUPPLIER / <span className="text-[#fcd20b]">VENDOR</span> REGISTRY
          </h4>
          <div className="bg-white/5 rounded-full px-8 py-3 flex items-center gap-4 border border-white/10 w-full sm:w-80 focus-within:bg-white focus-within:border-[#fcd20b] transition-all group">
            <Search
              size={18}
              className="text-white/40 group-focus-within:text-[#111111]"
            />
            <input
              type="text"
              placeholder="SEARCH SUPPLIERS..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none text-white text-[10px] font-bold outline-none w-full placeholder:text-white/20 group-focus-within:text-[#111111]"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#f8f8f8]">
                <th className="pl-10 py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 tracking-[0.2em] font-oswald italic">
                  Supplier / Vendor Name
                </th>
                <th className="py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 tracking-[0.2em] font-oswald italic">
                  Contact Information
                </th>
                <th className="py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 tracking-[0.2em] font-oswald italic">
                  Location / Address
                </th>
                <th className="py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 tracking-[0.2em] font-oswald italic">
                  Rating
                </th>
                <th className="pr-10 py-6 text-right text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 tracking-[0.2em] font-oswald italic">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="py-24 text-center">
                    <Loader2
                      size={40}
                      className="animate-spin mx-auto mb-4 text-[#fcd20b]"
                    />
                    <p className="font-bold font-oswald uppercase tracking-widest text-[#7a7a7a] text-[10px]">
                      Connecting to Supply Network...
                    </p>
                  </td>
                </tr>
              ) : filteredVendors.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-24 text-center">
                    <p className="font-bold font-oswald uppercase tracking-widest text-[#7a7a7a] text-[10px]">
                      NO STRATEGIC PARTNERS DETECTED
                    </p>
                  </td>
                </tr>
              ) : (
                filteredVendors.map((vendor) => (
                  <tr
                    key={vendor.vendorID}
                    className="group hover:bg-[#f8f8f8] transition-all duration-300"
                  >
                    <td className="pl-10 py-8 border-b border-black/5">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-[20px] bg-[#f8f8f8] border border-black/5 flex items-center justify-center text-[#111111]/30 shadow-sm group-hover:scale-110 group-hover:bg-[#fcd20b] group-hover:text-[#111111] transition-all duration-500">
                          <Globe size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-lg text-[#111111] m-0 leading-none mb-2 font-oswald italic uppercase tracking-tighter">
                            {vendor.vendorName}
                          </p>
                          <p className="text-[10px] text-[#7a7a7a] font-bold uppercase tracking-widest">
                            PARTNER ID: V-
                            {vendor.vendorID.toString().padStart(4, "0")}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-8 border-b border-black/5">
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-3 text-[11px] font-bold text-[#111111] font-oswald uppercase">
                          <Mail size={14} className="text-[#fcd20b]" />{" "}
                          {vendor.vendorEmail}
                        </div>
                        <div className="flex items-center gap-3 text-[10px] text-[#7a7a7a] font-bold uppercase tracking-widest">
                          <Phone size={13} className="text-[#fcd20b]" />{" "}
                          {vendor.vendorPhone}
                        </div>
                      </div>
                    </td>
                    <td className="py-8 border-b border-black/5">
                      <div className="flex items-center gap-3 text-[11px] font-bold text-[#111111] font-oswald uppercase">
                        <MapPin size={16} className="text-[#fcd20b]" />
                        {vendor.vendorAddress || "INTERNATIONAL HUB"}
                      </div>
                    </td>
                    <td className="py-8 border-b border-black/5">
                      <div className="flex items-center gap-2 bg-[#fcd20b]/10 px-4 py-2 rounded-full border border-[#fcd20b]/20 w-fit">
                        <Star
                          size={14}
                          className="text-[#fcd20b] fill-[#fcd20b]"
                        />
                        <span className="text-[11px] font-bold text-[#111111] font-oswald">
                          4.8
                        </span>
                      </div>
                    </td>
                    <td className="pr-10 py-8 border-b border-black/5 text-right">
                      <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                        <button className="w-10 h-10 rounded-xl bg-white text-[#111111] hover:bg-[#111111] hover:text-[#fcd20b] border border-black/5 transition-all shadow-sm flex items-center justify-center">
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(vendor.vendorID)}
                          className="w-10 h-10 rounded-xl bg-white text-rose-500 hover:bg-rose-500 hover:text-white border border-black/5 transition-all shadow-sm flex items-center justify-center"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="p-8 bg-[#f8f8f8]/50 flex justify-center">
          <Pagination
            totalItems={vendors.length}
            itemsPerPage={10}
            currentPage={1}
          />
        </div>
      </div>
    </div>
  );
};

export default VendorManagement;
