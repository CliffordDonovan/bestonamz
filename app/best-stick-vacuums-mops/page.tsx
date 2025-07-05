'use client';

import { useEffect, useState } from 'react';
import ProductPageLayout from '@/components/ProductPageLayout';
import { productData } from './productData';  // Import product data for this specific page
import { pageContent } from './pageContent';  // Import page content for this specific page

export default function CategoryPage() {
  const [amazonDomain, setAmazonDomain] = useState('amazon.com');
  const [isLoading, setIsLoading] = useState(true);

  // Detect region for Amazon
  useEffect(() => {
    const determineAmazonDomain = () => {
      try {
        const region = navigator.language.includes('en-CA') ? 'ca' : 'com';
        setAmazonDomain(`amazon.${region}`);
      } catch (error) {
        console.error('Error determining region:', error);
        setAmazonDomain('amazon.com'); // fallback
      } finally {
        setIsLoading(false);
      }
    };

    determineAmazonDomain();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // Return the layout with productData and pageContent
  return <ProductPageLayout productData={productData} pageContent={pageContent} amazonDomain={amazonDomain} />;
}
