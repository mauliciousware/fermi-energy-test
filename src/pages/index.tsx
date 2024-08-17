import Layout from "@theme/Layout";
import HeroHome from "../components/hero-home";
import Cta from "../components/cta";
import AboutUs from "../components/about-us";
import Pricing from "../components/pricing";
import MeetFounders from "../components/meet-founders";
import ValueProp from "../components/value-prop";

export default function Home(): JSX.Element {
  return (
    <Layout title="Home" description="The World's Most Transparent Dev Agnecy">
      <HeroHome />
      <ValueProp />
      <Pricing />
      <AboutUs />
      <MeetFounders />
      <Cta />
    </Layout>
  );
}
