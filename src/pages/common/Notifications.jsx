import React, { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  AlertTriangle,
  Bell,
  Check,
  CheckCircle,
  CreditCard,
  FileText,
  Loader2,
  Package,
  RefreshCw,
  Send,
} from "lucide-react";
import {
  customerSelfServiceService,
  partsService,
  reportService,
} from "../../services/api";

const typeStyles = {
  inventory: { color: "#ec4899", icon: Package },
  financial: { color: "#f59e0b", icon: CreditCard },
  service: { color: "#3b82f6", icon: FileText },
  system: { color: "#10b981", icon: CheckCircle },
};

const Notifications = ({ user }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [triggering, setTriggering] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const role = user?.role?.toLowerCase();
  const canTrigger = role === "admin" || role === "staff";

  const buildAdminNotifications = async () => {
    const [lowStockRes, creditRes] = await Promise.all([
      partsService.getLowStock(),
      reportService.getPendingCredits(),
    ]);

    const lowStockAlerts = (lowStockRes.data || []).map((part) => ({
      id: `part-${part.partID}`,
      type: "inventory",
      title: "Low Stock Alert",
      msg: `${part.partName} has ${part.stockQuantity} units left. Reorder level is ${part.reorderLevel}.`,
      time: "Live",
      action: "Restock from procurement",
    }));

    const creditAlerts = (creditRes.data || []).map((customer) => ({
      id: `credit-${customer.customerID}`,
      type: "financial",
      title: "Pending Customer Credit",
      msg: `${customer.fullName} has an outstanding balance of $${Number(
        customer.creditBalance || 0,
      ).toLocaleString(undefined, { minimumFractionDigits: 2 })}.`,
      time: "Live",
      action: "Review credit report",
    }));

    return [...lowStockAlerts, ...creditAlerts];
  };

  const buildCustomerNotifications = async () => {
    const historyRes = await customerSelfServiceService.getHistory();
    const history = historyRes.data || {};

    const appointmentAlerts = (history.serviceHistory || [])
      .filter((appointment) => appointment.appointmentStatus === "Pending")
      .map((appointment) => ({
        id: `appointment-${appointment.appointmentID}`,
        type: "service",
        title: "Pending Appointment",
        msg: `${appointment.serviceType} is scheduled for ${new Date(
          appointment.appointmentDate,
        ).toLocaleDateString()} at ${appointment.appointmentTime?.slice(0, 5)}.`,
        time: "Live",
        action: "Open appointments",
      }));

    const partAlerts = (history.partRequests || [])
      .filter((request) => request.requestStatus === "Pending")
      .map((request) => ({
        id: `request-${request.partRequestID}`,
        type: "inventory",
        title: "Part Request Pending",
        msg: `${request.requestedPartName} is still awaiting staff review.`,
        time: "Live",
        action: "Track request",
      }));

    const creditAlert =
      history.creditBalance > 0
        ? [
            {
              id: "customer-credit",
              type: "financial",
              title: "Outstanding Credit Balance",
              msg: `Your current outstanding credit balance is $${Number(
                history.creditBalance,
              ).toLocaleString(undefined, { minimumFractionDigits: 2 })}.`,
              time: "Live",
              action: "View purchase history",
            },
          ]
        : [];

    return [...creditAlert, ...appointmentAlerts, ...partAlerts];
  };

  const loadNotifications = async () => {
    try {
      setLoading(true);
      setError("");
      setSuccess("");
      const liveNotifications = canTrigger
        ? await buildAdminNotifications()
        : await buildCustomerNotifications();
      setNotifications(liveNotifications);
    } catch (err) {
      setError(err.response?.data?.message || "Unable to load live notifications.");
      setNotifications([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNotifications();
  }, [role]);

  const filteredNotifications = useMemo(() => {
    if (activeTab === "All") return notifications;
    return notifications.filter((notification) => notification.type === activeTab.toLowerCase());
  }, [activeTab, notifications]);

  const handleTriggerNotifications = async () => {
    try {
      setTriggering(true);
      setError("");
      setSuccess("");
      const response = await reportService.triggerNotifications();
      setSuccess(response.data?.message || "Notification job triggered successfully.");
      await loadNotifications();
    } catch (err) {
      setError(err.response?.data?.message || "Unable to trigger notification job.");
    } finally {
      setTriggering(false);
    }
  };

  const Tab = ({ label }) => (
    <button
      onClick={() => setActiveTab(label)}
      className={`px-6 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-widest transition-all duration-300 ${
        activeTab === label
          ? "bg-blue-500 text-white shadow-header"
          : "bg-transparent text-text-muted hover:bg-slate-50"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="pb-10">
      <div className="bg-white rounded-xl shadow-material relative overflow-hidden mt-10 border border-slate-100">
        <div className="absolute top-0 left-0 right-0 min-h-16 rounded-t-xl flex items-center px-8 py-4 text-white shadow-header bg-dark-gradient">
          <div className="flex flex-col sm:flex-row justify-between w-full items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <Bell size={18} className="text-white/60" />
              <h4 className="m-0 text-base font-bold">
                Live Notification Center
              </h4>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={loadNotifications}
                className="px-4 py-1.5 rounded-lg bg-white/10 text-white text-[10px] font-extrabold uppercase tracking-widest hover:bg-white/20 transition-all border border-white/10 flex items-center gap-2"
              >
                <RefreshCw size={14} /> Refresh
              </button>
              {canTrigger && (
                <button
                  onClick={handleTriggerNotifications}
                  disabled={triggering}
                  className="px-4 py-1.5 rounded-lg bg-white/10 text-white text-[10px] font-extrabold uppercase tracking-widest hover:bg-white/20 transition-all border border-white/10 flex items-center gap-2 disabled:opacity-60"
                >
                  {triggering ? (
                    <Loader2 size={14} className="animate-spin" />
                  ) : (
                    <Send size={14} />
                  )}
                  Trigger Emails
                </button>
              )}
              <button className="px-4 py-1.5 rounded-lg bg-white/10 text-white text-[10px] font-extrabold uppercase tracking-widest hover:bg-white/20 transition-all border border-white/10 flex items-center gap-2">
                <Check size={14} /> Mark Read
              </button>
            </div>
          </div>
        </div>

        <div className="p-8 pt-28">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl text-red-800 text-xs font-bold flex gap-2 items-center">
              <AlertCircle size={16} className="shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-xl text-green-800 text-xs font-bold flex gap-2 items-center">
              <CheckCircle size={16} className="shrink-0" />
              <span>{success}</span>
            </div>
          )}

          <div className="flex flex-wrap gap-3 mb-8 border-b border-slate-100 pb-6">
            <Tab label="All" />
            <Tab label="Inventory" />
            <Tab label="Financial" />
            <Tab label="Service" />
          </div>

          {loading ? (
            <div className="text-center py-24">
              <Loader2 size={44} className="mx-auto text-blue-500 animate-spin mb-4" />
              <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                Loading live alerts...
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredNotifications.map((notification) => {
                const style = typeStyles[notification.type] || typeStyles.system;
                const Icon = style.icon;

                return (
                  <div
                    key={notification.id}
                    className="relative bg-white rounded-2xl border border-slate-100 p-6 flex gap-6 hover:shadow-material transition-all group overflow-hidden"
                  >
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1.5 group-hover:w-2 transition-all"
                      style={{ background: style.color }}
                    />
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-header shrink-0 group-hover:scale-110 transition-transform"
                      style={{ background: style.color }}
                    >
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h5 className="m-0 text-base font-extrabold text-text-main tracking-tight group-hover:text-blue-500 transition-colors">
                          {notification.title}
                        </h5>
                        <span className="text-xs font-extrabold text-text-muted uppercase tracking-widest">
                          {notification.time}
                        </span>
                      </div>
                      <p className="m-0 text-sm text-text-muted font-medium leading-relaxed mb-5">
                        {notification.msg}
                      </p>
                      <span className="px-5 py-2 rounded-xl bg-slate-50 border border-slate-100 text-[11px] font-extrabold uppercase tracking-widest text-text-main inline-flex items-center gap-2">
                        {notification.action}
                      </span>
                    </div>
                  </div>
                );
              })}

              {filteredNotifications.length === 0 && (
                <div className="text-center py-24 border-2 border-dashed border-slate-100 rounded-3xl">
                  <Bell size={64} className="mx-auto text-slate-100 mb-6" />
                  <p className="text-lg font-extrabold text-text-main tracking-tight m-0">
                    All System Logs Clear
                  </p>
                  <p className="text-sm font-medium text-text-muted mt-1">
                    No active {activeTab.toLowerCase()} alerts were returned by the backend.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
