import styled from "styled-components";

type Props = {
  highlight: boolean;
  direction?: string;
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

export const FrameWrapper = styled.div`
  position: relative;
`;

export const ArtImg = styled.img<Props>`
  z-index: 1;
  opacity: 1;
  cursor: pointer;
  object-fit: cover;
  width: ${(props) => (props.highlight ? "850px" : "500px")};
  height: ${(props) => (props.highlight ? "700px" : "400px")};
  transition: opacity 0.5s ease;
  &:hover {
    opacity: 0.8;
  }
`;

export const ArtFrame = styled.img<Props>`
  z-index: 2;
  pointer-events: none;
  filter: drop-shadow(0px 11px 23px rgba(0, 0, 0, 0.7));
  width: ${(props) => (props.highlight ? "850px" : "500px")};
  height: ${(props) => (props.highlight ? "700px" : "400px")};
  position: absolute;
  object-fit: fill;
  top: 0;
  left: 0;
`;
