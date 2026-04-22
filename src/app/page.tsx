import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Partners } from "@/components/sections/Partners";
import { Features } from "@/components/sections/Features";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Partners />
      <Features />
      <Testimonials />
      <FAQ />
    </>
  );
}
