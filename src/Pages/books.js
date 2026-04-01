import { useState } from "react";
import { useStore } from "../context/StoreContext";
import { Link } from "react-router-dom";
import BookCard from './../component/BookCard';

const Books = () => {
    
  const { books } = useStore();
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const categories = ["All", ...new Set(books.map(b => b.categorry).filter(Boolean))];

  const filtered = books
    .filter(b => selectedCategory === "All" || b.categorry === selectedCategory)
    .filter(b => minPrice === "" || b.price >= Number(minPrice))
    .filter(b => maxPrice === "" || b.price <= Number(maxPrice))
    .sort((a, b) => {
      if (sort === "az") return a.title.localeCompare(b.title);
      if (sort === "za") return b.title.localeCompare(a.title);
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Breadcrumb */}
      <div className="bg-rose-50 py-4 px-10 text-xs font-semibold uppercase tracking-widest text-gray-500 text-center">
        HOME / PRODUCTS
      </div>

      <div className="flex px-10 py-10 gap-8">

        {/* Sidebar */}
        <div className="w-52 shrink-0">

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-gray-800">Price</h4>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <input
                type="number"
                placeholder="$"
                value={minPrice}
                onChange={e => setMinPrice(e.target.value)}
                className="w-full border border-gray-200 rounded px-2 py-1.5 text-xs outline-none"
              />
              <span className="text-gray-400 text-xs">to</span>
              <input
                type="number"
                placeholder="$"
                value={maxPrice}
                onChange={e => setMaxPrice(e.target.value)}
                className="w-full border border-gray-200 rounded px-2 py-1.5 text-xs outline-none"
              />
            </div>
            <button
              onClick={() => { setMinPrice(""); setMaxPrice(""); }}
              className="w-full bg-indigo-800 hover:bg-indigo-900 text-white text-xs font-medium py-2 rounded transition"
            >
              Reset
            </button>
          </div>

          <hr className="border-gray-100 mb-6" />

          {/* Categories */}
          <div>
            <h4 className="text-sm font-bold text-gray-800 mb-3">Category</h4>
            <div className="flex flex-col gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-left text-xs px-3 py-1.5 rounded-lg transition font-medium ${
                    selectedCategory === cat
                      ? "bg-indigo-800 text-white"
                      : "text-gray-500 hover:text-indigo-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Books */}
        <div className="flex-1">

          {/* Top Bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">Sort by:</span>
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="text-xs border border-gray-200 rounded px-3 py-1.5 outline-none text-gray-600"
              >
                <option value="default">Default</option>
                <option value="az">A - Z</option>
                <option value="za">Z - A</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </div>
            <span className="text-xs text-gray-400">
              Showing {filtered.length} of {books.length} results
            </span>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="text-5xl mb-4">📚</div>
              <p className="text-gray-400 text-sm">No books found</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {filtered.map(book => (
                <Link key={book.id} to={`/books/${book.id}`} className="no-underline">
                  <BookCard book={book} />
                </Link>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Books;