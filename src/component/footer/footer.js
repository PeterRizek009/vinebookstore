const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10 px-10 py-12">

      <div className="grid md:grid-cols-3 gap-10">

        {/* Logo + Description */}
        <div>
          <h2 className="text-xl font-bold mb-3 text-indigo-600">
            📚 BookStore
          </h2>

          <p className="text-gray-600 text-sm">
            Discover the best books from top authors and categories.
          </p>

          {/* Social */}
          <div className="flex gap-4 mt-4 text-red-500 text-lg">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-3 text-red-500">
            COMPANY
          </h3>

          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Books</li>
            <li>New Release</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Latest News */}
        <div>
          <h3 className="font-semibold mb-3 text-red-500">
            LATEST NEWS
          </h3>

          <div className="space-y-4">

            <div className="flex gap-3">
              <img src="/news1.jpg" className="w-14 h-14 rounded" />
              <div>
                <p className="text-sm font-semibold">
                  Nosturd exercitation
                </p>
                <p className="text-xs text-gray-500">
                  14 April 2022
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <img src="/news2.jpg" className="w-14 h-14 rounded" />
              <div>
                <p className="text-sm font-semibold">
                  Nosturd exercitation
                </p>
                <p className="text-xs text-gray-500">
                  14 April 2022
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 text-sm text-gray-500">
        <p>© 2026 BookStore. All Rights Reserved.</p>

        <div className="flex gap-4">
          <span className="cursor-pointer">Privacy</span>
          <span>|</span>
          <span className="cursor-pointer">Terms of Service</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;