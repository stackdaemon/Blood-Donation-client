import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const Funding = () => {
  const { user } = useAuth();

  const [funds, setFunds] = useState([]);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(true);

  // 🔹 Load funding history
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/funds`)
      .then((res) => {
        setFunds(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // 🔹 Stripe redirect
  const handleGiveFund = async () => {
    if (!amount || amount < 1) {
      toast.error("Please enter a valid amount");
      return;
    }

    const paymentInfo = {
      amount: Number(amount),
      user: {
        name: user?.displayName,
        email: user?.email,
      },
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/create-checkout-session`,
        paymentInfo
      );

      // ✅ Redirect to Stripe checkout
      window.location.href = data.url;
    } catch (error) {
      console.error(error);
      toast.error("Payment failed");
    }
  };

  const totalFund = funds.reduce((sum, item) => sum + item.amount, 0);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-red-50 px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-3xl shadow-lg">

        {/* 🔹 Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <h2 className="text-3xl font-bold text-red-700">
            Funding History
          </h2>

          <div className="flex gap-3">
            <input
              type="number"
              placeholder="Enter amount (USD)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border px-4 py-2 rounded-xl w-48"
            />

            <button
              onClick={handleGiveFund}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl font-semibold"
            >
              Give Fund
            </button>
          </div>
        </div>

        {/* 🔹 Table */}
        {funds.length === 0 ? (
          <p className="text-center text-gray-500">
            No funding history found
          </p>
        ) : (
          <div className="overflow-x-auto rounded-xl shadow">
            <table className="w-full text-left">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="px-6 py-3">Donor Name</th>
                  <th className="px-6 py-3">Amount</th>
                  <th className="px-6 py-3">Date</th>
                </tr>
              </thead>

              <tbody>
                {funds.map((fund, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-red-50 transition"
                  >
                    <td className="px-6 py-4 font-medium">
                      {fund.name}
                    </td>
                    <td className="px-6 py-4 font-semibold text-red-700">
                      $ {fund.amount}
                    </td>
                    <td className="px-6 py-4">
                      {new Date(fund.date).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* 🔹 Total Fund */}
        <div className="mt-6 bg-red-100 p-4 rounded-xl text-center">
          <h3 className="text-xl font-bold text-red-700">
            Total Funds Collected: $ {totalFund}
          </h3>
        </div>

      </div>
    </div>
  );
};

export default Funding;
