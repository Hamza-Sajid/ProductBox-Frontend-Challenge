// App import
import NavBarMenu from "./components/NavBarMenu/NavBarMenu"
import SideBarMenu from "./components/SideBarMenu/SideBarMenu"
import HomePage from "./pages/HomePage"

const App = ()=> {
  return (
    <div className="flex">
      <div className="w-1/6">
        <SideBarMenu />
      </div>

      <div className="w-full">
        <NavBarMenu />
        <HomePage />
      </div>
    </div>
  )
}

export default App