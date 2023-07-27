import { useRouter } from "next/router";
import { Container } from "./styles";

export function Back({ ...rest }: any) {
  const router = useRouter();
  return (
    <Container
      src="/Global/Icons/Back.svg"
      width={20}
      height={20}
      alt=""
      onClick={() => router.back()}
      {...rest}
    />
  );
}
