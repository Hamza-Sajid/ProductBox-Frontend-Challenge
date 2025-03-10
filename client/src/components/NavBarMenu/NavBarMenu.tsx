// Third party import
import { useNavigate } from "react-router";
import { LuShoppingCart as CartIcon } from "react-icons/lu";
// App import
import { useCart } from "../../store/CartContext";
import { CartItemInterface } from "../../pages/types";

const NavBarMenu = () => {
    const cartItems = useCart().cartItems;
    const naviagte = useNavigate();
    /**
     * Function to calculate the sum of cart item
     * @param products 
     * @returns 
     */
    const calculateTotalPrice = (products: CartItemInterface[]) => {
        return products.reduce((total: number, product: any) => {
            // Converting price from string to number and multipling by quantity
            const itemTotal = parseFloat(product.price) * product.quantity;
            return total + itemTotal;
        }, 0);
    }
    const totalPrice = calculateTotalPrice(cartItems)

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <div className="inline-grid *:[grid-area:1/1]">
                    <div className="status bg-blue-800 animate-ping"></div>
                    <div className="status bg-blue-600"></div>
                </div> <span className='font-sans text-gray-600'>Year Biggest Sale Is Live!!</span>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <span className='text-2xl'><CartIcon /></span>
                            <span className="badge badge-sm indicator-item bg-blue-500 text-white">{cartItems.length}</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold text-gray-600">{cartItems.length} Items</span>
                            <span className="text-gray-700">Subtotal: R.s {totalPrice}</span>
                            <div className="card-actions">
                                <button className="btn bg-blue-500 text-white btn-block" onClick={() => naviagte('/cart')}>View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBarMenu