import './Homepage.scss';
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Activity from "../../components/Activity/Activity";
import Services from "../../components/Services/Services";
import Footer from '../../components/Footer/Footer';

function Homepage() {
  return (
    <>
    <Header />
    <Hero />
    <Activity />
    <Services />
    <Footer />
    </>
  );
}

export default Homepage;
