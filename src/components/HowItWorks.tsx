import { CheckCircle, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Answer Our Smart Questionnaire",
      description: "Tell us about your travel preferences, budget, interests, and style. Our AI analyzes your responses to understand exactly what kind of experience you're looking for."
    },
    {
      step: "02", 
      title: "AI Agents Get to Work",
      description: "Our multi-agent system springs into action. Specialized AI agents for hotels, transportation, activities, and local experiences work together to find the perfect options."
    },
    {
      step: "03",
      title: "Receive Your Custom Itinerary",
      description: "Get a comprehensive, world-class travel plan tailored specifically to you. Every detail is optimized for your preferences and seamlessly coordinated."
    },
    {
      step: "04",
      title: "Enjoy Your Perfect Trip",
      description: "Travel with confidence knowing every aspect of your journey has been thoughtfully planned by AI that understands your unique travel style."
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="text-gradient">SyncTrek</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process transforms your travel dreams into reality 
            through the power of advanced AI and intuitive design.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-8 top-20 w-px h-32 bg-gradient-to-b from-primary to-accent"></div>
              )}
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-16">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg hover-glow">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                    {step.title}
                    <CheckCircle size={24} className="text-accent" />
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-8 mb-4">
                    <ArrowRight size={24} className="text-primary transform rotate-90" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack Highlight */}
        <div className="mt-20 bg-card rounded-3xl p-8 md:p-12 border border-border">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Built for the Future of Travel</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
              SyncTrek is currently in active development, utilizing the latest advances in artificial intelligence 
              and user experience design. Our beta version represents the cutting edge of travel technology.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h4 className="font-semibold mb-2">Advanced AI</h4>
                <p className="text-sm text-muted-foreground">Multi-agent systems create smart, context-aware itineraries</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h4 className="font-semibold mb-2">Mobile First</h4>
                <p className="text-sm text-muted-foreground">Native app experience optimized for on-the-go planning</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h4 className="font-semibold mb-2">Enterprise Grade</h4>
                <p className="text-sm text-muted-foreground">Built with professional standards and security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;