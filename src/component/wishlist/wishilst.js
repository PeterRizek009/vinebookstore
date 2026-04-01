// Wishlist.jsx
import { useStore } from "../../context/StoreContext";

const WishlistCard = ({ book }) => {
  const { removeFromWishlist, addToCart } = useStore();

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
          onClick={() => removeFromWishlist(book.id)}
          className="absolute top-2 right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:scale-110 transition text-sm"
        >
          ❤️
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

const Wishlist = () => {
  const { wishlist } = useStore();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="text-6xl mb-4">🤍</div>
        <h2 className="text-2xl font-bold text-indigo-900 mb-2">Your Wishlist is Empty</h2>
        <p className="text-gray-400 text-sm">Add books you love to your wishlist and find them here.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-10 py-12">

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-0.5 bg-red-500"></div>
          <span className="text-red-500 text-xs font-semibold uppercase tracking-widest">Your List</span>
        </div>
        <h1 className="text-3xl font-bold text-indigo-900">Wishlist</h1>
        <p className="text-gray-400 text-sm mt-1">
          {wishlist.length} book{wishlist.length !== 1 ? "s" : ""} saved
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {wishlist.map(book => (
          <WishlistCard key={book.id} book={book} />
        ))}
      </div>

    </div>
  );
};

export default Wishlist;