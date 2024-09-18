import { services } from "@/utils/services";
import { notFound } from "next/navigation";

// 1. Add the generateStaticParams function
export async function generateStaticParams() {
  return services.map((services) => ({
    services: services.slug,
  }));
}

interface ServicePageProps {
  params: {
    services: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const services = services.find((s) => s.slug === params.services);

  if (!services) {
    return notFound();
  }

  return (
    <section className="w-full flex flex-col items-center py-12 px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">{services.name}</h1>
        <p className="text-lg mb-6">{services.description}</p>
      </div>
    </section>
  );
}
