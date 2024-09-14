// Assuming your folder is named [services] (not [service])

import React from 'react';

// Component for dynamic service pages
function ServicesDynamic({ params }: { params: { services: string } }) {
  return (
    <div>
      <h1>Service: {params.services}</h1>
    </div>
  );
}

export default ServicesDynamic;

// This function generates the static params for each service
export async function generateStaticParams() {
  const services = ['erp', 'qa', 'mobile', 'ui', 'team', 'devops'];

  return services.map(service => ({
    services: service,  // Match the folder name [services]
  }));
}
