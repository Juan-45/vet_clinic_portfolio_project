import PropTypes from "prop-types";
import Divider from "components/Divider";
import ServicesHeader from "pages/services/ServicesHeader";
import ServicesDescription from "pages/services/ServicesDescription";
import { FlexRowCenter } from "components/CommonStyles";
import PageLink from "components/PageLink";
import { theme } from "theme/theme";

const Services = ({ links }) => {
  return (
    <>
      <ServicesHeader />
      <Divider />
      <ServicesDescription />
      <FlexRowCenter>
        <PageLink
          to={links.appointment}
          sx={{
            width: "300px",
            display: "inline-block",
            background: theme.palette.ternary.medium,
          }}
        >
          Solicitar turno
        </PageLink>
      </FlexRowCenter>
      <Divider />
    </>
  );
};

Services.propTypes = {
  links: PropTypes.shape({
    appointment: PropTypes.string,
  }).isRequired,
};

export default Services;
