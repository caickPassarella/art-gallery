import styled from "styled-components";

interface GroupProps {
  width?: string;
}

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 800px;
`;

export const FormGroup = styled.div<GroupProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : "45%")};
  margin-bottom: 20px;
`;

export const HorizontalGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.label`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 1.1em;
  width: 100px;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  border: 1px solid #000000;
  background: transparent;
  padding: 12px;
  border-radius: 6px;
`;

export const TextArea = styled.textarea`
  min-width: 100%;
  min-height: 180px;
  resize: none;
  border: 1px solid #000000;
  background: transparent;
  padding: 8px;
  border-radius: 6px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
