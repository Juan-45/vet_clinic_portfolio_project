import ContactHeader from "pages/contact/ContactHeader";
import Divider from "components/Divider";
import { Title, LargeContainer } from "components/CommonStyles";
import ProminentTextSection from "components/ProminentTextSection";
import {
  InnerContainer,
  ParagraphContainer,
  Paragraph,
} from "components/prominentTextSection/Styles";
import Form from "pages/contact/Form";

const Contact = () => (
  <>
    <ContactHeader />
    <Divider />
    <LargeContainer className='bottomSpace'>
      <ProminentTextSection>
        <Title variant='h1'>¿Tienes preguntas o inquietudes?</Title>
        <InnerContainer className='oversized secondary'>
          <ParagraphContainer>
            <Paragraph>
              Si tienes alguna duda, pregunta o simplemente deseas comunicarte
              con nosotros, ¡no dudes en contactarnos! En PetPaw estamos siempre
              disponibles para atenderte. Ya sea por teléfono, nuestro
              formulario de contacto o redes sociales, nuestro equipo estará
              encantado de ayudarte y brindarte la información que necesitas.
            </Paragraph>
          </ParagraphContainer>
        </InnerContainer>
      </ProminentTextSection>
    </LargeContainer>
    <Form />
    <Divider />
  </>
);

export default Contact;
