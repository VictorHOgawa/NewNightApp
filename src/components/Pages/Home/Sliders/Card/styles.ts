import px2vw from "@/utils/size";
import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 2.5889413356781006px 2.5889413356781006px 17.58957290649414px 0px
    rgba(211, 86, 243, 0.5);
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

export const EventDate = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.primary_60};
  text-align: center;
  background-color: ${({ theme }) => theme.color.gray_10};
  line-height: 1;
  border-radius: 5px;
  padding-top: 5px;
`;

export const EventDateFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${({ theme }) => theme.color.primary_60};
  height: 15px;
  width: 100%;
  color: ${({ theme }) => theme.color.gray_10};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding-top: 3px;
`;

export const Date = styled.label`
  font-size: ${px2vw(10, 320)};
`;
