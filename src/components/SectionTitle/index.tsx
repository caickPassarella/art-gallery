import { TitleContainer, Title, SubTitle } from "./SectionTitleElements";

type Props = {
  title: string;
  subtitle?: string;
  type: "Main" | "Section";
};

export const SectionTitle = ({ title, subtitle, type }: Props) => {
  return (
    <TitleContainer>
      <Title type={type}>{title}</Title>
      {subtitle ? <SubTitle type={type}>{subtitle}</SubTitle> : null}
    </TitleContainer>
  );
};
