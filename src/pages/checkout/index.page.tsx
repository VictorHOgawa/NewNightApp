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
  const router = useRouter();

  async function handleVerify() {
    const verify = await loginVerifyAPI();
    if (verify !== 200) {
      alert("Realize o Login antes de Prosseguir");
      return router.push("/login?&page=checkout");
    }
  }

  async function handleCart() {
    const connect = await AuthPostAPI("/purchase/cart", {
      ...cart,
      coupon: "",
    });
    setLoading(false);
  }

  useEffect(() => {
    handleCart();
  }, []);

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
          <Total selected={selected} />
          <Safe />
        </>
      )}
    </Container>
  );
}
