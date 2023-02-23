import {
  LargeContainerFlex,
  ResponsiveItemsContainer,
  ItemTitle,
  ItemDescription,
  HighlightRed,
  HighlightBlue,
} from "components/CommonStyles";
import ProminentTitle from "components/ProminentTitle";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

const InnerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  margin: "25px 25px 25px 0px",
  "&::after": {
    content: "''",
    position: "absolute",
    zIndex: 0,
    height: "calc(100% + 50px)",
    width: "80%",
    top: "-25px",
    right: "-25px",
    background: theme.palette.secondary.medium,
    boxShadow: theme.shadows[2],
  },
  "& .infoContainer:last-child": {
    marginBottom: "0px",
  },
}));

const InfoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  zIndex: 1,
  padding: theme.spacing(4),
  marginBottom: theme.spacing(5),
  background: theme.palette.ternary.medium,
  boxShadow: theme.shadows[2],
}));

const Title = ({ children }) => {
  const theme = useTheme();

  return (
    <ItemTitle sx={{ color: theme.palette.text.primary, textAlign: "left" }}>
      {children}
    </ItemTitle>
  );
};

const Description = styled(ItemDescription)(({ theme }) => ({
  color: theme.palette.text.primary,
  width: "fit-content",
  textAlign: "left",
}));

const Days = styled(Description)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

const BodyTextContainer = styled(ResponsiveItemsContainer)({
  paddingLeft: "0px",
});

const ServiceSchedule = () => {
  return (
    <LargeContainerFlex className='generic'>
      <ProminentTitle>Nuestros horarios</ProminentTitle>
      <ResponsiveItemsContainer>
        <InnerContainer>
          <InfoContainer className='infoContainer'>
            <Title>Atención médica</Title>
            <BodyTextContainer>
              <Days>De Lunes a Viernes:</Days>
              <Description>
                De 08:00 hs a 12:00 hs y de 16:00 hs a 20:00 hs
              </Description>
            </BodyTextContainer>
          </InfoContainer>
          <InfoContainer className='infoContainer'>
            <Title>Estética y aséo</Title>
            <BodyTextContainer>
              <Days>De Martes a Jueves:</Days>
              <Description>De 08:00 hs a 12:00 hs</Description>
            </BodyTextContainer>
          </InfoContainer>
          <InfoContainer className='infoContainer'>
            <Title>Servicio de emergencia con ambulancia</Title>
            <BodyTextContainer>
              <Description>
                Disponible las <HighlightBlue>24 horas</HighlightBlue> los{" "}
                <HighlightBlue>7 días de la semana</HighlightBlue>{" "}
                <HighlightRed>Te. 555-555-555</HighlightRed>
              </Description>
            </BodyTextContainer>
          </InfoContainer>
        </InnerContainer>
      </ResponsiveItemsContainer>
    </LargeContainerFlex>
  );
};

export default ServiceSchedule;
