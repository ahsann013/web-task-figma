import { FC, useState } from "react";
import { Bell, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

const Header: FC<HeaderProps> = ({ isDarkMode = false, onToggleDarkMode = () => {} }) => {
  const [darkMode, setDarkMode] = useState(isDarkMode);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    onToggleDarkMode();
  };

  return (
    <header className="bg-white border-b border-[#eaecf0] px-6 py-4">
      <div className="flex items-center justify-end gap-4">
        <Bell className="w-5 h-5 text-[#667085] cursor-pointer" />
        <div className="flex border bg-gray-100  mr-4 py-2 px-2 rounded-full items-center gap-2 text-[#344054] text-sm font-medium">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0003 18.9587C5.05866 18.9587 1.04199 14.942 1.04199 10.0003C1.04199 5.05866 5.05866 1.04199 10.0003 1.04199C14.942 1.04199 18.9587 5.05866 18.9587 10.0003C18.9587 14.942 14.942 18.9587 10.0003 18.9587ZM10.0003 2.29199C5.75033 2.29199 2.29199 5.75033 2.29199 10.0003C2.29199 14.2503 5.75033 17.7087 10.0003 17.7087C14.2503 17.7087 17.7087 14.2503 17.7087 10.0003C17.7087 5.75033 14.2503 2.29199 10.0003 2.29199Z" fill="black"/>
<path d="M7.5002 18.125H6.66686C6.3252 18.125 6.04186 17.8417 6.04186 17.5C6.04186 17.1583 6.30853 16.8833 6.6502 16.875C5.34186 12.4083 5.34186 7.59167 6.6502 3.125C6.30853 3.11667 6.04186 2.84167 6.04186 2.5C6.04186 2.15833 6.3252 1.875 6.66686 1.875H7.5002C7.7002 1.875 7.89186 1.975 8.00853 2.13333C8.1252 2.3 8.15853 2.50833 8.09186 2.7C6.5252 7.40833 6.5252 12.5917 8.09186 17.3083C8.15853 17.5 8.1252 17.7083 8.00853 17.875C7.89186 18.025 7.7002 18.125 7.5002 18.125Z" fill="black"/>
<path d="M12.5 18.1252C12.4333 18.1252 12.3667 18.1169 12.3 18.0919C11.975 17.9836 11.7917 17.6252 11.9083 17.3002C13.475 12.5919 13.475 7.40856 11.9083 2.6919C11.8 2.3669 11.975 2.00856 12.3 1.90023C12.6333 1.7919 12.9833 1.9669 13.0917 2.2919C14.75 7.25856 14.75 12.7252 13.0917 17.6836C13.0083 17.9586 12.7583 18.1252 12.5 18.1252Z" fill="black"/>
<path d="M10 14.333C7.675 14.333 5.35833 14.008 3.125 13.3497C3.11667 13.683 2.84167 13.958 2.5 13.958C2.15833 13.958 1.875 13.6747 1.875 13.333V12.4997C1.875 12.2997 1.975 12.108 2.13333 11.9913C2.3 11.8747 2.50833 11.8413 2.7 11.908C7.40833 13.4747 12.6 13.4747 17.3083 11.908C17.5 11.8413 17.7083 11.8747 17.875 11.9913C18.0417 12.108 18.1333 12.2997 18.1333 12.4997V13.333C18.1333 13.6747 17.85 13.958 17.5083 13.958C17.1667 13.958 16.8917 13.6913 16.8833 13.3497C14.6417 14.008 12.325 14.333 10 14.333Z" fill="black"/>
<path d="M17.5001 8.12546C17.4335 8.12546 17.3668 8.11712 17.3001 8.09212C12.5918 6.52546 7.40015 6.52546 2.69181 8.09212C2.35848 8.20046 2.00848 8.02546 1.90015 7.70046C1.80015 7.36712 1.97515 7.01712 2.30015 6.90879C7.26681 5.25046 12.7335 5.25046 17.6918 6.90879C18.0168 7.01712 18.2001 7.37546 18.0835 7.70046C18.0085 7.95879 17.7585 8.12546 17.5001 8.12546Z" fill="black"/>
</svg>
          <span>EN</span>
          |
          <span>USD</span>
        </div>
        <div className="flex items-center gap-2 border border-[#000000] rounded-full px-3 py-1">
        <Avatar className="w-8 h-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" />
          <AvatarFallback className="bg-[#f9fafb] text-[#344054] text-sm">U</AvatarFallback>
        </Avatar>
        <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </header>
  );
};

export default Header; 