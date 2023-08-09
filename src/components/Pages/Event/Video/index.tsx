import { GlobalTitle } from "@/components/Global/Title";
import { Container, IFrame } from "./styles";
import { useEffect, useState } from "react";

interface VideoProps {
  video: string;
}

export function Video({ video }: VideoProps) {
  const [width, setWidth] = useState(100);
  const [cleanUrl, setCleanUrl] = useState("");
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const [, , , urlPart1] = video.split("/");
    const [, urlPart2] = urlPart1.split("=");
    const [urlPart3] = urlPart2.split("&");
    setCleanUrl(`https://www.youtube.com/embed/${urlPart3}`);
  }, []);
  return (
    <Container>
      <GlobalTitle title="Música" marginLeft={width < 768 ? "2.5%" : 0} />
      <br />
      <IFrame
        src={cleanUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      {/* <iframe
        width="560"
        height="315"
        src={video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe> */}
    </Container>
  );
}
