import Image from "next/image";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Testimonial from "@/components/Testimonial";


export default function Home() {
  return (
    <main>
      <Hero />
      <Product/>
      <Testimonial/>
    </main>
  );
}
