import { Ad } from "@/components/Global/Ad";
import { Header } from "@/components/Global/Header";
import { LoadingIn } from "@/components/Global/Loading/In";
import { LoadingOut } from "@/components/Global/Loading/Out";
import { LoginValidation } from "@/components/Global/Login";
import { Items } from "@/components/Pages/Purchased";
import { loginVerifyAPI } from "@/lib/axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Container } from "./styles";
import { useCart } from "@/context/cart";

export default function Purchased() {
  const { cart, setCart } = useCart();
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  async function handleVerify() {
    const verify = await loginVerifyAPI();
    if (verify === 200) {
      setCart({ ticket: { slotId: "", ticket: [] }, product: [] });
      setLoading(false);
      return setLogged(true);
    }
    return setLoading(false);
  }

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
          <Header page="secondary" selected="purchased" />
          <Image
            src="/Global/FullLogo.svg"
            width={125}
            height={125}
            alt=""
            style={{ alignSelf: "center" }}
          />
          <br />
          {logged ? (
            <>
              <Ad />
              <Items />
            </>
          ) : (
            <LoginValidation />
          )}
        </>
      )}
    </Container>
  );
}
