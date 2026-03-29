const Categories = () => {

  const categories = [
    {
      id: 1,
      title: "Technology",
      image: "images/tech.jpg"
    },
    {
      id: 2,
      title: "Management Books",
      image: "images/manage.jpg"
    },
    {
      id: 3,
      title: "Engineering Books",
      image: "images/engin.jpg"
    },
    {
      id: 4,
      title: "Science Books",
      image: "images/engin.jpg"
    }
  ];

  return (
    <div className="px-10 py-12">
      
      <h2 className="text-2xl font-bold mb-6">
        Explore our Top Categories
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white p-4 rounded-xl shadow text-center 
            hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer"
          >
            <img
              src={cat.image}
              className="rounded-lg mx-auto h-60 w-40 object-fit"
            />

            <h3 className="mt-3 font-semibold text-lg">
              {cat.title}
            </h3>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Categories;