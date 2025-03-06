// React import
import React from 'react'
// App imports
import { ProductCardInterface } from './types'
import { config } from '../../config/config'

const ProductCard: React.FC<ProductCardInterface> = ({ id, name, price, img }) => {
    // Concatinating path
    const imgPath = `${config.serverPath}${img.substring(1)}`;

    return (
        <div className="card bg-base-100 w-96 shadow-sm cursor-pointer hover:shadow-2xl">
            <figure className="px-10 pt-10">
                <img
                    src={imgPath}
                    alt={name}
                    width={250}
                    height={250}
                    className="rounded-xl" />
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
