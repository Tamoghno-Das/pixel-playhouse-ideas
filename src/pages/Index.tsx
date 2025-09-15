import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
