import { P, PTitle } from "./ParagraphElements";
import { Container } from "../index";

interface AboutUsProps {
  title?: string;
  text: string;
}

export const Paragraph: React.FC<AboutUsProps> = ({ title, text }) => {
  return (
    <Container align="flex-start">
      {title ? <PTitle>{title}</PTitle> : null}
      <P>{text}</P>
    </Container>
  );
};
