// file imports
// layout
import Header from "./components/layout/Header";
// routes
import About from "./components/routes/About";
import Blog from "./components/routes/Blog";
import BlogItem from "./components/routes/BlogItem";
import Contact from "./components/routes/Contact";
import Product from "./components/routes/Product";
import Products from "./components/routes/Products";
// style
import "./style.scss";

// package imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route path="/blog/:blogid" element={<BlogItem />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/:title" element={<Product />} />
          <Route exact path="/" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
