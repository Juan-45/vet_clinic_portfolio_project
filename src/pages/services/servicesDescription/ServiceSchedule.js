import {
  LargeContainerFlex,
  ResponsiveItemsContainer,
  ItemTitle,
  ItemDescription,
  HighlightRed,
  HighlightBlue,
  AfterSquareContainer,
} from "components/CommonStyles";
import ProminentTitle from "components/ProminentTitle";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

const InnerContainer = styled(AfterSquareContainer)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  "& .infoContainer:last-child": {
    marginBottom: "0px",
  },
});

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
    <LargeContainerFlex className='sidePadding bottomSpace'>
      <ProminentTitle>Nuestros horarios</ProminentTitle>
      <InnerContainer className='secondary oversized'>
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
    </LargeContainerFlex>
  );
};

export default ServiceSchedule;
