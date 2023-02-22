import { LargeContainer, Title } from "components/CommonStyles";
import ProminentTextSection from "components/ProminentTextSection";
import {
  InnerContainer,
  ParagraphContainer,
  Paragraph,
} from "components/prominentTextSection/Styles";

const Story = () => (
  <LargeContainer>
    <ProminentTextSection>
      <Title variant='h1'>Nuestra historia</Title>
      <InnerContainer className='innerContainerNoImg'>
        <ParagraphContainer>
          <Paragraph>
            La historia de PetPaw comienza hace más de dos décadas, cuando un
            grupo de veterinarios se dio cuenta de la falta de clínicas
            especializadas en el cuidado de mascotas en la región. Se
            propusieron crear una clínica que no solo brindara servicios médicos
            de alta calidad, sino que también fuera un lugar donde los dueños de
            mascotas pudieran sentirse cómodos y seguros dejando a sus
            compañeros peludos.
          </Paragraph>
          <Paragraph>
            Después de mucho trabajo y esfuerzo, la clínica finalmente abrió sus
            puertas, con un equipo de profesionales altamente capacitados y
            apasionados por el bienestar de las mascotas. Desde entonces, PetPaw
            se ha ganado una excelente reputación en la región, no solo por sus
            servicios médicos de primer nivel, sino también por su compromiso
            con la comunidad y el cuidado de los animales.
          </Paragraph>
          <Paragraph>
            A lo largo de los años, PetPaw ha seguido creciendo y expandiendo
            sus servicios. La clínica ha incorporado tecnología de vanguardia y
            ha ampliado su equipo con los mejores profesionales del área,
            siempre con el objetivo de brindar a los clientes la mejor atención
            posible.
          </Paragraph>
          <Paragraph>
            Hoy en día, PetPaw es un referente en el cuidado de mascotas en la
            región, y es el lugar al que acuden los dueños de mascotas para
            recibir atención médica de alta calidad, además de contar con un
            equipo amigable y acogedor. La clínica sigue comprometida con su
            misión de brindar el mejor cuidado posible a cada mascota que entra
            por sus puertas.
          </Paragraph>
        </ParagraphContainer>
      </InnerContainer>
    </ProminentTextSection>
  </LargeContainer>
);

export default Story;
