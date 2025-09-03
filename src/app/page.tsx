import About from "@/components/About";
import Contact from "@/components/Contact";
import Courses from "@/components/Courses";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <FAQ />
      <Form />
      <Contact />
      <Footer />
    </main>
  );
}
