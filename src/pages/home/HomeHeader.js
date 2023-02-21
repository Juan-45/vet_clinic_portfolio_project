import PropTypes from "prop-types";
import Header from "components/Header";
import PageLink from "components/PageLink";
import {
  TextContainer,
  Blurb,
  SecondaryText,
  LinkContainer,
} from "components/header/Styles";
import { HighlightRed, HighlightBlue } from "components/CommonStyles";
import home_1920x1110_c from "assets/home_1920x1110_c.jpg";
import home_1200x800_c from "assets/home_1200x800_c.jpg";
import home_900x600_c from "assets/home_900x600_c.jpg";

const HomeHeader = ({ linkUrl }) => {
  return (
    <Header
      src={home_1920x1110_c}
      sourceOptions={[
        { media: "(min-width: 1200px)", srcset: home_1920x1110_c },
        { media: "(min-width: 900px)", srcset: home_1200x800_c },
        { media: "(max-width: 900px)", srcset: home_900x600_c },
      ]}
    >
      <TextContainer>
        <Blurb variant='h1' color='primary'>
          <HighlightBlue>Pet Paw</HighlightBlue>, el lugar donde cuidamos de tu
          mejor amigo.
        </Blurb>
      </TextContainer>
      <TextContainer>
        <SecondaryText color='primary'>
          Servicios de vacunación, exámenes, tratamientos, baños, corte de uñas,
          peluquería y limpieza dental.{" "}
          <HighlightRed>Atendemos emergencias las 24hs.</HighlightRed>
        </SecondaryText>
      </TextContainer>
      <LinkContainer>
        <PageLink to={linkUrl}>Solicitar un turno</PageLink>
      </LinkContainer>
    </Header>
  );
};

HomeHeader.propTypes = {
  linkUrl: PropTypes.string.isRequired,
};

export default HomeHeader;
