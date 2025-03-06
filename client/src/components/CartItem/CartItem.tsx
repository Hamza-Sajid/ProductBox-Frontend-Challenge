import { RiDeleteBack2Line as DeleteIcon } from "react-icons/ri";

const CartItem = () => {
  return (
    <div className="card card-side h-52 bg-base-100 shadow-sm">
    <figure>
      <img
        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
        alt="Movie" />
    </figure>
    <div className="card-body">
      <h2 className="text-3xl font-medium text-gray-800">Blue Sneakers</h2>
      <h4 className='font-bold text-2xl text-gray-900'>Rs: 123</h4>
      <div className="card-actions justify-end">
        <button className="btn btn-block"> <span className='text-2xl'><DeleteIcon/></span>Remove</button>
      </div>
    </div>
  </div>
  )
}

export default CartItem
