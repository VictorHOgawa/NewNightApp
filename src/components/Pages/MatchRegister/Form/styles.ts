import px2vw from "@/utils/size";
import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const Forms = styled.input`
  border: 1px solid ${({ theme }) => theme.color.gray_10};
  border-radius: 5px;
  padding: 5px;
  background-color: ${({ theme }) => theme.color.secondary_100};
  color: ${({ theme }) => theme.color.gray_10};
  margin-top: 5%;
  &:focus {
    outline: none;
  }
`;

export const AddPhoto = styled.button`
  display: flex;
  border: 1px dashed ${({ theme }) => theme.color.gray_10};
  width: 25vw;
  height: 35vw;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.secondary_100};
  margin: 5px;

  @media (min-width: 768px) {
    width: 6vw;
    height: 8vw;
  }
`;

export const Hidden = styled.input`
  display: hidden;
  opacity: 0;
  position: absolute;
  align-self: center;
  width: 25vw;
  height: 35vw;

  @media (min-width: 768px) {
    width: 6vw;
    height: 8vw;
  }
`;

export const Icon = styled(Image)`
  width: 35px;
  height: 35px;
`;

export const Photos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Description = styled.textarea`
  border: 1px dashed ${({ theme }) => theme.color.gray_10};
  border-radius: 10px;
  color: ${({ theme }) => theme.color.gray_10};
  background-color: ${({ theme }) => theme.color.secondary_100};
  padding: 5px;
  margin: 5% 0px;
  &:focus {
    outline: none;
  }
`;

export const Models = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme.color.primary_60};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 0px;
  border-top-right-radius: 10px;
  color: ${({ theme }) => theme.color.gray_10};
  border: 1px solid ${({ theme }) => theme.color.secondary_100};
  padding: 5px;
  margin: 5px 0px;
  width: 45%;
  align-self: flex-end;
  font-size: ${px2vw(12, 320)};

  @media (min-width: 768px) {
    font-size: ${px2vw(12, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(12, 1024)};
  }
`;

export const RadioContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
`;

export const Radio = styled.input``;

export const RadioLabel = styled.label`
  background-color: ${({ theme }) => theme.color.secondary_100};
  border-radius: 10px;
  color: ${({ theme }) => theme.color.gray_10};
  padding: 5px;
  width: 90%;
  font-size: ${px2vw(12, 320)};

  @media (min-width: 768px) {
    font-size: ${px2vw(12, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(12, 1024)};
  }
`;
