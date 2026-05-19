import React, { useState, useEffect } from "react";
import {
  Calendar,
  PenTool,
  MessageSquare,
  CheckCircle,
  Car,
  Clock,
  AlertTriangle,
  ShieldCheck,
  Search,
  ArrowRight,
  Loader2,
  Trash2,
  AlertCircle,
} from "lucide-react";
import { customerSelfServiceService } from "../../services/api";

const AppointmentRequests = () => {
  const [vehicles, setVehicles] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [partRequests, setPartRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form states - Booking
  const [bookingForm, setBookingForm] = useState({
    vehicleID: "",
    appointmentDate: "",
    appointmentTime: "09:00",
    serviceType: "",
  });
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingError, setBookingError] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState("");

  // Form states - Part Sourcing
  const [partName, setPartName] = useState("");
  const [sourcingLoading, setSourcingLoading] = useState(false);
  const [sourcingError, setSourcingError] = useState("");
  const [sourcingSuccess, setSourcingSuccess] = useState("");

  const loadData = async () => {
    try {
      setLoading(true);
      const [vehiclesRes, appointmentsRes, partRequestsRes] = await Promise.all([
        customerSelfServiceService.getVehicles(),
        customerSelfServiceService.getAppointments(),
        customerSelfServiceService.getPartRequests(),
      ]);

      setVehicles(vehiclesRes.data);
      setAppointments(appointmentsRes.data);
      setPartRequests(partRequestsRes.data);

      if (vehiclesRes.data.length > 0) {
        setBookingForm((prev) => ({
          ...prev,
          vehicleID: vehiclesRes.data[0].vehicleID.toString(),
        }));
      }
    } catch (err) {
      console.error("Failed to load customer details:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleBookAppointment = async (e) => {
    e.preventDefault();
    setBookingError("");
    setBookingSuccess("");

    if (!bookingForm.vehicleID) {
      setBookingError("Please select a vehicle first. Register one if needed.");
      return;
    }
    if (!bookingForm.appointmentDate) {
      setBookingError("Please select an appointment date.");
      return;
    }
    if (!bookingForm.serviceType.trim()) {
      setBookingError("Please enter a service type or description.");
      return;
    }

    try {
      setBookingLoading(true);
      
      // format time to include seconds for .NET TimeSpan (e.g. 09:00:00)
      const timeSpan = `${bookingForm.appointmentTime}:00`;

      await customerSelfServiceService.bookAppointment({
        vehicleID: parseInt(bookingForm.vehicleID),
        appointmentDate: bookingForm.appointmentDate,
        appointmentTime: timeSpan,
        serviceType: bookingForm.serviceType.trim(),
      });

      setBookingSuccess("Service appointment request initialized successfully!");
      setBookingForm((prev) => ({
        ...prev,
        serviceType: "",
      }));

      // reload
      const appointmentsRes = await customerSelfServiceService.getAppointments();
      setAppointments(appointmentsRes.data);
    } catch (err) {
      setBookingError(
        err.response?.data?.message ||
          "Failed to request appointment. Check if date is in the future."
      );
    } finally {
      setBookingLoading(false);
    }
  };

  const handleRequestPart = async (e) => {
    e.preventDefault();
    setSourcingError("");
    setSourcingSuccess("");

    if (!partName.trim()) {
      setSourcingError("Please enter the part name or SKU.");
      return;
    }

    try {
      setSourcingLoading(true);
      await customerSelfServiceService.requestPart({
        requestedPartName: partName.trim(),
      });

      setSourcingSuccess("Part procurement request dispatched successfully!");
      setPartName("");

      // reload
      const partRequestsRes = await customerSelfServiceService.getPartRequests();
      setPartRequests(partRequestsRes.data);
    } catch (err) {
      setSourcingError(
        err.response?.data?.message ||
          "Failed to request part. Please try again."
      );
    } finally {
      setSourcingLoading(false);
    }
  };

  const handleCancelAppointment = async (id) => {
    if (!window.confirm("Are you sure you want to cancel this appointment booking?")) {
      return;
    }

    try {
      await customerSelfServiceService.cancelAppointment(id);
      // reload
      const appointmentsRes = await customerSelfServiceService.getAppointments();
      setAppointments(appointmentsRes.data);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to cancel appointment.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <Loader2 size={40} className="text-blue-500 animate-spin" />
        <p className="text-slate-500 font-bold text-sm uppercase tracking-widest animate-pulse">
          Retrieving Orchestration Nodes...
        </p>
      </div>
    );
  }

  return (
    <div className="pb-10 font-sans">
      {/* Strategic Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-black text-slate-800 m-0 tracking-tight leading-none">
            Service Orchestration
          </h2>
          <p className="text-slate-500 text-sm mt-2 font-medium">
            Schedule advanced maintenance and track specialty parts procurement.
          </p>
        </div>
        <div className="hidden sm:flex bg-white px-6 py-3 rounded-2xl border border-slate-200 items-center gap-4 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
            <Clock size={20} />
          </div>
          <div>
            <p className="m-0 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              RESPONSE TIME
            </p>
            <span className="text-xs font-black text-slate-700 uppercase tracking-tight">
              Avg. 2 Hours
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Advanced Maintenance Booking */}
        <div className="bg-white rounded-3xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] border border-slate-100 p-8">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center shadow-md shadow-blue-500/10">
              <Calendar size={20} />
            </div>
            <h4 className="m-0 text-lg font-black text-slate-800">
              Maintenance Scheduler
            </h4>
          </div>

          {bookingError && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl text-red-800 text-xs font-bold flex gap-2 items-center">
              <AlertCircle size={16} className="shrink-0" />
              <span>{bookingError}</span>
            </div>
          )}

          {bookingSuccess && (
            <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-xl text-green-800 text-xs font-bold flex gap-2 items-center">
              <CheckCircle size={16} className="shrink-0" />
              <span>{bookingSuccess}</span>
            </div>
          )}

          <form onSubmit={handleBookAppointment} className="flex flex-col gap-6">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                Vehicle Selection
              </p>
              {vehicles.length === 0 ? (
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-xs font-bold leading-relaxed">
                  No vehicles registered yet. Please go back to the Dashboard to register a vehicle first.
                </div>
              ) : (
                <div className="relative">
                  <Car className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <select
                    value={bookingForm.vehicleID}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, vehicleID: e.target.value })
                    }
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-blue-600 focus:bg-white transition-all appearance-none cursor-pointer"
                  >
                    {vehicles.map((v) => (
                      <option key={v.vehicleID} value={v.vehicleID}>
                        {v.brand} {v.model} ({v.vehicleNumber})
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                  Appointment Date
                </p>
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={bookingForm.appointmentDate}
                  onChange={(e) =>
                    setBookingForm({ ...bookingForm, appointmentDate: e.target.value })
                  }
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-blue-600 focus:bg-white transition-all"
                />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                  Time Slot
                </p>
                <input
                  type="time"
                  value={bookingForm.appointmentTime}
                  onChange={(e) =>
                    setBookingForm({ ...bookingForm, appointmentTime: e.target.value })
                  }
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-blue-600 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                Service Description
              </p>
              <input
                type="text"
                placeholder="e.g. 50k Mile Routine Checkup, Brake Squeaking"
                value={bookingForm.serviceType}
                onChange={(e) =>
                  setBookingForm({ ...bookingForm, serviceType: e.target.value })
                }
                className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-blue-600 focus:bg-white transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={bookingLoading || vehicles.length === 0}
              className="w-full py-4.5 bg-blue-500 text-white rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10 hover:bg-slate-900 transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {bookingLoading ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Scheduling...
                </>
              ) : (
                <>
                  <ShieldCheck size={18} /> Initialize Booking Request
                </>
              )}
            </button>
          </form>
        </div>

        {/* Specialty Parts Sourcing */}
        <div className="bg-white rounded-3xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] border border-slate-100 p-8">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-pink-500 text-white flex items-center justify-center shadow-md shadow-pink-500/10">
              <PenTool size={20} />
            </div>
            <h4 className="m-0 text-lg font-black text-slate-800">
              Strategic Component Sourcing
            </h4>
          </div>

          <div className="p-5 bg-rose-50/60 border border-rose-100 rounded-2xl flex gap-4 mb-6">
            <div className="w-10 h-10 rounded-xl bg-rose-500 flex items-center justify-center text-white shrink-0 shadow-md">
              <AlertTriangle size={20} />
            </div>
            <div>
              <h4 className="m-0 text-[10px] font-black text-rose-700 uppercase tracking-widest mb-1">
                Critical Sourcing Policy
              </h4>
              <p className="text-xs text-rose-900/80 m-0 font-semibold leading-relaxed">
                If the required part is unavailable or discontinued, provide the component nomenclature below. We will source it globally.
              </p>
            </div>
          </div>

          {sourcingError && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl text-red-800 text-xs font-bold flex gap-2 items-center">
              <AlertCircle size={16} className="shrink-0" />
              <span>{sourcingError}</span>
            </div>
          )}

          {sourcingSuccess && (
            <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-xl text-green-800 text-xs font-bold flex gap-2 items-center">
              <CheckCircle size={16} className="shrink-0" />
              <span>{sourcingSuccess}</span>
            </div>
          )}

          <form onSubmit={handleRequestPart} className="flex flex-col gap-6">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                Part Nomenclature / SKU
              </p>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  required
                  placeholder="e.g. OEM Brembo Carbon Ceramic Rotors"
                  value={partName}
                  onChange={(e) => setPartName(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 outline-none focus:border-pink-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={sourcingLoading}
              className="w-full py-4.5 bg-slate-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg hover:bg-pink-600 transition-all transform active:scale-95 disabled:opacity-50"
            >
              {sourcingLoading ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Dispatching...
                </>
              ) : (
                <>
                  <MessageSquare size={18} /> Dispatch Procurement Request
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Lists Section: Your Bookings and Sourcing Requests */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        {/* Active Appointments list */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]">
          <h4 className="m-0 text-lg font-black text-slate-800 mb-6">
            Service Request Ledger
          </h4>

          {appointments.length === 0 ? (
            <div className="p-10 text-center bg-slate-50 rounded-2xl text-slate-400 font-semibold text-sm">
              No appointments scheduled yet.
            </div>
          ) : (
            <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-2">
              {appointments.map((a) => (
                <div
                  key={a.appointmentID}
                  className="p-5 bg-slate-50 border border-slate-100 rounded-2xl flex justify-between items-center hover:bg-white hover:shadow-md transition-all border-l-4 border-l-blue-500"
                >
                  <div>
                    <h5 className="m-0 text-sm font-bold text-slate-800">
                      {a.serviceType}
                    </h5>
                    <p className="m-0 text-xs text-slate-500 mt-1 font-semibold">
                      Vehicle: {a.vehicleName} ({a.vehicleNumber})
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-[11px] text-slate-400 font-bold">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(a.appointmentDate).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {a.appointmentTime.slice(0, 5)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-[9px] font-black px-2.5 py-1 rounded-md tracking-wider border uppercase ${
                        a.appointmentStatus === "Completed"
                          ? "bg-green-50 text-green-600 border-green-100"
                          : a.appointmentStatus === "Cancelled"
                            ? "bg-red-50 text-red-500 border-red-100"
                            : "bg-blue-50 text-blue-600 border-blue-100"
                      }`}
                    >
                      {a.appointmentStatus}
                    </span>
                    {a.appointmentStatus === "Pending" && (
                      <button
                        onClick={() => handleCancelAppointment(a.appointmentID)}
                        className="p-2 rounded-lg bg-red-50 border border-red-100 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                        title="Cancel Appointment"
                      >
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Part Requests list */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]">
          <h4 className="m-0 text-lg font-black text-slate-800 mb-6">
            Component Procurement Ledger
          </h4>

          {partRequests.length === 0 ? (
            <div className="p-10 text-center bg-slate-50 rounded-2xl text-slate-400 font-semibold text-sm">
              No component requests logged.
            </div>
          ) : (
            <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-2">
              {partRequests.map((r) => (
                <div
                  key={r.partRequestID}
                  className="p-5 bg-slate-50 border border-slate-100 rounded-2xl flex justify-between items-center hover:bg-white hover:shadow-md transition-all border-l-4 border-l-pink-500"
                >
                  <div>
                    <h5 className="m-0 text-sm font-bold text-slate-800">
                      {r.requestedPartName}
                    </h5>
                    <p className="m-0 text-[11px] text-slate-400 mt-1 font-semibold flex items-center gap-1">
                      <Calendar size={12} />
                      Requested: {new Date(r.requestDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <span
                      className={`text-[9px] font-black px-2.5 py-1 rounded-md tracking-wider border uppercase ${
                        r.requestStatus === "Fulfilled" || r.requestStatus === "Approved"
                          ? "bg-green-50 text-green-600 border-green-100"
                          : r.requestStatus === "Rejected"
                            ? "bg-red-50 text-red-500 border-red-100"
                            : "bg-yellow-50 text-yellow-600 border-yellow-100"
                      }`}
                    >
                      {r.requestStatus}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentRequests;
