import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Eye,
  Phone,
  MapPin,
  Car,
  Hash,
  ArrowRight,
  User,
  MoreVertical,
  ShieldCheck,
  Mail,
  Loader2,
  Plus,
  Users,
} from "lucide-react";
import Pagination from "../../components/Pagination";
import { customerService } from "../../services/api";

const CustomerSearch = ({ setActiveScreen, setSelectedCustomerId }) => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All Vehicle Types");

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await customerService.getAll();
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCustomers = customers.filter((c) => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      c.fullName.toLowerCase().includes(searchLower) ||
      c.phoneNumber.includes(searchLower) ||
      c.vehicles?.some((v) =>
        v.vehiclePlateNumber.toLowerCase().includes(searchLower),
      );

    if (filterType === "All Vehicle Types") return matchesSearch;
    return (
      matchesSearch && c.vehicles?.some((v) => v.vehicleType === filterType)
    );
  });

  const handleViewProfile = (id) => {
    setSelectedCustomerId(id);
    setActiveScreen("CustomerDetails");
  };

  return (
    <div className="pb-10 font-inter">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h2 className="text-3xl font-black text-slate-900 m-0 tracking-tight">
            Customer Intelligence Hub
          </h2>
          <p className="text-slate-500 text-sm font-medium mt-1">
            Query customer databases using vehicle plates, phone numbers, or
            unique identifiers.
          </p>
        </div>
        <button
          onClick={() => setActiveScreen("Registration")}
          className="px-6 py-3 rounded-2xl bg-slate-900 text-white text-xs font-black uppercase tracking-widest flex items-center gap-3 hover:bg-black shadow-xl transition-all transform active:scale-95"
        >
          <Plus size={18} /> New Registration
        </button>
      </div>

      {/* Advanced Search & Filter Bar */}
      <div className="bg-white rounded-[2rem] shadow-2xl p-8 mb-10 border border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          <div className="md:col-span-2 relative group">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search Name, Phone, or Plate (e.g. ABC-1234)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-6 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-slate-900 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 shadow-sm transition-all placeholder:text-slate-400"
            />
          </div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 text-sm font-bold text-slate-900 outline-none focus:bg-white focus:border-blue-500 shadow-sm cursor-pointer appearance-none transition-all"
          >
            <option>All Vehicle Types</option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Truck / Utility</option>
            <option>Performance</option>
          </select>
          <div className="bg-blue-600 text-white p-4 rounded-2xl text-center font-black uppercase text-[10px] tracking-widest shadow-lg shadow-blue-600/20">
            {filteredCustomers.length} Records Found
          </div>
        </div>
      </div>

      {/* Main Results Directory */}
      <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100">
        <div className="bg-slate-900 p-8 flex justify-between items-center text-white">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
              <Users size={24} />
            </div>
            <div>
              <h4 className="m-0 text-xs font-black uppercase tracking-widest">
                Customer Registry
              </h4>
              <p className="text-slate-400 text-[10px] font-bold mt-1 uppercase tracking-wider">
                Search results from primary database
              </p>
            </div>
          </div>
          <button
            onClick={fetchCustomers}
            className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all border border-white/10"
          >
            <Filter size={18} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="pl-10 py-5 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">
                  Customer Identity
                </th>
                <th className="py-5 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">
                  Primary Vehicle
                </th>
                <th className="py-5 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">
                  Contact Info
                </th>
                <th className="py-5 text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 text-left tracking-widest">
                  Status
                </th>
                <th className="pr-10 py-5 text-right text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 tracking-widest">
                  Management
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="py-24 text-center">
                    <Loader2
                      size={40}
                      className="text-blue-600 animate-spin mx-auto mb-4"
                    />
                    <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">
                      Querying intelligence database...
                    </p>
                  </td>
                </tr>
              ) : filteredCustomers.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-24 text-center">
                    <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center mx-auto mb-4 border border-slate-100 text-slate-300">
                      <Search size={32} />
                    </div>
                    <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">
                      No records match your query parameters
                    </p>
                  </td>
                </tr>
              ) : (
                filteredCustomers.map((item) => (
                  <tr
                    key={item.customerID}
                    className="group hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="pl-10 py-6 border-b border-slate-100">
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-slate-900 text-blue-400 flex items-center justify-center font-black text-xs shadow-lg group-hover:scale-110 transition-transform">
                          {item.fullName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <p className="font-black text-slate-900 m-0 leading-tight tracking-tight">
                            {item.fullName}
                          </p>
                          <p className="text-[10px] text-slate-400 m-0 font-black uppercase tracking-widest mt-1">
                            UID: CST-{item.customerID}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 border-b border-slate-100">
                      {item.vehicles && item.vehicles.length > 0 ? (
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-blue-500 transition-colors">
                            <Car size={18} />
                          </div>
                          <div>
                            <p className="text-xs font-black text-slate-900 m-0 tracking-tight">
                              {item.vehicles[0].vehiclePlateNumber}
                            </p>
                            <p className="text-[10px] text-slate-400 m-0 font-bold uppercase tracking-widest">
                              {item.vehicles[0].vehicleModel}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                          No Vehicle Profile
                        </span>
                      )}
                    </td>
                    <td className="py-6 border-b border-slate-100">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                        <Phone size={14} className="text-slate-300" />{" "}
                        {item.phoneNumber}
                      </div>
                    </td>
                    <td className="py-6 border-b border-slate-100">
                      <span className="text-[9px] font-black px-3 py-1.5 rounded-xl tracking-widest border border-emerald-100 bg-emerald-50 text-emerald-600 uppercase shadow-sm">
                        ACTIVE
                      </span>
                    </td>
                    <td className="pr-10 py-6 border-b border-slate-100 text-right">
                      <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                        <button
                          onClick={() => handleViewProfile(item.customerID)}
                          className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-black transition-all shadow-xl active:scale-95 group/btn"
                        >
                          Profile{" "}
                          <ArrowRight
                            size={14}
                            className="group-hover/btn:translate-x-1 transition-transform"
                          />
                        </button>
                        <button className="p-2.5 rounded-xl bg-white text-slate-400 hover:text-slate-900 hover:shadow-xl border border-slate-100 transition-all active:scale-90">
                          <MoreVertical size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <Pagination
            totalItems={filteredCustomers.length}
            itemsPerPage={10}
            currentPage={1}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerSearch;
