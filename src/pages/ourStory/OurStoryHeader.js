import Header from "components/Header";
import { TextContainer, Blurb } from "components/header/Styles";
import { HighlightBlue } from "components/CommonStyles";
import history_1920x780_c from "assets/history_1920x780_c.jpg";
import history_1200x494_c from "assets/history_1200x494_c.jpg";
import history_900x369_c from "assets/history_900x369_c.jpg";

const OurStoryHeader = () => {
  return (
    <Header
      src={history_1920x780_c}
      sourceOptions={[
        { media: "(min-width: 1200px)", srcset: history_1920x780_c },
        { media: "(min-width: 900px)", srcset: history_1200x494_c },
        { media: "(max-width: 900px)", srcset: history_900x369_c },
      ]}
    >
      <TextContainer>
        <Blurb variant='h1' color='primary'>
          <HighlightBlue>20 años</HighlightBlue> cuidando de tu mascota.
        </Blurb>
      </TextContainer>
    </Header>
  );
};

export default OurStoryHeader;
