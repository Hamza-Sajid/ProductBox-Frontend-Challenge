// Images imports
import TrendingProdImg from '../assets/trendingItems.webp';
import CartImg from '../assets/cart.webp';
import AddProductsImg from '../assets/addProducts.webp';
// Icon imports
import { BsLightningCharge as TrendingIcon } from "react-icons/bs";
import { AiOutlineShoppingCart as CartIcon } from "react-icons/ai";
import { RiApps2AddLine as AddIcon } from "react-icons/ri";
import { RiHomeSmile2Line as HomeIcon } from "react-icons/ri";

export const pagesCard = [
    {
        title: 'Trending Products',
        thumbnail: TrendingProdImg,
        description: 'Explore our top notch, elegent products',
        path: '/trending'
    },
    {
        title: 'Track Cart',
        thumbnail: CartImg,
        description: 'Make sure to fill your cart with the best of best items',
        path: '/cart'
    },
    {
        title: 'Add Products',
        thumbnail: AddProductsImg,
        description: 'Put your luxry with us, to get connect with deep-pockets',
        path: '/addProduct'
    },
]


export const menuButtons = [
    {
        text: 'Home Page',
        icon: HomeIcon,
        path: '/'
    },
    {
        text: 'Popular Products',
        icon: TrendingIcon,
        path: 'trending'
    },
    {
        text: 'Cart',
        icon: CartIcon,
        path: 'cart'
    },
    {
        text: 'Add Product',
        icon: AddIcon,
        path: 'addProduct'
    }
]

export const toastMsg = {
    success: 'Product added successfully!',
    failure: 'Product is nott added' 
}