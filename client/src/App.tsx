// App import
import NavBarMenu from "./components/NavBarMenu/NavBarMenu"
import SideBarMenu from "./components/SideBarMenu/SideBarMenu"
import PopularProducts from "./pages/PopularProducts"

const App = () => {
  return (
    <div className="flex">
      <div className="w-1/6">
        <SideBarMenu />
      </div>

      <div className="w-full">
        <NavBarMenu />
        <PopularProducts />
      </div>
    </div>
  )
}

export default App