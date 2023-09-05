import { Ad } from "@/components/Global/Ad";
import { Header } from "@/components/Global/Header";
import { LoadingIn } from "@/components/Global/Loading/In";
import { LoadingOut } from "@/components/Global/Loading/Out";
import { EventSlider } from "@/components/Pages/Home/Sliders/Events/Slider";
import { PlaceSlider } from "@/components/Pages/Home/Sliders/Places/Slider";
import { getAPI } from "@/lib/axios";
import { useEffect, useState } from "react";
import { Container } from "./styles";
import { Button } from "react-bootstrap";

export default function Home() {
  const [loading, setLoading] = useState(true);
  async function getEvents() {
    const connect = await getAPI("/event");
    if (connect.status === 200) {
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
          <LoadingIn />
        </>
      ) : (
        <>
          <LoadingOut />
          <Header page="main" selected="home" />
          <Ad />
          <br />
          <br />
          <Button variant="danger" />
          <EventSlider />
          <br />
          <br />
          <PlaceSlider />
        </>
      )}
    </Container>
  );
}
