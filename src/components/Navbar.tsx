import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

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
      title: t('logout'),
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
            <Link to="/" className="text-gray-700 hover:text-redbird font-medium">{t('home')}</Link>
            <Link to="/#rare-birds" className="text-gray-700 hover:text-redbird font-medium">{t('rareBirds')}</Link>
            <Link to="/#help-pigeons" className="text-gray-700 hover:text-redbird font-medium">{t('helpPigeons')}</Link>
            <Link to="/updates" className="text-gray-700 hover:text-redbird font-medium">{t('updates')}</Link>
            <Link to="/sponsors" className="text-gray-700 hover:text-redbird font-medium">{t('sponsors')}</Link>
            <Link to="/ai-vision" className="text-gray-700 hover:text-redbird font-medium">{t('aiVision')}</Link>
            <Link to="/#about" className="text-gray-700 hover:text-redbird font-medium">{t('about')}</Link>
            
            <LanguageSwitcher />
            
            {isLoggedIn ? (
              <div className="flex items-center">
                <Link to="/account" className="flex items-center text-gray-700 hover:text-redbird font-medium mr-4">
                  <User className="w-5 h-5 mr-1" />
                  <span>{t('account')}</span>
                </Link>
                <Button 
                  variant="outline" 
                  className="border-redbird text-redbird hover:bg-redbird hover:text-white"
                  onClick={handleLogout}
                >
                  {t('logout')}
                </Button>
              </div>
            ) : (
              <Link to="/register">
                <Button className="bg-redbird hover:bg-redbird-dark text-white">
                  {t('register')}
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
              className="ml-2"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fly-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-redbird font-medium px-4 py-2 rounded hover:bg-gray-50">{t('home')}</Link>
              <Link to="/#rare-birds" className="text-gray-700 hover:text-redbird font-medium px-4 py-2 rounded hover:bg-gray-50">{t('rareBirds')}</Link>
              <Link to="/#help-pigeons" className="text-gray-700 hover:text-redbird font-medium px-4 py-2 rounded hover:bg-gray-50">{t('helpPigeons')}</Link>
              <Link to="/updates" className="text-gray-700 hover:text-redbird font-medium px-4 py-2 rounded hover:bg-gray-50">{t('updates')}</Link>
              <Link to="/sponsors" className="text-gray-700 hover:text-redbird font-medium px-4 py-2 rounded hover:bg-gray-50">{t('sponsors')}</Link>
              <Link to="/ai-vision" className="text-gray-700 hover:text-redbird font-medium px-4 py-2 rounded hover:bg-gray-50">{t('aiVision')}</Link>
              <Link to="/#about" className="text-gray-700 hover:text-redbird font-medium px-4 py-2 rounded hover:bg-gray-50">{t('about')}</Link>
              
              {isLoggedIn ? (
                <>
                  <Link to="/account" className="flex items-center text-gray-700 hover:text-redbird font-medium px-4 py-2 rounded hover:bg-gray-50">
                    <User className="w-5 h-5 mr-1" />
                    <span>{t('account')}</span>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="border-redbird text-redbird hover:bg-redbird hover:text-white mx-4"
                    onClick={handleLogout}
                  >
                    {t('logout')}
                  </Button>
                </>
              ) : (
                <Link to="/register" className="px-4">
                  <Button className="bg-redbird hover:bg-redbird-dark text-white w-full">
                    {t('register')}
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
