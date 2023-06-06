import { P, PTitle, Container } from "./ParagraphElements";

type AboutUsProps = {
  title?: string;
  text: string;
};

export const Paragraph = ({ title, text }: AboutUsProps) => {
  return (
    <Container>
      {title ? <PTitle>{title}</PTitle> : null}
      <P>{text}</P>
    </Container>
  );
};
