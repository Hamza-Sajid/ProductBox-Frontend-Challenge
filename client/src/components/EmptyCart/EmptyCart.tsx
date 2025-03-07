// App import
import EmptyCartImg from '../../assets/emptyCart.png'

const EmptyCart = () => {
  return (
    <div>
      <img width={300} height={300} src={EmptyCartImg} alt="No item in the cart" />
      <h2 className='text-4xl'>Your cart is empty</h2>
    </div>
  )
}

export default EmptyCart
