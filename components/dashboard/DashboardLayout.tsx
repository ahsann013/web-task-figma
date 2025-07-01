import { FC, ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface DashboardLayoutProps {
  children: ReactNode;
  activePage: string;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children, activePage }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You could add logic here to update a global theme context or localStorage
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-[#121212]' : 'bg-[#fafcff]'}`}>
      <Sidebar activePage={activePage} />
      
      <div className="flex-1 flex flex-col">
        <Header isDarkMode={darkMode} onToggleDarkMode={handleToggleDarkMode} />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout; 