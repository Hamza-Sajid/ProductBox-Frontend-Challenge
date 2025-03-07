// React import
import React from 'react'
// App imports
import { ProductCardInterface } from './types'
import { config } from '../../config/config'
import ImgNotFound from '../../assets/notFound.webp'
const ProductCard: React.FC<ProductCardInterface> = ({ id, name, price, img }) => {
    // To handle img from sever / local upload
    var imgPath: string = img.startsWith("./") ? `${config.serverPath}${img.substring(1)}` : imgPath = img;
    /**
     * Function to handle , img fall back (when image isn't loaded)
     * @param event 
     */
    const handleFallBack = (event: React.SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.src = ImgNotFound;
    }
    return (
        <div className="card bg-base-100 w-96 shadow-sm cursor-pointer hover:shadow-2xl" key={id}>
            <figure className="px-10 pt-10">
                <img
                    src={imgPath}
                    alt={name}
                    width={250}
                    height={250}
                    className="rounded-xl"
                    onError={handleFallBack}
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions">
                    <button className="btn btn-dash">R.s {price}</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
