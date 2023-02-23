import React from "react";
import {
  Container,
  MapContainer,
  InfoContainer,
  InfoItemContainer,
  StyledFlexRowCenter,
  StyledTypography,
  InfoText,
  FooterLink,
  Anchor,
} from "components/footer/Styles";
import { LargeContainerFlex } from "components/CommonStyles";
import { IconButton, Typography } from "@mui/material";
import Logo from "components/Logo";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = ({ homeUrl, imgUrl }, ref) => (
  <Container>
    <InfoContainer>
      <StyledFlexRowCenter>
        <Logo homeURL={homeUrl} src={imgUrl} alt='logo' />
      </StyledFlexRowCenter>
      <InfoItemContainer>
        <InfoText>Av. Pellegrini, 3200</InfoText>
        <InfoText>Santa Fe, Rosario</InfoText>
        <InfoText>Te. 444-444-444</InfoText>
        <InfoText>
          Te. emergencias
          <br /> 555-555-555
        </InfoText>
      </InfoItemContainer>
      {/*<InfoItemContainer>
        <FooterLink to='/?path=/story/stories-footer--playground'>
          <StyledTypography>Test test</StyledTypography>
        </FooterLink>
        <FooterLink to='/?path=/story/stories-footer--playground'>
          <StyledTypography>Test test</StyledTypography>
        </FooterLink>
</InfoItemContainer>*/}
      <StyledFlexRowCenter>
        <Anchor href='https://www.facebook.com/'>
          <IconButton aria-label='facebook'>
            <FacebookIcon />
          </IconButton>
        </Anchor>
        <Anchor href='https://www.instagram.com/'>
          <IconButton aria-label='instagram'>
            <InstagramIcon />
          </IconButton>
        </Anchor>
        <Anchor href='https://twitter.com/'>
          <IconButton aria-label='twitter'>
            <TwitterIcon />
          </IconButton>
        </Anchor>
        <Anchor href='https://www.youtube.com/'>
          <IconButton aria-label='you tube'>
            <YouTubeIcon />
          </IconButton>
        </Anchor>
      </StyledFlexRowCenter>
    </InfoContainer>
    <MapContainer ref={ref}>
      <Typography>CARGANDO . . . </Typography>
    </MapContainer>
    <LargeContainerFlex>
      <InfoText variant='h2' sx={{ width: "100%" }}>
        Créditos a los autores de las imágenes
      </InfoText>
      <InfoItemContainer className='attributionsContainer'>
        <FooterLink
          target='_blank'
          rel='noreferrer'
          to='https://www.freepik.com/free-photo/beautiful-black-cat-with-green-eyes-looking-camera_12305353.htm#query=cat%20and%20dog%20dark%20colors&position=32&from_view=search&track=ais'
          title='home header background'
        >
          <StyledTypography>Freepik - Image by wirestock</StyledTypography>
        </FooterLink>
        <FooterLink
          target='_blank'
          rel='noreferrer'
          to='https://www.freepik.com/free-photo/young-women-having-fun-with-dog-beach_29668815.htm#page=2&query=happy%20pet&position=41&from_view=search&track=ais'
          title='home presentation'
        >
          <StyledTypography>Freepik - Image by Freepik</StyledTypography>
        </FooterLink>
        <FooterLink
          target='_blank'
          rel='noreferrer'
          to='https://www.flaticon.com/free-icons/healthcare-and-medical'
          title='healthcare and medical icons'
        >
          <StyledTypography>
            Freepik - Image by srip - Flaticon
          </StyledTypography>
        </FooterLink>
        <FooterLink
          target='_blank'
          rel='noreferrer'
          to='https://www.flaticon.com/free-icons/clinic'
          title='clinic icons'
        >
          <StyledTypography>
            Freepik - Image by srip - Flaticon
          </StyledTypography>
        </FooterLink>
        <FooterLink
          target='_blank'
          rel='noreferrer'
          to='https://www.flaticon.com/free-icons/toothbrush'
          title='toothbrush icons'
        >
          <StyledTypography>
            Freepik - Image by srip - Flaticon
          </StyledTypography>
        </FooterLink>
        <FooterLink
          target='_blank'
          rel='noreferrer'
          to='https://www.flaticon.com/free-icons/health'
          title='health icons'
        >
          <StyledTypography>
            Freepik - Image by srip - Flaticon
          </StyledTypography>
        </FooterLink>
      </InfoItemContainer>
      <InfoItemContainer className='attributionsContainer'>
        <FooterLink
          target='_blank'
          rel='noreferrer'
          to='https://www.freepik.com/free-photo/close-up-doctor-checking-up-dog_22892946.htm#page=3&query=bacl%20dog%20vet&position=16&from_view=search&track=ais'
          title='our story header background'
        >
          <StyledTypography>Freepik - Image by Freepik</StyledTypography>
        </FooterLink>
        <FooterLink
          target='_blank'
          rel='noreferrer'
          to='https://www.freepik.com/free-photo/close-up-veterinary-doctor-taking-care-pet_22548389.htm#query=veterinary%20clinic&position=0&from_view=search&track=ais'
          title='our team header background'
        >
          <StyledTypography>Freepik - Image by Freepik</StyledTypography>
        </FooterLink>
        <FooterLink
          target='_blank'
          rel='noreferrer'
          to='https://www.freepik.com/free-photo/medicine-pet-care-people-concept-dog-veterinarian-doctor-vet-clinic_8327046.htm#query=veterinary%20services&position=40&from_view=search&track=ais'
          title='services header background'
        >
          <StyledTypography>Freepik - Image by master1305</StyledTypography>
        </FooterLink>

        <FooterLink
          target='_blank'
          rel='noreferrer'
          to='https://www.freepik.com/free-photo/veterinarian-taking-care-pet_20823258.htm#query=vet%20vaccination&position=1&from_view=search&track=ais'
          title='service vaccination'
        >
          <StyledTypography>Freepik - Image by master1305</StyledTypography>
        </FooterLink>
        <FooterLink
          target='_blank'
          rel='noreferrer'
          to='https://www.freepik.com/free-photo/close-up-hands-checking-dog-s-mouth_22892943.htm#query=teeth%20cleaning%20vet&position=1&from_view=search&track=ais'
          title='service dental cleaning'
        >
          <StyledTypography>Freepik - Image by Freepik</StyledTypography>
        </FooterLink>
        <FooterLink
          target='_blank'
          rel='noreferrer'
          to='https://www.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_18397180.htm#query=vet%20treatments&position=13&from_view=search&track=ais'
          title='service exams'
        >
          <StyledTypography>Freepik - Image by Freepik</StyledTypography>
        </FooterLink>
      </InfoItemContainer>
      <InfoItemContainer className='attributionsContainer'>
        <FooterLink
          target='_blank'
          rel='noreferrer'
          to='https://www.freepik.com/free-photo/close-up-veterinary-doctor-taking-care-pet_22548409.htm#page=2&query=vet%20treatments&position=16&from_view=search&track=ais'
          title='treatments'
        >
          <StyledTypography>Freepik - Image by Freepik</StyledTypography>
        </FooterLink>
        <FooterLink
          target='_blank'
          rel='noreferrer'
          to='https://www.freepik.com/free-photo/ill-dog-wearing-pet-collar_12428638.htm#query=hospitalization%20pet&position=1&from_view=search&track=ais'
          title='hospitalization'
        >
          <StyledTypography>Freepik - Image by gpointstudio</StyledTypography>
        </FooterLink>
        <FooterLink
          target='_blank'
          rel='noreferrer'
          to='https://www.freepik.com/free-photo/cute-cat-medical-examination-veterinary-clinic-measuring-blood-pressure_30222145.htm#query=ambulance%20vet&position=1&from_view=search&track=ais'
          title='emergencies'
        >
          <StyledTypography>Freepik - Image by fxquadro</StyledTypography>
        </FooterLink>
        <FooterLink
          target='_blank'
          rel='noreferrer'
          to='https://www.freepik.com/free-photo/washing-process-small-dog-bathroom-dog-washed-by-professional_17066091.htm#query=pet%20bath%20vet&position=13&from_view=search&track=ais'
          title='bath'
        >
          <StyledTypography>Freepik - Image by prostooleh</StyledTypography>
        </FooterLink>
        <FooterLink
          target='_blank'
          rel='noreferrer'
          to='https://www.freepik.com/free-photo/close-up-hands-clipping-dog-s-nails_22892940.htm#query=vet%20nails&position=1&from_view=search&track=ais'
          title='clipping nails'
        >
          <StyledTypography>Freepik - Image by Freepik</StyledTypography>
        </FooterLink>

        <FooterLink
          target='_blank'
          rel='noreferrer'
          to='https://www.freepik.com/free-photo/yorkshire-terrier-getting-procedure-groomer-salon-young-woman-white-tshirt-trimming-little-dog-yorkshire-terrier-puppy-getting-haircut-with-shaving-machine_24440490.htm#query=vet%20hair%20cut&position=26&from_view=search&track=ais'
          title='haircut'
        >
          <StyledTypography>Freepik - Image by prostooleh</StyledTypography>
        </FooterLink>
      </InfoItemContainer>
    </LargeContainerFlex>
  </Container>
);

export default React.forwardRef(Footer);
