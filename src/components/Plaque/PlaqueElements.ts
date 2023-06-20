import styled from "styled-components";
import { FontDefault } from "../../styles/main";

export const PlaqueArea = styled.div`
  display: flex;
  padding-right: 15px;
  margin-top: 35px;
  justify-content: space-around;
  width: 18em;
  height: 7.5em;
  background: #feea83;
  box-shadow: inset -4px 4px 8px rgba(205, 191, 85, 0.2),
    inset 4px -4px 8px rgba(205, 191, 85, 0.2),
    inset 4px 4px 10px rgba(205, 191, 85, 0.9);
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 10px 0 20px;
`;

export const Artist = styled(FontDefault)`
  font-family: "Roboto";
  font-size: 0.9em;
  max-width: 180px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const PieceName = styled(FontDefault)`
  font-family: "Roboto";
  font-weight: bolder;
  font-size: 1em;
  max-width: 180px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const PieceDesc = styled(FontDefault)`
  display: -webkit-box;
  font-family: "Roboto";
  font-size: 0.9em;
  font-weight: lighter;
  margin-top: 12px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  /* &:hover {
    white-space: initial;
    overflow: visible;
  } */
`;
