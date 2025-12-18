import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const AdminStatistics = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch recent 3 donation requests for logged-in user
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/donation-requests`,
          {
            params: {
              email: user?.email,
              limit: 3,
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
  }, [user?.email]);

  // Status Change Handler (local state)
  const updateStatus = (id, newStatus) => {
    setRequests((prev) =>
      prev.map((req) => (req._id === id ? { ...req, status: newStatus } : req))
    );
    // Optional: update backend
    axios
      .patch(`${import.meta.env.VITE_API_URL}/donation-requests/${id}`, {
        status: newStatus,
      })
      .catch(console.error);
  };

  // Delete Donation Request
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

  // // Edit Donation Request
  // const handleEdit = (id) => {
  //   navigate(`/dashboard/edit-donation-request/${id}`);
  // };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        👋 Welcome, {user?.displayName}!
      </h1>

      <div className="bg-white shadow-md rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold mb-4">
          Your Recent Donation Requests
        </h2>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-gray-100">
                <th>#</th>
                <th>Recipient</th>
                <th>Blood</th>
                <th>Date</th>
                <th>Status</th>
                <th>Donor Info</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.slice(0, 3).map((req, idx) => (
                <tr key={req._id}>
                  <td>{idx + 1}</td>
                  <td className="font-semibold">{req.requesterName}</td>
                  <td>{req.bloodGroup}</td>
                  <td>{req.donationDate}</td>

                  {/* Status */}
                  <td>
                    {req.status === "pending" && (
                      <button
                        onClick={() => updateStatus(req._id, "inprogress")}
                        className="btn btn-warning btn-sm"
                      >
                        Pending → InProgress
                      </button>
                    )}
                    {req.status === "inprogress" && (
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => updateStatus(req._id, "done")}
                          className="btn btn-success btn-sm"
                        >
                          Mark as Done
                        </button>
                        <button
                          onClick={() => updateStatus(req._id, "canceled")}
                          className="btn btn-error btn-sm"
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                    {req.status === "done" && (
                      <span className="badge badge-success">Done</span>
                    )}
                    {req.status === "canceled" && (
                      <span className="badge badge-error">Canceled</span>
                    )}
                  </td>

                  {/* Donor Info */}
                  <td>
                    {req.status === "inprogress" && req.donor ? (
                      <div>
                        <p className="font-semibold">{req.donor.name}</p>
                        <p className="text-sm text-gray-600">
                          {req.donor.email}
                        </p>
                      </div>
                    ) : (
                      <span className="text-gray-400 italic">No donor yet</span>
                    )}
                  </td>

                  {/* Actions */}
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

          <div className="mt-5 text-center">
            <Link to="my-donation-request">
              <button className="btn btn-neutral">View My All Requests</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminStatistics;
