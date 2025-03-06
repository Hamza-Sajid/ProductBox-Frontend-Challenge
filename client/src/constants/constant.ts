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
        description: 'Explore our top notch, elegent products'
    },
    {
        title: 'Track Cart',
        thumbnail: CartImg,
        description: 'Make sure to fill your cart with the best of best items'
    },
    {
        title: 'Add Products',
        thumbnail: AddProductsImg,
        description: 'Put your luxry with us, to get connect with deep-pockets'
    },
]


export const menuButtons = [
    {
        text: 'Home Page',
        icon: HomeIcon
    },
    {
        text: 'Popular Products',
        icon: TrendingIcon
    },
    {
        text: 'Cart',
        icon: CartIcon
    },
    {
        text: 'Add Product',
        icon: AddIcon
    }
]