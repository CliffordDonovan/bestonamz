import ProductPageLayout from '@/components/ProductPageLayout';
import { productData } from './productData';  // Correct import for product data
import { pageContent } from './pageContent';  // Correct import for page content

export default function RobotVacuumPage() {
  return <ProductPageLayout productData={productData} pageContent={pageContent} />;
}
