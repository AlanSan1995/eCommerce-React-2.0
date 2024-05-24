import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inicio from "./pages/Inicio/Inicio";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Locals from "./pages/Locals/Locals";
import Ideas from "./pages/Ideas/Ideas";
import useScreenSize from "./hooks/UseScreenSize";
import HeaderMobile from "./components/HeaderMobile/HeaderMobile";

function App() {
  const { width } = useScreenSize();
  return (
    <BrowserRouter>
      {width <= 770 ? <HeaderMobile /> : <Header />}

      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route
          path='/products/:category?/:subCategory?'
          element={<Products />}
        />
        <Route path='/contact' element={<Contact />} />
        <Route path='/locals' element={<Locals />} />
        <Route path='/ideas' element={<Ideas />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
