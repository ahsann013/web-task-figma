import { FC } from "react";
import { Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

const ThemeToggle: FC<ThemeToggleProps> = ({ isDarkMode, onToggle }) => {
  return (
    <div className="flex items-center gap-2">
      <Sun className={`w-4 h-4 ${isDarkMode ? 'text-[#667085]' : 'text-[#101828]'}`} />
      <Switch checked={isDarkMode} onCheckedChange={onToggle} />
      <Moon className={`w-4 h-4 ${isDarkMode ? 'text-[#101828]' : 'text-[#667085]'}`} />
    </div>
  );
};

export default ThemeToggle; 