// React import
import React from 'react'
// Third party imports
import axios from 'axios'
import { toast } from 'react-toastify'
// App imports
import { ProductCardInterface } from './types'
import { config } from '../../config/config'
import ImgNotFound from '../../assets/notFound.webp'
import { useCart } from '../../store/CartContext'
import { toastMsg } from '../../constants/constant'


const ProductCard: React.FC<ProductCardInterface> = ({ id, name, price, img }) => {
    const { addToCart } = useCart();
    const addedInCart = () => toast.success(toastMsg.inCart);

    // To handle img from sever / local upload
    const imgPath: string = img.startsWith("./") ? `${config.serverPath}${img.substring(1)}` : img;
    /**
     * Function to handle , img fall back (when image isn't loaded)
     * @param event 
     */
    const handleFallBack = (event: React.SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.src = ImgNotFound;
    }

    /**
    *Function to add a product to the cart in local storage
    */
    const handleAddToCart = () => {
        addToCart({ id, name, price, img, quantity: 1 });
        addedInCart()
    };
    /**
     * Function to call delete product end-point
     */
    const handleDeleteProduct = async () => {
        try {
            await axios.delete(`${config.serverPath}/items/${id}`);
            toast.success(toastMsg.deleted);
        } catch (error) {
            toast.error(toastMsg.deleteFail);
        }
    }

    return (
        <div className="card bg-base-100 w-96 shadow-sm cursor-pointer hover:shadow-2xl" key={id}>
            <figure className="px-10 pt-10 w-80 h-80 overflow-hidden">
                <img
                    src={imgPath}
                    alt={name}
                    onError={handleFallBack}
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="text-3xl">{name}</h2>
                <div className="card-actions">
                    <button className="text-2xl font-light">R.s {price}</button>
                </div>
                <div className='flex gap-4'>
                    <button
                        onClick={handleAddToCart}
                        className="btn btn-soft btn-primary bg-blue-500 text-white">Add to Cart</button>
                    <button
                        onClick={handleDeleteProduct}
                        className="btn btn-soft btn-primary bg-gray-700 text-white">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
