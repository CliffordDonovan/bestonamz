'use client';

import { useEffect, useState } from 'react';
import ProductPageLayout from '@/components/ProductPageLayout';
import { productData } from './productData';  // Import product data for this specific page
import { pageContent } from './pageContent';  // Import page content for this specific page

export default function CategoryPage() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading (if needed for locale detection)
  useEffect(() => {
    const determineAmazonDomain = () => {
      // Simulate delay for UX purposes (if you decide to handle locale here later)
      setIsLoading(false);
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

  return (
    <ProductPageLayout
      productData={productData}
      pageContent={pageContent}
    />
  );
}
