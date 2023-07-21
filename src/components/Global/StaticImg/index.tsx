import { ImageProps } from "next/image";
import { StaticImg } from "./styles";

interface ImgProps extends ImageProps {
  src: string;
  width?: number;
  height?: number;
  alt: string;
}

export function StaticImage({ src, width, height, alt, ...rest }: ImgProps) {
  return (
    <StaticImg src={src} width={width} height={height} alt={alt} {...rest} />
  );
}
