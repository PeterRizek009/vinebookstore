import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../Supabase";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [role, setRole] = useState(null);

  // تابع الـ user
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      },
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  // جيب الكتب
  useEffect(() => {
    const fetchBooks = async () => {
      const { data } = await supabase.from("books").select("*");
      if (data) setBooks(data);
    };
    fetchBooks();
  }, []);

  // جيب cart و wishlist لما الـ user يتغير
  useEffect(() => {
    if (!user) {
      setCart([]);
      setWishlist([]);
      return;
    }

    const fetchUserBooks = async () => {
      const { data } = await supabase
        .from("user_books")
        .select("*, books(*)")
        .eq("user_id", user.id);

      if (data) {
        setCart(data.filter((i) => i.type === "cart").map((i) => i.books));
        setWishlist(
          data.filter((i) => i.type === "wishlist").map((i) => i.books),
        );
      }
    };

    fetchUserBooks();
  }, [user]);

  useEffect(() => {
    if (!user) {
      setRole(null);
      return;
    }

    const fetchRole = async () => {
      const { data } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (data) setRole(data.role);
    };

    fetchRole();
  }, [user]);

  // إضافة للـ Cart
  const addToCart = async (book) => {
    if (!user) return setShowLoginModal(true);

    await supabase.from("user_books").upsert({
      user_id: user.id,
      book_id: book.id,
      type: "cart",
    });

    setCart((prev) => [...prev.filter((b) => b.id !== book.id), book]);
  };

  // إضافة للـ Wishlist
  const addToWishlist = async (book) => {
    if (!user) return setShowLoginModal(true);

    await supabase.from("user_books").upsert({
      user_id: user.id,
      book_id: book.id,
      type: "wishlist",
    });

    setWishlist((prev) => [...prev.filter((b) => b.id !== book.id), book]);
  };

  // حذف من الـ Cart
  const removeFromCart = async (bookId) => {
    await supabase
      .from("user_books")
      .delete()
      .eq("user_id", user.id)
      .eq("book_id", bookId)
      .eq("type", "cart");

    setCart((prev) => prev.filter((b) => b.id !== bookId));
  };

  // حذف من الـ Wishlist
  const removeFromWishlist = async (bookId) => {
    await supabase
      .from("user_books")
      .delete()
      .eq("user_id", user.id)
      .eq("book_id", bookId)
      .eq("type", "wishlist");

    setWishlist((prev) => prev.filter((b) => b.id !== bookId));
  };

  return (
     <StoreContext.Provider
    value={{
      books,
      cart,
      wishlist,
      user,
      role,          // ← ده ناقص!
      showLoginModal,
      addToCart,
      addToWishlist,
      removeFromCart,
      removeFromWishlist,
      setShowLoginModal,
    }}
  >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
