import styled from "styled-components";
import { FontDefault } from "../../styles/main";

export const PlaqueContainer = styled.div`
  margin-top: 25px;
`;

export const PlaqueArea = styled.div`
  width: 45%;
  height: 120px;
  border: none;
  outline: none;
  padding: 0px 30px 0px 30px;
  background: #f4e365;
  box-shadow: inset -4px 4px 8px rgba(205, 191, 85, 0.2),
    inset 4px -4px 8px rgba(205, 191, 85, 0.2),
    inset -4px -4px 8px rgba(255, 255, 117, 0.9),
    inset 4px 4px 10px rgba(205, 191, 85, 0.9);
  user-select: none;
  font-size: 15px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 20px;
  margin: 5px;
`;

export const H2 = styled(FontDefault).attrs({ as: "h2" })`
  font-family: "Roboto";
  font-size: 14px;
`;

export const H1 = styled(FontDefault).attrs({ as: "h1" })`
  font-family: "Roboto";
  font-weight: bolder;
  font-size: 16px;
`;

export const P = styled(FontDefault).attrs({ as: "p" })`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: lighter;
  margin-top: 12px;
`;
