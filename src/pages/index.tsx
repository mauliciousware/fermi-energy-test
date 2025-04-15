import Layout from "@theme/Layout";
import HeroHome from "../components/hero-home";
import Cta from "../components/cta";
import AboutUs from "../components/about-us";
import Pricing from "../components/pricing";
import MeetFounders from "../components/meet-founders";
import ValueProp from "../components/value-prop";
import Testimonial from "../components/testimonial";
import MVPScope from "../components/mvp-scope";
import ProcessFlow from "../components/ProcessFlow"

export default function Home(): JSX.Element {

  return (
    <Layout title="Home" description="The World's Most Transparent Dev Agnecy">
      <HeroHome />
      <ValueProp />
      <Pricing />
      <MVPScope />
      <AboutUs />
      <Testimonial />
      <MeetFounders />
      
      {/* Hide ProcessFlow on mobile (screens smaller than md) */}
      <div className="hidden md:block">
        <ProcessFlow />
      </div>
      
      {/* Hide Cta on mobile (screens smaller than md) */}
      <div className="hidden md:block">
        <Cta />
      </div>
    </Layout>
  );
}
