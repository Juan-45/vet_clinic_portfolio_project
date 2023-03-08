import ProminentTitle from "components/ProminentTitle";
import { LargeContainer } from "components/CommonStyles";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { AccordionContainer } from "pages/faq/faqSection/Styles";
import ParentAccordion from "pages/faq/faqSection/ParentAccordion";
import ChildAccordion from "pages/faq/faqSection/ChildAccordion";

const FaqSection = () => {
  return (
    <LargeContainer className='sidePadding'>
      <Box sx={{ width: "100%" }}>
        <ProminentTitle className='extraBottomSpace'>
          Preguntas frecuentes y respuestas
        </ProminentTitle>
      </Box>
      <AccordionContainer>
        <ParentAccordion title='Horarios'>
          <ChildAccordion title='¿Qué horarios de atención tiene PetPaw?'>
            <Typography>
              PetPaw tiene servicio de atención médica las 24 horas con servicio
              de emergencia y servicios de estética y aseo con horarios
              específicos. Por favor, vaya a la sección de servicios en este
              sitio web para informarse acerca de los horarios y días de
              atención.
            </Typography>
          </ChildAccordion>
        </ParentAccordion>
        <ParentAccordion title='Servicios'>
          <ChildAccordion title='¿Se atienden emergencias?'>
            <Typography>
              Sí, en PetPaw contamos con servicio de emergencia las 24 horas del
              día con ambulancia para atender a tu mascota en situaciones
              críticas. No dudes en contactarnos en caso de necesitar atención
              inmediata al 555-555-555.
            </Typography>
          </ChildAccordion>
          <ChildAccordion title='¿Se realizan vacunaciones?'>
            <Typography>
              ¡Sí! En PetPaw ofrecemos servicios de vacunación para mantener a
              tu mascota saludable y protegida contra enfermedades comunes.
              Contáctanos para programar una cita.
            </Typography>
          </ChildAccordion>
          <ChildAccordion title='¿Se realizan servicios de limpieza dental?'>
            <Typography>
              Sí, en PetPaw realizamos servicios de limpieza dental para
              mascotas. Este procedimiento es esencial para prevenir
              enfermedades bucales y mantener la salud dental de tu compañero
              peludo. Contáctanos para programar una cita.
            </Typography>
          </ChildAccordion>
        </ParentAccordion>
        <ParentAccordion title='Otros'>
          <ChildAccordion title='¿Que pasa si no cuento con el efectivo para pagar la atención médica?'>
            <Typography>
              Tenemos opciones de pago flexibles y trabajamos con compañías de
              seguros para ayudarte a cubrir los costos de la atención médica.
              Si tienes preocupaciones sobre el costo, no dudes en hablar con
              uno de nuestros representantes de atención al cliente. Estamos
              comprometidos a ayudarte a encontrar una solución que te permita
              brindarle a tu mascota la atención que necesita.
            </Typography>
          </ChildAccordion>
        </ParentAccordion>
      </AccordionContainer>
    </LargeContainer>
  );
};

export default FaqSection;
