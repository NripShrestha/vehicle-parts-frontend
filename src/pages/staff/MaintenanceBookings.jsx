import React, { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  Calendar,
  Clock,
  Loader2,
  RefreshCw,
  Search,
  Wrench,
} from "lucide-react";
import { appointmentService } from "../../services/api";

const MaintenanceBookings = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const loadAppointments = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await appointmentService.getAll();
      setAppointments(response.data || []);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to load maintenance bookings.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  const filteredAppointments = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return appointments.filter((appointment) => {
      const matchesStatus =
        statusFilter === "all" ||
        appointment.appointmentStatus?.toLowerCase() === statusFilter;
      if (!matchesStatus) return false;
      if (!query) return true;
      return (
        appointment.customerName?.toLowerCase().includes(query) ||
        appointment.serviceType?.toLowerCase().includes(query) ||
        appointment.vehicleNumber?.toLowerCase().includes(query) ||
        appointment.vehicleName?.toLowerCase().includes(query)
      );
    });
  }, [appointments, searchTerm, statusFilter]);

  const statusClass = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-50 text-green-600 border-green-100";
      case "Cancelled":
        return "bg-red-50 text-red-500 border-red-100";
      default:
        return "bg-blue-50 text-blue-600 border-blue-100";
    }
  };

  const formatTime = (time) => {
    if (!time) return "—";
    if (typeof time === "string") return time.slice(0, 5);
    return String(time);
  };

  return (
    <div className="pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
        <div>
          <h2 className="text-3xl font-extrabold text-[#111111] m-0 tracking-tighter leading-none font-oswald uppercase italic">
            Maintenance <span className="text-[#fcd20b]">Bookings</span>
          </h2>
          <p className="text-[#7a7a7a] text-sm font-medium mt-2">
            View customer service appointments and maintenance requests.
          </p>
        </div>
        <button
          type="button"
          onClick={loadAppointments}
          className="px-6 py-3.5 bg-[#111111] text-[#fcd20b] rounded-full text-[10px] uppercase tracking-widest font-extrabold hover:bg-[#fcd20b] hover:text-[#111111] transition-all shadow-sm flex items-center gap-2"
        >
          <RefreshCw size={16} /> Refresh
        </button>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl text-red-800 text-xs font-bold flex gap-2 items-center">
          <AlertCircle size={16} className="shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="bg-white rounded-[30px] border border-black/5 shadow-xl p-6 mb-8 flex flex-col md:flex-row gap-4">
        <div className="flex-1 bg-[#f8f8f8] border border-black/5 rounded-2xl px-5 py-3.5 flex items-center gap-4">
          <Search size={18} className="text-[#7a7a7a]" />
          <input
            type="text"
            placeholder="Search by customer, vehicle, or service..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="border-none outline-none w-full text-sm font-bold text-[#111111] bg-transparent"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value)}
          className="px-5 py-3.5 bg-[#f8f8f8] border border-black/5 rounded-2xl text-xs font-bold uppercase tracking-widest text-[#111111] outline-none"
        >
          <option value="all">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {loading ? (
        <div className="py-24 text-center">
          <Loader2 size={48} className="mx-auto text-[#fcd20b] animate-spin mb-4" />
          <p className="text-xs font-black text-[#7a7a7a] uppercase tracking-widest">
            Loading maintenance bookings...
          </p>
        </div>
      ) : filteredAppointments.length === 0 ? (
        <div className="p-16 text-center bg-white rounded-3xl border border-black/5">
          <Wrench size={56} className="mx-auto text-black/10 mb-4" />
          <p className="text-[#7a7a7a] font-bold text-sm">
            No maintenance bookings found.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-[30px] border border-black/5 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#111111] text-white text-[10px] uppercase tracking-widest">
                  <th className="px-6 py-5 font-bold">Customer</th>
                  <th className="px-6 py-5 font-bold">Vehicle</th>
                  <th className="px-6 py-5 font-bold">Service</th>
                  <th className="px-6 py-5 font-bold">Date & Time</th>
                  <th className="px-6 py-5 font-bold">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredAppointments.map((appointment) => (
                  <tr
                    key={appointment.appointmentID}
                    className="border-t border-black/5 hover:bg-[#f8f8f8]/80 transition-colors"
                  >
                    <td className="px-6 py-5">
                      <p className="m-0 text-sm font-bold text-[#111111]">
                        {appointment.customerName}
                      </p>
                      <p className="m-0 text-[10px] text-[#7a7a7a] font-bold uppercase tracking-widest mt-1">
                        ID #{appointment.customerID}
                      </p>
                    </td>
                    <td className="px-6 py-5">
                      <p className="m-0 text-sm font-bold text-[#111111]">
                        {appointment.vehicleName || "—"}
                      </p>
                      <p className="m-0 text-xs text-[#7a7a7a] font-semibold mt-1">
                        {appointment.vehicleNumber}
                      </p>
                    </td>
                    <td className="px-6 py-5 text-sm font-semibold text-[#111111]">
                      {appointment.serviceType}
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col gap-1 text-xs font-bold text-[#7a7a7a]">
                        <span className="flex items-center gap-2 text-[#111111]">
                          <Calendar size={14} className="text-[#fcd20b]" />
                          {new Date(appointment.appointmentDate).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-2 text-[#111111]">
                          <Clock size={14} className="text-[#fcd20b]" />
                          {formatTime(appointment.appointmentTime)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span
                        className={`text-[9px] font-black px-2.5 py-1 rounded-md tracking-wider border uppercase ${statusClass(
                          appointment.appointmentStatus,
                        )}`}
                      >
                        {appointment.appointmentStatus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MaintenanceBookings;
