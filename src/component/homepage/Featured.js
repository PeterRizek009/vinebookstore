import { useStore } from "../../context/StoreContext";

const Featured = () => {
  const { books } = useStore();
  const book = books[2];

  if (!book) return null;

  return (
    <div className="mx-10 my-12 rounded-2xl bg-gray-50 flex flex-col md:flex-row items-center gap-12 px-16 py-14">

      {/* Image */}
      <div className="flex-shrink-0">
        <img
          src={book.image}
          alt={book.title}
          className="w-52 rounded-xl shadow-xl object-cover"
        />
      </div>

      {/* Content */}
      <div>
        <h2 className="text-3xl font-bold text-indigo-900 mb-3">Featured Book</h2>
        
        <div className="w-10 h-0.5 bg-red-400 mb-4"></div>

        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
          {book.categorry}
        </span>

        <h3 className="text-lg font-bold text-indigo-900 mt-2 mb-3">
          {book.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-sm">
          Discover this amazing book from our collection. A must-read for every book lover.
        </p>

        <p className="text-red-500 font-bold text-xl mb-6">
          $ {book.price}.00
        </p>

        <button className="border border-indigo-900 text-indigo-900 text-sm font-semibold px-6 py-2.5 hover:bg-indigo-900 hover:text-white transition-all duration-200">
          VIEW MORE →
        </button>
      </div>

    </div>
  );
};

export default Featured;