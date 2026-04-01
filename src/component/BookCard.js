import { useStore } from "../context/StoreContext";

const BookCard = ({ book }) => {

  const { addToCart, addToWishlist } = useStore();

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 tracking-widest">
      
      {/* Image */}
      <div className="relative">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-60 object-contain p-2"
        />
        <button
          onClick={() => addToWishlist(book)}
          className="absolute top-2 right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:scale-110 transition text-sm"
        >
          🤍
        </button>
      </div>

      {/* Content */}
      <div className="p-3">
        {book.categorry && (
          <span className="text-xs text-green-700 bg-green-100 px-2 py-0.5 rounded-full font-medium">
            {book.categorry}
          </span>
        )}

        <h2 className="mt-1.5 text-sm font-semibold text-gray-900 truncate">
          {book.title}
        </h2>

        <p className="text-green-600 font-bold text-sm mt-0.5 mb-3">
          ${book.price}
        </p>

        <button
          onClick={() => addToCart(book)}
          className="w-32 bg-gray-900 hover:bg-green-700 text-white text-xs font-medium py-2 rounded-lg transition-colors duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookCard;