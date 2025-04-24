import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Данные для капчи с птицами
const captchaOptions = [
  { id: 1, name: "Голубь", image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Rock_Pigeon_Columba_livia.jpg", correct: true },
  { id: 2, name: "Воробей", image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Passer_domesticus_male_%2815%29.jpg", correct: false },
  { id: 3, name: "Сорока", image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Pica_pica_-_Compans_Caffarelli_-_2012-03-16.jpg", correct: false },
];

const Register = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [selectedCaptcha, setSelectedCaptcha] = useState<number | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (username.length < 3) {
      newErrors.username = "Имя пользователя должно содержать не менее 3 символов";
    }
    
    if (password.length < 6) {
      newErrors.password = "Пароль должен содержать не менее 6 символов";
    }
    
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Пароли не совпадают";
    }
    
    if (!acceptTerms) {
      newErrors.acceptTerms = "Вы должны принять условия использования";
    }
    
    if (selectedCaptcha === null) {
      newErrors.captcha = "Пожалуйста, выберите правильную птицу";
    } else if (!captchaOptions[selectedCaptcha]?.correct) {
      newErrors.captcha = "Выбрана неправильная птица";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Имитация регистрации
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username);
      
      toast({
        title: "Регистрация успешна!",
        description: "Спасибо за регистрацию! Вы помогаете нам стать крупнее и лучше.",
        duration: 5000,
      });
      
      // Перенаправляем на главную страницу
      navigate("/");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-10 px-4">
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-redbird">Регистрация</CardTitle>
            <CardDescription className="text-center">
              Станьте частью сообщества Red Pigeon и помогите нам защищать птиц
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username">Имя пользователя</Label>
                <Input 
                  id="username" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  placeholder="Введите имя пользователя" 
                />
                {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <Input 
                  id="password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Введите пароль" 
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Подтверждение пароля</Label>
                <Input 
                  id="confirmPassword" 
                  type="password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Подтвердите пароль" 
                />
                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium text-sm">Выберите изображение голубя:</h4>
                <div className="grid grid-cols-3 gap-4">
                  {captchaOptions.map((option, index) => (
                    <div 
                      key={option.id}
                      className={`cursor-pointer rounded-md overflow-hidden border-2 transition-all ${
                        selectedCaptcha === index
                          ? 'border-redbird shadow-md' 
                          : 'border-transparent hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedCaptcha(index)}
                    >
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={option.image} 
                          alt={option.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-center py-1 text-sm">{option.name}</p>
                    </div>
                  ))}
                </div>
                {errors.captcha && <p className="text-red-500 text-sm">{errors.captcha}</p>}
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="acceptTerms" 
                  checked={acceptTerms}
                  onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                />
                <label
                  htmlFor="acceptTerms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Я принимаю условия использования и политику конфиденциальности
                </label>
              </div>
              {errors.acceptTerms && <p className="text-red-500 text-sm">{errors.acceptTerms}</p>}
              
              <div className="mt-4">
                <Button type="submit" className="w-full bg-redbird hover:bg-redbird-dark">
                  Зарегистрироваться
                </Button>
              </div>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                Регистрируясь на сайте, вы помогаете проекту Red Pigeon развиваться и спасать больше птиц. Спасибо за вашу поддержку!
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default Register;
