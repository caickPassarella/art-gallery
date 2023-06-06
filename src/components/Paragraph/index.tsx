import { P, PTitle, Container } from "./ParagraphElements";

interface AboutUsProps {
  title?: string;
  text: string;
}

export const Paragraph: React.FC<AboutUsProps> = ({ title, text }) => {
  return (
    <Container>
      {title ? <PTitle>{title}</PTitle> : null}
      <P>{text}</P>
    </Container>
  );
};
