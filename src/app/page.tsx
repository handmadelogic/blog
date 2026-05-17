import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LatestPosts from "@/components/LatestPosts";
import Workshop from "@/components/Workshop";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-[1440px] bg-[rgb(241,236,220)]" style={{backgroundImage: 'radial-gradient(circle, rgba(42, 24, 37, 0.13) 1px, rgba(0, 0, 0, 0) 1.2px)', backgroundSize: '22px 22px'}}>
      <Nav />
      <Hero />
      <LatestPosts />
      <Workshop />
      <About />
      <Footer />
    </div>
  );
}
