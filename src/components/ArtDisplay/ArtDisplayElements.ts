import styled from "styled-components";

interface Props {
  highlight: boolean;
}

export const HighlightDisplayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding: 25px;
`;

export const ArtImg = styled.img<Props>`
  object-fit: cover;
  width: ${(props) => (props.highlight ? "850px" : "500px")};
  height: ${(props) => (props.highlight ? "700px" : "400px")};
  max-height: 100vh;
`;
