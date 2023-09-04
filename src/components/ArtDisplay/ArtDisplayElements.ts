import styled from "styled-components";

type Props = {
  highlight: boolean;
  direction?: string;
  artImage?: string;
};

export const HighlightDisplayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const PieceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding: 25px;
`;

export const ArtFrame = styled.img<Props>`
  z-index: 2;
  pointer-events: none;
  filter: drop-shadow(0px 11px 23px rgba(0, 0, 0, 0.7));
  max-width: 100%;
  width: ${(props) => (props.highlight ? "850px" : "500px")};
  height: auto;
  background-image: url(${(props) => props.artImage});
  background-size: cover;
`;
