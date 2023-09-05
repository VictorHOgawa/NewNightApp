import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.secondary_100};
  width: 80%;
  border-radius: 15px;
  padding: 15px;
  align-self: center;
  margin-top: 5%;

  @media (min-width: 768px) {
    width: 30%;
  }
`;

export const Logo = styled(Image)`
  width: 50%;
  height: auto;
  align-self: center;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.color.gray_10};
`;

export const Form = styled.input`
  width: 100%;
  border: 0;
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray_70};
  color: ${({ theme }) => theme.color.gray_10};
  &:focus {
    outline: none;
  }
`;

export const Forgot = styled(Label)`
  text-decoration: underline;
  align-self: center;
  margin-top: 5%;
  &:hover {
    cursor: pointer;
  }
`;
