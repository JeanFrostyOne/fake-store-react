import ProtectedRoute from "./components/ProtectedRoute";
import parseJwt from "./constants/parseJwt";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import FullProduct from "./pages/FullProduct";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  const token = localStorage.getItem("token");
  const userId = parseJwt(token).sub;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account userId={userId} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/:id"
          element={
            <ProtectedRoute>
              <FullProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart userId={userId} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
