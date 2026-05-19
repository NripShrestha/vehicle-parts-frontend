import React, { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  MessageSquare,
  Star,
  Wrench,
} from "lucide-react";
import { customerSelfServiceService } from "../../services/api";

const ServiceReviews = () => {
  const [appointments, setAppointments] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [selectedAppointmentId, setSelectedAppointmentId] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const loadData = async () => {
    try {
      setLoading(true);
      setError("");
      const [appointmentsRes, reviewsRes] = await Promise.all([
        customerSelfServiceService.getAppointments(),
        customerSelfServiceService.getReviews(),
      ]);
      setAppointments(appointmentsRes.data || []);
      setReviews(reviewsRes.data || []);
    } catch (err) {
      setError(err.response?.data?.message || "Unable to load service data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const reviewedAppointmentIds = useMemo(
    () =>
      new Set(
        reviews
          .filter((review) => review.appointmentID)
          .map((review) => review.appointmentID),
      ),
    [reviews],
  );

  const reviewableAppointments = useMemo(
    () =>
      appointments.filter(
        (appointment) =>
          appointment.appointmentStatus === "Completed" &&
          !reviewedAppointmentIds.has(appointment.appointmentID),
      ),
    [appointments, reviewedAppointmentIds],
  );

  const serviceReviews = useMemo(
    () => reviews.filter((review) => review.appointmentID),
    [reviews],
  );

  useEffect(() => {
    if (reviewableAppointments.length > 0 && !selectedAppointmentId) {
      setSelectedAppointmentId(
        String(reviewableAppointments[0].appointmentID),
      );
    }
  }, [reviewableAppointments, selectedAppointmentId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!selectedAppointmentId) {
      setError("Select a completed service to review.");
      return;
    }
    if (!comment.trim()) {
      setError("Please write your service feedback.");
      return;
    }

    try {
      setSubmitting(true);
      await customerSelfServiceService.submitReview({
        appointmentID: parseInt(selectedAppointmentId, 10),
        rating,
        comment: comment.trim(),
      });
      setSuccess("Thank you! Your service review has been submitted.");
      setComment("");
      setRating(5);
      await loadData();
    } catch (err) {
      setError(err.response?.data?.message || "Unable to submit service review.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <Loader2 size={40} className="text-blue-500 animate-spin" />
        <p className="text-slate-500 font-bold text-sm uppercase tracking-widest animate-pulse">
          Loading service reviews...
        </p>
      </div>
    );
  }

  return (
    <div className="pb-10 font-sans">
      <div className="mb-10">
        <h2 className="text-3xl font-black text-slate-800 m-0 tracking-tight leading-none">
          Service Reviews
        </h2>
        <p className="text-slate-500 text-sm mt-2 font-medium">
          Rate completed maintenance and service appointments.
        </p>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
          <h4 className="m-0 text-lg font-black text-slate-800 mb-6 flex items-center gap-2">
            <MessageSquare size={20} className="text-blue-500" />
            Submit a Review
          </h4>

          {reviewableAppointments.length === 0 ? (
            <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-100">
              <Wrench size={40} className="mx-auto text-slate-300 mb-3" />
              <p className="m-0 text-sm font-bold text-slate-500 leading-relaxed">
                No completed services are waiting for review. Once staff marks
                your appointment as completed, you can leave feedback here.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                  Completed Service
                </label>
                <select
                  value={selectedAppointmentId}
                  onChange={(event) => setSelectedAppointmentId(event.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold outline-none focus:border-blue-500"
                >
                  {reviewableAppointments.map((appointment) => (
                    <option
                      key={appointment.appointmentID}
                      value={appointment.appointmentID}
                    >
                      {appointment.serviceType} · {appointment.vehicleName} ·{" "}
                      {new Date(appointment.appointmentDate).toLocaleDateString()}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                  Rating
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1 bg-transparent border-none outline-none cursor-pointer"
                    >
                      <Star
                        size={28}
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
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                  Your Feedback
                </label>
                <textarea
                  value={comment}
                  onChange={(event) => setComment(event.target.value)}
                  rows={4}
                  placeholder="Describe the quality of service, timeliness, and staff support..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="py-4 bg-slate-900 hover:bg-blue-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Submitting...
                  </>
                ) : (
                  "Submit Service Review"
                )}
              </button>
            </form>
          )}
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
          <h4 className="m-0 text-lg font-black text-slate-800 mb-6">
            Your Submitted Reviews
          </h4>
          {serviceReviews.length === 0 ? (
            <p className="text-sm font-bold text-slate-400 m-0">
              You have not submitted any service reviews yet.
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {serviceReviews.map((review) => (
                <div
                  key={review.reviewID}
                  className="p-4 bg-slate-50 rounded-2xl border border-slate-100"
                >
                  <div className="flex justify-between items-start gap-3 mb-2">
                    <p className="m-0 text-sm font-black text-slate-800">
                      {review.serviceType}
                    </p>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={12}
                          className={
                            star <= review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-slate-200"
                          }
                        />
                      ))}
                    </div>
                  </div>
                  <p className="m-0 text-[10px] text-slate-400 font-bold mb-2">
                    {review.vehicleName} ·{" "}
                    {new Date(review.reviewDate).toLocaleDateString()}
                  </p>
                  <p className="m-0 text-sm text-slate-600 font-medium leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceReviews;
