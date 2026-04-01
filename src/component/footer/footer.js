import { Link } from "react-router-dom";

const Footer = () => {
  return (

    <footer className="bg-rose-50 px-12 pt-16 pb-8">

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

        {/* Col 1 - Logo + Description */}
        <div>
          <div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-4 shadow-sm">
            <img src="vine.png" alt="logo" className="w-16 h-16 object-contain" />
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
            Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[
              { label: "f", color: "bg-red-500" },
              { label: "in", color: "bg-red-500" },
              { label: "tw", color: "bg-red-500" },
              { label: "yt", color: "bg-red-500" },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                className={`${s.color} w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold hover:opacity-80 transition`}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 - Company Links */}
        <div>
          <h4 className="text-red-500 font-bold text-sm uppercase tracking-widest mb-5">Company</h4>
          <ul className="space-y-3">
            {["Home", "About Us", "Books", "Ebooks", "New Release", "Contact Us", "Blog"].map((item) => (
              <li key={item}>
                <Link
                  to="/"
                  className="text-gray-600 text-sm hover:text-red-500 transition no-underline"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 - Latest News */}
        <div>
          <h4 className="text-red-500 font-bold text-sm uppercase tracking-widest mb-5">Latest News</h4>
          <div className="space-y-5">
            {[1, 2].map((i) => (
              <div key={i} className="flex gap-3">
                <img
                  src={`images/news${i}.jpg`}
                  alt="news"
                  className="w-16 h-16 object-cover rounded-lg flex-shrink-0 bg-gray-200"
                />
                <div>
                  <h5 className="text-indigo-900 font-semibold text-sm hover:text-red-500 cursor-pointer transition">
                    Nostrud exercitation
                  </h5>
                  <p className="text-gray-400 text-xs leading-relaxed mt-1">
                    Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <span className="text-red-400 text-xs mt-1 block">15 April 2022</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-gray-400 text-xs">
          © 2024 Vine Bookstore. All Rights Reserved.
        </p>
        <div className="flex items-center gap-2 text-xs">
          <a href="#" className="text-red-500 hover:opacity-75 transition">Privacy</a>
          <span className="text-gray-300">|</span>
          <a href="#" className="text-gray-500 hover:text-red-500 transition">Terms of Service</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;