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
    <section className="w-full flex flex-col items-center py-12 px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">{service.name}</h1>
        <p className="text-lg mb-6">{service.description}</p>
      </div>
    </section>
  );
}
