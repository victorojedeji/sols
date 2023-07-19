import { Cart, Checkout, Account, Orders } from "../Pages";

const privateRoutes = [
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
  
];
export { privateRoutes };
