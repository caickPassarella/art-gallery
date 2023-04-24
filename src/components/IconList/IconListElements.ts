import styled from "styled-components";

interface ImgProps {
  height?: string;
}

export const IconContainer = styled.div`
  display: grid;
  height: 100%;
  grid-gap: 12px;
`;

export const GridItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  height: 100%;
  max-height: 45px;
`;

export const Img = styled.img<ImgProps>`
  height: ${(props) => (props.height ? props.height : "100%")};
  max-height: 35px;
`;
