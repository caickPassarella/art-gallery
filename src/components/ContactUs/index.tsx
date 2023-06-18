import Select, { StylesConfig } from "react-select";
import { SectionTitle, Button } from "../";

import {
  FormContainer,
  FormGroup,
  Label,
  Input,
  TextArea,
  HorizontalGroup,
  ButtonWrapper,
} from "./ContactUsElements";

const colourStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "#FEEA83",
    borderColor: "#000000",
    fontFamily: "Roboto",
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
  indicatorSeparator: (styles) => ({
    ...styles,
    color: "#000000",
  }),
  container: (styles, { isFocused }) => ({
    ...styles,
    borderColor: "#000000",
  }),
};

export const ContactUs: React.FC = () => {
  const options = [
    { value: "suggestion", label: "Suggestion" },
    { value: "bug", label: "Bug" },
    { value: "general", label: "General" },
  ];

  return (
    <>
      <SectionTitle
        title="Contact Us"
        subtitle="Have any inquiries, suggestions, or general feedback? Let us know! "
        type="Section"
      />
      <FormContainer>
        <HorizontalGroup>
          <FormGroup>
            <Label htmlFor="name">Name:</Label>
            <Input type="text" id="name" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input type="email" id="email" required />
          </FormGroup>
        </HorizontalGroup>
        <FormGroup width="30%">
          <Label htmlFor="type">Type:</Label>
          <Select
            defaultValue={options[0]}
            styles={colourStyles}
            options={options}
          ></Select>
        </FormGroup>
        <FormGroup width="100%">
          <Label htmlFor="message">Message:</Label>
          <TextArea id="message" required />
        </FormGroup>
        <ButtonWrapper>
          <Button>Send form</Button>
        </ButtonWrapper>
      </FormContainer>
    </>
  );
};
