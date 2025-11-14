import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Select from "./pages/Select";
import Checkout from './pages/Checkout'

export default function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <Link to="/" className="logo">
          CYBERLEARN.VN
        </Link>
        <nav className="text-xl m-auto whitespace-normal">
          <Link to="/select">Chọn ghế</Link> | <Link to="/checkout">Thanh toán</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select" element={<Select />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
    </div>
  );
}
