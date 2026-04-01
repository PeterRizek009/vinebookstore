import { useState } from "react";
import { useStore } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { cart, total } = useStore();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", card: "", expiry: "", cvv: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const totalPrice = cart.reduce((a, b) => a + Number(b.price), 0);

  const handlePay = async () => {
    if (!form.name || !form.email || !form.card || !form.expiry || !form.cvv) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 2000)); // simulate payment
    setLoading(false);
    setSuccess(true);
  };

  if (success) return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="text-6xl mb-4">✅</div>
      <h2 className="text-2xl font-bold text-indigo-900 mb-2">Payment Successful!</h2>
      <p className="text-gray-400 text-sm mb-6">Thank you for your order 🎉</p>
      <button
        onClick={() => navigate("/")}
        className="bg-gray-900 hover:bg-green-700 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition"
      >
        Back to Home
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 px-10 py-12">

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-0.5 bg-red-500"></div>
          <span className="text-red-500 text-xs font-semibold uppercase tracking-widest">Checkout</span>
        </div>
        <h1 className="text-3xl font-bold text-indigo-900">Payment</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 max-w-4xl">

        {/* Form */}
        <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h3 className="text-base font-bold text-indigo-900 mb-6">Payment Details</h3>

          <div className="flex flex-col gap-4">
            {[
              { label: "Full Name", key: "name", placeholder: "John Doe" },
              { label: "Email", key: "email", placeholder: "john@email.com", type: "email" },
            ].map(({ label, key, placeholder, type }) => (
              <div key={key}>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">{label}</label>
                <input
                  type={type || "text"}
                  value={form[key]}
                  onChange={e => setForm({ ...form, [key]: e.target.value })}
                  placeholder={placeholder}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-indigo-300 transition"
                />
              </div>
            ))}

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">Card Number</label>
              <input
                type="text"
                value={form.card}
                onChange={e => setForm({ ...form, card: e.target.value })}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-indigo-300 transition"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Expiry</label>
                <input
                  type="text"
                  value={form.expiry}
                  onChange={e => setForm({ ...form, expiry: e.target.value })}
                  placeholder="MM/YY"
                  maxLength={5}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-indigo-300 transition"
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">CVV</label>
                <input
                  type="password"
                  value={form.cvv}
                  onChange={e => setForm({ ...form, cvv: e.target.value })}
                  placeholder="•••"
                  maxLength={3}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-indigo-300 transition"
                />
              </div>
            </div>
          </div>

          <button
            onClick={handlePay}
            disabled={loading}
            className="w-full mt-6 bg-gray-900 hover:bg-green-700 text-white text-sm font-medium py-3 rounded-lg transition-colors duration-200 disabled:opacity-50"
          >
            {loading ? "Processing..." : `Pay $${totalPrice}.00`}
          </button>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-72 shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-base font-bold text-indigo-900 mb-5">Order Summary</h3>
            <div className="flex flex-col gap-3 mb-4">
              {cart.map(book => (
                <div key={book.id} className="flex justify-between text-sm text-gray-500">
                  <span className="truncate max-w-[140px]">{book.title}</span>
                  <span className="font-medium text-gray-700">${book.price}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-100 pt-4">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-base font-bold text-indigo-900">
                <span>Total</span>
                <span>${totalPrice}.00</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Payment;