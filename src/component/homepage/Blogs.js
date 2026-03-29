const Blog = () => {
  const blogs = [
    {
      title: "Learn about this week's top author",
      img: "/blog1.jpg"
    },
    {
      title: "Why we celebrate readers",
      img: "/blog2.jpg"
    },
    {
      title: "Toddlers can also read",
      img: "/blog3.jpg"
    },
    {
      title: "Jump started on your game",
      img: "/blog4.jpg"
    }
  ];

  return (
    <div className="px-10 py-16">
      
      <h2 className="text-center text-lg font-semibold mb-8">
        Read our many blogs
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {blogs.map((blog, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden group"
          >
            <img
              src={blog.img}
              className="w-full h-60 object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition flex flex-col justify-end p-4">
              
              <h3 className="text-white font-semibold">
                {blog.title}
              </h3>

              <button className="mt-3 w-fit border px-4 py-1 text-white rounded hover:bg-white hover:text-black transition">
                Read more
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Blog;