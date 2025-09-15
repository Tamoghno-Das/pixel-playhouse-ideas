import { Monitor, Gamepad2, Headset, Trophy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import gamingPcImage from "@/assets/gaming-pc.jpg";
import vrGamingImage from "@/assets/vr-gaming.jpg";
import consoleGamingImage from "@/assets/console-gaming.jpg";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "High-End PC Gaming",
      description: "Experience gaming at its finest with RTX 4090 powered rigs, 240Hz monitors, and premium peripherals.",
      image: gamingPcImage,
      features: ["RTX 4090 Graphics", "240Hz Monitors", "Mechanical Keyboards", "Latest Games"]
    },
    {
      icon: Gamepad2,
      title: "Console Gaming",
      description: "Play the latest console exclusives on PS5, Xbox Series X, and Nintendo Switch in comfort.",
      image: consoleGamingImage,
      features: ["PS5 & Xbox Series X", "Nintendo Switch", "4K Gaming", "Comfortable Seating"]
    },
    {
      icon: Headset,
      title: "VR Adventures",
      description: "Immerse yourself in virtual worlds with our cutting-edge VR setups and vast game library.",
      image: vrGamingImage,
      features: ["Meta Quest Pro", "PICO 4 Enterprise", "Room-Scale VR", "100+ VR Games"]
    },
    {
      icon: Trophy,
      title: "Tournaments & Events",
      description: "Join competitive tournaments, gaming events, and community gatherings for prizes and glory.",
      image: gamingPcImage,
      features: ["Weekly Tournaments", "Cash Prizes", "Community Events", "Leaderboards"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-surface-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-orbitron font-bold mb-6">
            <span className="text-gradient-primary">Gaming</span>{" "}
            <span className="text-foreground">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your gaming experience from our premium selection of PC, console, VR, and competitive gaming options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="card-neon card-hover group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Icon className="h-8 w-8 text-primary glow-primary" />
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl font-orbitron text-gradient-primary">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;