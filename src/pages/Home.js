import HomeHeader from "pages/home/HomeHeader";
import Divider from "components/Divider";
import Presentation from "pages/home/Presentation";
import MainServices from "pages/home/MainServices";

const Home = ({ links }) => {
  return (
    <>
      <HomeHeader linkUrl={links.appointment} />
      <Divider />
      <Presentation links={links} />
      <MainServices links={links} />
      <Divider />
    </>
  );
};

export default Home;
