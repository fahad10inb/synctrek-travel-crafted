import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToDownload = () => {
    const element = document.getElementById('download');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-synctrek-accent/10 via-transparent to-synctrek-primary/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-synctrek-accent/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-synctrek-primary/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-slide-up">
          {/* Beta Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary mb-8">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Now in Beta Testing</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your AI-Powered
            <br />
            <span className="text-gradient">Travel Assistant</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience world-class travel planning with SyncTrek's multi-agent AI architecture. 
            Create personalized itineraries that perfectly match your preferences.
          </p>

          {/* Key Features Preview */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-synctrek-accent rounded-full"></div>
              Multi-Agent AI System
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-synctrek-primary rounded-full"></div>
              Personalized Questionnaire
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-synctrek-accent rounded-full"></div>
              World-Class Itineraries
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToDownload}
              className="btn-primary group"
            >
              Download Beta
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={scrollToFeatures}
              variant="outline"
              className="btn-secondary"
            >
              Explore Features
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">AI</div>
              <div className="text-sm text-muted-foreground">Multi-Agent System</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Beta</div>
              <div className="text-sm text-muted-foreground">Testing Phase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Smart</div>
              <div className="text-sm text-muted-foreground">Questionnaire</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">World</div>
              <div className="text-sm text-muted-foreground">Class Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;