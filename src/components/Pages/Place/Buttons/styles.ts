import px2vw from "@/utils/size";
import Image from "next/image";
import { styled } from "styled-components";

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  tipo: "geo" | "instagram" | "whatsapp";
}

export const Button = styled.button<ButtonProps>`
  background: ${({ tipo }) =>
    tipo === "geo"
      ? "linear-gradient(#B10000, #0025A9E0, #A49300, #39B100)"
      : tipo === "instagram"
      ? "linear-gradient(270deg, #505FD2 0%, #D82F81 50%, #FCA842 85.42%)"
      : "linear-gradient(270deg, #0EBF43 14.58%, #88E87A 96.35%, #8EDB87 100%)"};
  border: 1px solid ${({ theme }) => theme.color.gray_10};
  border-radius: 5px;
  color: ${({ theme }) => theme.color.gray_10};
  padding: 2px 5px;
  font-size: ${px2vw(14, 320)};

  @media (min-width: 768px) {
    font-size: ${px2vw(14, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(14, 1024)};
    margin: 10px;
  }
`;

export const Icons = styled(Image)`
  width: 20px;
  height: 20px;
`;
