import Header from "components/Header";
import { TextContainer, Blurb } from "components/header/Styles";
import faq1920x780_c from "assets/faq1920x780_c.jpg";
import faq_1200x494_c from "assets/faq_1200x494_c.jpg";
import faq_900x369_c from "assets/faq_900x369_c.jpg";

const FaqHeader = () => {
  return (
    <Header
      src={faq1920x780_c}
      sourceOptions={[
        { media: "(min-width: 1200px)", srcset: faq1920x780_c },
        { media: "(min-width: 900px)", srcset: faq_1200x494_c },
        { media: "(max-width: 900px)", srcset: faq_900x369_c },
      ]}
    >
      <TextContainer>
        <Blurb variant='h1' color='primary'>
          Preguntas frecuentes.
        </Blurb>
      </TextContainer>
    </Header>
  );
};

export default FaqHeader;
