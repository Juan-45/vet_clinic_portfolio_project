import PropTypes from "prop-types";
import {
  ResponsiveItemsContainer,
  ResponsiveInputContainer,
  TextField,
} from "components/CommonStyles";
import ProminentTitle from "components/ProminentTitle";
import { Autocomplete, Box } from "@mui/material";

const AppointmentSuscription = ({ pets, servicesTypes }) => (
  <ResponsiveItemsContainer className='bottomSpace'>
    <Box sx={{ width: "100%" }}>
      <ProminentTitle>Registra tus datos</ProminentTitle>
    </Box>
    <ResponsiveInputContainer className='max-2-columns'>
      <TextField label='Apellido y nombre' />
    </ResponsiveInputContainer>
    <ResponsiveInputContainer className='max-2-columns'>
      <TextField label='Nombre de la mascota' />
    </ResponsiveInputContainer>
    <ResponsiveInputContainer className='max-2-columns'>
      <TextField label='Teléfono' />
    </ResponsiveInputContainer>
    <ResponsiveInputContainer className='max-2-columns'>
      <TextField label='Email' />
    </ResponsiveInputContainer>
    <ResponsiveInputContainer className='max-3-columns'>
      <Autocomplete
        id='combo-box-1'
        options={pets}
        renderInput={(params) => (
          <TextField
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password",
            }}
            label='Tipo de mascota'
            {...params}
          />
        )}
      />
    </ResponsiveInputContainer>
    <ResponsiveInputContainer className='max-3-columns'>
      <TextField label='Si es "Otra" especifica' />
    </ResponsiveInputContainer>
    <ResponsiveInputContainer className='max-3-columns'>
      <Autocomplete
        id='combo-box-2'
        options={servicesTypes}
        renderInput={(params) => (
          <TextField
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password",
            }}
            label='Tipo de servicio'
            {...params}
          />
        )}
      />
    </ResponsiveInputContainer>
    <ResponsiveInputContainer className='fullWidth'>
      <TextField
        multiline
        rows={6}
        label='Describe brevemente lo que necesitas'
      />
    </ResponsiveInputContainer>
  </ResponsiveItemsContainer>
);

AppointmentSuscription.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,

  servicesTypes: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
};

export default AppointmentSuscription;
