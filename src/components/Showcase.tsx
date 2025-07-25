import { useState } from "react";
import { Play, Pause, Monitor, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Showcase = () => {
  const [activeTab, setActiveTab] = useState("screenshots");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Placeholder screenshots - in real implementation, these would be actual app screenshots
  const screenshots = [
    {
      title: "Intelligent Questionnaire",
      description: "Our AI learns your preferences through smart questions",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop"
    },
    {
      title: "Multi-Agent Planning",
      description: "Watch as different AI agents collaborate on your itinerary",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop"
    },
    {
      title: "World-Class Itineraries",
      description: "Get comprehensive travel plans with every detail covered",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop"
    },
    {
      title: "Personalized Recommendations",
      description: "Discover hotels, restaurants, and experiences tailored to you",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section id="showcase" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See <span className="text-gradient">SyncTrek</span> in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of travel planning through our showcase of 
            SyncTrek's intelligent interface and AI-powered features.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-card rounded-xl p-2 border border-border">
            <button
              onClick={() => setActiveTab("screenshots")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "screenshots" 
                  ? "bg-primary text-primary-foreground shadow-lg" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Monitor size={20} className="inline mr-2" />
              Screenshots
            </button>
            <button
              onClick={() => setActiveTab("demo")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "demo" 
                  ? "bg-primary text-primary-foreground shadow-lg" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Smartphone size={20} className="inline mr-2" />
              Demo Video
            </button>
          </div>
        </div>

        {/* Screenshots Tab */}
        {activeTab === "screenshots" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {screenshots.map((screenshot, index) => (
              <div 
                key={index} 
                className="feature-card hover-lift group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-6 overflow-hidden">
                  <img 
                    src={screenshot.image} 
                    alt={screenshot.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {screenshot.title}
                </h3>
                <p className="text-muted-foreground">
                  {screenshot.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Demo Video Tab */}
        {activeTab === "demo" && (
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden">
              {/* Video Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/30 transition-colors cursor-pointer">
                    {isVideoPlaying ? (
                      <Pause size={32} className="text-primary" />
                    ) : (
                      <Play size={32} className="text-primary ml-1" />
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Demo Coming Soon</h3>
                  <p className="text-muted-foreground">
                    We're preparing an exclusive demo video showcasing SyncTrek's capabilities
                  </p>
                </div>
              </div>
              
              {/* Placeholder video overlay */}
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=675&fit=crop"
                alt="SyncTrek Demo Preview" 
                className="w-full h-full object-cover opacity-50"
              />
            </div>

            {/* Video Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold mb-2">Interactive Demo</h4>
                <p className="text-sm text-muted-foreground">See our AI in real-time action</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold mb-2">Live Planning</h4>
                <p className="text-sm text-muted-foreground">Watch itineraries being created</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h4 className="font-semibold mb-2">Full Walkthrough</h4>
                <p className="text-sm text-muted-foreground">Complete feature overview</p>
              </div>
            </div>
          </div>
        )}

        {/* Beta Notice */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-full border border-primary/20">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="font-medium">Currently in Beta - More content coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;