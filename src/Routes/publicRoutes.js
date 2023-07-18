
import { 
  Login,
  Signup, 
  ProductDetails, 
  AllShoes,
  Accessories,
  Boots,
  Clogs,
  Heels,
  Flats,
  Sandals,
  Sneakers,
  AlpacaThrows,
  CandlesAndScents,
  Jewelry,
  NailPolish,
  ToteBags,
  Pillows,
  ShoeCare,
} from "../Pages";

const authRoutes = [
  {
    path: "/log-in",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
];


const contentRoutes = [
  {
    path: "/all-shoes",
    element: <AllShoes />,
  },
  {
    path: "/acessories",
    element: <Accessories />,
  },
  {
    path: "/boots",
    element: <Boots />,
  },
  {
    path: "/clogs",
    element: <Clogs />,
  },
  {
    path: "/flats",
    element: <Flats />,
  },
  {
    path: "/heels",
    element: <Heels />,
  },
  {
    path: "/sandals",
    element: <Sandals />,
  },
  {
    path: "/sneakers",
    element: <Sneakers />,
  },
  {
    path: "/alpaca-throws",
    element: <AlpacaThrows />,
  },
  {
    path: "/candles-and-scents",
    element: <CandlesAndScents />,
  },
  {
    path: "/jewelry",
    element: <Jewelry />,
  },
  {
    path: "/nail-polish",
    element: <NailPolish />,
  },
  {
    path: "/tote-bags",
    element: <ToteBags />,
  },
  {
    path: "/pillows",
    element: <Pillows />,
  },
  {
    path: "/shoe-care",
    element: <ShoeCare />,
  },
  {
    path: "/:productCategory/:productId",
    element: <ProductDetails />,
  },
];

export { authRoutes, contentRoutes };
