import About from "@/components/About";
import Contact from "@/components/Contact";
import Courses from "@/components/Courses";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import News from "@/components/News";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <News />
      <About />
      <Courses />
      <Gallery />
      <Form />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
