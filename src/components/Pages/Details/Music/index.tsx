import { GlobalTitle } from "@/components/Global/Title";
import { Container, Video } from "./styles";
import { useEffect, useState } from "react";

interface MusicProps {
  music: string;
}

export function Music({ music }: MusicProps) {
  const [width, setWidth] = useState(100);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <Container>
      <GlobalTitle title="Música" marginLeft={width < 768 ? "2.5%" : 0} />
      <br />
      <Video
        src={music}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </Container>
  );
}
