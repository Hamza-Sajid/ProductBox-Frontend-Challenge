// Third party import
import { LuShoppingCart as CartIcon } from "react-icons/lu";

const NavBarMenu = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <div className="inline-grid *:[grid-area:1/1]">
                    <div className="status status-info animate-ping"></div>
                    <div className="status status-success"></div>
                </div> <span className='font-semibold text-gray-500'>Year Biggest Sale Is Live!!</span>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <span className='text-2xl'><CartIcon/></span>
                            <span className="badge badge-sm indicator-item bg-blue-400">8</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBarMenu