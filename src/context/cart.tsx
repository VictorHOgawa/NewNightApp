import {
  createContext,
  useState,
  useContext,
  useEffect,
  SetStateAction,
} from "react";

const CartContext = createContext({} as any);

export default function CartProvider({ children }: any) {
  const [cart, setCart] = useState({
    ticket: { slotId: "", ticket: [] },
    product: [],
  });
  const [payment, setPayment] = useState([]);
  const [pix, setPix] = useState<any>();

  function add(item: any, type: string) {
    let newCart = cart;

    if (type === "product") {
      newCart = { ticket: cart.ticket, product: item };
    }
    if (type === "ticket") {
      newCart = { ticket: item, product: cart.product };
    }

    setCart(newCart);

    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  function updatePix(pix: any) {
    setPix(pix);

    localStorage.setItem("pix", JSON.stringify(pix));
  }

  const store = {
    add,
    pix,
    updatePix,
    cart,
    setCart,
    payment,
    setPayment,
  };
  useEffect(() => {
    const storageCart = localStorage.getItem("cart");
    const storagePix = localStorage.getItem("pix");
  }, []);

  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  const { cart, add, pix, updatePix, setCart, payment, setPayment } = context;

  return {
    cart,
    add,
    pix,
    updatePix,
    setCart,
    payment,
    setPayment,
  };
}
