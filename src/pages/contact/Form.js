import { LargeContainer, FlexRowCenter, Button } from "components/CommonStyles";
import {
  ResponsiveItemsContainer,
  ResponsiveInputContainer,
  TextField,
} from "components/CommonStyles";
import ProminentTitle from "components/ProminentTitle";
import { Box } from "@mui/material";

const Form = () => {
  return (
    <LargeContainer className='sidePadding'>
      <Box sx={{ width: "100%" }}>
        <ProminentTitle>Envíanos un mensaje</ProminentTitle>
      </Box>
      <ResponsiveItemsContainer className='bottomSpace'>
        <ResponsiveInputContainer className='max-3-columns'>
          <TextField label='Apellido y nombre' />
        </ResponsiveInputContainer>
        <ResponsiveInputContainer className='max-3-columns'>
          <TextField label='E-mail' />
        </ResponsiveInputContainer>
        <ResponsiveInputContainer className='max-3-columns'>
          <TextField label='Asunto' />
        </ResponsiveInputContainer>
        <ResponsiveInputContainer className='fullWidth'>
          <TextField
            multiline
            rows={6}
            label='Describe brevemente lo que necesitas'
          />
        </ResponsiveInputContainer>
      </ResponsiveItemsContainer>
      <FlexRowCenter>
        <Button>Enviar</Button>
      </FlexRowCenter>
    </LargeContainer>
  );
};

export default Form;
