import Header from "components/Header";
import { TextContainer, Blurb } from "components/header/Styles";
import { HighlightBlue } from "components/CommonStyles";
import ratings_1920x780_c from "assets/ratings_1920x780_c.jpg";
import ratings_1200x494_c from "assets/ratings_1200x494_c.jpg";
import ratings_900x369_c from "assets/ratings_900x369_c.jpg";

const RatingsHeader = () => {
  return (
    <Header
      src={ratings_1920x780_c}
      sourceOptions={[
        { media: "(min-width: 1200px)", srcset: ratings_1920x780_c },
        { media: "(min-width: 900px)", srcset: ratings_1200x494_c },
        { media: "(max-width: 900px)", srcset: ratings_900x369_c },
      ]}
    >
      <TextContainer>
        <Blurb variant='h1' color='primary'>
          Tu opinión es muy importante para nosotros,{" "}
          <HighlightBlue>calificanos</HighlightBlue>.
        </Blurb>
      </TextContainer>
    </Header>
  );
};

export default RatingsHeader;
