import { Button } from "@/components/ui/button";
import { Play, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/hero-gaming-setup.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Gaming Cafe Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-6">
            <span className="text-gradient-primary">NEXUS</span>
            <br />
            <span className="text-gradient-secondary">GAMING</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-inter font-light">
            Experience the ultimate gaming destination with cutting-edge PCs, 
            console gaming, VR adventures, and epic tournaments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="btn-neon text-lg px-8 py-6">
              <Play className="mr-2 h-5 w-5" />
              Start Gaming
            </Button>
            <Button size="lg" variant="outline" className="btn-ghost-neon text-lg px-8 py-6">
              <Calendar className="mr-2 h-5 w-5" />
              Book Session
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-gradient-primary mb-2">50+</div>
              <div className="text-muted-foreground">Gaming Stations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-gradient-secondary mb-2">24/7</div>
              <div className="text-muted-foreground">Open Hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-gradient-neon mb-2">1000+</div>
              <div className="text-muted-foreground">Happy Gamers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-pulse-glow"></div>
      <div className="absolute bottom-32 right-16 w-6 h-6 bg-secondary rounded-full animate-float"></div>
      <div className="absolute top-1/2 right-8 w-3 h-3 bg-accent rounded-full animate-pulse-glow"></div>
    </section>
  );
};

export default Hero;