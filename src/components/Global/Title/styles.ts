import { styled } from "styled-components";
import px2vw from "../../../utils/size";

interface Props {
  marginTop?: number;
  marginLeft?: number;
  fontSize?: number;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column-reverse;
  background-color: ${({ theme }) => theme.color.primary_80};
  width: 50px;
  height: ${(props) => (props.fontSize ? props.fontSize / 2 : 10)}px;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};
`;

export const Text = styled.h1<Props>`
  width: max-content;
  color: ${({ theme }) => theme.color.gray_10};
  font-size: ${(props) =>
    props.fontSize ? px2vw(props.fontSize, 320) : px2vw(22, 320)};

  @media (min-width: 768px) {
    font-size: ${(props) =>
      props.fontSize ? px2vw(props.fontSize, 768) : px2vw(22, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${(props) =>
      props.fontSize ? px2vw(props.fontSize, 1024) : px2vw(22, 1024)};
  }
`;
