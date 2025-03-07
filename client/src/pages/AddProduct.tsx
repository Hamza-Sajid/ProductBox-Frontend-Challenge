// App imports
import ProductForm from "../components/ProductForm/ProductForm"

const AddProduct = () => {
  return (

    <div>
      <h2 className='text-4xl p-6 text-gray-800'>Add Your Item</h2>
      <hr className='text-gray-200' />
      <div className='p-12 flex gap-16 justify-center'>
        <ProductForm />
      </div>
    </div>
  )
}

export default AddProduct
