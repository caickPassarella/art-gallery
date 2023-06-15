import {
  FormContainer,
  FormGroup,
  Label,
  Input,
  TextArea,
  Button,
  HorizontalGroup,
} from "./ContactUsElements";

import { SectionTitle } from "../";

export const ContactUs: React.FC = () => {
  return (
    <>
      <SectionTitle
        title="Contact Us"
        subtitle="Have any suggestions or general feedback? Let us know!"
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
        <FormGroup>
          <Label htmlFor="type">Type:</Label>
          <select id="type" required>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message:</Label>
          <TextArea id="message" required />
        </FormGroup>
        <Button type="submit">Send</Button>
      </FormContainer>
    </>
  );
};
