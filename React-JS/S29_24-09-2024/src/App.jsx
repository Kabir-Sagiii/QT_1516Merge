import Navbar from "./components/navbar/Navbar";
import Electronics from "./components/electronics/Electronics";
import Home from "./components/home/Home";
import Jewelery from "./components/jewelery/Jewelery";
import Mens from "./components/mensc/MensC";
import Women from "./components/womenc/WomensC";
import ProductDetails from "./components/productDetails/ProductDetails";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import Profile from "./pages/Profile";
import Personal from "./components/user-details/Personal";
import Professional from "./components/user-details/Professional";
import Education from "./components/user-details/Education";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/electronics"} element={<Electronics />} />
        <Route path={"/jewelery"} element={<Jewelery />} />
        <Route path={"/mens"} element={<Mens />} />
        <Route path={"/womens"} element={<Women />} />

        <Route path={"/profile"} element={<Profile />}>
          <Route index path="" element={<Personal />} />
          {/* <Route path="" element={<Navigate to="personaldetails" />} /> */}
          <Route path={"personaldetails"} element={<Personal />} />
          <Route path={"professional"} element={<Professional />} />
          <Route path={"education"} element={<Education />} />
        </Route>

        <Route path={"/productdetails/:id"} element={<ProductDetails />} />
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;