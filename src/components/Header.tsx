import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="w-full px-2 md:px-3 py-4 md:py-5">
        <div className="flex items-center justify-between max-w-none">
          {/* Logo */}
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="flex-shrink-0">
              <img 
                src="/lovable-uploads/40a10069-a4a6-4c86-872b-c6f391d229f6.png" 
                alt="SyncTrek Logo" 
                className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-lg object-contain"
              />
            </div>
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient whitespace-nowrap">SyncTrek</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-lg lg:text-xl text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-lg lg:text-xl text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('showcase')}
              className="text-lg lg:text-xl text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Showcase
            </button>
            <button 
              onClick={() => scrollToSection('download')}
              className="text-lg lg:text-xl text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Download
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block flex-shrink-0">
            <Button 
              onClick={() => scrollToSection('download')}
              className="btn-primary text-lg px-6 py-3"
            >
              Get Beta Access
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex-shrink-0 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg">
            <div className="flex flex-col space-y-4 px-4 py-6">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-left text-lg text-foreground hover:text-primary transition-colors duration-300 py-2 font-medium"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-left text-lg text-foreground hover:text-primary transition-colors duration-300 py-2 font-medium"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('showcase')}
                className="text-left text-lg text-foreground hover:text-primary transition-colors duration-300 py-2 font-medium"
              >
                Showcase
              </button>
              <button 
                onClick={() => scrollToSection('download')}
                className="text-left text-lg text-foreground hover:text-primary transition-colors duration-300 py-2 font-medium"
              >
                Download
              </button>
              <Button 
                onClick={() => scrollToSection('download')}
                className="btn-primary mt-4 w-full text-lg py-3"
              >
                Get Beta Access
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;