import Intro from "@/components/dynamicServices/Intro";
import { services } from "@/utils/services";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return services.map((service) => ({
    services: service.slug,
  }));
}

interface ServicePageProps {
  params: {
    services: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.services);

  if (!service) {
    return notFound();
  }

  return (
    <section
      className="w-full mq-1300:flex justify-center items-center"
    >
      <Intro service={service} />
    </section>
  );
}
