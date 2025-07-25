import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true); // Start with dark mode to test

  useEffect(() => {
    // Apply dark mode class to html element
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="rounded-full w-10 h-10 p-0 border-border hover:bg-accent transition-all duration-300"
    >
      {isDark ? (
        <Sun size={16} className="text-primary" />
      ) : (
        <Moon size={16} className="text-primary" />
      )}
    </Button>
  );
};

export default ThemeToggle;