import { useContext } from "react";
import { AuthContext } from "./AuthContexts";
// import { ProductsContext } from "./ProductsContext";
// import { CartContext } from ".CartContext";
// import { WishlistContext } from ".WishlistContext";

export { default as AuthContextProvider } from "./AuthContexts";
// export { default as ProductsContextProvider } from "./productsContext/ProductsContext";
// export { default as CartContextProvider } from "./cartContext/CartContext";
// export { default as WishlistContextProvider } from "./wishlistContext/WishlistContext";

export const useAuthContext = () => useContext(AuthContext);
// export const useProductsContext = () => useContext(ProductsContext);
// export const useCartContext = () => useContext(CartContext);
// export const useWishlistContext = () => useContext(WishlistContext);