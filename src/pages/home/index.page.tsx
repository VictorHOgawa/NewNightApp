import { Ad } from "@/components/Global/Ad";
import { Header } from "@/components/Global/Header";
import { Loading } from "@/components/Global/Loading";
import { EventSlider } from "@/components/Pages/Home/Sliders/Events/Slider";
import { PlaceSlider } from "@/components/Pages/Home/Sliders/Places/Slider";
import { getAPI } from "@/lib/axios";
import { useEffect, useState } from "react";
import { Container } from "./styles";

export default function Home() {
  const [loading, setLoading] = useState(true);
  async function getEvents() {
    const connect = await getAPI("/places");
    if (connect.status === 200) {
      setTimeout(() => {}, 2000);
      return setLoading(false);
    }
  }

  useEffect(() => {
    getEvents();
  }, []);
  return (
    <Container>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <Header page="main" selected="home" />
          <Ad />
          <br />
          <br />
          <EventSlider />
          <br />
          <br />
          <PlaceSlider />
        </>
      )}
    </Container>
  );
}
