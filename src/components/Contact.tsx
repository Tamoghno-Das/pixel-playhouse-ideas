import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Gaming Street", "Tech District, City 12345"],
      link: "https://maps.google.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-GAME", "+1 (555) 123-4263"],
      link: "tel:+15551234263"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@nexusgaming.com", "support@nexusgaming.com"],
      link: "mailto:info@nexusgaming.com"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Thu: 12PM - 12AM", "Fri-Sun: 24/7"],
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-surface-dark to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-orbitron font-bold mb-6">
            <span className="text-gradient-neon">Get In</span>{" "}
            <span className="text-foreground">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to level up your gaming experience? Contact us to book your session or learn more about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-orbitron font-bold text-gradient-primary mb-8">
              Contact Information
            </h3>
            
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="card-neon card-hover">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg font-orbitron">
                      <Icon className="h-5 w-5 text-primary mr-3" />
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground">
                        {info.link && detailIndex === 0 ? (
                          <a
                            href={info.link}
                            className="hover:text-primary transition-colors duration-300"
                            target={info.link.startsWith("http") ? "_blank" : "_self"}
                            rel={info.link.startsWith("http") ? "noopener noreferrer" : ""}
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              );
            })}

            {/* Quick Actions */}
            <div className="pt-6 space-y-4">
              <Button className="w-full btn-neon" size="lg">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Live Chat
              </Button>
              <Button className="w-full btn-secondary-neon" size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                Book Gaming Session
              </Button>
            </div>
          </div>

          {/* Map/Visual Element */}
          <div className="relative">
            <Card className="card-neon h-full min-h-[500px] overflow-hidden">
              <div className="relative h-full">
                {/* Placeholder for map - in a real app, you'd integrate with Google Maps */}
                <div className="absolute inset-0 bg-gradient-to-br from-surface-dark via-background to-surface-darker flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4 glow-primary" />
                    <h4 className="text-xl font-orbitron font-bold text-gradient-primary mb-2">
                      Find Us Here
                    </h4>
                    <p className="text-muted-foreground mb-6">
                      Located in the heart of the tech district
                    </p>
                    <Button className="btn-ghost-neon">
                      Open in Google Maps
                    </Button>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
                <div className="absolute bottom-8 left-6 w-2 h-2 bg-secondary rounded-full animate-float"></div>
                <div className="absolute top-1/3 left-8 w-4 h-4 bg-accent rounded-full animate-pulse-glow"></div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="card-neon max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-orbitron font-bold text-gradient-secondary mb-4">
                Ready to Game?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of gamers who have made Nexus Gaming their home. 
                Your next gaming adventure starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-neon" size="lg">
                  Book Now
                </Button>
                <Button variant="outline" className="btn-ghost-neon" size="lg">
                  Take a Tour
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;