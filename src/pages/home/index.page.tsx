import { Ad } from "@/components/Global/Ad";
import { Header } from "@/components/Global/Header";
import { LoadingIn } from "@/components/Global/Loading/In";
import { LoadingOut } from "@/components/Global/Loading/Out";
import { EventSlider } from "@/components/Pages/Home/Sliders/Events/Slider";
import { PlaceSlider } from "@/components/Pages/Home/Sliders/Places/Slider";
import { getAPI } from "@/lib/axios";
import { useEffect, useState } from "react";
import { Container } from "./styles";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState<any>([]);
  const [places, setPlaces] = useState<any>([]);
  const [selectedCity, setSelectedCity] = useState({
    name: "Qualquer Lugar",
    id: "",
  });

  async function getEverything() {
    setLoading(true);
    const [events, places] = await Promise.all([
      getAPI("/event?city_id=" + selectedCity.id),
      getAPI("/places?city_id=" + selectedCity.id),
    ]);
    if (events.status === 200 && places.status === 200) {
      setEvents(events.body.events);
      setPlaces(places.body.places);
      return setLoading(false);
    }
  }

  useEffect(() => {
    getEverything();
  }, [selectedCity]);

  return (
    <Container>
      {loading ? (
        <LoadingIn />
      ) : (
        <>
          <LoadingOut />
          <Header
            page="main"
            selected="home"
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
          />
          <Ad />
          <br />
          <br />
          <EventSlider events={events} loading={loading} />
          <br />
          <br />
          <PlaceSlider places={places} loading1={loading} />
        </>
      )}
    </Container>
  );
}
