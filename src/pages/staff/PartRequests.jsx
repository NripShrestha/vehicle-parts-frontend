import React, { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Package,
  RefreshCw,
  Search,
} from "lucide-react";
import { partRequestService } from "../../services/api";

const STATUS_OPTIONS = ["Pending", "Approved", "Rejected", "Fulfilled"];

const statusClass = (status) => {
  switch (status) {
    case "Approved":
      return "bg-blue-50 text-blue-600 border-blue-100";
    case "Fulfilled":
      return "bg-green-50 text-green-600 border-green-100";
    case "Rejected":
      return "bg-red-50 text-red-500 border-red-100";
    default:
      return "bg-yellow-50 text-yellow-600 border-yellow-100";
  }
};

const PartRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [updatingId, setUpdatingId] = useState(null);

  const loadRequests = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await partRequestService.getAll();
      setRequests(response.data || []);
    } catch (err) {
      setError(
        err.response?.data?.message || "Unable to load customer part requests.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRequests();
  }, []);

  const filteredRequests = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return requests.filter((request) => {
      const matchesStatus =
        statusFilter === "all" ||
        request.requestStatus?.toLowerCase() === statusFilter;
      if (!matchesStatus) return false;
      if (!query) return true;
      return (
        request.requestedPartName?.toLowerCase().includes(query) ||
        request.customerName?.toLowerCase().includes(query) ||
        request.customerEmail?.toLowerCase().includes(query) ||
        String(request.customerID).includes(query)
      );
    });
  }, [requests, searchTerm, statusFilter]);

  const handleStatusChange = async (id, requestStatus) => {
    try {
      setUpdatingId(id);
      setError("");
      setSuccess("");
      await partRequestService.updateStatus(id, { requestStatus });
      setSuccess("Part request status updated.");
      await loadRequests();
    } catch (err) {
      setError(err.response?.data?.message || "Unable to update request status.");
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
        <div>
          <h2 className="text-3xl font-extrabold text-[#111111] m-0 tracking-tighter leading-none font-oswald uppercase italic">
            Customer <span className="text-[#fcd20b]">Part Requests</span>
          </h2>
          <p className="text-[#7a7a7a] text-sm font-medium mt-2">
            Review unavailable parts requested through the customer portal.
          </p>
        </div>
        <button
          type="button"
          onClick={loadRequests}
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

      {success && (
        <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-xl text-green-800 text-xs font-bold flex gap-2 items-center">
          <CheckCircle2 size={16} className="shrink-0" />
          <span>{success}</span>
        </div>
      )}

      <div className="bg-white rounded-[30px] border border-black/5 shadow-xl p-6 mb-8 flex flex-col md:flex-row gap-4">
        <div className="flex-1 bg-[#f8f8f8] border border-black/5 rounded-2xl px-5 py-3.5 flex items-center gap-4">
          <Search size={18} className="text-[#7a7a7a]" />
          <input
            type="text"
            placeholder="Search by part name, customer, or email..."
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
          <option value="approved">Approved</option>
          <option value="fulfilled">Fulfilled</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {loading ? (
        <div className="py-24 text-center">
          <Loader2 size={48} className="mx-auto text-[#fcd20b] animate-spin mb-4" />
          <p className="text-xs font-black text-[#7a7a7a] uppercase tracking-widest">
            Loading part requests...
          </p>
        </div>
      ) : filteredRequests.length === 0 ? (
        <div className="p-16 text-center bg-white rounded-3xl border border-black/5">
          <Package size={56} className="mx-auto text-black/10 mb-4" />
          <p className="text-[#7a7a7a] font-bold text-sm m-0">
            No part requests match your filters.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-[30px] border border-black/5 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#111111] text-white text-[10px] uppercase tracking-widest">
                  <th className="px-6 py-5 font-bold">Requested Part</th>
                  <th className="px-6 py-5 font-bold">Customer</th>
                  <th className="px-6 py-5 font-bold">Contact</th>
                  <th className="px-6 py-5 font-bold">Requested</th>
                  <th className="px-6 py-5 font-bold">Status</th>
                  <th className="px-6 py-5 font-bold text-right">Update</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.map((request) => (
                  <tr
                    key={request.partRequestID}
                    className="border-t border-black/5 hover:bg-[#f8f8f8]/80 transition-colors"
                  >
                    <td className="px-6 py-5 text-sm font-bold text-[#111111]">
                      {request.requestedPartName}
                    </td>
                    <td className="px-6 py-5">
                      <p className="m-0 text-sm font-bold text-[#111111]">
                        {request.customerName}
                      </p>
                      <p className="m-0 text-[10px] text-[#7a7a7a] font-bold uppercase tracking-widest mt-1">
                        ID #{request.customerID}
                      </p>
                    </td>
                    <td className="px-6 py-5 text-xs font-semibold text-[#7a7a7a]">
                      <p className="m-0">{request.customerEmail || "—"}</p>
                      <p className="m-0 mt-1">{request.customerPhone || "—"}</p>
                    </td>
                    <td className="px-6 py-5 text-xs font-bold text-[#7a7a7a]">
                      {new Date(request.requestDate).toLocaleString()}
                    </td>
                    <td className="px-6 py-5">
                      <span
                        className={`text-[9px] font-black px-2.5 py-1 rounded-md tracking-wider border uppercase ${statusClass(
                          request.requestStatus,
                        )}`}
                      >
                        {request.requestStatus}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <select
                        value={request.requestStatus}
                        disabled={updatingId === request.partRequestID}
                        onChange={(event) =>
                          handleStatusChange(
                            request.partRequestID,
                            event.target.value,
                          )
                        }
                        className="px-3 py-2 rounded-xl border border-black/10 text-[10px] font-bold uppercase tracking-widest outline-none disabled:opacity-50"
                      >
                        {STATUS_OPTIONS.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
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

export default PartRequests;
