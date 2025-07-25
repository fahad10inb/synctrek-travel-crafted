import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-synctrek-deep text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/40a10069-a4a6-4c86-872b-c6f391d229f6.png" 
                alt="SyncTrek Logo" 
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-2xl font-bold">SyncTrek</span>
            </div>
            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              Revolutionizing travel planning through advanced AI technology. 
              SyncTrek is building the future of intelligent, personalized travel experiences.
            </p>
            <div className="text-sm text-white/60">
              <p className="mb-1">🚧 Currently in Beta Development</p>
              <p>Building world-class AI travel technology</p>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Product</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#download" className="hover:text-white transition-colors">Beta Download</a></li>
              <li><a href="#showcase" className="hover:text-white transition-colors">Showcase</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Connect</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span className="text-sm">beta@synctrek.ai</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span className="text-sm">Available Soon</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span className="text-sm">Global Team</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-white/60 mb-4 md:mb-0">
              © {currentYear} SyncTrek. All rights reserved. Built with advanced AI technology.
            </div>
            <div className="flex space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Beta Terms</a>
            </div>
          </div>
          
          {/* Development Notice */}
          <div className="mt-6 text-center">
            <p className="text-xs text-white/50">
              SyncTrek is in active development. This website showcases our vision for AI-powered travel planning.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;