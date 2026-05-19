import React, { useState } from "react";
import {
  User,
  Lock,
  Mail,
  ChevronRight,
  ArrowLeft,
  ShieldCheck,
  UserPlus,
  Car,
  Settings,
  Phone,
  MapPin,
  Package,
  Sparkles,
} from "lucide-react";
import { authService } from "../services/api";

const Auth = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgot, setIsForgot] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Form states
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (isLogin) {
        const response = await authService.login({
          email: formData.email,
          password: formData.password,
        });

        const { token, user } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        onLogin(user);
      } else {
        await authService.register(formData);
        setIsLogin(true);
        setError("Registration successful! Please login.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.response?.data ||
          "An error occurred. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (isForgot) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#111111] p-6 font-roboto">
        <div className="max-w-md w-full bg-white rounded-[30px] p-12 shadow-2xl animate-xtra">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-[#fcd20b] rounded-3xl flex items-center justify-center text-[#111111] mx-auto mb-6 shadow-lg shadow-[#fcd20b]/20">
              <Lock size={36} />
            </div>
            <h2 className="text-3xl font-bold text-[#111111] font-oswald italic uppercase">
              RESTORE <span className="text-[#fcd20b]">ACCESS</span>
            </h2>
            <p className="text-[#7a7a7a] text-sm mt-3 font-medium">
              Verify your email to reset security credentials.
            </p>
          </div>

          <div className="mb-8">
            <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] mb-3 block ml-1 font-oswald">
              Email Identification
            </label>
            <div className="relative">
              <Mail
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#111111]/40"
                size={20}
              />
              <input
                type="email"
                placeholder="OPERATOR@SYSTEM.COM"
                className="w-full pl-14 pr-6 py-4 bg-[#f8f8f8] border-2 border-transparent rounded-2xl outline-none focus:border-[#fcd20b] focus:bg-white transition-all font-bold text-[#111111]"
              />
            </div>
          </div>

          <button className="w-full bg-[#111111] hover:bg-[#fcd20b] hover:text-[#111111] text-[#fcd20b] py-5 rounded-full font-oswald font-bold uppercase tracking-widest transition-all shadow-xl shadow-black/10">
            SEND RECOVERY LINK
          </button>

          <button
            onClick={() => setIsForgot(false)}
            className="w-full mt-8 bg-transparent border-none text-[#7a7a7a] flex items-center justify-center gap-2 cursor-pointer text-[10px] font-bold uppercase tracking-widest hover:text-[#111111] transition-colors"
          >
            <ArrowLeft size={16} /> RETURN TO GATEWAY
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-[#111111] font-roboto overflow-hidden">
      {/* Left Visual Panel - Cinematic Automotive Look */}
      <div className="hidden lg:flex flex-1 relative px-20 flex-col justify-center text-white border-r border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Car"
            className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]/80" />
        </div>

        <div className="relative z-10 max-w-xl animate-xtra">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-16 h-16 bg-[#fcd20b] rounded-[20px] flex items-center justify-center text-[#111111] shadow-2xl shadow-[#fcd20b]/30 transform -rotate-3">
              <Package size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold font-oswald italic tracking-tighter m-0 uppercase leading-none">
                VEHICLE <span className="text-[#fcd20b]">PARTS</span>
              </h1>
              <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] m-0 mt-1">
                Management Engine v8.0
              </p>
            </div>
          </div>

          <h2 className="text-6xl font-bold font-oswald uppercase leading-[0.95] tracking-tighter mb-8 italic">
            DOMINATE YOUR <br />
            <span className="text-[#fcd20b] text-7xl">OPERATIONS.</span>
          </h2>

          <p className="text-lg text-white/60 font-medium leading-relaxed mb-12 max-w-md">
            The world's most aggressive platform for inventory synchronization,
            staff performance, and financial intelligence.
          </p>

          <div className="grid grid-cols-2 gap-12">
            <div className="flex items-start gap-5">
              <div className="mt-1 p-3 bg-[#fcd20b]/10 rounded-2xl border border-[#fcd20b]/20 text-[#fcd20b]">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold font-oswald uppercase tracking-tighter mb-1">
                  ENCRYPTED
                </h4>
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                  Enterprise Security
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="mt-1 p-3 bg-white/5 rounded-2xl border border-white/10 text-white">
                <Sparkles size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold font-oswald uppercase tracking-tighter mb-1">
                  REAL-TIME
                </h4>
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                  Instant Processing
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Status Indicator */}
        <div
          className="absolute bottom-12 left-12 right-12 flex items-center gap-8 animate-xtra"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full border-4 border-[#111111] bg-[#222222] overflow-hidden ring-1 ring-white/10"
              >
                <img
                  src={`https://i.pravatar.cc/150?u=automotive${i}`}
                  alt="Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div>
            <p className="text-xs font-bold text-white m-0">
              942+ ACTIVE OPERATORS
            </p>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest m-0">
                Synchronized Across 4 Nodes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Auth Form Panel */}
      <div className="flex-1 flex items-center justify-center p-8 bg-[#111111]">
        <div className="max-w-md w-full bg-white rounded-[40px] p-12 lg:p-14 shadow-2xl animate-xtra">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-[#111111] mb-2 tracking-tighter font-oswald italic uppercase">
              <span
                dangerouslySetInnerHTML={{
                  __html: isLogin
                    ? 'SYSTEM <span class="text-[#fcd20b]">LOGIN</span>'
                    : 'CREATE <span class="text-[#fcd20b]">IDENTITY</span>',
                }}
              />
            </h2>
            <div className="h-1.5 w-12 bg-[#fcd20b] mx-auto rounded-full mt-4"></div>
          </div>

          {error && (
            <div className="mb-8 p-5 bg-rose-50 border-l-4 border-rose-500 text-rose-800 text-xs font-bold rounded-r-2xl animate-xtra">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald">
Real Name                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-[#111111]/30"
                      size={18}
                    />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="FULL NAME"
                      className="w-full pl-14 pr-6 py-4 bg-[#f8f8f8] border-2 border-transparent rounded-2xl outline-none focus:border-[#fcd20b] focus:bg-white transition-all font-bold text-[#111111]"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald">
Phone Number                    </label>
                    <div className="relative">
                      <Phone
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-[#111111]/30"
                        size={18}
                      />
                      <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="PHONE"
                        className="w-full pl-14 pr-6 py-4 bg-[#f8f8f8] border-2 border-transparent rounded-2xl outline-none focus:border-[#fcd20b] focus:bg-white transition-all font-bold text-[#111111]"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald">
                      Location
                    </label>
                    <div className="relative">
                      <MapPin
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-[#111111]/30"
                        size={18}
                      />
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="CITY"
                        className="w-full pl-14 pr-6 py-4 bg-[#f8f8f8] border-2 border-transparent rounded-2xl outline-none focus:border-[#fcd20b] focus:bg-white transition-all font-bold text-[#111111]"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald">
                Enail
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-[#111111]/30"
                  size={18}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="USER@DOMAIN.COM"
                  className="w-full pl-14 pr-6 py-4 bg-[#f8f8f8] border-2 border-transparent rounded-2xl outline-none focus:border-[#fcd20b] focus:bg-white transition-all font-bold text-[#111111]"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] font-oswald">
                  Password
                </label>
                {isLogin && (
                  <button
                    type="button"
                    onClick={() => setIsForgot(true)}
                    className="border-none background-transparent text-[#fcd20b] bg-[#111111] px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-black transition-colors"
                  >
                    Lost Key?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-[#111111]/30"
                  size={18}
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-14 pr-6 py-4 bg-[#f8f8f8] border-2 border-transparent rounded-2xl outline-none focus:border-[#fcd20b] focus:bg-white transition-all font-bold text-[#111111]"
                  required
                />
              </div>
            </div>

            <button
              disabled={loading}
              className={`w-full bg-[#111111] hover:bg-black text-[#fcd20b] py-5 rounded-full font-oswald font-bold uppercase tracking-[0.2em] transition-all shadow-2xl flex items-center justify-center gap-4 group ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-[#fcd20b]/30 border-t-[#fcd20b] rounded-full animate-spin" />
              ) : (
                <>
                  {isLogin ? "AUTHENTICATE" : "INITIALIZE"}
                  <ChevronRight
                    size={18}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </>
              )}
            </button>
          </form>

          <p className="text-center mt-10 text-[11px] font-bold text-[#7a7a7a] uppercase tracking-widest font-oswald">
            {isLogin ? "NEW TO THE CORE?" : "RECOGNIZED OPERATOR?"}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
              }}
              className="ml-2 text-[#111111] font-black border-b-2 border-[#fcd20b] hover:text-[#fcd20b] transition-all"
            >
              {isLogin ? "CREATE PROFILE" : "GATEWAY LOGIN"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
