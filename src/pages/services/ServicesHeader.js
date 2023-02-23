import Header from "components/Header";
import { TextContainer, Blurb } from "components/header/Styles";
import { HighlightBlue } from "components/CommonStyles";
import services_1920x780_c from "assets/services_1920x780_c.jpg";
import services_1200x494_c from "assets/services_1200x494_c.jpg";
import services_900x369_c from "assets/services_900x369_c.jpg";

const ServicesHeader = () => {
  return (
    <Header
      src={services_1920x780_c}
      sourceOptions={[
        { media: "(min-width: 1200px)", srcset: services_1920x780_c },
        { media: "(min-width: 900px)", srcset: services_1200x494_c },
        { media: "(max-width: 900px)", srcset: services_900x369_c },
      ]}
    >
      <TextContainer>
        <Blurb variant='h1' color='primary'>
          Cuidado <HighlightBlue>completo</HighlightBlue> para mascotas.
        </Blurb>
      </TextContainer>
    </Header>
  );
};

export default ServicesHeader;
