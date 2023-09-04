import styled from "styled-components";
import { SecondaryBGColor } from "../../styles/colors";
import { FontDefault } from "../../styles/main";

// Change flex to column when in lower res
export const Wrapper = styled.section`
  display: flex;
  margin-top: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${SecondaryBGColor};
`;

export const Container = styled.div`
  padding: 25px 40px;
  flex: 1;
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
