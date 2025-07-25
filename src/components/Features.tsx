import { Brain, MapPin, Users, Zap, Globe, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Multi-Agent AI Architecture",
      description: "Our sophisticated AI system uses multiple specialized agents to handle different aspects of your travel planning with unmatched precision and efficiency."
    },
    {
      icon: MapPin,
      title: "Intelligent Questionnaire",
      description: "Answer a few simple questions and our AI will understand your travel preferences, budget, and style to create the perfect itinerary just for you."
    },
    {
      icon: Globe,
      title: "World-Class Itineraries",
      description: "Get comprehensive travel plans that include accommodations, transportation, attractions, and hidden gems curated by our advanced AI algorithms."
    },
    {
      icon: Users,
      title: "Personalized Recommendations",
      description: "Receive tailored suggestions for hotels, restaurants, activities, and experiences that match your unique preferences and travel style."
    },
    {
      icon: Zap,
      title: "Lightning Fast Planning",
      description: "Generate complete travel itineraries in minutes, not hours. Our AI processes thousands of options to find the best matches for your needs."
    },
    {
      icon: Shield,
      title: "Professional Grade Quality",
      description: "Built with enterprise-level standards and designed for travelers who demand excellence in every aspect of their journey."
    }
  ];

  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powered by <span className="text-gradient">Advanced AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SyncTrek combines cutting-edge artificial intelligence with deep travel expertise 
            to deliver unparalleled planning experiences for the modern traveler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon size={24} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Architecture Highlight */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Advanced Multi-Agent System</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
              Our revolutionary AI architecture employs specialized agents for hotels, transportation, 
              attractions, and local experiences. Each agent is trained on domain-specific data to 
              provide expert-level recommendations that work together seamlessly.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Brain size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-sm">Hotel Agent</h4>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-sm">Route Agent</h4>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-sm">Activity Agent</h4>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-sm">Experience Agent</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;