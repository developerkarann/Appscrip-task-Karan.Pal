import MidSections from "@/components/MidSections";
import ProductsSection from "@/components/ProductsSection";

export default async function Home() {

  const res = await fetch('https://shopclues-backend.vercel.app/api/products', { cache: "no-store" })
  const { products } = await res.json()

  // console.log(products.slice(0,2))

  return (
    <>
      <MidSections content={'DISCOVER OUR PRODUCTS'} />
      <ProductsSection products={products?.slice(0, 20)} />
    </>
  );
}
