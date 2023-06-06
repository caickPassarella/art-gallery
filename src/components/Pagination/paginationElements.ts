import styled from "styled-components";

type Props = {
  isFilled: boolean;
};

export const CircleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Circle = styled.span<Props>`
  display: inline-block;
  margin-right: 8px;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: ${(props) => (props.isFilled ? "black" : "white")};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.isFilled ? "black" : "#cecece")};
  }
`;
