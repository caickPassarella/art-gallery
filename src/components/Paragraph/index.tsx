import { P, PTitle, Container } from "./ParagraphElements";

type AboutUsProps = {
  title: string;
  text: string;
};

export const Paragraph = ({ title, text }: AboutUsProps) => {
  return (
    <Container>
      <PTitle>{title}</PTitle>
      <P>{text}</P>
    </Container>
  );
};
