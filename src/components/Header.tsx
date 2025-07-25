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
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/40a10069-a4a6-4c86-872b-c6f391d229f6.png" 
              alt="SyncTrek Logo" 
              className="w-10 h-10 rounded-lg"
            />
            <span className="text-2xl font-bold text-gradient">SyncTrek</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('showcase')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Showcase
            </button>
            <button 
              onClick={() => scrollToSection('download')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Download
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('download')}
              className="btn-primary"
            >
              Get Beta Access
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
            <div className="flex flex-col space-y-4 px-4 py-6">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('showcase')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Showcase
              </button>
              <button 
                onClick={() => scrollToSection('download')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Download
              </button>
              <Button 
                onClick={() => scrollToSection('download')}
                className="btn-primary mt-4"
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