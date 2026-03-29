 import { useStore } from "../../context/StoreContext";

 const Featured = () => {

    const { books } = useStore();


  return (
    <div className="grid md:grid-cols-2 items-center px-10 py-16">

      <img src={books[4]?.image} className="w-32 mx-auto shadow-lg" />

      <div>
        <h2 className="text-2xl font-bold">Featured Book</h2>
        <p className="mt-3 text-gray-600">
          Birds Gonna Be Happy
        </p>
        <p className="text-red-500 font-bold mt-2">$45.00</p>

        <button className="mt-4 border px-5 py-2 rounded-lg">
          View More →
        </button>
      </div>

    </div>
  );
};


export default Featured;