import { Monitor, Gamepad2, Headset, Trophy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
      features: ["RTX 4090 Graphics", "240Hz Monitors", "Mechanical Keyboards", "Latest Games"],
      pricing: [
        { plan: "Hourly Rate", price: "$8", period: "per hour", popular: false },
        { plan: "Day Pass", price: "$25", period: "per day", popular: true },
        { plan: "Monthly Unlimited", price: "$150", period: "per month", popular: false }
      ]
    },
    {
      icon: Gamepad2,
      title: "Console Gaming",
      description: "Play the latest console exclusives on PS5, Xbox Series X, and Nintendo Switch in comfort.",
      image: consoleGamingImage,
      features: ["PS5 & Xbox Series X", "Nintendo Switch", "4K Gaming", "Comfortable Seating"],
      pricing: [
        { plan: "Hourly Rate", price: "$6", period: "per hour", popular: false },
        { plan: "Day Pass", price: "$20", period: "per day", popular: true },
        { plan: "Monthly Unlimited", price: "$120", period: "per month", popular: false }
      ]
    },
    {
      icon: Headset,
      title: "VR Adventures",
      description: "Immerse yourself in virtual worlds with our cutting-edge VR setups and vast game library.",
      image: vrGamingImage,
      features: ["Meta Quest Pro", "PICO 4 Enterprise", "Room-Scale VR", "100+ VR Games"],
      pricing: [
        { plan: "VR Session", price: "$15", period: "per 30 min", popular: false },
        { plan: "VR Hour", price: "$25", period: "per hour", popular: true },
        { plan: "VR Day Pass", price: "$80", period: "per day", popular: false }
      ]
    },
    {
      icon: Trophy,
      title: "Tournaments & Events",
      description: "Join competitive tournaments, gaming events, and community gatherings for prizes and glory.",
      image: gamingPcImage,
      features: ["Weekly Tournaments", "Cash Prizes", "Community Events", "Leaderboards"],
      pricing: [
        { plan: "Tournament Entry", price: "$10", period: "per event", popular: false },
        { plan: "VIP Tournament", price: "$25", period: "per event", popular: true },
        { plan: "Season Pass", price: "$100", period: "all events", popular: false }
      ]
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

        <div className="space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="space-y-8">
                {/* Service Card */}
                <Card className="card-neon card-hover group overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative h-64 lg:h-auto overflow-hidden">
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
                    
                    {/* Content Section */}
                    <div className="p-6 lg:p-8">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl font-orbitron text-gradient-primary">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground text-base">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="p-0">
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
                    </div>
                  </div>
                </Card>

                {/* Pricing Cards for this Service */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-8">
                  {service.pricing.map((price, priceIndex) => (
                    <Card
                      key={priceIndex}
                      className={`card-neon card-hover relative ${
                        price.popular ? "ring-2 ring-primary scale-105" : ""
                      }`}
                    >
                      {price.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                            POPULAR
                          </div>
                        </div>
                      )}

                      <CardHeader className="text-center pb-6">
                        <CardTitle className="text-lg font-orbitron text-gradient-secondary">
                          {price.plan}
                        </CardTitle>
                        <div className="pt-2">
                          <span className="text-3xl font-orbitron font-bold text-foreground">
                            {price.price}
                          </span>
                          <span className="text-muted-foreground ml-1 text-sm">{price.period}</span>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <Button
                          className={`w-full ${
                            price.popular
                              ? "btn-neon"
                              : "btn-ghost-neon"
                          }`}
                          size="sm"
                        >
                          Choose Plan
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;