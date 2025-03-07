// Import react
import React from 'react'
// Third party import
import { CiFilter as FilterIcon } from "react-icons/ci";
// App import
import { FilterButtonPropsInterface } from './types';

const FilterButton: React.FC<FilterButtonPropsInterface> = ({ products, updateProduct }) => {
    /**
     * Function to sort prouct on ASC || DES order
     * @param type 
     * @returns 
     */
    const sortProduct = (type: string) => {
        return [...products].sort((p1, p2) => {
            // Convert both prices to number
            const priceA = Number(p1.price);
            const priceB = Number(p2.price);

            // Sort based on given_order
            return type.toLowerCase() === 'asc'
                ? priceA - priceB  // (low to high)
                : priceB - priceA; // (high to low)
        });
    }

    return (
        <div>
            <button className="btn font-normal" popoverTarget="popover-1">
                Filter
                <span><FilterIcon /></span>
            </button>
            <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm relative -left-28"
                popover="auto" id="popover-1">
                <li onClick={() => { updateProduct(sortProduct('des')) }}><a>Expensive Products</a></li>
                <li onClick={() => { updateProduct(sortProduct('asc')) }}><a>Cheap Products</a></li>
            </ul>
        </div>
    )
}

export default FilterButton
