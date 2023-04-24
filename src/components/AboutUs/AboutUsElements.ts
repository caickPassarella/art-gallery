import styled from "styled-components";
import { SecondaryBGColor } from "../../styles/colors";
import { FontDefault } from "../../styles/main";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  background-color: ${SecondaryBGColor};

  margin-top: 80px;
  padding: 25px 80px;
`;

export const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BrandName = styled(FontDefault)`
  margin-right: 20px;
`;
