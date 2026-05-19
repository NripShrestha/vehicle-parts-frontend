import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Shield,
  Camera,
  CheckCircle,
  Star,
  Award,
  MapPin,
  Smartphone,
  Key,
  Loader2,
  AlertCircle,
  MessageSquare,
} from "lucide-react";
import { customerSelfServiceService } from "../../services/api";

const Profile = ({ user }) => {
  const [reviews, setReviews] = useState([]);
  const [profile, setProfile] = useState(null);
  const [profileForm, setProfileForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [profileSaving, setProfileSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  // Review form state
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const isCustomer = user?.role?.toLowerCase() === "customer";

  const fetchProfile = async () => {
    if (!isCustomer) return;
    try {
      const response = await customerSelfServiceService.getProfile();
      const nextProfile = response.data || {};
      setProfile(nextProfile);
      setProfileForm({
        fullName: nextProfile.fullName || "",
        email: nextProfile.email || "",
        phoneNumber: nextProfile.phoneNumber || "",
        address: nextProfile.address || "",
      });
    } catch (err) {
      console.error("Failed to load customer profile:", err);
    }
  };

  const fetchReviews = async () => {
    if (!isCustomer) return;
    try {
      setLoading(true);
      const response = await customerSelfServiceService.getReviews();
      setReviews(response.data || []);
    } catch (err) {
      console.error("Failed to load customer reviews:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
    fetchReviews();
  }, [user]);

  const handleProfileChange = (e) => {
    setProfileForm({ ...profileForm, [e.target.name]: e.target.value });
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      setProfileSaving(true);
      const response = await customerSelfServiceService.updateProfile(profileForm);
      const nextProfile = response.data;
      setProfile(nextProfile);
      setProfileForm({
        fullName: nextProfile.fullName || "",
        email: nextProfile.email || "",
        phoneNumber: nextProfile.phoneNumber || "",
        address: nextProfile.address || "",
      });
      const savedUser = JSON.parse(localStorage.getItem("user") || "{}");
      const nextUser = {
        ...savedUser,
        fullName: nextProfile.fullName,
        email: nextProfile.email,
        phoneNumber: nextProfile.phoneNumber,
        address: nextProfile.address,
      };
      localStorage.setItem("user", JSON.stringify(nextUser));
      setSuccess("Profile updated successfully.");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update profile.");
    } finally {
      setProfileSaving(false);
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!comment.trim()) {
      setError("Please write a comment for your review.");
      return;
    }

    try {
      setSubmitLoading(true);
      await customerSelfServiceService.submitReview({
        rating,
        comment: comment.trim(),
      });
      setSuccess("Thank you! Your feedback has been registered.");
      setComment("");
      setRating(5);
      
      // refresh reviews
      const response = await customerSelfServiceService.getReviews();
      setReviews(response.data || []);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit review.");
    } finally {
      setSubmitLoading(false);
    }
  };

  const displayUser = {
    ...user,
    ...profile,
  };

  const initials = displayUser?.fullName
    ? displayUser.fullName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "U";

  return (
    <div className="pb-10 font-sans">
      {/* Profile Header Card */}
      <div className="bg-white rounded-3xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] relative overflow-hidden mt-6 border border-slate-100">
        <div className="h-16 rounded-t-3xl flex items-center px-6 text-white shadow-header bg-slate-900">
          <div className="flex justify-between w-full items-center">
            <h4 className="m-0 text-sm font-black uppercase tracking-wider">
              Secure Operations Account
            </h4>
            <span className="text-[10px] font-black px-3.5 py-1 bg-white/20 rounded-md uppercase tracking-wider border border-white/10">
              Verified {user?.role || "USER"}
            </span>
          </div>
        </div>

        <div className="pt-8 px-6 pb-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
            {/* Left Sidebar Info */}
            <div className="flex flex-col items-center">
              <div className="relative w-36 mb-6">
                <div className="w-36 h-36 rounded-3xl bg-blue-600 flex items-center justify-center text-4xl font-black text-white shadow-lg shadow-blue-600/15">
                  {initials}
                </div>
                <button className="absolute -bottom-2 -right-2 w-9 h-9 rounded-xl bg-white flex items-center justify-center cursor-pointer shadow-md text-slate-500 hover:text-blue-600 transition-colors border border-slate-200">
                  <Camera size={18} />
                </button>
              </div>

              <div className="text-center mb-6">
                <h2 className="text-xl font-black m-0 mb-1 text-slate-800 tracking-tight leading-tight">
                  {displayUser?.fullName}
                </h2>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                  System {user?.role}
                </p>
                <div className="flex justify-center gap-2 mt-3">
                  <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded text-[9px] font-black text-slate-500 uppercase tracking-widest">
                    ACTIVE NODE
                  </span>
                </div>
              </div>

              <div className="w-full flex flex-col gap-4 border-t border-slate-100 pt-6">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                  Contact Coordinates
                </p>
                <div className="flex flex-col gap-3 text-xs font-semibold text-slate-600">
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-slate-400 shrink-0" />
                    <span className="truncate">{displayUser?.email}</span>
                  </div>
                  {displayUser?.phoneNumber && (
                    <div className="flex items-center gap-3">
                      <Smartphone size={16} className="text-slate-400 shrink-0" />
                      <span>{displayUser.phoneNumber}</span>
                    </div>
                  )}
                  {displayUser?.address && (
                    <div className="flex items-center gap-3">
                      <MapPin size={16} className="text-slate-400 shrink-0" />
                      <span className="truncate">{displayUser.address}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Detailed Content */}
            <div className="pt-2">
              {isCustomer ? (
                /* Customer Feedback & Reviews Sourced Live */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="md:col-span-2 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-2 mb-4">
                      <User size={18} className="text-blue-500" />
                      <h4 className="m-0 text-sm font-black text-slate-800 uppercase tracking-wider">
                        Customer Profile Details
                      </h4>
                    </div>

                    <form
                      onSubmit={handleProfileSubmit}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                          Full Name
                        </span>
                        <input
                          name="fullName"
                          value={profileForm.fullName}
                          onChange={handleProfileChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 text-xs font-bold text-slate-800 transition-all"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                          Email
                        </span>
                        <input
                          type="email"
                          name="email"
                          value={profileForm.email}
                          onChange={handleProfileChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 text-xs font-bold text-slate-800 transition-all"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                          Phone
                        </span>
                        <input
                          name="phoneNumber"
                          value={profileForm.phoneNumber}
                          onChange={handleProfileChange}
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 text-xs font-bold text-slate-800 transition-all"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                          Address
                        </span>
                        <input
                          name="address"
                          value={profileForm.address}
                          onChange={handleProfileChange}
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 text-xs font-bold text-slate-800 transition-all"
                        />
                      </div>
                      <div className="md:col-span-2 flex justify-end">
                        <button
                          type="submit"
                          disabled={profileSaving}
                          className="px-6 py-3 bg-slate-900 hover:bg-blue-600 text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all shadow-md disabled:opacity-75"
                        >
                          {profileSaving ? (
                            <div className="flex items-center gap-2">
                              <Loader2 size={14} className="animate-spin" />
                              Saving...
                            </div>
                          ) : (
                            "Save Profile"
                          )}
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Feedback Form */}
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-2 mb-4">
                      <MessageSquare size={18} className="text-blue-500" />
                      <h4 className="m-0 text-sm font-black text-slate-800 uppercase tracking-wider">
                        Submit Service Feedback
                      </h4>
                    </div>

                    {error && (
                      <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 rounded-r-xl text-red-800 text-xs font-bold flex gap-2 items-center">
                        <AlertCircle size={14} className="shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    {success && (
                      <div className="mb-4 p-3 bg-green-50 border-l-4 border-green-500 rounded-r-xl text-green-800 text-xs font-bold flex gap-2 items-center">
                        <CheckCircle size={14} className="shrink-0" />
                        <span>{success}</span>
                      </div>
                    )}

                    <form onSubmit={handleReviewSubmit} className="flex flex-col gap-4">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                          Rating Score
                        </span>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setRating(star)}
                              className="p-1 bg-transparent border-none outline-none cursor-pointer"
                            >
                              <Star
                                size={24}
                                className={
                                  star <= rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-slate-300"
                                }
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                          Comments / Suggestions
                        </span>
                        <textarea
                          placeholder="Tell us about your experience with our services, staff, or parts catalog..."
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 text-xs font-bold text-slate-800 h-24 resize-none transition-all"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={submitLoading}
                        className="w-full py-3 bg-slate-900 hover:bg-blue-600 text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all shadow-md disabled:opacity-75"
                      >
                        {submitLoading ? (
                          <div className="flex items-center justify-center gap-2">
                            <Loader2 size={14} className="animate-spin" />
                            Submitting...
                          </div>
                        ) : (
                          "Submit Review Log"
                        )}
                      </button>
                    </form>
                  </div>

                  {/* Reviews Ledger */}
                  <div>
                    <h4 className="text-sm font-black text-slate-800 m-0 mb-4 uppercase tracking-wider">
                      Feedback History Ledger
                    </h4>

                    {loading ? (
                      <div className="py-10 flex items-center justify-center">
                        <Loader2 size={24} className="text-blue-500 animate-spin" />
                      </div>
                    ) : reviews.length === 0 ? (
                      <div className="p-8 text-center bg-slate-50 border border-slate-100 rounded-2xl text-slate-400 text-xs font-bold">
                        No feedback logs submitted yet.
                      </div>
                    ) : (
                      <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto pr-1">
                        {reviews.map((rev) => (
                          <div
                            key={rev.reviewID}
                            className="p-4 bg-slate-50 border border-slate-100 rounded-2xl"
                          >
                            <div className="flex justify-between items-center mb-2">
                              <div className="flex gap-0.5">
                                {[1, 2, 3, 4, 5].map((s) => (
                                  <Star
                                    key={s}
                                    size={12}
                                    className={
                                      s <= rev.rating
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-slate-200"
                                    }
                                  />
                                ))}
                              </div>
                              <span className="text-[9px] text-slate-400 font-bold">
                                {new Date(rev.reviewDate).toLocaleDateString()}
                              </span>
                            </div>
                            <p className="m-0 text-xs font-semibold text-slate-700 leading-relaxed">
                              {rev.comment}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                /* Admin or Staff generic biography / credentials */
                <div className="mb-10">
                  <h4 className="text-lg font-extrabold text-slate-800 m-0 mb-4 border-b-2 border-blue-500 w-fit pb-1 tracking-tight">
                    Professional Statement
                  </h4>
                  <p className="text-[15px] text-slate-500 font-medium leading-relaxed m-0">
                    Logged in as system operator for the AutoParts selling operations node. Your security clearance is elevated.
                  </p>

                  <div className="mt-8 max-w-md">
                    <div>
                      <h4 className="text-sm font-black text-slate-800 m-0 mb-4 uppercase tracking-wider">
                        Credentials & Access
                      </h4>
                      <div className="flex flex-col gap-3">
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center">
                          <div className="flex gap-3 items-center">
                            <Smartphone size={16} className="text-slate-400" />
                            <span className="text-xs font-bold text-slate-700">
                              Two-Factor Authentication
                            </span>
                          </div>
                          <span className="text-[9px] font-black text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-100 uppercase tracking-widest">
                            ENABLED
                          </span>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center">
                          <div className="flex gap-3 items-center">
                            <Key size={16} className="text-slate-400" />
                            <span className="text-xs font-bold text-slate-700">
                              Hardware Security Key
                            </span>
                          </div>
                          <span className="text-[9px] font-bold text-slate-400">
                            14d ago
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
