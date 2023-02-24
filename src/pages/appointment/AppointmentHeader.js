import Header from "components/Header";
import { TextContainer, Blurb } from "components/header/Styles";
import { HighlightBlue } from "components/CommonStyles";
import appointment_1920x780_c from "assets/appointment_1920x780_c.jpg";
import appointment_1200x494_c from "assets/appointment_1200x494_c.jpg";
import appointment_900x369_c from "assets/appointment_900x369_c.jpg";

const AppointmentHeader = () => {
  return (
    <Header
      src={appointment_1920x780_c}
      sourceOptions={[
        { media: "(min-width: 1200px)", srcset: appointment_1920x780_c },
        { media: "(min-width: 900px)", srcset: appointment_1200x494_c },
        { media: "(max-width: 900px)", srcset: appointment_900x369_c },
      ]}
    >
      <TextContainer>
        <Blurb variant='h1' color='primary'>
          Agenda tu cita <HighlightBlue>ahora</HighlightBlue>.
        </Blurb>
      </TextContainer>
    </Header>
  );
};

export default AppointmentHeader;
