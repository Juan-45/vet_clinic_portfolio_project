import Header from "components/Header";
import { TextContainer, Blurb } from "components/header/Styles";
import { HighlightBlue } from "components/CommonStyles";
import contact_1920x780_c from "assets/contact_1920x780_c.jpg";
import contact_1200x494_c from "assets/contact_1200x494_c.jpg";
import contact_900x369_c from "assets/contact_900x369_c.jpg";

const ContactHeader = () => {
  return (
    <Header
      src={contact_1920x780_c}
      sourceOptions={[
        { media: "(min-width: 1200px)", srcset: contact_1920x780_c },
        { media: "(min-width: 900px)", srcset: contact_1200x494_c },
        { media: "(max-width: 900px)", srcset: contact_900x369_c },
      ]}
    >
      <TextContainer>
        <Blurb variant='h1' color='primary'>
          <HighlightBlue>¡Contáctanos!</HighlightBlue> Estamos aquí para
          ayudarte
        </Blurb>
      </TextContainer>
    </Header>
  );
};

export default ContactHeader;
