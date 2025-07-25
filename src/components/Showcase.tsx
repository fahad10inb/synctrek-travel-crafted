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
import DemoVideo from "@/assets/Final_Edit.mp4";
import { Button } from "@/components/ui/button";

const Showcase = () => {
  const [activeTab, setActiveTab] = useState("screenshots");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef(null);
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
      title: "Personalized Recommendations",
      description: "Discover hotels, restaurants, and experiences tailored to you",
      image: Image4,
    },
  ];

  // --- VIDEO PLAYER HANDLERS ---
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && !isDragging) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const time = pos * duration;
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleSeekStart = (e) => {
    setIsDragging(true);
    handleSeek(e);
  };

  const handleSeekMove = (e) => {
    if (isDragging) {
      handleSeek(e);
    }
  };

  const handleSeekEnd = () => {
    setIsDragging(false);
  };

  const handleVolumeChange = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const newVolume = Math.max(0, Math.min(1, pos));
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.volume = volume;
        setIsMuted(false);
      } else {
        videoRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      try {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } catch (err) {
        // Fullscreen API error
      }
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const skipTime = (seconds) => {
    if (videoRef.current) {
      const newTime = Math.max(0, Math.min(duration, currentTime + seconds));
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
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
          case "Space":
            e.preventDefault();
            handlePlayPause();
            break;
          case "ArrowLeft":
            e.preventDefault();
            skipTime(-10);
            break;
          case "ArrowRight":
            e.preventDefault();
            skipTime(10);
            break;
          case "KeyM":
            e.preventDefault();
            toggleMute();
            break;
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
    document.addEventListener("mouseup", handleSeekEnd);
    document.addEventListener("mousemove", handleSeekMove);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mouseup", handleSeekEnd);
      document.removeEventListener("mousemove", handleSeekMove);
      clearTimeout(controlsTimeoutRef.current);
    };
  }, [activeTab, isPlaying, isDragging, currentTime, duration, volume, isMuted]);

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
    <section id="showcase" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20 mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></span>
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              EXCLUSIVE PREVIEW
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            See <span className="text-gradient animate-pulse">SyncTrek</span> in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the future of travel planning through our showcase of SyncTrek's revolutionary AI interface and next-generation features.
          </p>
        </div>

        {/* Enhanced Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="bg-card/80 backdrop-blur-xl rounded-2xl p-3 border border-border/50 shadow-2xl shadow-primary/10">
            <button
              onClick={() => setActiveTab("screenshots")}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-500 relative overflow-hidden group ${
                activeTab === "screenshots"
                  ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-2xl shadow-primary/30 scale-105"
                  : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Monitor size={22} className="inline mr-3 relative z-10" />
              <span className="relative z-10">Screenshots</span>
            </button>
            <button
              onClick={() => setActiveTab("demo")}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-500 relative overflow-hidden group ${
                activeTab === "demo"
                  ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-2xl shadow-primary/30 scale-105"
                  : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Smartphone size={22} className="inline mr-3 relative z-10" />
              <span className="relative z-10">Live Demo</span>
            </button>
          </div>
        </div>

        {/* Screenshots Tab */}
        {activeTab === "screenshots" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="feature-card hover-lift group relative overflow-hidden" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-6 overflow-hidden relative">
                  <img
                    src={screenshot.image}
                    alt={screenshot.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{screenshot.title}</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{screenshot.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Enhanced Demo Video Tab */}
        {activeTab === "demo" && (
          <div className="max-w-5xl mx-auto">
            {/* Premium Video Player */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-75 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-xl rounded-2xl p-6 border border-border/50 shadow-2xl">
                <div
                  ref={containerRef}
                  className={`relative aspect-video bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-xl overflow-hidden group cursor-pointer ${
                    isFullscreen ? "fixed inset-0 z-50 rounded-none" : ""
                  }`}
                  onMouseEnter={() => setShowControls(true)}
                  onMouseLeave={() => {
                    if (isPlaying) {
                      showControlsTemporarily();
                    }
                  }}
                  onClick={handlePlayPause}
                >
                  <video
                    ref={videoRef}
                    src={DemoVideo}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    loop
                    playsInline
                  />

                  {/* Professional Video Controls */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${
                      showControls ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {/* Center Play Button */}
                    {!isPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePlayPause();
                          }}
                          className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 group"
                        >
                          <Play size={40} className="text-white ml-2" />
                          <div className="absolute inset-0 border-2 border-white/30 rounded-full animate-ping"></div>
                        </button>
                      </div>
                    )}

                    {/* Top Controls */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <div className="text-white">
                        <div className="text-lg font-bold">SyncTrek Live Demo</div>
                        <div className="text-sm opacity-75">AI-Powered Travel Planning</div>
                      </div>
                      <div className="flex gap-2">
                        <div className="px-3 py-1 bg-red-500/20 backdrop-blur-md rounded-full border border-red-500/30">
                          <span className="text-red-400 text-sm font-medium flex items-center gap-1">
                            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                            LIVE
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Controls */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div
                          className="w-full h-2 bg-white/20 rounded-full cursor-pointer hover:h-3 transition-all duration-200 group"
                          onMouseDown={handleSeekStart}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSeek(e);
                          }}
                        >
                          <div
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative transition-all duration-200"
                            style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                          >
                            <div className="absolute right-0 top-1/2 w-4 h-4 bg-white rounded-full shadow-lg transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                          </div>
                        </div>
                      </div>

                      {/* Control Bar */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          {/* Play/Pause */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePlayPause();
                            }}
                            className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                          >
                            {isPlaying ? <Pause size={20} className="text-white" /> : <Play size={20} className="text-white ml-1" />}
                          </button>

                          {/* Skip Controls */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              skipTime(-10);
                            }}
                            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                          >
                            <SkipBack size={16} className="text-white" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              skipTime(10);
                            }}
                            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                          >
                            <SkipForward size={16} className="text-white" />
                          </button>

                          {/* Volume Control */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleMute();
                              }}
                              className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                            >
                              {isMuted || volume === 0 ? <VolumeX size={16} className="text-white" /> : <Volume2 size={16} className="text-white" />}
                            </button>
                            <div
                              className="w-20 h-1 bg-white/20 rounded-full cursor-pointer hover:h-2 transition-all duration-200 group"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleVolumeChange(e);
                              }}
                            >
                              <div className="h-full bg-white rounded-full relative" style={{ width: `${isMuted ? 0 : volume * 100}%` }}>
                                <div className="absolute right-0 top-1/2 w-3 h-3 bg-white rounded-full shadow-lg transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                              </div>
                            </div>
                          </div>

                          {/* Time Display */}
                          <div className="text-white text-sm font-mono">
                            {formatTime(currentTime)} / {formatTime(duration)}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {/* Quality Selector */}
                          <select
                            className="bg-white/20 backdrop-blur-md text-white rounded-lg px-3 py-1 text-sm border-none outline-none hover:bg-white/30 transition-all duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <option value="auto" className="bg-black">
                              Auto
                            </option>
                            <option value="1080p" className="bg-black">
                              1080p HD
                            </option>
                            <option value="720p" className="bg-black">
                              720p
                            </option>
                            <option value="480p" className="bg-black">
                              480p
                            </option>
                          </select>

                          {/* Fullscreen */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFullscreen();
                            }}
                            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                          >
                            {isFullscreen ? <Minimize size={16} className="text-white" /> : <Maximize size={16} className="text-white" />}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Loading Spinner */}
                    {duration === 0 && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {videoFeatures.map((feature, index) => (
                <div key={index} className="relative group cursor-pointer" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div
                    className={`absolute -inset-2 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-500`}
                  ></div>
                  <div className="relative bg-card/80 backdrop-blur-xl rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl filter drop-shadow-lg">{feature.icon}</span>
                    </div>
                    <h4 className="font-bold mb-3 text-center group-hover:text-primary transition-colors duration-300">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold px-8 py-6 rounded-2xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 text-lg"
              >
                <Play size={20} className="mr-3" />
                Experience SyncTrek Now
              </Button>
            </div>
          </div>
        )}

        {/* Enhanced Beta Notice */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 text-primary rounded-2xl border border-primary/30 shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105">
            <div className="relative">
              <span className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full block animate-pulse"></span>
              <span className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full animate-ping"></span>
            </div>
            <span className="font-bold text-lg">Currently in Exclusive Beta</span>
            <span className="text-muted-foreground">•</span>
            <span className="font-medium">Revolutionary features coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
