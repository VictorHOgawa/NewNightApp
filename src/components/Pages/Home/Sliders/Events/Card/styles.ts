import px2vw from "@/utils/size";
import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 0px rgba(211, 86, 243, 0.5);
  background: linear-gradient(
    123deg,
    rgba(41, 0, 80, 0.57) 57.51%,
    #9d38cd 100%
  );
  width: 60%;
  margin: 0px;
  padding: 0px;

  @media (min-width: 768px) {
    width: 40%;
  }

  @media (min-width: 1024px) {
    width: 25%;
  }
`;

export const SliderImg = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export const EventBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;

  @media (min-width: 768px) {
    padding: 10px;
  }

  @media (min-width: 1024px) {
    padding: 15px;
  }
`;

export const EventTitle = styled.label`
  color: ${({ theme }) => theme.color.gray_10};
  font-size: ${px2vw(15, 320)};

  @media (min-width: 768px) {
    font-size: ${px2vw(15, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(15, 1024)};
  }
`;

export const EventFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const EventPlace = styled(EventTitle)`
  align-self: end;
  font-size: ${px2vw(10, 320)};

  @media (min-width: 768px) {
    font-size: ${px2vw(10, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(10, 1024)};
  }
`;
