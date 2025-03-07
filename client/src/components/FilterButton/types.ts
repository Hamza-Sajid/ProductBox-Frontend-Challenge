import { ProductCardInterface } from "../ProductsCard/types";

export interface FilterButtonPropsInterface {
    products: ProductCardInterface[];
    updateProduct: React.Dispatch<React.SetStateAction<ProductCardInterface[]>>;
}