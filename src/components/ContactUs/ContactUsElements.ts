import styled from "styled-components";
import { StylesConfig } from "react-select";

interface GroupProps {
  width?: string;
}

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
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
  padding: 25px 0;
`;

// react-select custom style
export const colourStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "#FEEA83",
    borderColor: "#000000",
    fontFamily: "Roboto",
    boxShadow: "none",
    border: "1px solid #000000",
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: "#FEEA83",
    borderColor: "#000000",
  }),
  option: (styles, { isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isSelected
        ? "#F9DD97"
        : isFocused
        ? "#EBD980"
        : undefined,
      color: "#000000",

      ":active": {
        ...styles[":active"],
        backgroundColor: isSelected ? "#EBD980" : "#C9BA6E",
      },
    };
  },
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: (styles) => ({ ...styles, color: "#000000" }),
  container: (styles) => ({ ...styles, borderColor: "#000000" }),
};
