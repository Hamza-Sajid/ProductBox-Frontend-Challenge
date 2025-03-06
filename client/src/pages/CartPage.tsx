import CartItem from '../components/CartItem/CartItem'

function CartPage() {
  return (
    <div>
       <h2 className='text-4xl p-6'>Your shopping cart</h2>
      <hr className='text-gray-200' />

      <div className='p-12 flex gap-16 justify-center'>
       <CartItem/>
      </div>
    </div>
  )
}

export default CartPage
