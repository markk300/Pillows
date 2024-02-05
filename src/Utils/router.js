import { Home } from "../components/Home/Home";
import { HotelBedding } from "../pages/HotelBedding";
import { PillowFinder } from "../pages/PillowFinder";
import { Sale } from "../pages/Sale";
import { ShopAllProducts } from "../pages/ShopAllProducts";
import { ShopByBrand } from "../pages/ShopByBrand";



const router = [
 {
    path: '/',
    element: <Home />,
 },
 {
    path: '/pillows',
    element: <PillowFinder />,
 },
 {
    path: '/hotel-bedding',
    element: <HotelBedding />,
 },
 {
    path: '/shop-by-brand',
    element: <ShopByBrand />,
 },
 {
    path: '/shop-all-products',
    element: <ShopAllProducts />,
 },
 {
    path: '/pillow-finder',
    element: <PillowFinder />,
 },
 {
    path: '/sale',
    element: <Sale />,
 },
];

export default router;