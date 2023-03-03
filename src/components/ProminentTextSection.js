import { Container } from "components/prominentTextSection/Styles";

const ProminentTextSection = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

export default ProminentTextSection;
