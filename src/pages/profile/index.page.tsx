import { Header } from "@/components/Global/Header";
import { LoadingIn } from "@/components/Global/Loading/In";
import { LoadingOut } from "@/components/Global/Loading/Out";
import { LoginValidation } from "@/components/Global/Login";
import { Support } from "@/components/Global/Support";
import { Info } from "@/components/Pages/Profile/Info";
import { loginVerifyAPI } from "@/lib/axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container } from "./styles";

export default function Profile() {
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState(100);
  const router = useRouter();

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  async function handleVerify() {
    const verify = await loginVerifyAPI();
    if (verify === 200) {
      setLogged(true);
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
          <Header page="secondary" selected="profile" />
          <Image
            src="/Global/FullLogo.svg"
            width={125}
            height={125}
            alt=""
            style={{ alignSelf: "center" }}
          />{" "}
          <br />
          {logged ? (
            <>
              <Info />
              <br />
              <Support />
            </>
          ) : (
            <LoginValidation />
          )}
        </>
      )}
    </Container>
  );
}
