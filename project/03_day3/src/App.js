import { Routes, Route } from "react-router-dom";

import Login from "./landing/Login";
import Register from "./landing/Register";
import Home from "./home/Home";

import { AuthContextContainer } from "./hooks/useAuth";
import { ProtectedRoute } from "./hooks/useAuth";

function App() {
  return (
    <div>
      <AuthContextContainer>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home/*" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        </Routes>
      </AuthContextContainer>
    </div>
  );
}

export default App;
