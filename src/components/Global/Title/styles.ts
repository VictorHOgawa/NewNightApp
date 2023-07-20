import { styled } from "styled-components";
import px2vw from "../../../utils/size";

interface Props {
  marginTop: number;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column-reverse;
  background-color: ${({ theme }) => theme.color.primary_80};
  width: 50px;
  height: 10px;
  margin-left: 10px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};
`;

export const Text = styled.h1`
  width: max-content;
  color: ${({ theme }) => theme.color.gray_10};
  font-size: ${px2vw(22, 320)};

  @media (min-width: 768px) {
    font-size: ${px2vw(22, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(22, 1024)};
  }
`;
