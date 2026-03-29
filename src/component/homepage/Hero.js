const Hero = () => {
  return (
    <div className="relative h-[90vh] w-full">

      {/* Background Image */}
      <img
        src="images/hero.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />

      {/* Overlay (عشان النص يبان) */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-10">
        <div className="max-w-xl text-white">
          
          <h1 className="text-4xl md:text-5xl font-bold">
            Welcome to Vine Bookstore
          </h1>

          <p className="mt-4 text-gray-200">
            Discover amazing books and explore new worlds.
          </p>

          <button className="mt-6 px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition">
            Read More →
          </button>

        </div>
      </div>

    </div>
  );
};

export default Hero;