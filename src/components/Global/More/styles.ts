import Theme from "@/styles/themes";
import px2vw from "@/utils/size";
import { styled } from "styled-components";

export const Container = styled.button`
  position: fixed;
  bottom: 10px;
  right: 10px;
  border-radius: 100%;
  border: 0;
  width: 50px;
  height: 50px;
  transition: 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    scale: 1.1;
  }
`;

export const Text = styled.label`
  color: ${({ theme }) => theme.color.gray_10};
  font-weight: bold;
  font-size: ${px2vw(15, 320)};

  @media (min-width: 768px) {
    font-size: ${px2vw(15, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(15, 1024)};
  }
`;

export const Display = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Theme.color.secondary_100};
  border-radius: 10px;
  padding: 2px 10px;
  color: ${Theme.color.confirmation};
  width: ${px2vw(100, 320)};
`;
