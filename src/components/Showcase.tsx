import { useState, useRef, useEffect } from "react";
import {
  Monitor,
  Smartphone,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  SkipBack,
  SkipForward,
} from "lucide-react";
import Image1 from "@/assets/Image-1.png";
import Image2 from "@/assets/Image-2.png";
import Image3 from "@/assets/Image-3.png";
import Image4 from "@/assets/Image-4.png";

const Showcase = () => {
  const [activeTab, setActiveTab] = useState("screenshots");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const containerRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  const screenshots = [
    {
      title: "Intelligent Questionnaire",
      description: "Our AI learns your preferences through smart questions",
      image: Image1,
    },
    {
      title: "Multi-Agent Planning",
      description: "Watch as different AI agents collaborate on your itinerary",
      image: Image2,
    },
    {
      title: "World-Class Itineraries",
      description: "Get comprehensive travel plans with every detail covered",
      image: Image3,
    },
    {
      title: "Tailored Picks",
      description: "Discover hotels, restaurants, and experiences tailored to you",
      image: Image4,
    },
  ];

  // Vimeo video ID extracted from the URL
  const vimeoVideoId = "1104378559";

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      try {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } catch (err) {
        console.error("Fullscreen error:", err);
      }
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const showControlsTemporarily = () => {
    setShowControls(true);
    clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    const handleMouseMove = () => {
      showControlsTemporarily();
    };

    const handleKeyDown = (e) => {
      if (activeTab === "demo") {
        switch (e.code) {
          case "KeyF":
            e.preventDefault();
            toggleFullscreen();
            break;
        }
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("keydown", handleKeyDown);
      clearTimeout(controlsTimeoutRef.current);
    };
  }, [activeTab, isPlaying]);

  useEffect(() => {
    if (!isPlaying) {
      setShowControls(true);
      clearTimeout(controlsTimeoutRef.current);
    }
  }, [isPlaying]);

  const videoFeatures = [
    {
      icon: "🚀",
      title: "AI-Powered Intelligence",
      description: "Witness cutting-edge AI technology create perfect itineraries in real-time",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: "⚡",
      title: "Lightning-Fast Planning",
      description: "Watch comprehensive travel plans materialize in seconds, not hours",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: "🎯",
      title: "Precision Personalization",
      description: "See how our multi-agent system crafts experiences tailored exactly to you",
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      icon: "🌟",
      title: "Revolutionary Interface",
      description: "Experience the future of travel planning with our intuitive, world-class UI",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
  ];

  return (
    <section id="showcase" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              EXCLUSIVE PREVIEW
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-100 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            See <span className="text-gradient animate-pulse">SyncTrek</span> in Action
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Experience the future of travel planning through our showcase of SyncTrek's revolutionary AI interface and next-generation features.
          </p>
        </div>

        {/* Enhanced Tab Navigation - Mobile Optimized */}
        <div className="flex justify-center mb-12 md:mb-16 px-4">
          <div className="bg-slate-800/80 backdrop-blur-xl rounded-2xl p-2 md:p-3 border border-slate-700/50 shadow-2xl shadow-blue-500/10 w-full max-w-md">
            <button
              onClick={() => setActiveTab("screenshots")}
              className={`w-1/2 px-4 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-500 relative overflow-hidden group text-sm md:text-base ${
                activeTab === "screenshots"
                  ? "bg-gradient-to-r from-blue-500 to-blue-500/80 text-white shadow-2xl shadow-blue-500/30 scale-105"
                  : "text-slate-400 hover:text-slate-100 hover:bg-blue-500/5"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Monitor size={18} className="inline mr-2 relative z-10" />
              <span className="relative z-10 hidden sm:inline">Screenshots</span>
              <span className="relative z-10 sm:hidden">Screens</span>
            </button>
            <button
              onClick={() => setActiveTab("demo")}
              className={`w-1/2 px-4 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-500 relative overflow-hidden group text-sm md:text-base ${
                activeTab === "demo"
                  ? "bg-gradient-to-r from-blue-500 to-blue-500/80 text-white shadow-2xl shadow-blue-500/30 scale-105"
                  : "text-slate-400 hover:text-slate-100 hover:bg-blue-500/5"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Smartphone size={18} className="inline mr-2 relative z-10" />
              <span className="relative z-10 hidden sm:inline">Live Demo</span>
              <span className="relative z-10 sm:hidden">Demo</span>
            </button>
          </div>
        </div>

        {/* Screenshots Tab - Better Vertical Layout with Updated Colors */}
        {activeTab === "screenshots" && (
          <div className="max-w-7xl mx-auto">
            {/* First Row - 2 Screenshots */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {screenshots.slice(0, 2).map((screenshot, index) => (
                <div key={index} className="bg-slate-800/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex flex-col lg:flex-row gap-8 items-center">
                    <div className="w-full lg:w-80 flex-shrink-0">
                      <div className="aspect-[9/16] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl overflow-hidden relative shadow-lg">
                        <img
                          src={screenshot.image}
                          alt={screenshot.title}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                    <div className="flex-1 text-center lg:text-left lg:pl-4">
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-slate-100 group-hover:text-blue-400 transition-colors duration-300">{screenshot.title}</h3>
                      <p className="text-slate-300 group-hover:text-slate-100 transition-colors duration-300 text-lg leading-relaxed">{screenshot.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Second Row - 2 Screenshots (Changed to Left Alignment) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {screenshots.slice(2, 4).map((screenshot, index) => (
                <div key={index + 2} className="bg-slate-800/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden" style={{ animationDelay: `${(index + 2) * 0.2}s` }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex flex-col lg:flex-row gap-8 items-center">
                    <div className="w-full lg:w-80 flex-shrink-0">
                      <div className="aspect-[9/16] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl overflow-hidden relative shadow-lg">
                        <img
                          src={screenshot.image}
                          alt={screenshot.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                    <div className="flex-1 text-center lg:text-left">
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-slate-100 group-hover:text-blue-400 transition-colors duration-300">{screenshot.title}</h3>
                      <p className="text-slate-300 group-hover:text-slate-100 transition-colors duration-300 text-lg leading-relaxed">{screenshot.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Enhanced Demo Video Tab with Vimeo */}
        {activeTab === "demo" && (
          <div className="max-w-5xl mx-auto">
            {/* Premium Video Player */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-75 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 shadow-2xl">
                <div
                  ref={containerRef}
                  className={`relative aspect-video bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-xl overflow-hidden group ${
                    isFullscreen ? "fixed inset-0 z-50 rounded-none" : ""
                  }`}
                  onMouseEnter={() => setShowControls(true)}
                  onMouseLeave={() => {
                    if (isPlaying) {
                      showControlsTemporarily();
                    }
                  }}
                >
                  {/* Vimeo Embedded Player */}
                  <iframe
                    src={`https://player.vimeo.com/video/${vimeoVideoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=1&title=0&byline=0&portrait=0`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="SyncTrek Demo Video"
                  ></iframe>

                  {/* Custom Overlay Controls */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 transition-opacity duration-300 pointer-events-none ${
                      showControls ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {/* Top Controls - Mobile Optimized */}
                    <div className="absolute top-2 md:top-4 left-2 md:left-4 right-2 md:right-4 flex items-center justify-between pointer-events-auto">
                      <div className="text-white">
                        <div className="text-sm md:text-lg font-bold">SyncTrek Live Demo</div>
                        <div className="text-xs md:text-sm opacity-75 hidden sm:block">AI-Powered Travel Planning</div>
                      </div>
                      <div className="flex gap-2">
                        <div className="px-2 md:px-3 py-1 bg-red-500/20 backdrop-blur-md rounded-full border border-red-500/30">
                          <span className="text-red-400 text-xs md:text-sm font-medium flex items-center gap-1">
                            <span className="w-1.5 md:w-2 h-1.5 md:h-2 bg-red-500 rounded-full animate-pulse"></span>
                            <span className="hidden xs:inline">LIVE</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Mobile-Friendly Fullscreen Control */}
                    <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 pointer-events-auto">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFullscreen();
                        }}
                        className="w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 touch-manipulation"
                        aria-label="Toggle fullscreen"
                      >
                        {isFullscreen ? <Minimize size={14} className="text-white md:w-4 md:h-4" /> : <Maximize size={14} className="text-white md:w-4 md:h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Feature Grid - Mobile Optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12 px-4 md:px-0">
              {videoFeatures.map((feature, index) => (
                <div key={index} className="relative group cursor-pointer" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div
                    className={`absolute -inset-2 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-500`}
                  ></div>
                  <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-xl p-4 md:p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 active:scale-95">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl md:text-3xl filter drop-shadow-lg">{feature.icon}</span>
                    </div>
                    <h4 className="font-bold mb-2 md:mb-3 text-center group-hover:text-blue-400 transition-colors duration-300 text-sm md:text-base text-slate-100">{feature.title}</h4>
                    <p className="text-xs md:text-sm text-slate-400 text-center leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Enhanced Beta Notice - Mobile Optimized */}
        <div className="mt-12 md:mt-16 text-center px-4">
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 text-blue-600 rounded-2xl border border-blue-500/30 shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 active:scale-95 max-w-full">
            <div className="relative flex-shrink-0">
              <span className="w-2 md:w-3 h-2 md:h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full block animate-pulse"></span>
              <span className="absolute inset-0 w-2 md:w-3 h-2 md:h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping"></span>
            </div>
            <span className="font-bold text-sm md:text-lg text-slate-100">Currently in Exclusive Beta</span>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span className="font-medium text-xs md:text-base hidden sm:inline text-slate-300">Revolutionary features coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;