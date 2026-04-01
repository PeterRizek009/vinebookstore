// Ebook.jsx
const Ebook = () => {
  return (
    <div className="flex flex-col md:flex-row  my-12  overflow-hidden bg-rose-50">

      {/* Left Side */}
      <div className=" flex-1 p-12 flex flex-col justify-center">
        
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-0.5 bg-red-500"></div>
          <span className="text-red-500 text-xs font-semibold uppercase tracking-widest">ebook</span>
        </div>

        <h2 className="text-2xl font-bold text-indigo-900 leading-snug mb-4">
          Access, Read, Practice & Engage with Digital Content (eBook)
        </h2>

        <p className="text-indigo-400 text-sm leading-relaxed mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, 
          libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. 
          Amet, quis urna, a eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="flex">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="flex-1 px-5 py-3 text-sm text-gray-600 bg-white border border-gray-200 outline-none placeholder-gray-400"
          />
          <button className="bg-red-500 hover:bg-red-600 transition text-white font-semibold px-6 py-3 text-sm">
            Login
          </button>
        </div>

      </div>

      {/* Right Side - Image */}
      <div className="flex-1">
        <img
          src="images/ebook.jpg"
          alt="ebook"
          className="w-full h-full object-cover "
        />
      </div>

    </div>
  );
};

export default Ebook;