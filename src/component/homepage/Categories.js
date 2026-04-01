import SectionHeader from "../SectionHeader";
import { useStore } from "../../context/StoreContext";

const Categories = () => {

   const { books } = useStore();

  

  return (
    <div className="px-10 py-12">
      
      <SectionHeader badge="Categories" title="Explore Our Top Categories" />


      <div className="grid md:grid-cols-4 gap-6">

        {books.slice(2, 6).map((cat) => (
          <div
            key={cat.id}
            className="bg-white p-4 rounded-xl shadow text-center 
            hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer"
          >
            <img
              src={cat.image}
              className="rounded-lg mx-auto h-60 w-40 object-fit"
            />

            <h3 className="mt-3 font-semibold  tracking-widest text-gray-900">
              {cat.categorry}
            </h3>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Categories;