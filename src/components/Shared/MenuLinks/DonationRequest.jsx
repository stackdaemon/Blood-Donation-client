import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


const DonationRequest = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [requests, setRequests] = useState([]);
  const [results, setResults] = useState([]); // initially all requests
  const [loading, setLoading] = useState(false);

  // Fetch pending donation requests
  useEffect(() => {
    const fetchRequests = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/donation-requests?status=pending`
        );
        setRequests(res.data);
        setResults(res.data); // Initially show all pending requests
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);
console.log(results)
  // Handle View button click
  const handleView = (id) => {
    if (!user) {
      navigate("/login"); // Redirect if not logged in
    } else {
      navigate(`/dashboard/donation-request/${id}`); // Private details page
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading donation requests...</p>;
  }

  if (!results.length) {
    return <p className="text-center mt-10">No pending donation requests found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Pending Donation Requests</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((req) => (
          <div
            key={req._id}
            className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{req.recipientName}</h2>
            <p className="mb-1">
              <strong>Location:</strong> {req?.recipientUpazila}, {req?.fullAddress}
            </p>
            <p className="mb-1">
              <strong>Blood Group:</strong> {req.bloodGroup}
            </p>
            <p className="mb-1">
              <strong>Hospital:</strong> {req.hospitalName}
            </p>
            <p className="mb-1">
              <strong>Date:</strong> {req.donationDate} | <strong>Time:</strong> {req.donationTime}
            </p>
            <p className="mb-3">
              <strong>Message:</strong> {req.requestMessage}
            </p>
            <button
              onClick={() => handleView(req._id)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md w-full"
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationRequest;
