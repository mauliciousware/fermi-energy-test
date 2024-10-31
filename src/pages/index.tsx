import Layout from "@theme/Layout";
import HeroHome from "../components/hero-home";
import Cta from "../components/cta";
import AboutUs from "../components/about-us";
import Pricing from "../components/pricing";
import MeetFounders from "../components/meet-founders";
import ValueProp from "../components/value-prop";
import Testimonial from "../components/testimonial";

export default function Home(): JSX.Element {
  const testimonials = [
    {
      img: '/img/Sabrina.png',
      quote: "I had an incredible experience working with the DevtoDollars Team. They were not only responsive and fully understood the vision but also made the entire process seamless. As a founder with without a technical background, I was nervous about diving into the tech side, but they were able to simplify everything in a way that was easy for me to understand. I truly appreciated their ability to make complex concepts accessible, and it made all the difference.",
      name: 'Sabrina Roy',
      role: 'CEO, Fluid Events'
    },
    {
      img: '/img/AmirReza.jpg',
      quote: "Working with DevtoDollars team was a great collaboration. Amirali was meticulous with details and demonstrated a strong sense of ownership over the final project outcome. Amirali consistently came up with creative ideas to save time during development without compromising the user experience. Additionally, he exhibited a technical cofounder's mentality, aiming to minimize costs on infrastructure and resources used to run the app. If you are seeking a dedicated and caring technical cofounder who can bring your idea to life, Amirali would be an excellent choice.",
      name: 'Amir Azimi',
      role: 'Senior Product Manager, JOIN'
    },
  ]

  return (
    <Layout title="Home" description="The World's Most Transparent Dev Agnecy">
      <HeroHome />
      <ValueProp />
      <Pricing />
      <AboutUs />
      <MeetFounders />
      <Testimonial testimonials={testimonials} />
      <Cta />
    </Layout>
  );
}
