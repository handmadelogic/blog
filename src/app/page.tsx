import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LatestPosts from "@/components/LatestPosts";
import Workshop from "@/components/Workshop";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      {/* Content sections capped at 1440px; html provides full-bleed dotted bg */}
      <div className="w-full max-w-[1440px] mx-auto">
        <Hero />
        <LatestPosts />
        <Workshop />
        <About />
      </div>
      <Footer />
    </>
  );
}
