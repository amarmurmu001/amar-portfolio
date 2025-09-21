//main.jsx
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Nav from "./assets/components/navbar/Nav.jsx";
import Footer from "./assets/components/footer/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <div className="main">
    <Nav />
    <App />
    <Footer />
  </div>
  </BrowserRouter>
);
