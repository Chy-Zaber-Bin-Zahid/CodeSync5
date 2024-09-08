import AboutUs from "@/components/about/AboutUs";
import Services from "@/components/about/Services";
import Statements from "@/components/about/Statements";
import Welcome from "@/components/about/Welcome";
import WhyChoose from "@/components/about/WhyChoose";

const Page = () => {
  return (
    <section className="mx-auto w-5/6 my-8">
      <Welcome />
      <AboutUs />
      <Statements />
      <Services />
      <WhyChoose />
    </section>
  );
};

export default Page;
