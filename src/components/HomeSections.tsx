import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Compare from "@/components/Compare";
import Production from "@/components/Production";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomeSections() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Process />
        <About />
        <Production />
        <Compare />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
