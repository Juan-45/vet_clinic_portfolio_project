import { AccordionSummary, AccordionDetails } from "@mui/material";
import { StyledAccordion, Title } from "pages/faq/faqSection/Styles";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import { useState } from "react";

const ParentAccordion = ({ title, children }) => {
  const [expand, setExpand] = useState(false);

  const expandHandler = () => setExpand(!expand);

  return (
    <StyledAccordion
      className='parent'
      expanded={expand}
      onChange={expandHandler}
    >
      <AccordionSummary
        className='parent'
        expandIcon={
          expand ? (
            <RemoveCircleOutlineOutlinedIcon />
          ) : (
            <AddCircleOutlineOutlinedIcon />
          )
        }
      >
        <Title className='parent'>{title}</Title>
      </AccordionSummary>
      <AccordionDetails className='parent'>{children}</AccordionDetails>
    </StyledAccordion>
  );
};

export default ParentAccordion;
