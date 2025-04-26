import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { toast } = useToast();

  // Проверяем, авторизован ли пользователь, при загрузке компонента
  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(isUserLoggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    toast({
      title: "Выход из аккаунта",
      description: "Вы успешно вышли из своего аккаунта.",
      duration: 3000,
    });
  };

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
            <Link to="/ai-vision" className="text-gray-700 hover:text-redbird font-medium">Как нас видит ИИ?</Link>
            <Link to="/#about" className="text-gray-700 hover:text-redbird font-medium">О проекте</Link>
            
            {isLoggedIn ? (
              <div className="flex items-center">
                <Link to="/account" className="flex items-center text-gray-700 hover:text-redbird font-medium mr-4">
                  <User className="w-5 h-5 mr-1" />
                  <span>Аккаунт</span>
                </Link>
                <Button 
                  variant="outline" 
                  className="border-redbird text-redbird hover:bg-redbird hover:text-white"
                  onClick={handleLogout}
                >
                  Выйти
                </Button>
              </div>
            ) : (
              <Link to="/register">
                <Button className="bg-redbird hover:bg-redbird-dark text-white">
                  Зарегистрироваться
                </Button>
              </Link>
            )}
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
              <Link to="/ai-vision" className="text-gray-700 hover:text-redbird font-medium px-4 py-2 rounded hover:bg-gray-50">Как нас видит ИИ?</Link>
              <Link to="/#about" className="text-gray-700 hover:text-redbird font-medium px-4 py-2 rounded hover:bg-gray-50">О проекте</Link>
              
              {isLoggedIn ? (
                <>
                  <Link to="/account" className="flex items-center text-gray-700 hover:text-redbird font-medium px-4 py-2 rounded hover:bg-gray-50">
                    <User className="w-5 h-5 mr-1" />
                    <span>Аккаунт</span>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="border-redbird text-redbird hover:bg-redbird hover:text-white mx-4"
                    onClick={handleLogout}
                  >
                    Выйти
                  </Button>
                </>
              ) : (
                <Link to="/register" className="px-4">
                  <Button className="bg-redbird hover:bg-redbird-dark text-white w-full">
                    Зарегистрироваться
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
