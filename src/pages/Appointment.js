import AppointmentHeader from "pages/appointment/AppointmentHeader";
import Divider from "components/Divider";
import { Title, HighlightRed, LargeContainer } from "components/CommonStyles";
import ProminentTextSection from "components/ProminentTextSection";
import {
  InnerContainer,
  ParagraphContainer,
  Paragraph,
} from "components/prominentTextSection/Styles";
import Form from "pages/appointment/Form";

const Appointment = () => (
  <>
    <AppointmentHeader />
    <Divider />
    <LargeContainer className='bottomSpace'>
      <ProminentTextSection>
        <Title variant='h1'>Solicita un turno</Title>
        <InnerContainer className='oversized secondary'>
          <ParagraphContainer>
            <Paragraph>
              Ahorre tiempo y evite esperas con nuestra opción de agendamiento
              en línea. El siguiente formulario es para que elija un turno
              disponible, si se trata de una emergencia no agende un turno llame
              a <HighlightRed>555-555-555</HighlightRed>.
            </Paragraph>
          </ParagraphContainer>
        </InnerContainer>
      </ProminentTextSection>
    </LargeContainer>
    <Form />
    <Divider />
  </>
);

export default Appointment;
