/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { dstServices } from '@/data/service-section/v1/service-list-page';
import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { ServiceDetailsSection } from '@/src/sections/service-details/v1';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page() {
  const { id } = useParams();
  const [serviceData, setServiceData] = useState<any>(null);

  useEffect(() => {
    // Find the service that matches the id (name) from URL params
    const currentService: any = dstServices.find(
      (service) => service.name === id
    );
    setServiceData(currentService);
    console.log(currentService, 'currentService');
  }, [id]);

  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title={
          serviceData
            ? `${serviceData.name.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}`
            : 'Service Details'
        }
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: serviceData
              ? `${serviceData.name.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}`
              : id,
          },
        ]}
        serviceImage={serviceData?.imageStart}
      />
      {serviceData && (
        <ServiceDetailsSection
          title={serviceData.name
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (l: string) => l.toUpperCase())}
          description={serviceData.long}
          shortDescription={serviceData.short}
          subsections={serviceData.subsections}
          startImage={serviceData.imageStart}
          endImage={serviceData.imageEnd}
        />
      )}
      <Footer />
    </>
  );
}
