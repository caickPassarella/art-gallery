import Select from "react-select";
import { SectionTitle, Button } from "../";

import {
  FormContainer,
  FormGroup,
  Label,
  Input,
  TextArea,
  HorizontalGroup,
  ButtonWrapper,
  colourStyles,
} from "./ContactUsElements";

export const ContactUs: React.FC = () => {
  const options = [
    { value: "suggestion", label: "Suggestion" },
    { value: "bug", label: "Bug" },
    { value: "general", label: "General" },
  ];

  return (
    <FormContainer>
      <SectionTitle
        title="Contact Us"
        subtitle="Have any inquiries, suggestions, or general feedback? Let us know! "
        type="Section"
      />
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
  );
};
