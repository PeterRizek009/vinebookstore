import { useParams } from "react-router-dom";
import { useStore } from "../context/StoreContext";


const BookDetails = () => {

  const { id } = useParams();
  const { books, addToCart, addToWishlist } = useStore();
  const book = books.find(b => b.id === Number(id));

  if (!book) return (
    <div className="min-h-screen flex items-center justify-center text-gray-400">
      Book not found
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 px-10 py-16">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm p-12 flex flex-col md:flex-row gap-12 items-center">

        {/* Image */}
        <img
          src={book.image}
          alt={book.title}
          className="w-56 rounded-xl shadow-lg object-contain shrink-0"
        />

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-indigo-900 mb-3">Featured Book</h1>
          <div className="w-10 h-0.5 bg-red-400 mb-4"></div>

          {book.categorry && (
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              {book.categorry}
            </span>
          )}

          <h2 className="text-lg font-bold text-indigo-900 mt-2 mb-3">{book.title}</h2>

          <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-sm">
            Discover this amazing book from our collection. A must-read for every book lover.
          </p>

          <p className="text-red-500 font-bold text-2xl mb-6">$ {book.price}.00</p>

          <div className="flex gap-3">
            <button
              onClick={() => addToCart(book)}
              className="bg-gray-900 hover:bg-green-700 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-colors duration-200"
            >
              Add to Cart
            </button>
            <button
              onClick={() => addToWishlist(book)}
              className="border border-gray-200 hover:border-gray-400 text-gray-600 text-sm font-medium px-4 py-2.5 rounded-lg transition"
            >
              🤍 Wishlist
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookDetails;