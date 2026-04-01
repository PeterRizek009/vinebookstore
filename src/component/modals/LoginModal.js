// LoginModal.jsx
import { Link } from "react-router-dom";

const LoginModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-96 shadow-xl">

        {/* Icon */}
        <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center mx-auto mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-indigo-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>

        <h2 className="text-xl font-bold text-indigo-900 text-center mb-1">Login Required</h2>
        <p className="text-gray-400 text-sm text-center mb-7">
          Please login to add books to your cart or wishlist.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            to="/login"
            onClick={onClose}
            className="w-full bg-gray-900 hover:bg-green-700 text-white text-sm font-medium py-2.5 rounded-lg transition no-underline text-center block"
          >
            Login / Sign Up
          </Link>
          <button
            onClick={onClose}
            className="w-full border border-gray-200 text-gray-500 text-sm py-2.5 rounded-lg hover:bg-gray-50 transition"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
};

export default LoginModal;