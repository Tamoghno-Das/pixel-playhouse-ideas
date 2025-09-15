import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Casual Gamer",
      icon: Check,
      price: "$8",
      period: "per hour",
      description: "Perfect for casual gaming sessions",
      features: [
        "Access to PC Gaming Stations",
        "High-speed Internet",
        "Basic Peripherals",
        "Free Drinks (Water/Coffee)",
        "Gaming Community Access"
      ],
      popular: false,
      gradient: "from-muted to-muted/50"
    },
    {
      name: "Pro Gamer",
      icon: Star,
      price: "$25",
      period: "per day",
      description: "Best value for extended gaming sessions",
      features: [
        "All Casual Features",
        "Premium Gaming Stations",
        "VR Access (2 hours included)",
        "Console Gaming Access",
        "Tournament Entry",
        "Free Gaming Snacks",
        "Priority Support"
      ],
      popular: true,
      gradient: "from-primary to-primary-glow"
    },
    {
      name: "Elite Gamer",
      icon: Zap,
      price: "$150",
      period: "per month",
      description: "Unlimited gaming for hardcore enthusiasts",
      features: [
        "All Pro Features",
        "Unlimited Gaming Hours",
        "Private Gaming Rooms",
        "VIP Tournament Access",
        "Free Gaming Meals",
        "Personal Gaming Setup",
        "24/7 Premium Support",
        "Exclusive Events Access"
      ],
      popular: false,
      gradient: "from-secondary to-secondary-glow"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-surface-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-orbitron font-bold mb-6">
            <span className="text-gradient-secondary">Choose Your</span>{" "}
            <span className="text-foreground">Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the perfect gaming plan that fits your style and budget. All plans include access to our premium gaming experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card
                key={index}
                className={`card-neon card-hover relative ${
                  plan.popular ? "ring-2 ring-primary scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-orbitron text-gradient-primary">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-orbitron font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full mt-6 ${
                      plan.popular
                        ? "btn-neon"
                        : plan.name === "Elite Gamer"
                        ? "btn-secondary-neon"
                        : "btn-ghost-neon"
                    }`}
                    size="lg"
                  >
                    Choose {plan.name}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Not sure which plan is right for you?
          </p>
          <Button variant="outline" className="btn-ghost-neon">
            Contact Us for Custom Plans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;