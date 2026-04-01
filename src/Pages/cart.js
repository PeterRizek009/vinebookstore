import { useStore } from "../context/StoreContext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {

  const { cart, removeFromCart } = useStore();
  const navigate = useNavigate();

  const total = cart.reduce((a, b) => a + Number(b.price), 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-indigo-900 mb-2">Your Cart is Empty</h2>
        <p className="text-gray-400 text-sm mb-6">Looks like you haven't added anything yet.</p>
        <Link to="/books" className="bg-gray-900 hover:bg-green-700 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition no-underline">
          Browse Books
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-10 py-12">

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-0.5 bg-red-500"></div>
          <span className="text-red-500 text-xs font-semibold uppercase tracking-widest">Your Cart</span>
        </div>
        <h1 className="text-3xl font-bold text-indigo-900">Shopping Cart</h1>
        <p className="text-gray-400 text-sm mt-1">{cart.length} item{cart.length !== 1 ? "s" : ""}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Cart Items */}
        <div className="flex-1 flex flex-col gap-4">
          {cart.map(book => (
            <div key={book.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex gap-4 items-center">

              {/* Image */}
              <img
                src={book.image}
                alt={book.title}
                className="w-20 h-28 object-contain rounded-lg bg-gray-50 p-1 shrink-0"
              />

              {/* Info */}
              <div className="flex-1 min-w-0">
                {book.categorry && (
                  <span className="text-xs text-green-700 bg-green-100 px-2 py-0.5 rounded-full font-medium">
                    {book.categorry}
                  </span>
                )}
                <h2 className="mt-1.5 text-sm font-semibold text-gray-900 truncate">
                  {book.title}
                </h2>
                <p className="text-green-600 font-bold text-sm mt-1">
                  ${book.price}
                </p>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeFromCart(book.id)}
                className="shrink-0 w-8 h-8 rounded-full hover:bg-red-50 flex items-center justify-center transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-300 hover:text-red-400 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-80 shrink-0">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sticky top-6">

            <h3 className="text-base font-bold text-indigo-900 mb-5">Order Summary</h3>

            <div className="flex flex-col gap-3 mb-5">
              {cart.map(book => (
                <div key={book.id} className="flex justify-between text-sm text-gray-500">
                  <span className="truncate max-w-[160px]">{book.title}</span>
                  <span className="font-medium text-gray-700">${book.price}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-4 mb-6">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Subtotal</span>
                <span className="text-gray-700 font-medium">${total}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
            </div>

            <div className="flex justify-between text-base font-bold text-indigo-900 mb-6">
              <span>Total</span>
              <span>${total}.00</span>
            </div>

            <button
              onClick={() => navigate("/payment")}
              className="w-full bg-gray-900 hover:bg-green-700 text-white text-sm font-medium py-3 rounded-lg transition-colors duration-200"
            >
              Checkout →
            </button>

            <Link to="/books" className="block text-center text-xs text-gray-400 hover:text-gray-600 mt-4 no-underline transition">
              ← Continue Shopping
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;