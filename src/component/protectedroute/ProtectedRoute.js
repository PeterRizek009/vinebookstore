// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useStore } from "../../context/StoreContext";

const ProtectedRoute = ({ children }) => {
  const { user, role } = useStore();

  if (!user) return <Navigate to="/login" />;
  if (role !== "admin") return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;