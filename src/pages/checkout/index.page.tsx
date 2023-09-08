import { Header } from "@/components/Global/Header";
import { LoadingIn } from "@/components/Global/Loading/In";
import { LoadingOut } from "@/components/Global/Loading/Out";
import { IndividualMethod } from "@/components/Pages/Checkout/IndividualMethod";
import { Method } from "@/components/Pages/Checkout/Method";
import { Safe } from "@/components/Pages/Checkout/Safe";
import { Title } from "@/components/Pages/Checkout/Title";
import { Total } from "@/components/Pages/Checkout/Total";
import { useCart } from "@/context/cart";
import { AuthPostAPI, loginVerifyAPI } from "@/lib/axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container } from "./styles";

export default function Checkout() {
  const { cart } = useCart();
  const [selected, setSelected] = useState("Pix");
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState<any>();
  const router = useRouter();

  async function handleVerify() {
    const verify = await loginVerifyAPI();
    if (verify !== 200) {
      alert("Realize o Login antes de Prosseguir");
      return router.push("/login?&page=checkout");
    }
  }

  async function handleCart() {
    if (cart.ticket.ticket.length === 0 && cart.product.length === 0) {
      alert("Selecione um (ou mais) Produto(s)");
      return router.back();
    }
    const connect = await AuthPostAPI("/purchase/cart", {
      ...cart,
      coupon: "",
    });
    console.log("connect: ", connect);
    if (connect.status !== 200) {
      alert(connect.body);
      return router.back();
    }
    setTotal(connect.body);
    return setLoading(false);
  }

  useEffect(() => {
    if (cart) {
      handleCart();
    }
  }, [cart]);

  useEffect(() => {
    handleVerify();
  }, []);

  return (
    <Container>
      {loading ? (
        <LoadingIn />
      ) : (
        <>
          <LoadingOut />
          <Header />
          <br />
          <Title />
          <br />
          <Method selected={selected} setSelected={setSelected} />
          <IndividualMethod selected={selected} />
          <br />
          <Total selected={selected} total={total} loading={loading} />
          <Safe />
        </>
      )}
    </Container>
  );
}
