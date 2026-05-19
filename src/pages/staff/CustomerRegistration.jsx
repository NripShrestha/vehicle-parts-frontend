import React, { useState } from "react";
import {
  UserPlus,
  Car,
  Info,
  Save,
  User,
  MapPin,
  Phone,
  Mail,
  Hash,
  ShieldCheck,
  ChevronRight,
  Loader2,
  CheckCircle2,
  Calendar,
  Zap,
} from "lucide-react";
import { customerService } from "../../services/api";

const CustomerRegistration = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    brand: "",
    model: "",
    vehicleNumber: "",
    vehicleYear: new Date().getFullYear().toString(),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await customerService.registerWithVehicle(formData);
      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        address: "",
        brand: "",
        model: "",
        vehicleNumber: "",
        vehicleYear: new Date().getFullYear().toString(),
      });
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      alert(
        "Error registering customer: " +
          (error.response?.data?.message || "Server error"),
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pb-20 font-roboto">
      {/* Strategic Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 animate-xtra">
        <div>
          <h2 className="text-5xl font-bold text-[#111111] m-0 tracking-tighter font-oswald italic uppercase leading-none mb-2">
            CUSTOMER <span className="text-[#fcd20b]">REGISTRATION</span>
          </h2>
          <p className="text-[#7a7a7a] text-sm font-medium uppercase tracking-widest italic">
            Register new customer details and their primary vehicle
          </p>
        </div>
        <button
          type="submit"
          form="registration-form"
          disabled={loading}
          className="px-10 py-5 rounded-full bg-[#fcd20b] text-[#111111] font-oswald font-bold uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-[#111111] hover:text-[#fcd20b] shadow-2xl shadow-[#fcd20b]/20 transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <Save size={18} />
          )}
          {loading ? "PROCESSING..." : "COMPLETE REGISTRATION"}
        </button>
      </div>

      {success && (
        <div className="mb-12 p-8 bg-emerald-50 border border-emerald-100 rounded-[30px] flex items-center gap-6 text-emerald-700 animate-xtra">
          <div className="w-16 h-16 rounded-[20px] bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm">
            <CheckCircle2 size={32} />
          </div>
          <div>
            <p className="font-bold m-0 uppercase tracking-[0.2em] text-[10px] font-oswald italic">
              REGISTRATION SUCCESSFUL
            </p>
            <p className="text-sm font-medium opacity-80 m-0 uppercase tracking-tight">
              Customer profile established in the central registry database.
            </p>
          </div>
        </div>
      )}

      <form
        id="registration-form"
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
      >
        {/* Personal Information Card */}
        <div
          className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-black/5 animate-xtra"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="bg-[#111111] p-10 flex items-center gap-4 text-white">
            <User size={24} className="text-[#fcd20b]" />
            <h4 className="m-0 text-xl font-bold font-oswald italic uppercase tracking-tighter">
              PERSONAL <span className="text-[#fcd20b]">DETAILS</span>
            </h4>
          </div>

          <div className="p-12 flex flex-col gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                Full Legal Name
              </label>
              <div className="relative group">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#111111]/30 group-focus-within:text-[#fcd20b] transition-colors">
                  <User size={20} />
                </div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="e.g. JANE DOE"
                  className="w-full pl-16 pr-6 py-5 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                  Primary Phone
                </label>
                <div className="relative group">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#111111]/30 group-focus-within:text-[#fcd20b] transition-colors">
                    <Phone size={20} />
                  </div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    placeholder="+1 (555) 000-0000"
                    className="w-full pl-16 pr-6 py-5 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#111111]/30 group-focus-within:text-[#fcd20b] transition-colors">
                    <Mail size={20} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="JANE@EXAMPLE.COM"
                    className="w-full pl-16 pr-6 py-5 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                Service Address
              </label>
              <div className="relative group">
                <div className="absolute left-6 top-6 text-[#111111]/30 group-focus-within:text-[#fcd20b] transition-colors">
                  <MapPin size={20} />
                </div>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="STREET, CITY, STATE, ZIP CODE"
                  className="w-full pl-16 pr-6 py-6 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30 h-40 resize-none uppercase"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Vehicle Specification Card */}
        <div
          className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-black/5 animate-xtra"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="bg-[#111111] p-10 flex items-center gap-4 text-white">
            <Car size={24} className="text-[#fcd20b]" />
            <h4 className="m-0 text-xl font-bold font-oswald italic uppercase tracking-tighter">
              VEHICLE <span className="text-[#fcd20b]">SPECS</span>
            </h4>
          </div>

          <div className="p-12 flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                  License Plate
                </label>
                <div className="relative group">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#111111]/30 group-focus-within:text-[#fcd20b] transition-colors">
                    <Hash size={20} />
                  </div>
                  <input
                    type="text"
                    name="vehicleNumber"
                    value={formData.vehicleNumber}
                    onChange={handleChange}
                    required
                    placeholder="ABC-1234"
                    className="w-full pl-16 pr-6 py-5 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30 uppercase"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                  Model Year
                </label>
                <div className="relative group">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#111111]/30 group-focus-within:text-[#fcd20b] transition-colors">
                    <Calendar size={20} />
                  </div>
                  <input
                    type="number"
                    name="vehicleYear"
                    value={formData.vehicleYear}
                    onChange={handleChange}
                    required
                    placeholder="2024"
                    className="w-full pl-16 pr-6 py-5 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                  Vehicle Brand
                </label>
                <div className="relative group">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#111111]/30 group-focus-within:text-[#fcd20b] transition-colors">
                    <ShieldCheck size={20} />
                  </div>
                  <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    required
                    placeholder="e.g. TOYOTA"
                    className="w-full pl-16 pr-6 py-5 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30 uppercase"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                  Vehicle Model
                </label>
                <div className="relative group">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#111111]/30 group-focus-within:text-[#fcd20b] transition-colors">
                    <ShieldCheck size={20} />
                  </div>
                  <input
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    required
                    placeholder="e.g. CAMRY SE"
                    className="w-full pl-16 pr-6 py-5 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30 uppercase"
                  />
                </div>
              </div>
            </div>

            <div className="p-8 bg-[#fcd20b]/5 rounded-[30px] border border-[#fcd20b]/10 flex gap-6 items-start shadow-inner mt-8">
              <div className="w-14 h-14 rounded-[18px] bg-white shadow-md flex items-center justify-center text-[#fcd20b] shrink-0">
                <Info size={28} />
              </div>
              <div>
                <p className="m-0 text-[10px] font-bold text-[#111111] tracking-[0.1em] uppercase font-oswald italic">
                  Data Validation
                </p>
                <p className="m-0 text-[11px] text-[#7a7a7a] mt-2 leading-relaxed font-bold uppercase tracking-tight">
                  Customer details and vehicle information will be securely saved to the database.
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CustomerRegistration;
