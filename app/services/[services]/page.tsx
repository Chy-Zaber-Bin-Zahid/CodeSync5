import Intro from "@/components/dynamicServices/Intro";
import WhyMatters from "@/components/dynamicServices/WhyMatters";
import WhyUs from "@/components/dynamicServices/WhyUs";
import { services } from "@/utils/services";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface ServicePageProps {
  params: {
    services: string;
  };
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.services);

  if (!service) {
    return {
      title: "Service Not Found | CodeSync5 LTD",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.name} | CodeSync5 LTD`,
    description: `Learn about our ${service.name} services at CodeSync5 LTD`,
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    services: service.slug,
  }));
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.services);

  if (!service) {
    return notFound();
  }

  return (
    <section className="w-full flex flex-col gap-14 justify-center items-center">
      <Intro service={service} />
      <WhyUs service={service} />
      <WhyMatters service={service} />
    </section>
  );
}