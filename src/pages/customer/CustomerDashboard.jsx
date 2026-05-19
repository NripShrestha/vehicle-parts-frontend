import React, { useState, useEffect } from "react";
import {
  Car,
  Calendar,
  Clock,
  Wrench,
  CheckCircle,
  ArrowRight,
  User,
  Phone,
  ShieldCheck,
  Plus,
  X,
  CreditCard,
  FileText,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { customerSelfServiceService } from "../../services/api";

const QuickStat = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white rounded-2xl p-6 flex flex-col gap-3 transition-all hover:scale-[1.02] duration-300 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
    <div
      className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner"
      style={{ backgroundColor: `${color}12`, color: color }}
    >
      <Icon size={24} />
    </div>
    <div>
      <h3 className="m-0 text-3xl font-black text-slate-800 tracking-tight leading-none">
        {value}
      </h3>
      <p className="m-0 text-xs font-bold text-slate-400 mt-2 uppercase tracking-wider">
        {title}
      </p>
    </div>
  </div>
);

const CustomerDashboard = ({ user, setActiveScreen }) => {
  const [loading, setLoading] = useState(true);
  const [historyData, setHistoryData] = useState(null);
  const [showVehicleModal, setShowVehicleModal] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [newVehicle, setNewVehicle] = useState({
    vehicleNumber: "",
    brand: "",
    model: "",
    year: new Date().getFullYear(),
  });

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const response = await customerSelfServiceService.getHistory();
      setHistoryData(response.data);
    } catch (err) {
      console.error("Failed to fetch dashboard data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const handleRegisterVehicle = async (e) => {
    e.preventDefault();
    if (!newVehicle.vehicleNumber.trim()) {
      setRegisterError("Vehicle license number is required.");
      return;
    }

    try {
      setRegisterLoading(true);
      setRegisterError("");
      await customerSelfServiceService.registerVehicle(newVehicle);
      setNewVehicle({
        vehicleNumber: "",
        brand: "",
        model: "",
        year: new Date().getFullYear(),
      });
      setShowVehicleModal(false);
      // Refresh dashboard data
      fetchDashboardData();
    } catch (err) {
      setRegisterError(
        err.response?.data?.message ||
          "Failed to register vehicle. Please verify input data."
      );
    } finally {
      setRegisterLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <Loader2 size={40} className="text-blue-500 animate-spin" />
        <p className="text-slate-500 font-bold text-sm uppercase tracking-widest animate-pulse">
          Synchronizing Portal Node...
        </p>
      </div>
    );
  }

  const activeAppointments = historyData?.serviceHistory?.filter(
    (a) => a.appointmentStatus === "Pending"
  ).length || 0;

  const totalServices = historyData?.totalAppointments || 0;
  const totalSpent = historyData?.totalSpent || 0;
  const creditBalance = historyData?.creditBalance || 0;

  return (
    <div className="pb-10 font-sans">
      {/* Personalized Welcome Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-10">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-3xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20 transform rotate-3 hover:rotate-0 transition-all duration-300 shrink-0">
            <User size={40} className="text-white" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-3xl font-black text-slate-800 m-0 tracking-tight leading-tight">
                Welcome, {historyData?.fullName || user?.fullName || "Valued Customer"}
              </h2>
              <span className="text-[10px] font-black px-3.5 py-1 rounded-full bg-slate-900 text-[#fcd20b] shadow-sm uppercase tracking-wider border border-white/10">
                {historyData?.customerType || "REGULAR"} MEMBER
              </span>
            </div>
            <p className="text-slate-500 text-sm mt-1.5 font-medium leading-relaxed">
              {historyData?.vehicles && historyData.vehicles.length > 0
                ? `Managing ${historyData.vehicles.length} vehicle${historyData.vehicles.length > 1 ? "s" : ""}. Rest assured, our expert team has you covered.`
                : "Register your vehicle to schedule service appointments and track history."}
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => setShowVehicleModal(true)}
            className="px-6 py-3.5 rounded-xl border-2 border-slate-200 text-slate-700 bg-white hover:border-slate-800 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all active:scale-95 shadow-sm"
          >
            <Plus size={16} /> Register Vehicle
          </button>
          <button
            onClick={() => setActiveScreen("Appointments")}
            className="px-6 py-3.5 rounded-xl bg-blue-600 text-white hover:bg-slate-900 text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-blue-600/10 transition-all transform active:scale-95"
          >
            <Calendar size={16} /> Book Service
          </button>
        </div>
      </div>

      {/* Overview Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <QuickStat
          title="Active Bookings"
          value={activeAppointments}
          icon={Calendar}
          color="#2563eb"
        />
        <QuickStat
          title="Service Actions"
          value={totalServices}
          icon={Wrench}
          color="#16a34a"
        />
        <QuickStat
          title="Credit Balance"
          value={`$${creditBalance.toLocaleString("en-US", { minimumFractionDigits: 2 })}`}
          icon={CreditCard}
          color="#eab308"
        />
        <QuickStat
          title="Total Spent (YTD)"
          value={`$${totalSpent.toLocaleString("en-US", { minimumFractionDigits: 2 })}`}
          icon={ShieldCheck}
          color="#db2777"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Service Bookings */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]">
          <div className="flex justify-between items-center mb-6">
            <h4 className="m-0 text-lg font-black text-slate-800">
              Active Booking Ledger
            </h4>
            <button
              onClick={() => setActiveScreen("History")}
              className="bg-slate-50 border border-slate-100 hover:bg-slate-100 text-slate-600 px-4 py-2 rounded-xl text-[10px] font-bold transition-all uppercase tracking-wider flex items-center gap-2"
            >
              Purchase History <ArrowRight size={12} />
            </button>
          </div>

          {!historyData?.serviceHistory || historyData.serviceHistory.length === 0 ? (
            <div className="p-12 text-center flex flex-col items-center gap-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Calendar size={48} className="text-slate-300" />
              <p className="text-slate-500 font-bold text-sm tracking-tight leading-relaxed max-w-sm m-0">
                No service bookings registered yet. Register your vehicle and schedule a checkup.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="pb-4 text-[10px] uppercase text-slate-400 font-black tracking-wider text-left">
                      SERVICE TYPE
                    </th>
                    <th className="pb-4 text-[10px] uppercase text-slate-400 font-black tracking-wider text-left">
                      VEHICLE
                    </th>
                    <th className="pb-4 text-[10px] uppercase text-slate-400 font-black tracking-wider text-left">
                      DATE / TIME
                    </th>
                    <th className="pb-4 text-[10px] uppercase text-slate-400 font-black tracking-wider text-right">
                      STATUS
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {historyData.serviceHistory.slice(0, 5).map((row) => (
                    <tr key={row.appointmentID} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600">
                            <Wrench size={18} />
                          </div>
                          <p className="font-bold text-sm m-0 text-slate-800 tracking-tight">
                            {row.serviceType}
                          </p>
                        </div>
                      </td>
                      <td className="py-4 text-sm font-semibold text-slate-600">
                        {row.vehicleName}
                      </td>
                      <td className="py-4">
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-slate-800">
                            {new Date(row.appointmentDate).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                            {row.appointmentTime.slice(0, 5)}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 text-right">
                        <span
                          className={`text-[9px] font-black px-2.5 py-1 rounded-md tracking-wider border uppercase shadow-sm ${
                            row.appointmentStatus === "Completed"
                              ? "bg-green-50 text-green-600 border-green-100"
                              : row.appointmentStatus === "Cancelled"
                                ? "bg-red-50 text-red-500 border-red-100"
                                : "bg-blue-50 text-blue-600 border-blue-100"
                          }`}
                        >
                          {row.appointmentStatus}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {historyData.serviceHistory.length > 5 && (
                <div className="pt-6 text-center border-t border-slate-100">
                  <button
                    onClick={() => setActiveScreen("Appointments")}
                    className="bg-transparent border-none text-blue-600 text-[11px] font-black cursor-pointer hover:text-blue-800 transition-all tracking-widest uppercase flex items-center gap-2 mx-auto justify-center"
                  >
                    View All Appointments <ArrowRight size={14} />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Registered Vehicles Panel */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]">
            <h4 className="m-0 text-lg font-black text-slate-800 mb-6">
              Registered Fleet
            </h4>

            {!historyData?.vehicles || historyData.vehicles.length === 0 ? (
              <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center gap-3">
                <Car size={36} className="text-slate-300" />
                <p className="text-xs text-slate-500 font-bold m-0 leading-relaxed">
                  No vehicles registered. Register your vehicle details to begin orchestration.
                </p>
                <button
                  onClick={() => setShowVehicleModal(true)}
                  className="mt-2 w-full py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider transition-all"
                >
                  Register First Vehicle
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {historyData.vehicles.map((vehicle) => (
                  <div
                    key={vehicle.vehicleID}
                    className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4 shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-slate-500 border border-slate-200 shadow-sm shrink-0">
                      <Car size={22} className="group-hover:scale-115 transition-transform" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h5 className="m-0 font-bold text-sm text-slate-800 truncate">
                        {vehicle.brand} {vehicle.model}
                      </h5>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] bg-slate-200 px-2 py-0.5 rounded font-black text-slate-600 uppercase tracking-tight">
                          {vehicle.vehicleNumber}
                        </span>
                        <span className="text-[10px] text-slate-400 font-bold">
                          {vehicle.year}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-slate-900 rounded-3xl text-white p-8 shadow-xl relative overflow-hidden group">
            <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <ShieldCheck size={160} />
            </div>
            <div className="relative z-10">
              <h4 className="m-0 text-xl font-black tracking-tight">
                Elite Diagnostics
              </h4>
              <p className="text-xs text-slate-300 my-5 font-bold leading-relaxed">
                Book scheduled services or request custom OEM parts through your self-service portal dashboard.
              </p>
              <button
                onClick={() => setActiveScreen("Appointments")}
                className="w-full bg-white text-slate-900 py-3.5 rounded-xl font-bold text-[11px] uppercase tracking-wider shadow-lg hover:bg-slate-100 transition-all transform active:scale-95 flex items-center justify-center gap-2"
              >
                Schedule Service Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Vehicle Registration Modal */}
      {showVehicleModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md p-8 border border-slate-100 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => {
                setShowVehicleModal(false);
                setRegisterError("");
              }}
              className="absolute top-6 right-6 w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-800 bg-slate-50 cursor-pointer"
            >
              <X size={16} />
            </button>
            <h3 className="m-0 text-2xl font-black text-slate-800 mb-6">
              Register Vehicle
            </h3>

            {registerError && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-2xl text-red-800 text-xs font-bold flex gap-2 items-center">
                <AlertCircle size={16} className="shrink-0" />
                <span>{registerError}</span>
              </div>
            )}

            <form onSubmit={handleRegisterVehicle} className="flex flex-col gap-5">
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                  License Number / Plate
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. BA-1-PA-1234"
                  value={newVehicle.vehicleNumber}
                  onChange={(e) =>
                    setNewVehicle({ ...newVehicle, vehicleNumber: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-600 focus:bg-white text-sm font-bold text-slate-800 transition-all uppercase"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ford"
                    value={newVehicle.brand}
                    onChange={(e) =>
                      setNewVehicle({ ...newVehicle, brand: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-600 focus:bg-white text-sm font-bold text-slate-800 transition-all"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                    Model Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mustang"
                    value={newVehicle.model}
                    onChange={(e) =>
                      setNewVehicle({ ...newVehicle, model: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-600 focus:bg-white text-sm font-bold text-slate-800 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                  Manufacture Year
                </label>
                <input
                  type="number"
                  required
                  min="1900"
                  max={new Date().getFullYear() + 1}
                  value={newVehicle.year}
                  onChange={(e) =>
                    setNewVehicle({ ...newVehicle, year: parseInt(e.target.value) || 2024 })
                  }
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-600 focus:bg-white text-sm font-bold text-slate-800 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={registerLoading}
                className="mt-2 w-full py-4 bg-slate-900 hover:bg-blue-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {registerLoading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Registering...
                  </>
                ) : (
                  "Complete Registration"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerDashboard;
