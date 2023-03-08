import FaqHeader from "pages/faq/FaqHeader";
import Divider from "components/Divider";
import { Title, LargeContainer } from "components/CommonStyles";
import ProminentTextSection from "components/ProminentTextSection";
import {
  InnerContainer,
  ParagraphContainer,
  Paragraph,
} from "components/prominentTextSection/Styles";
import FaqSection from "pages/faq/FaqSection";

const Faq = () => (
  <>
    <FaqHeader />
    <Divider />
    <LargeContainer className='bottomSpace'>
      <ProminentTextSection>
        <Title variant='h1'>
          Resuelve tus dudas con nuestras preguntas frecuentes.
        </Title>
        <InnerContainer className='oversized secondary'>
          <ParagraphContainer>
            <Paragraph>
              Las preguntas frecuentes responden a las dudas más comunes que
              puedan tener nuestros clientes. Consultarlas puede ser de gran
              ayuda y ahorrar tiempo.
            </Paragraph>
          </ParagraphContainer>
        </InnerContainer>
      </ProminentTextSection>
    </LargeContainer>
    <FaqSection />
    <Divider />
  </>
);

export default Faq;
