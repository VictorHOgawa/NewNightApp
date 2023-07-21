import { GlobalTitle } from "@/components/Global/Title";
import { Container, Video } from "./styles";

interface MusicProps {
  music: string;
}

export function Music({ music }: MusicProps) {
  return (
    <Container>
      <GlobalTitle title="Música" />
      <Video
        src={music}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </Container>
  );
}
