import PropTypes from "prop-types";
import { Container, InnerContainer } from "components/header/Styles";
import BottomCurve from "components/BottomCurve";
import Background from "components/header/Background";
import { theme } from "theme/theme";

const Header = ({ children, ...props }) => {
  return (
    <Container>
      <Background {...props} />
      <InnerContainer>{children}</InnerContainer>
      <BottomCurve stopColor={theme.palette.secondary.light} />
    </Container>
  );
};

Header.prototype = {
  children: PropTypes.node,
  src: PropTypes.string,
  sourceOptions: PropTypes.arrayOf(
    PropTypes.shape({
      media: PropTypes.string,
      srcset: PropTypes.string,
    })
  ),
};

Header.defaultProps = {
  sourceOptions: {},
};

export default Header;
