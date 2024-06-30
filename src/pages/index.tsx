import Layout from "@theme/Layout";
import HeroHome from "../components/hero-home";
import FeaturesHome from "../components/features-home";
import AboutMe from "../components/about-me";
import Cta from "../components/cta";

export default function Home(): JSX.Element {
  return (
    <Layout title="Home" description="The World's Most Transparent Dev Agnecy">
      <HeroHome />
      <FeaturesHome />
      <AboutMe />
      <Cta />
    </Layout>
  );
}
