import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from './../Supabase';


const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // جيب الكتب من Supabase
  useEffect(() => {
    const fetchBooks = async () => {
      const { data, error } = await supabase
        .from("books")
        .select("*");

      if (error) {
        console.log("Error:", error);
        return;
      }

      setBooks(data);
    };

    fetchBooks();
  }, []);

  console.log(books);

  // 🛒 Cart
  const addToCart = (book) => {
    setCart((prev) => [...prev, book]);
  };

  // ❤️ Wishlist
  const addToWishlist = (book) => {
    setWishlist((prev) => [...prev, book]);
  };

  return (
    <StoreContext.Provider
      value={{
        books,
        cart,
        wishlist,
        addToCart,
        addToWishlist,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);




