import React, { useState } from "react";
import {
  Settings as SettingsIcon,
  Globe,
  Bell,
  Lock,
  Palette,
  Smartphone,
  Mail,
  ShieldCheck,
  Database,
  Sliders,
  Moon,
  Sun,
  DollarSign,
  Layout,
  Key,
  LogOut,
  AlertTriangle,
  ShieldAlert,
  Monitor,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

const Settings = () => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const SectionHeader = ({ title, desc }) => (
    <div className="mb-8 border-b border-slate-100 pb-4">
      <h4 className="m-0 text-lg font-extrabold text-text-main tracking-tight">
        {title}
      </h4>
      <p className="m-0 text-sm font-medium text-text-muted mt-1">{desc}</p>
    </div>
  );

  const Toggle = ({ label, desc, checked }) => (
    <div className="flex justify-between items-center py-5 border-b border-slate-50 last:border-0 group cursor-pointer">
      <div>
        <p className="m-0 text-sm font-extrabold text-text-main tracking-tight group-hover:text-blue-500 transition-colors">
          {label}
        </p>
        <p className="m-0 text-[11px] font-medium text-text-muted uppercase tracking-widest mt-1">
          {desc}
        </p>
      </div>
      <div
        className={`w-12 h-6 rounded-full relative transition-all duration-300 ${checked ? "bg-blue-500 shadow-lg" : "bg-slate-200"}`}
      >
        <div
          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${checked ? "right-1" : "left-1 shadow-sm"}`}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="pb-16">
      <div className="bg-white rounded-xl shadow-material relative overflow-hidden mt-10 border border-slate-100">
        <div className="absolute top-0 left-0 right-0 h-16 rounded-t-xl flex items-center px-8 text-white shadow-header bg-dark-gradient">
          <div className="flex items-center gap-3">
            <SettingsIcon size={18} className="text-white/60" />
            <h4 className="m-0 text-base font-bold">Advanced System Control</h4>
          </div>
        </div>

        <div className="p-10 pt-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* COLUMN 1: Account & Security */}
          <div className="space-y-10">
            <div>
              <SectionHeader
                title="Security & Authentication"
                desc="Protect your account and manage access credentials."
              />

              {/* Change Password Section */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 shadow-sm border border-blue-100">
                      <Key size={20} />
                    </div>
                    <div>
                      <p className="m-0 text-sm font-extrabold text-text-main tracking-tight">
                        Access Credentials
                      </p>
                      <p className="m-0 text-[10px] font-extrabold text-text-muted uppercase tracking-widest mt-0.5">
                        Last updated 14 days ago
                      </p>
                    </div>
                  </div>
                  <button
                    className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 text-[10px] font-extrabold uppercase tracking-widest text-text-main hover:bg-white hover:shadow-sm transition-all"
                    onClick={() => setShowPasswordForm(!showPasswordForm)}
                  >
                    {showPasswordForm ? "Cancel" : "Update"}
                  </button>
                </div>

                {showPasswordForm && (
                  <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100 space-y-4 shadow-inner mb-6 animate-in slide-in-from-top-4 duration-300">
                    <input
                      type="password"
                      placeholder="Current Password"
                      className="w-full px-5 py-3 rounded-xl border border-slate-200 text-sm font-bold text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm transition-all"
                    />
                    <input
                      type="password"
                      placeholder="New Password"
                      className="w-full px-5 py-3 rounded-xl border border-slate-200 text-sm font-bold text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm transition-all"
                    />
                    <input
                      type="password"
                      placeholder="Confirm New Password"
                      className="w-full px-5 py-3 rounded-xl border border-slate-200 text-sm font-bold text-text-main outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm transition-all"
                    />
                    <button className="w-full py-3.5 rounded-xl bg-blue-500 text-white text-xs font-extrabold uppercase tracking-widest hover:bg-black shadow-header transition-all">
                      Sync Security Key
                    </button>
                  </div>
                )}
              </div>

              <Toggle
                label="Two-Factor Authentication"
                desc="Extra security layer via encrypted SMS/Push."
                checked={true}
              />
              <Toggle
                label="Biometric Recognition"
                desc="Secure entry via fingerprint or facial scan."
                checked={false}
              />

              <div className="mt-10">
                <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-[0.2em] mb-4">
                  Active System Nodes
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-4 bg-blue-50 border border-blue-100 rounded-2xl">
                    <div className="flex gap-4 items-center">
                      <Monitor size={20} className="text-blue-500" />
                      <div>
                        <p className="text-sm font-extrabold text-text-main tracking-tight m-0">
                          Chrome on Windows 11
                        </p>
                        <p className="text-[10px] text-blue-600 font-extrabold uppercase tracking-widest m-0 mt-0.5">
                          Primary Session
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
                    <div className="flex gap-4 items-center">
                      <Smartphone size={20} className="text-text-muted" />
                      <div>
                        <p className="text-sm font-extrabold text-text-main tracking-tight m-0">
                          iPhone 15 Pro Max
                        </p>
                        <p className="text-[10px] text-text-muted font-extrabold uppercase tracking-widest m-0 mt-0.5">
                          Last sync: 2 hours ago
                        </p>
                      </div>
                    </div>
                    <button className="text-[10px] font-extrabold text-red-500 uppercase tracking-widest hover:underline">
                      Revoke
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Preferences & System */}
          <div className="space-y-10">
            <div>
              <SectionHeader
                title="Environment & Analytics"
                desc="Configure workspace aesthetics and report cycles."
              />

              <div className="mb-10">
                <p className="text-[11px] font-extrabold text-text-muted uppercase tracking-[0.2em] mb-4">
                  Aesthetic Theme
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-2 border-blue-500 rounded-2xl p-6 flex flex-col items-center gap-2 bg-white shadow-material transition-all cursor-pointer">
                    <Sun size={24} className="text-blue-500" />
                    <p className="text-[11px] font-extrabold text-text-main uppercase tracking-widest m-0">
                      Light
                    </p>
                  </div>
                  <div className="border border-slate-100 rounded-2xl p-6 flex flex-col items-center gap-2 bg-dark-gradient text-white hover:border-blue-500 transition-all cursor-pointer">
                    <Moon size={24} />
                    <p className="text-[11px] font-extrabold uppercase tracking-widest m-0">
                      Dark
                    </p>
                  </div>
                </div>
              </div>

              <Toggle
                label="Inventory Predictive Alerts"
                desc="Auto-notify on low stock thresholds."
                checked={true}
              />
              <Toggle
                label="Weekly Fiscal Summary"
                desc="Generate automated P&L every Sunday."
                checked={false}
              />

              <div className="mt-12">
                <div className="bg-red-50 border border-red-100 rounded-3xl p-8 relative overflow-hidden group">
                  <div className="absolute -right-4 -bottom-4 text-red-100 opacity-20 group-hover:rotate-12 transition-transform duration-700">
                    <ShieldAlert size={120} />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-red-500 shadow-sm border border-red-100">
                        <AlertTriangle size={20} />
                      </div>
                      <h6 className="m-0 text-base font-extrabold text-red-900 tracking-tight leading-none">
                        Security Purge Zone
                      </h6>
                    </div>
                    <p className="m-0 text-sm text-red-800/70 font-medium leading-relaxed mb-6">
                      Initiating a system purge will permanently remove all
                      credentials and audit logs from the primary server node.
                      This cannot be undone.
                    </p>
                    <button className="w-full py-4 rounded-2xl bg-red-600 text-white text-xs font-extrabold uppercase tracking-widest hover:bg-black shadow-header transition-all transform active:scale-95">
                      Authorize Account Deletion
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
