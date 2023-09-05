import px2vw from "@/utils/size";
import { ImageOptimizerCache } from "next/dist/server/image-optimizer";
import Image from "next/image";
import { styled } from "styled-components";

interface ChatProps {
  active: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: ${px2vw(100, 320)};

  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`;

export const SliderContainer = styled.div`
  overflow: hidden;
  height: 20vh;
`;

export const Chats = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.secondary_40};
  border-radius: 10px;
  padding: 5px;
  margin: ${px2vw(10, 320)} 0;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    margin: ${px2vw(10, 768)} 0;
  }

  @media (min-width: 1024px) {
    margin: ${px2vw(10, 1024)} 0;
  }
`;

export const Person = styled(Image)`
  width: ${px2vw(50, 320)};
  height: ${px2vw(50, 320)};

  @media (min-width: 768px) {
    width: ${px2vw(50, 768)};
    height: ${px2vw(50, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(50, 1024)};
    height: ${px2vw(50, 1024)};
  }
`;

export const Name = styled.label`
  color: ${({ theme }) => theme.color.gray_10};
  font-size: ${px2vw(20, 320)};
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: ${px2vw(20, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(20, 1024)};
  }
`;

export const LocationImage = styled(Image)`
  width: ${px2vw(30, 320)}px;
  height: ${px2vw(30, 320)}px;
  border-radius: 5px;
  object-fit: cover;

  @media (min-width: 768px) {
    width: ${px2vw(30, 768)};
    height: ${px2vw(30, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(30, 1024)};
    height: ${px2vw(30, 1024)};
  }
`;

export const LocationName = styled.label`
  color: ${({ theme }) => theme.color.gray_10};
  font-size: ${px2vw(12, 320)}px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: ${px2vw(12, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(12, 1024)};
  }
`;

export const ChatIcon = styled(Image)<ChatProps>`
  width: ${({ active }) => (active ? px2vw(40, 320) : px2vw(30, 320))}px;
  height: ${({ active }) => (active ? px2vw(40, 320) : px2vw(30, 320))}px;
  margin-right: ${px2vw(20, 320)}px;
  align-self: center;
  transition: 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    scale: 1.1;
  }

  @media (min-width: 768px) {
    width: ${({ active }) => (active ? px2vw(40, 768) : px2vw(30, 768))}px;
    height: ${({ active }) => (active ? px2vw(40, 768) : px2vw(30, 768))}px;
  }

  @media (min-width: 1024px) {
    width: ${({ active }) => (active ? px2vw(40, 1024) : px2vw(30, 1024))}px;
    height: ${({ active }) => (active ? px2vw(40, 1024) : px2vw(30, 1024))}px;
  }
`;
