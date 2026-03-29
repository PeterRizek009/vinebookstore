import { useState } from "react";
import { useStore } from "../../context/StoreContext";
import { Link } from "react-router-dom";

const Navbar = () => {

  const { cart, wishlist } = useStore();
  const [search, setSearch] = useState("");

  return (
    <nav className="w-full font-sans">

      
      <div className="bg-black px-12 py-2 flex items-center justify-between">
        <span className="text-white text-xs tracking-wide">
          📞 +1 800 123 4567
        </span>
        <div className="flex items-center gap-5 text-white text-xs">
          {["ⓕ", "ig", "tw", "b"].map(s => (
            <a key={s} href="#" className="text-white opacity-80 hover:opacity-100 transition">{s}</a>
          ))}
        </div>
      </div>

      {/* Bar 2 */}
      <div className="bg-white px-12 py-1 flex items-center gap-6 border-b border-gray-100">

        {/* Logo */}
        <Link to="/">
            <img src="/vine.svg" alt="Vine Bookstore" className="w-40" />
         
        </Link>

        {/* Search */}
        <div className="flex items-center flex-1 max-w-md bg-gray-100 border border-gray-200 rounded px-4 py-1 gap-2">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search Books"
            className="flex-1 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          />
          <span className="text-gray-400 text-sm">🔎︎</span>
        </div>

        {/* Right Links */}
        <div className="ml-auto flex items-center gap-2 text-xs font-bold tracking-widest text-gray-700">
          <Link to="/" className="flex items-center gap-1.5 hover:text-indigo-800 transition no-underline text-gray-700">
            👤 
          </Link>
          <span className="text-gray-300 mx-2">|</span>
          <Link to="/cart" className="flex items-center gap-1.5 hover:text-indigo-800 transition no-underline text-gray-700">
            🛍️ ({cart.length} — ${cart.reduce((a, b) => a + Number(b.price), 0)})
          </Link>
          <span className="text-gray-300 mx-2">|</span>
          <Link to="/wishlist" className="flex items-center gap-1.5 hover:text-indigo-800 transition no-underline text-gray-700">
            🤍 
          </Link>
        </div>
      </div>

      {/* Bar 3 */}
      <div className="bg-white border-b border-gray-100 px-12 py-3 flex items-center justify-center">
        {[
          { label: "HOME", to: "/", active: true },
          { label: "ABOUT US", to: "/" },
          { label: "BOOKS", to: "/" },
          { label: "NEW RELEASE", to: "/" },
          { label: "CONTACT US", to: "/" }
        
        ].map((item, i, arr) => (
          <span key={item.label} className="flex items-center">
            <Link
              to={item.to}
              className={`px-7 text-xs font-bold tracking-widest transition hover:text-red-500 no-underline ${item.active ? "text-red-500" : "text-gray-800"}`}
            >
              {item.label}
            </Link>
            {i < arr.length - 1 && <span className="text-gray-200 text-base">|</span>}
          </span>
        ))}
      </div>

    </nav>
  );
};

export default Navbar;