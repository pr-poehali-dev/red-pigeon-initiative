import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <span className="text-redbird text-2xl font-bold">🕊️ Red Pigeon</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-redbird font-medium">Главная</Link>
            <Link to="/#rare-birds" className="text-gray-700 hover:text-redbird font-medium">Редкие птицы</Link>
            <Link to="/#help-pigeons" className="text-gray-700 hover:text-redbird font-medium">Помощь голубям</Link>
            <Link to="/updates" className="text-gray-700 hover:text-redbird font-medium">Наши обновления</Link>
            <Link to="/sponsors" className="text-gray-700 hover:text-redbird font-medium">Спонсоры</Link>
            <Link to="/#about" className="text-gray-700 hover:text-redbird font-medium">О проекте</Link>
            <Button className="bg-redbird hover:bg-redbird-dark text-white">
              Помочь птицам
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fly-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-redbird font-medium px-4 py-2 rounded hover:bg-gray-50">Главная</Link>
              <Link to="/#rare-birds" className="text-gray-700 hover:text-redbird font-medium px-4 py-2 rounded hover:bg-gray-50">Редкие птицы</Link>
              <Link to="/#help-pigeons" className="text-gray-700 hover:text-redbird font-medium px-4 py-2 rounded hover:bg-gray-50">Помощь голубям</Link>
              <Link to="/updates" className="text-gray-700 hover:text-redbird font-medium px-4 py-2 rounded hover:bg-gray-50">Наши обновления</Link>
              <Link to="/sponsors" className="text-gray-700 hover:text-redbird font-medium px-4 py-2 rounded hover:bg-gray-50">Спонсоры</Link>
              <Link to="/#about" className="text-gray-700 hover:text-redbird font-medium px-4 py-2 rounded hover:bg-gray-50">О проекте</Link>
              <Button className="bg-redbird hover:bg-redbird-dark text-white mx-4">
                Помочь птицам
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
