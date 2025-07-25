import { Download as DownloadIcon, Smartphone, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Download = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    // In a real implementation, this would trigger the APK download
    toast({
      title: "Download Starting Soon",
      description: "The SyncTrek beta APK will be available for download shortly. We'll notify you when it's ready!",
    });
  };

  const features = [
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Native Android experience designed for travel planning on the go"
    },
    {
      icon: Shield,
      title: "Beta Access",
      description: "Get early access to cutting-edge AI travel planning technology"
    },
    {
      icon: Zap,
      title: "Instant Planning",
      description: "Generate comprehensive itineraries in minutes, not hours"
    }
  ];

  return (
    <section id="download" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get <span className="text-gradient">Early Access</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our exclusive beta program and be among the first to experience 
              the future of AI-powered travel planning with SyncTrek.
            </p>
          </div>

          {/* Download Card */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-primary/20 mb-16">
            <div className="flex flex-col items-center">
              {/* App Icon */}
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mb-8 animate-glow">
                <img 
                  src="/lovable-uploads/40a10069-a4a6-4c86-872b-c6f391d229f6.png" 
                  alt="SyncTrek App Icon" 
                  className="w-16 h-16 rounded-2xl"
                />
              </div>

              <h3 className="text-3xl font-bold mb-4">SyncTrek Beta</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl">
                Experience the power of multi-agent AI travel planning. Our beta version 
                showcases the core functionality that's revolutionizing how people plan their journeys.
              </p>

              {/* Download Button */}
              <Button 
                onClick={handleDownload}
                className="btn-primary group mb-8"
                size="lg"
              >
                <DownloadIcon size={24} className="mr-3 group-hover:animate-pulse" />
                Download Beta APK
              </Button>

              {/* Beta Notice */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  🚧 <strong>Beta Version Notice:</strong> This is a testing release
                </p>
                <p className="text-xs text-muted-foreground max-w-lg">
                  SyncTrek is currently in active development. This beta version demonstrates 
                  our core AI capabilities and is intended for testing and feedback purposes.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={24} className="text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* System Requirements */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h4 className="text-xl font-semibold mb-6">System Requirements</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h5 className="font-medium mb-2 text-primary">Android Requirements</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Android 7.0 (API level 24) or higher</li>
                  <li>• Minimum 3GB RAM recommended</li>
                  <li>• 500MB available storage</li>
                  <li>• Internet connection required</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2 text-primary">Beta Features</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• AI-powered questionnaire</li>
                  <li>• Multi-agent itinerary generation</li>
                  <li>• Hotel & activity recommendations</li>
                  <li>• Basic trip planning interface</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact for Business */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Interested in business partnerships or investment opportunities?
            </p>
            <Button variant="outline" className="btn-secondary">
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;