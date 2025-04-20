import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="bg-pigeon text-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">Red Pigeon</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-pigeon-light transition-colors">
            Главная
          </Link>
          <Link to="/birds" className="hover:text-pigeon-light transition-colors">
            Птицы
          </Link>
          <Link to="/help" className="hover:text-pigeon-light transition-colors">
            Как помочь
          </Link>
          <Link to="/about" className="hover:text-pigeon-light transition-colors">
            О проекте
          </Link>
        </nav>
        <Button 
          variant="outline" 
          className="bg-white text-pigeon hover:bg-pigeon-muted border-white"
        >
          Поддержать
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
