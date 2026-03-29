import { Routes, Route } from "react-router-dom";
import { StoreProvider } from "./context/StoreContext";
import Home from './Pages/Home';
import Dashboard from "./Pages/Dashboard";
import Navbar from "./component/navbar/navbar";

function App() {
  return (
    <StoreProvider>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </StoreProvider>
  );
}

export default App;