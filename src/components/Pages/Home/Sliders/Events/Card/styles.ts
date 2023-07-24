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
  width: 90%;
  margin: 0px;
  padding: 0px;
`;

export const SliderImg = styled(Image)`
  width: 100%;
  height: auto;
`;

export const EventBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export const EventTitle = styled.label`
  color: ${({ theme }) => theme.color.gray_10};
`;

export const EventFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const EventPlace = styled(EventTitle)`
  align-self: end;
`;
