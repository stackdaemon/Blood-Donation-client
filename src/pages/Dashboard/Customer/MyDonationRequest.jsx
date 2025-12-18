import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";

const MyDonationRequests = () => {
  const { user } = useAuth();
  const [requests, setRequests] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  // Pagination
  const [page, setPage] = useState(1);
  const [pageSize] = useState(); // items per page

  // Fetch donation requests for logged-in user
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/donation-requests`,
          {
            params: {
              email: user?.email,
              status: filter !== "all" ? filter : undefined,
              limit: pageSize,
            },
          }
        );
        setRequests(data);
      } catch (error) {
        console.error("Error fetching donation requests:", error);
      } finally {
        setLoading(false);
      }
    };
 

    if (user?.email) fetchRequests();
  }, [user?.email, filter, page, pageSize]);
    const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this donation request?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/donation-requests/${id}`
      );
      setRequests((prev) => prev.filter((req) => req._id !== id));
      toast.success('Delete Sucessful')
    } catch (err) {
      console.error("Error deleting donation request:", err);
    }
  };
  if (loading) return <p>Loading...</p>;
  console.log(requests);
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        My Donation Requests
      </h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {["all", "pending", "inprogress", "done", "canceled"].map((f) => (
          <button
            key={f}
            className={`btn btn-sm ${
              filter === f
                ? f === "all"
                  ? "btn-neutral"
                  : f === "pending"
                  ? "btn-warning"
                  : f === "inprogress"
                  ? "btn-primary"
                  : f === "done"
                  ? "btn-success"
                  : "btn-error"
                : ""
            }`}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Requests Table */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-gray-100">
                <th>#</th>
                <th>Recipient</th>
                <th>Blood</th>
                <th>Date</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((req, idx) => (
                <tr key={req._id}>
                  <td>{idx + 1}</td>
                  <td className="font-semibold">{req.recipientName}</td>
                  <td>{req.bloodGroup}</td>
                  <td>{req.donationDate}</td>
                  <td>
                    {req.status === "pending" && (
                      <span className="badge badge-warning">Pending</span>
                    )}
                    {req.status === "inprogress" && (
                      <span className="badge badge-primary">InProgress</span>
                    )}
                    {req.status === "done" && (
                      <span className="badge badge-success">Done</span>
                    )}
                    {req.status === "canceled" && (
                      <span className="badge badge-error">Canceled</span>
                    )}
                  </td>
                     <td className="flex gap-2">
                    {/* Details Button */}
                    <button
                      className="btn btn-info btn-sm"
                      onClick={() =>
                        navigate(
                          `/dashboard/manage-orders/donation-details/${req._id}`,
                          {
                            state: { mode: "view" },
                          }
                        )
                      }
                    >
                      Details
                    </button>

                    {/* Edit Button */}
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() =>
                        navigate(
                          `/dashboard/manage-orders/donation-details/${req._id}`,
                          {
                            state: { mode: "edit" },
                          }
                        )
                      }
                    >
                      Edit
                    </button>

                    {/* Delete Button */}
                    <button
                      className="btn btn-error btn-sm"
                      onClick={() => handleDelete(req._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination (simple example) */}
          <div className="flex justify-center mt-8 gap-2">
            <button
              className="btn btn-sm"
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
            >
              « Prev
            </button>
            <span className="btn btn-sm btn-disabled">{page}</span>
            <button
              className="btn btn-sm"
              onClick={() => setPage((p) => p + 1)}
            >
              Next »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDonationRequests;
