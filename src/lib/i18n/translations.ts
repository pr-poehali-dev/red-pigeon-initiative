// Типы для локализации
export type Language = 'ru' | 'en' | 'de' | 'tr';

export type TranslationKey = 
  | 'home'
  | 'rareBirds'
  | 'helpPigeons'
  | 'updates'
  | 'sponsors'
  | 'aiVision'
  | 'about'
  | 'register'
  | 'login'
  | 'logout'
  | 'account'
  | 'heroTitle'
  | 'heroSubtitle'
  | 'heroButton'
  | 'featuresTitle'
  | 'birdsTitle'
  | 'helpTitle'
  | 'footerDescription'
  | 'selectLanguage';

export type Translations = Record<TranslationKey, string>;

export const translations: Record<Language, Translations> = {
  ru: {
    home: 'Главная',
    rareBirds: 'Редкие птицы',
    helpPigeons: 'Помощь голубям',
    updates: 'Наши обновления',
    sponsors: 'Спонсоры',
    aiVision: 'Как нас видит ИИ?',
    about: 'О проекте',
    register: 'Зарегистрироваться',
    login: 'Войти',
    logout: 'Выйти',
    account: 'Аккаунт',
    heroTitle: 'Спасаем жизни птиц каждый день',
    heroSubtitle: 'Присоединяйтесь к нашей миссии по защите и сохранению птиц в городской среде',
    heroButton: 'Узнать больше',
    featuresTitle: 'Наши особенности',
    birdsTitle: 'Редкие виды птиц',
    helpTitle: 'Как помочь голубям',
    footerDescription: 'Red Pigeon — некоммерческая организация, занимающаяся спасением и реабилитацией птиц',
    selectLanguage: 'Выберите язык',
  },
  en: {
    home: 'Home',
    rareBirds: 'Rare Birds',
    helpPigeons: 'Help Pigeons',
    updates: 'Our Updates',
    sponsors: 'Sponsors',
    aiVision: 'How AI Sees Us?',
    about: 'About',
    register: 'Register',
    login: 'Login',
    logout: 'Logout',
    account: 'Account',
    heroTitle: 'Saving bird lives every day',
    heroSubtitle: 'Join our mission to protect and preserve birds in urban environments',
    heroButton: 'Learn more',
    featuresTitle: 'Our Features',
    birdsTitle: 'Rare Bird Species',
    helpTitle: 'How to Help Pigeons',
    footerDescription: 'Red Pigeon is a non-profit organization dedicated to saving and rehabilitating birds',
    selectLanguage: 'Select language',
  },
  de: {
    home: 'Startseite',
    rareBirds: 'Seltene Vögel',
    helpPigeons: 'Tauben helfen',
    updates: 'Unsere Updates',
    sponsors: 'Sponsoren',
    aiVision: 'Wie KI uns sieht?',
    about: 'Über uns',
    register: 'Registrieren',
    login: 'Anmelden',
    logout: 'Abmelden',
    account: 'Konto',
    heroTitle: 'Wir retten täglich Vogelleben',
    heroSubtitle: 'Nehmen Sie an unserer Mission teil, Vögel in städtischen Umgebungen zu schützen und zu bewahren',
    heroButton: 'Mehr erfahren',
    featuresTitle: 'Unsere Besonderheiten',
    birdsTitle: 'Seltene Vogelarten',
    helpTitle: 'Wie man Tauben hilft',
    footerDescription: 'Red Pigeon ist eine gemeinnützige Organisation, die sich der Rettung und Rehabilitation von Vögeln widmet',
    selectLanguage: 'Sprache auswählen',
  },
  tr: {
    home: 'Ana Sayfa',
    rareBirds: 'Nadir Kuşlar',
    helpPigeons: 'Güvercinlere Yardım',
    updates: 'Güncellemelerimiz',
    sponsors: 'Sponsorlar',
    aiVision: 'Yapay Zeka Bizi Nasıl Görüyor?',
    about: 'Hakkında',
    register: 'Kayıt Ol',
    login: 'Giriş Yap',
    logout: 'Çıkış Yap',
    account: 'Hesap',
    heroTitle: 'Her gün kuş hayatlarını kurtarıyoruz',
    heroSubtitle: 'Kentsel ortamlarda kuşları koruma ve muhafaza etme misyonumuza katılın',
    heroButton: 'Daha fazla bilgi',
    featuresTitle: 'Özelliklerimiz',
    birdsTitle: 'Nadir Kuş Türleri',
    helpTitle: 'Güvercinlere Nasıl Yardım Edilir',
    footerDescription: 'Red Pigeon, kuşları kurtarma ve rehabilite etmeye adanmış kar amacı gütmeyen bir kuruluştur',
    selectLanguage: 'Dil seçin',
  }
};
