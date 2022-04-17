import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-5 mx-auto">
      <h1 className="text-center text-4xl my-10 font-bold text-blue-500">
        Make sure you join our <br />
        catering subscription and lead a healthy life
      </h1>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
