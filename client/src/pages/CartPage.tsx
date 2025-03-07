//App imports
import CartItem from '../components/CartItem/CartItem'
import EmptyCart from '../components/EmptyCart/EmptyCart';
import { useCart } from '../store/CartContext';


const CartPage = () => {
  const { cartItems } = useCart();
  return (
    <div>
      <h2 className='text-4xl p-6 text-gray-800'>Your shopping cart</h2>
      <hr className='text-gray-200' />

      <div className='p-12 flex flex-wrap gap-16 justify-center h-full'>
        {cartItems.length > 0 ? cartItems.map((item, index) => {
          return (
            <CartItem key={index} name={item.name} img={item.img} quantity={item.quantity} id={item.id} price={item.price} />
          )
        }) : <EmptyCart />}

      </div>
    </div>
  )
}

export default CartPage
