import px2vw from "@/utils/size";
import Image from "next/image";
import { Stack } from "react-bootstrap";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 95%;
  margin-left: 2.5%;

  @media (min-width: 768px) {
    width: 90%;
    margin-left: 5%;
  }

  &::after {
    position: absolute;
    content: "";
    width: 80%;
    margin-left: 7.5%;
    border-bottom: 1px solid white;
    margin-top: 60px;

    @media (min-width: 768px) {
      margin-left: 0;
      width: 32%;
      margin-top: 120px;
    }
  }
`;

export const Dets = styled(Stack)``;

export const Icons = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const Text = styled.div`
  font-size: ${px2vw(14, 320)};
  color: ${({ theme }) => theme.color.gray_10};

  @media (min-width: 768px) {
    font-size: ${px2vw(14, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(14, 1024)};
  }
`;
