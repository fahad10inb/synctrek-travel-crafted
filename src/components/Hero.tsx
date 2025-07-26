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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-center">
            <span className="block">Your AI-Powered</span>
            <span className="block text-gradient">Travel Assistant</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed text-center">
            Experience world-class travel planning with SyncTrek's multi-agent AI architecture. 
            Create personalized itineraries that perfectly match your preferences.
          </p>

          {/* Key Features Preview */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 mb-12 text-sm md:text-base">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-synctrek-accent rounded-full flex-shrink-0"></div>
              <span className="whitespace-nowrap">Multi-Agent AI System</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-synctrek-primary rounded-full flex-shrink-0"></div>
              <span className="whitespace-nowrap">Personalized Questionnaire</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-synctrek-accent rounded-full flex-shrink-0"></div>
              <span className="whitespace-nowrap">World-Class Itineraries</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToDownload}
              className="btn-primary group w-full sm:w-auto"
            >
              Download Beta
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={scrollToFeatures}
              variant="outline"
              className="btn-secondary w-full sm:w-auto"
            >
              Explore Features
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">AI</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Multi-Agent System</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">Beta</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Testing Phase</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">Smart</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Questionnaire</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">World</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Class Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;