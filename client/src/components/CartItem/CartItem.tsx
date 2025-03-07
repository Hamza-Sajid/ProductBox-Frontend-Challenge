// Third party imports
import { RiDeleteBack2Line as DeleteIcon } from "react-icons/ri";
// App import
import { CartItemInterface } from "../../pages/types";
import { config } from "../../config/config";
import { useCart } from "../../store/CartContext";
import ImgNotFound from "../../assets/notFound.webp";

const CartItem: React.FC<CartItemInterface> = ({ id, img, name, price, quantity }) => {
  const { removeFromCart } = useCart();

  // To handle img from sever / local upload
  const imgPath: string = img.startsWith("./") ? `${config.serverPath}${img.substring(1)}` : img;

  /**
   * Function to handle image fall-back
   * @param event 
   */
  const handleFallBack = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = ImgNotFound;
  };
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="w-52 h-52 overflow-hidden">
        <img
          src={imgPath}
          className="w-full h-full object-cover"
          alt={name}
          onError={handleFallBack}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{name}</h2>
        <div className="card-actions justify-end">
          <div className="badge bg-blue-500 text-white">Price {price}</div>
          <div className="badge badge-outline">Quantity: {quantity}</div>
        </div>
        <h2 className="text-2xl font-bold">Totall : {quantity * price}</h2>
        <button
          onClick={() => removeFromCart(id)}
          className="btn bg-gray-600 text-white"> <span className='text-2xl'><DeleteIcon /></span>Remove from Cart</button>
      </div>
    </div>
  )
}

export default CartItem
