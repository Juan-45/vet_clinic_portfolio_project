import { LargeContainer, Title } from "components/CommonStyles";
import ProminentTextSection from "components/ProminentTextSection";
import {
  InnerContainer,
  ParagraphContainer,
  Paragraph,
} from "components/prominentTextSection/Styles";

const Team = () => (
  <LargeContainer>
    <ProminentTextSection>
      <Title variant='h1'>Nuestra equipo</Title>
      <InnerContainer className='innerContainerNoImg oversized secondary'>
        <ParagraphContainer>
          <Paragraph>
            En PetPaw, nuestro equipo está compuesto por veterinarios y técnicos
            altamente capacitados que están comprometidos con el bienestar de
            tus mascotas. Cada miembro del equipo ha sido cuidadosamente
            seleccionado no solo por su experiencia y habilidades, sino también
            por su amor y pasión por los animales. Sabemos que las mascotas son
            miembros importantes de tu familia, por lo que nos aseguramos de que
            nuestro personal brinde el más alto nivel de atención y cuidado.
          </Paragraph>
          <Paragraph>
            Además, nuestro equipo no solo se enfoca en el cuidado médico de tus
            mascotas, sino también en asegurarse de que tu experiencia en PetPaw
            sea lo más positiva y cómoda posible. Estamos aquí para responder
            cualquier pregunta que puedas tener, proporcionar orientación y
            asesoramiento, y hacer de tu visita a nuestra clínica una
            experiencia agradable.
          </Paragraph>
        </ParagraphContainer>
      </InnerContainer>
    </ProminentTextSection>
  </LargeContainer>
);

export default Team;
