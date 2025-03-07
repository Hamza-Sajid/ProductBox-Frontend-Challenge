// App import
import { Route, Routes } from "react-router"
import NavBarMenu from "./components/NavBarMenu/NavBarMenu"
import SideBarMenu from "./components/SideBarMenu/SideBarMenu"
import AddProduct from "./pages/AddProduct"
import CartPage from "./pages/CartPage"
import HomePage from "./pages/HomePage"
import PopularProducts from "./pages/PopularProducts"

const App = () => {
  return (
    <div className="flex">
      <div className="w-1/6">
        <SideBarMenu />
      </div>

      <div className="w-full">
        <NavBarMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="trending" element={<PopularProducts />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="addProduct" element={<AddProduct />} />
        </Routes>
      </div>
    </div>
  )
}

export default App