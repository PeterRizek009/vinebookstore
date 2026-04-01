import { useState } from "react";
import { useStore } from "../../context/StoreContext";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const { cart, wishlist, role } = useStore();
  const [search, setSearch] = useState("");
  const { user, signOut } = useAuth();

  return (
    <nav className="w-full font-sans overflow-x-hidden">
      {/* Bar 1 */}
      <div className="bg-black px-6 py-2 flex items-center justify-between">
        <span className="text-white text-xs tracking-wide">
          📞 +1 800 123 4567
        </span>
        <div className="flex items-center gap-4 text-white text-xs">
          {["f", "ig", "tw", "yt"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-white opacity-80 hover:opacity-100 transition"
            >
              {s}
            </a>
          ))}
        </div>
      </div>

      {/* Bar 2 */}
      <div className="bg-white px-6 py-2 flex items-center gap-4 border-b border-gray-100">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img src="/vine.svg" alt="Vine Bookstore" className="w-28 md:w-36" />
        </Link>

        {/* Search */}
        <div className="flex items-center flex-1 bg-gray-100 border border-gray-200 rounded px-3 py-2 gap-2 min-w-0">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Books"
            className="flex-1 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 min-w-0"
          />
          <span className="text-gray-400 text-sm shrink-0">🔍</span>
        </div>

        {/* Right Links */}
        <div className="shrink-0 flex items-center gap-1 text-xs font-bold tracking-widest text-gray-700">
          <div>
            {user ? (
              <div className="flex items-center gap-2">
                <img
                  src={user.user_metadata.avatar_url}
                  className="w-7 h-7 rounded-full"
                />
                <button onClick={signOut} className="text-xs text-red-500">
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login">👤 LOGIN</Link>
            )}
          </div>
          <span className="text-gray-300">|</span>
          {/* Cart */}
          <Link
            to="/cart"
            className="hover:text-indigo-800 transition p-1 flex items-center gap-1 no-underline text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span className="hidden md:inline text-xs">
              ({cart.length} — ${cart.reduce((a, b) => a + Number(b.price), 0)})
            </span>
            <span className="md:hidden text-xs">({cart.length})</span>
          </Link>

          <span className="text-gray-300 mx-1">|</span>
          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="hover:text-indigo-800 transition p-1 relative no-underline text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
              />
            </svg>
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Bar 3 */}
      <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-center overflow-x-auto">
        {[
          { label: "HOME", to: "/", active: true },
          { label: "ABOUT US", to: "/" },
          { label: "BOOKS", to: "/books" },
          { label: "NEW RELEASE", to: "/books" },
          { label: "CONTACT US", to: "/" },
          ...(role === "admin"
            ? [{ label: "DASHBOARD", to: "/dashboard" }]
            : []),
        ].map((item, i, arr) => (
          <span key={item.label} className="flex items-center shrink-0">
            <Link
              to={item.to}
              className={`px-4 md:px-7 text-xs font-bold tracking-widest transition hover:text-red-500 no-underline ${item.active ? "text-red-500" : "text-gray-800"}`}
            >
              {item.label}
            </Link>
            {i < arr.length - 1 && (
              <span className="text-gray-200 text-base">|</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
