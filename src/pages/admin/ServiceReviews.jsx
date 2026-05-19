import React, { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  Loader2,
  MessageSquare,
  RefreshCw,
  Search,
  Star,
} from "lucide-react";
import { reviewService } from "../../services/api";

const ServiceReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const loadReviews = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await reviewService.getServiceReviews();
      setReviews(response.data || []);
    } catch (err) {
      setError(err.response?.data?.message || "Unable to load service reviews.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReviews();
  }, []);

  const filteredReviews = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return reviews;
    return reviews.filter(
      (review) =>
        review.customerName?.toLowerCase().includes(query) ||
        review.serviceType?.toLowerCase().includes(query) ||
        review.comment?.toLowerCase().includes(query) ||
        review.vehicleName?.toLowerCase().includes(query),
    );
  }, [reviews, searchTerm]);

  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(
          1,
        )
      : "—";

  return (
    <div className="pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
        <div>
          <h2 className="text-3xl font-extrabold text-[#111111] m-0 tracking-tighter leading-none font-oswald uppercase italic">
            Service <span className="text-[#fcd20b]">Reviews</span>
          </h2>
          <p className="text-[#7a7a7a] text-sm font-medium mt-2">
            Customer feedback on completed maintenance and service appointments.
          </p>
        </div>
        <button
          type="button"
          onClick={loadReviews}
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

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-3xl border border-black/5 p-6 shadow-sm">
          <p className="m-0 text-[10px] font-bold text-[#7a7a7a] uppercase tracking-widest">
            Total Reviews
          </p>
          <p className="m-0 mt-2 text-3xl font-black text-[#111111]">{reviews.length}</p>
        </div>
        <div className="bg-white rounded-3xl border border-black/5 p-6 shadow-sm">
          <p className="m-0 text-[10px] font-bold text-[#7a7a7a] uppercase tracking-widest">
            Average Rating
          </p>
          <p className="m-0 mt-2 text-3xl font-black text-[#111111] flex items-center gap-2">
            {averageRating} <Star size={24} className="text-[#fcd20b] fill-[#fcd20b]" />
          </p>
        </div>
        <div className="bg-white rounded-3xl border border-black/5 p-6 shadow-sm">
          <p className="m-0 text-[10px] font-bold text-[#7a7a7a] uppercase tracking-widest">
            Latest Feedback
          </p>
          <p className="m-0 mt-2 text-sm font-bold text-[#111111] truncate">
            {reviews[0]?.serviceType || "No reviews yet"}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-[30px] border border-black/5 shadow-xl p-6 mb-8">
        <div className="bg-[#f8f8f8] border border-black/5 rounded-2xl px-5 py-3.5 flex items-center gap-4">
          <Search size={18} className="text-[#7a7a7a]" />
          <input
            type="text"
            placeholder="Search by customer, service, vehicle, or comment..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="border-none outline-none w-full text-sm font-bold text-[#111111] bg-transparent"
          />
        </div>
      </div>

      {loading ? (
        <div className="py-24 text-center">
          <Loader2 size={48} className="mx-auto text-[#fcd20b] animate-spin mb-4" />
          <p className="text-xs font-black text-[#7a7a7a] uppercase tracking-widest">
            Loading service reviews...
          </p>
        </div>
      ) : filteredReviews.length === 0 ? (
        <div className="p-16 text-center bg-white rounded-3xl border border-black/5">
          <MessageSquare size={56} className="mx-auto text-black/10 mb-4" />
          <p className="text-[#7a7a7a] font-bold text-sm m-0">
            No service reviews found yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.reviewID}
              className="bg-white rounded-3xl border border-black/5 p-6 shadow-sm"
            >
              <div className="flex justify-between items-start gap-4 mb-4">
                <div>
                  <p className="m-0 text-sm font-black text-[#111111]">
                    {review.customerName}
                  </p>
                  <p className="m-0 text-xs text-[#7a7a7a] font-semibold mt-1">
                    {review.customerEmail || "—"}
                  </p>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      className={
                        star <= review.rating
                          ? "text-[#fcd20b] fill-[#fcd20b]"
                          : "text-slate-200"
                      }
                    />
                  ))}
                </div>
              </div>
              <p className="m-0 text-xs font-bold text-[#fcd20b] uppercase tracking-widest mb-2">
                {review.serviceType}
              </p>
              <p className="m-0 text-[10px] text-[#7a7a7a] font-semibold mb-3">
                {review.vehicleName || "Vehicle not specified"} ·{" "}
                {new Date(review.reviewDate).toLocaleDateString()}
              </p>
              <p className="m-0 text-sm text-[#111111] font-medium leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceReviews;
