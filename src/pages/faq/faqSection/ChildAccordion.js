import { AccordionSummary, AccordionDetails } from "@mui/material";
import { StyledAccordion, Title } from "pages/faq/faqSection/Styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ChildAccordion = ({ title, children }) => (
  <StyledAccordion className='child'>
    <AccordionSummary className='child' expandIcon={<ExpandMoreIcon />}>
      <Title className='child'>{title}</Title>
    </AccordionSummary>
    <AccordionDetails className='child'>{children}</AccordionDetails>
  </StyledAccordion>
);

export default ChildAccordion;
