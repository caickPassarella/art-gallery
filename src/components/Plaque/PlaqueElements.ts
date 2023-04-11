import styled from "styled-components";
import { FontDefault } from "../../styles/main";

export const PlaqueContainer = styled.div`
  margin-top: 35px;
`;

export const PlaqueArea = styled.div`
  display: flex;
  justify-content: space-around;
  width: 18em;
  height: 7.5em;
  background: #f4e365;
  box-shadow: inset -4px 4px 8px rgba(205, 191, 85, 0.2),
    inset 4px -4px 8px rgba(205, 191, 85, 0.2),
    inset -4px -4px 8px rgba(255, 255, 117, 0.9),
    inset 4px 4px 10px rgba(205, 191, 85, 0.9);
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 20px;
`;

export const Artist = styled(FontDefault)`
  font-family: "Roboto";
  font-size: 0.9em;
`;

export const PieceName = styled(FontDefault)`
  font-family: "Roboto";
  font-weight: bolder;
  font-size: 1em;
`;

export const PieceDesc = styled(FontDefault)`
  font-family: "Roboto";
  font-size: 0.9em;
  font-weight: lighter;
  margin-top: 12px;
`;
