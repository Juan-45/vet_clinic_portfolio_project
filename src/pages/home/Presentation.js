import PropTypes from "prop-types";
import { LargeContainer } from "components/CommonStyles";
import ProminentTextSection from "components/ProminentTextSection";
import {
  InnerContainer,
  ParagraphContainer,
  Paragraph,
  ImgPositioning,
  ImageContainer,
  StyledImg,
  Bold,
} from "components/prominentTextSection/Styles";
import PageLink from "components/PageLink";
import { FlexRowCenter, Title } from "components/CommonStyles";
import happy_dog_500x334_c from "assets/happy-dog_500x334_c.jpg";

const Presentation = ({ links }) => {
  return (
    <LargeContainer sx={{ marginBottom: "100px" }}>
      <ProminentTextSection>
        <Title variant='h1'>
          Confía en PetPaw para el cuidado de tu mascota
        </Title>
        <InnerContainer className='innerContainerWithImg'>
          <ParagraphContainer className='paragraphContainerBesideImg'>
            <Paragraph>
              Somos una clínica veterinaria de primer nivel con más de{" "}
              <Bold>20 años de experiencia</Bold>. Nuestro equipo altamente
              capacitado ofrece <Bold>servicios médicos de alta calidad</Bold> y
              atención personalizada para cada mascota. Desde vacunación y
              exámenes de rutina hasta tratamientos y emergencias las 24 horas,
              estamos aquí para cuidar a tu compañero.{" "}
              <Bold>Contáctanos hoy para programar una cita.</Bold>
            </Paragraph>
            <FlexRowCenter>
              <PageLink sx={{ marginRight: "32px" }} to={links.appointment}>
                Solicitar turno
              </PageLink>
              <PageLink sx={{ marginRight: "32px" }} to={links.contact}>
                Contáctanos
              </PageLink>
            </FlexRowCenter>
          </ParagraphContainer>
          <ImgPositioning>
            <ImageContainer src={happy_dog_500x334_c}>
              <StyledImg src={happy_dog_500x334_c} alt='test' />
            </ImageContainer>
          </ImgPositioning>
        </InnerContainer>
      </ProminentTextSection>
    </LargeContainer>
  );
};

Presentation.propTypes = {
  links: PropTypes.shape({
    appointment: PropTypes.string,
    contact: PropTypes.string,
  }).isRequired,
};

export default Presentation;
