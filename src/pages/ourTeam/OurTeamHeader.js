import Header from "components/Header";
import { TextContainer, Blurb } from "components/header/Styles";
import { HighlightBlue } from "components/CommonStyles";
import team_1920x780_c from "assets/team_1920x780_c.jpg";
import team_1200x494_c from "assets/team_1200x494_c.jpg";
import team_900x369_c from "assets/team_900x369_c.jpg";

const OurTeamHeader = () => {
  return (
    <Header
      src={team_1920x780_c}
      sourceOptions={[
        { media: "(min-width: 1200px)", srcset: team_1920x780_c },
        { media: "(min-width: 900px)", srcset: team_1200x494_c },
        { media: "(max-width: 900px)", srcset: team_900x369_c },
      ]}
    >
      <TextContainer>
        <Blurb variant='h1' color='primary'>
          Conoce a nuestro equipo de profesionales en{" "}
          <HighlightBlue>PetPaw</HighlightBlue>.
        </Blurb>
      </TextContainer>
    </Header>
  );
};

export default OurTeamHeader;
