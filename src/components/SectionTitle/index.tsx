import { TitleContainer, Title, SubTitle } from "./SectionTitleElements";

interface TitleProps {
  title: string;
  subtitle?: string;
  type: "Main" | "Section";
}

export const SectionTitle: React.FC<TitleProps> = ({
  title,
  subtitle,
  type,
}) => {
  return (
    <TitleContainer>
      <Title type={type}>{title}</Title>
      {subtitle ? <SubTitle type={type}>{subtitle}</SubTitle> : null}
    </TitleContainer>
  );
};
