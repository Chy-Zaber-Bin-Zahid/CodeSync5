import { services } from "@/utils/service";
import { notFound } from "next/navigation";

// 1. Add the generateStaticParams function
export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }));
}

interface ServicePageProps {
  params: {
    service: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.service);

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
