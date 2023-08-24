import px2vw from "@/utils/size";
import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.background};
  min-height: 100vh;
  height: auto;
  padding: 0 2%;
`;

export const Text = styled.label`
  color: ${({ theme }) => theme.color.gray_10};
  font-size: ${px2vw(12, 320)};
`;

export const JobCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.secondary_100};
  border-radius: 10px;
  padding: 10px 5px;
  margin-top: 2%;
  width: 95%;
  align-self: center;
`;

export const Img = styled(Image)`
  width: ${px2vw(50, 320)};
  height: ${px2vw(50, 320)};
  border-radius: 5px;
  object-fit: cover;
`;

export const Icon = styled(Image)`
  width: ${px2vw(15, 320)};
  height: ${px2vw(15, 320)};
`;

export const Help = styled.button`
  position: absolute;
  bottom: 50px;
  display: flex;
  background-color: black;
  color: ${({ theme }) => theme.color.gray_10};
  border: 1px solid ${({ theme }) => theme.color.gray_10};
  border-radius: 10px;
  padding: 5px 10px;
  align-self: center;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Values = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.secondary_100};
  border-radius: 10px;
  padding: 2px 5px;
  color: ${({ theme }) => theme.color.confirmation};
  width: ${px2vw(100, 320)};
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Input = styled.input`
  margin-top: 2%;
  width: 90%;
  align-self: center;
  border-radius: 10px;
  padding: 2px 5px;
  color: ${({ theme }) => theme.color.gray_10};
  background-color: ${({ theme }) => theme.color.secondary_100};
  border: 0;
`;
