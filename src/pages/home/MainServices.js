import PropTypes from "prop-types";
import { Box } from "@mui/material";
import PageLink from "components/PageLink";
import {
  FlexRowCenter,
  LargeContainerFlex,
  ResponsiveItemsContainer,
  ResponsiveContainer,
  ItemTitle,
  ItemDescription,
} from "components/CommonStyles";
import { HighlightRed } from "components/CommonStyles";
import ProminentTitle from "components/ProminentTitle";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/styled-engine";
import { useMediaQuery } from "@mui/material";
import vaccination from "assets/vaccination.png";
import toothbrush from "assets/toothbrush.png";
import bed from "assets/bed.png";
import ambulance from "assets/ambulance.png";
import useTriggerOnScroll from "hooks/useTriggerOnScroll";

const ANIMATION_TIME = 0.8;

const bounceIn = keyframes({
  "0%": {
    opacity: "0",
    transform: "scale(.3)",
  },
  "50%": {
    opacity: "1",
    transform: "scale(1.05)",
  },
  "70%": {
    transform: "scale(.9)",
  },
  "100%": {
    transform: "scale(1)",
    opacity: "1",
  },
});

const InfoContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "trigger" && prop !== "delay",
})(({ theme, trigger, delay }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  height: "100%",
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: theme.shadows[2],
  background: theme.palette.background.default,
  padding: theme.spacing(2),
  paddingTop: theme.spacing(3),
  opacity: 0,
  animation: trigger
    ? `${ANIMATION_TIME}s ease ${delay}s forwards ${bounceIn}`
    : "unset",
}));

const StyledImg = styled("img")(({ theme }) => ({
  objectFit: "cover",
  width: "80px",
  height: "80px",
  marginBottom: theme.spacing(3),
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
}));

const MainServices = ({ links }) => {
  const { targetEl: targetEl1, trigger: trigger1 } = useTriggerOnScroll();
  const { targetEl: targetEl2, trigger: trigger2 } = useTriggerOnScroll();
  const { targetEl: targetEl3, trigger: trigger3 } = useTriggerOnScroll();
  const { targetEl: targetEl4, trigger: trigger4 } = useTriggerOnScroll();

  const between600_899 = useMediaQuery(
    "(min-width: 600px) and (max-width:899px)"
  );

  const max599 = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const getDelayArr = ({ max599, between600_899 }) => {
    if (max599) {
      const results = [0, 0, 0, 0];
      return results;
    } else if (between600_899) {
      const results = [0, 0.3, 0, 0.3];
      return results;
    } else {
      const results = [0, 0.3, 0.6, 0.9];
      return results;
    }
  };

  return (
    <LargeContainerFlex className='sidePadding'>
      <ProminentTitle>Cuidados Integrales para tu Mascota</ProminentTitle>
      <ResponsiveItemsContainer>
        <ResponsiveContainer>
          <InfoContainer
            ref={targetEl1}
            trigger={trigger1}
            delay={getDelayArr({ max599, between600_899 })[0]}
          >
            <StyledImg src={vaccination} alt='vaccination' />
            <ItemTitle>Vacunaci??n.</ItemTitle>
            <ItemDescription>
              Entendemos la importancia de proteger a tu compa??ero. Porque un
              futuro saludable comienza con una prevenci??n efectiva.
            </ItemDescription>
          </InfoContainer>
        </ResponsiveContainer>
        <ResponsiveContainer>
          <InfoContainer
            ref={targetEl2}
            trigger={trigger2}
            delay={getDelayArr({ max599, between600_899 })[1]}
          >
            <StyledImg src={toothbrush} alt='dental health' />
            <ItemTitle>Salud dental.</ItemTitle>
            <ItemDescription>
              Prevenimos problemas dentales y mantenemos una boca saludable para
              una vida larga y feliz.
            </ItemDescription>
          </InfoContainer>
        </ResponsiveContainer>
        <ResponsiveContainer>
          <InfoContainer
            ref={targetEl3}
            trigger={trigger3}
            delay={getDelayArr({ max599, between600_899 })[2]}
          >
            <StyledImg src={bed} alt='admission' />
            <ItemTitle>Internaciones.</ItemTitle>
            <ItemDescription>
              Con un equipo altamente capacitado y un ambiente acogedor, tu
              mascota estar?? en buenas manos durante su recuperaci??n.
            </ItemDescription>
          </InfoContainer>
        </ResponsiveContainer>
        <ResponsiveContainer>
          <InfoContainer
            ref={targetEl4}
            trigger={trigger4}
            delay={getDelayArr({ max599, between600_899 })[3]}
          >
            <StyledImg src={ambulance} alt='emergency services 24 hours' />
            <ItemTitle>Servicio de emergencias 24 hs.</ItemTitle>
            <ItemDescription>
              Atendemos tu emergencia las 24/7: estamos aqu?? para proteger la
              salud de tu mascota.
            </ItemDescription>{" "}
            <HighlightRed sx={{ fontSize: "1.5rem", textAlign: "center" }}>
              Te: 555-555-555
            </HighlightRed>
          </InfoContainer>
        </ResponsiveContainer>
      </ResponsiveItemsContainer>
      <FlexRowCenter>
        <PageLink to={links.services} sx={{ marginRight: "32px" }}>
          Ver todo
        </PageLink>
        <PageLink to={links.appointment}>Solicitar turno</PageLink>
      </FlexRowCenter>
    </LargeContainerFlex>
  );
};

MainServices.propTypes = {
  links: PropTypes.shape({
    appointment: PropTypes.string,
    services: PropTypes.string,
  }).isRequired,
};

export default MainServices;
