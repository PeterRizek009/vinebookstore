import { Routes, Route } from "react-router-dom";
import { StoreProvider } from "./context/StoreContext";
import { useStore } from "./context/StoreContext";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import Auth from "./Pages/Auth";
import Wishlist from "./component/wishlist/wishilst";
import BookDetails from "./Pages/bookdetails";
import Books from "./Pages/books";
import LoginModal from "./component/modals/LoginModal";
import Cart from "./Pages/cart";
import Payment from "./Pages/payment";
import ProtectedRoute from './component/protectedroute/ProtectedRoute';


const AppContent = () => {
  const { showLoginModal, setShowLoginModal } = useStore();

  return (
    <>
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        
        <Route path="/login" element={<Auth />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/bookdetails/:id" element={<BookDetails />} />
        <Route path="/books" element={<Books />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  return (
    <StoreProvider>
      <AppContent />
    </StoreProvider>
  );
}

export default App;
