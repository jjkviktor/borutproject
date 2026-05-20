import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Calendar, MapIcon, Users, Star, Wine, Menu, X } from 'lucide-react';

const translations = {
  en: {
    nav: {
      features: 'Features',
      partners: 'Partners',
      pricing: 'Pricing',
      contact: 'Contact',
    },
    hero: {
      title: 'Discover Wine Paradise in Tokaj & Sárospatak',
      subtitle: 'Your personal guide to the world\'s most prestigious wine regions. Plan routes, book tastings, and explore hidden vineyards with the luxury wine tourism app.',
      cta2: 'Learn More',
    },
    features: {
      title: 'Curated Wine Experiences',
      subtitle: 'Everything you need to explore, plan, and book the finest wine tours in the Tokaj and Sárospatak regions.',
      routePlanner: {
        title: 'Route Planner',
        desc: 'Discover optimal wine tour routes through the Tokaj valley. Personalize your journey based on terroir preference, tour duration, and vineyard specialties.',
        btn: 'Route to Tokaj Museum',
      },
      booking: {
        title: 'Smart Booking',
        desc: 'Reserve exclusive tastings and vineyard tours with premium wineries. Get real-time availability and instant confirmations.',
        btn: 'Book Now',
      },
      maps: {
        title: 'Interactive Maps',
        desc: 'Browse wineries with live entry prices, booking options, and direct map access for each wine location.',
        btn: 'Book Visits',
      },
    },
    partners: {
      title: 'Join Our Winery Network',
      subtitle: 'Grow your wine tourism business by partnering with Borút Planner. Reach thousands of premium wine enthusiasts and luxury travelers worldwide.',
      benefits: [
        'Direct access to our curated customer base',
        'Easy booking management and real-time updates',
        'Featured listings and promotional opportunities',
        'Dedicated support and business analytics',
      ],
      cta: 'Become a Partner',
    },
    pricing: {
      title: 'Premium Membership Plans',
      subtitle: 'Choose the perfect plan for your wine tourism adventure.',
      explorer: {
        name: 'Explorer',
        desc: 'Perfect for casual wine enthusiasts',
        price: '€9.99',
        period: '/month',
        features: ['Route planning', 'Winery directory', 'Basic maps access'],
        btn: 'Get Started',
      },
      connoisseur: {
        name: 'Connoisseur',
        desc: 'For dedicated wine explorers',
        price: '€24.99',
        period: '/month',
        badge: 'Most Popular',
        features: ['Everything in Explorer', 'Priority booking access', '10% discount on all bookings', 'Exclusive events & tastings'],
        btn: 'Start Free Trial',
      },
      sommelier: {
        name: 'Sommelier',
        desc: 'Ultimate luxury experience',
        price: '€49.99',
        period: '/month',
        features: ['Everything in Connoisseur', 'Personal concierge service', 'VIP vineyard access', '25% discount on bookings'],
        btn: 'Contact Sales',
      },
    },
    cta: {
      title: 'Ready to Explore Wine Country?',
      subtitle: 'Start your premium wine tourism journey through Tokaj and Sárospatak.',
      cta2: 'Learn More',
    },
    footer: {
      desc: 'Premium wine tourism experiences in Tokaj and Sárospatak.',
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      productLinks: ['Features'],
      companyLinks: ['About', 'Blog', 'Contact'],
      legalLinks: ['Privacy', 'Terms', 'Cookies'],
      copyright: '© 2026 Borút Planner. All rights reserved. Premium wine tourism experiences.',
    },
    modal: {
      routeTitle: 'Wine Route Planning',
      routeDesc: 'Discover the best wine routes tailored to your preferences. Select your starting point and wine style to get personalized recommendations.',
      bookingTitle: 'Smart Booking System',
      bookingDesc: 'Reserve your spots at premium wineries instantly with live availability and fast confirmation.',
      mapTitle: 'Interactive Map Explorer',
      mapDesc: 'Explore wineries with live entry prices and direct booking for each wine location.',
      partnerTitle: 'Become a Winery Partner',
      partnerDesc: 'Fill out the form below and our team will contact you within 24 hours with partnership details.',
      partnerForm: 'Partner Registration Form',
      pricingTitle: 'Choose Your Plan',
      pricingDesc: 'Start your journey with our flexible membership options.',
      name: 'Your Name',
      email: 'Email Address',
      phone: 'Phone Number',
      winery: 'Winery Name',
      selectWinery: 'Select a Winery',
      visitDate: 'Visit Date',
      paymentMethod: 'Payment Method',
      creditCard: 'Credit Card',
      bankTransfer: 'Bank Transfer',
      cashOnSite: 'Cash on Site',
      message: 'Message',
      submit: 'Submit',
      close: 'Close',
      success: 'Thank you! We will contact you soon.',
    },
  },
  hu: {
    nav: {
      features: 'Funkciók',
      partners: 'Partnerek',
      pricing: 'Árak',
      contact: 'Kapcsolat',
    },
    hero: {
      title: 'Fedezd fel a bor paradicsomot Tokajban és Sárospatak!',
      subtitle: 'A világ legrangosabb borvidékeinek személyes útmutatója. Tervezd meg az útvonalat, foglalj borpróbákat és fedezz fel rejtett szőlészeteket a luxus borturizmus alkalmazással.',
      cta2: 'Tudj meg Többet',
    },
    features: {
      title: 'Szerkesztett Borélmények',
      subtitle: 'Minden, amire szükséged van a Tokaj és Sárospatak legjobb borutazásainak felfedezéséhez, megtervezéséhez és foglalásához.',
      routePlanner: {
        title: 'Útvonal Tervező',
        desc: 'Fedezd fel az optimális borturizmus útvonalakat a Tokaj völgyében. Szabja személyre az utazást a szőlő preferenciája, az útvonal hossza és a szőlészeti szakosodás alapján.',
        btn: 'Tokaj Múzeum Útvonala',
      },
      booking: {
        title: 'Okos Foglalás',
        desc: 'Foglalj kizárólagos borpróbákat és szőlészeti túrákat a prémium borászatokkal. Valós hozzáférés és azonnali megerősítések.',
        btn: 'Most Foglalj',
      },
      maps: {
        title: 'Interaktív Térképek',
        desc: 'Böngészd a borászatokat valós belépőárakkal, foglalási lehetőségekkel és térképes hozzáféréssel.',
        btn: 'Foglalj Borlátogatást',
      },
    },
    partners: {
      title: 'Csatlakozz a Borászati Hálózatunkhoz',
      subtitle: 'Fejleszd borturizmus vállalkozásodat a Borút Planner partnerségével. Érj el több ezer prémium borfogyasztót és luxusutas utazót világszerte.',
      benefits: [
        'Közvetlen hozzáférés a válogatott ügyfélbázisunkhoz',
        'Könnyű foglaláskezelés és valós idejű frissítések',
        'Kiemelt hirdetések és promóciós lehetőségek',
        'Dedikált támogatás és üzleti analitika',
      ],
      cta: 'Légy Partner',
    },
    pricing: {
      title: 'Prémium Tagsági Csomagok',
      subtitle: 'Válassz az ideális csomagot a borturizmus kalandodhoz.',
      explorer: {
        name: 'Felfedező',
        desc: 'Tökéletes a casual bor rajongónak',
        price: '€9,99',
        period: '/hó',
        features: ['Útvonal tervezés', 'Borászati könyvtár', 'Alaptérkép hozzáférés'],
        btn: 'Kezdj',
      },
      connoisseur: {
        name: 'Ismerős',
        desc: 'Dedikált borturizmus kalandozók számára',
        price: '€24,99',
        period: '/hó',
        badge: 'Legnépszerűbb',
        features: ['Minden a Felfedezőben', 'Prioritás foglalás', '10% kedvezmény minden foglaláshoz', 'Kizárólagos események és borpróbák'],
        btn: 'Ingyenes Próba',
      },
      sommelier: {
        name: 'Szommeliér',
        desc: 'Végső luxus élmény',
        price: '€49,99',
        period: '/hó',
        features: ['Minden az Ismerősben', 'Személyes concierge szolgáltatás', 'VIP szőlészeti hozzáférés', '25% kedvezmény foglalásokra'],
        btn: 'Kapcsolatfelvétel',
      },
    },
    cta: {
      title: 'Készen Állsz a Borvidék Felfedezésére?',
      subtitle: 'Kezdd meg a prémium borturizmus utazást Tokajban és Sárospatak!',
      cta2: 'Tudj meg Többet',
    },
    footer: {
      desc: 'Prémium borturizmus élmények Tokajban és Sárospatak!',
      product: 'Termék',
      company: 'Vállalat',
      legal: 'Jogi',
      productLinks: ['Funkciók'],
      companyLinks: ['Rólunk', 'Blog', 'Kapcsolat'],
      legalLinks: ['Adatvédelem', 'Feltételek', 'Sütik'],
      copyright: '© 2026 Borút Planner. Minden jog fenntartva. Prémium borturizmus élmények.',
    },
    modal: {
      routeTitle: 'Borútvonalas Tervezés',
      routeDesc: 'Fedezd fel az igényeidhez igazított legjobb borútvonalatokat. Válaszd a kiindulási pontod és borpreferenciádat a személyre szabott ajánlásokhoz.',
      bookingTitle: 'Okos Foglalás Rendszer',
      bookingDesc: 'Foglalj azonnal a prémium borászatokhoz valós elérhetőséggel és gyors megerősítéssel.',
      mapTitle: 'Interaktív Térkép Felfedezés',
      mapDesc: 'Fedezz fel minden borászatot valós belépőárakkal és közvetlen foglalási lehetőséggel.',
      partnerTitle: 'Légy Partnerünk',
      partnerDesc: 'Töltsd ki az alábbi formot és csapatunk 24 órán belül felvesz veled kapcsolatot a partnerség részleteivel.',
      partnerForm: 'Partner Regisztrációs Forma',
      pricingTitle: 'Válaszd ki a Csomagodat',
      pricingDesc: 'Kezdd el az utazásodat rugalmas tagsági opcióinkkal.',
      name: 'Név',
      email: 'Email Cím',
      phone: 'Telefonszám',
      winery: 'Borászat Neve',
      selectWinery: 'Válassz Borászatot',
      visitDate: 'Látogatás Dátuma',
      paymentMethod: 'Fizetési Mód',
      creditCard: 'Hitelkártya',
      bankTransfer: 'Banki Átutalás',
      cashOnSite: 'Készpénz a Helyszínen',
      message: 'Üzenet',
      submit: 'Küldés',
      close: 'Bezárás',
      success: 'Köszönöm! Hamarosan felvesszük veled a kapcsolatot.',
    },
  },
};

export default function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [modal, setModal] = useState(null);
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    winery: '',
    visitDate: '',
    paymentMethod: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const locations = {
    en: {
      wineries: [
        { name: 'Tokaj Wine Museum', desc: 'World Heritage Wine Museum', embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.8!2d21.4167!3d48.1167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4738c8b8b8b8b8b8%3A0x4738c8b8b8b8b8b8!2sTokaj%2C%20J%C3%B3zsef%20Attila%20u.%2011%2C%203910!5e0!3m2!1sen!2shu!4v1700000000000!5m2!1sen!2shu', price: '€5' },
        { name: 'Holdvölgy Experience', desc: 'Premium wine experience', embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.8!2d21.2833!3d48.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4738c8b8b8b8b8b8%3A0x4738c8b8b8b8b8b8!2sM%C3%A1d%2C%20%C3%81rp%C3%A1d%20u.%2013%2C%203909!5e0!3m2!1sen!2shu!4v1700000000000!5m2!1sen!2shu', price: '€8+' },
        { name: 'Szent Tamás Estate', desc: 'Premium wine estate', embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.8!2d21.2833!3d48.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4738c8b8b8b8b8b8%3A0x4738c8b8b8b8b8b8!2sM%C3%A1d%2C%20Hunyadi%20J%C3%A1nos%20u.%203%2C%203909!5e0!3m2!1sen!2shu!4v1700000000000!5m2!1sen!2shu', price: '€7.50+' },
        { name: 'Takács Vineyard & Winery', desc: 'Vineyard and winery', embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.8!2d21.2833!3d48.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4738c8b8b8b8b8b8%3A0x4738c8b8b8b8b8b8!2sM%C3%A1d%2C%20Zempl%C3%A9ni%20utca%2017%2C%203909!5e0!3m2!1sen!2shu!4v1700000000000!5m2!1sen!2shu', price: '€7+' },
        { name: 'Pelle Winery', desc: 'Family winery', embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.8!2d21.2833!3d48.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4738c8b8b8b8b8b8%3A0x4738c8b8b8b8b8b8!2sM%C3%A1d%2C%20Bercs%C3%A9nyi%20u.%208%2C%203909!5e0!3m2!1sen!2shu!4v1700000000000!5m2!1sen!2shu', price: '€6+' },
        { name: 'Mádi Wine Estate', desc: 'Wine estate', embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.8!2d21.2833!3d48.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4738c8b8b8b8b8b8%3A0x4738c8b8b8b8b8b8!2sM%C3%A1d%2C%20V%C3%A9csei%20u.%2015%2C%203909!5e0!3m2!1sen!2shu!4v1700000000000!5m2!1sen!2shu', price: '€9+' }
      ],
    },
    hu: {
      wineries: [
        { name: 'Tokaji Bormúzeum', desc: 'Világörökségi Bormúzeum', embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.8!2d21.4167!3d48.1167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4738c8b8b8b8b8b8%3A0x4738c8b8b8b8b8b8!2sTokaj%2C%20J%C3%B3zsef%20Attila%20u.%2011%2C%203910!5e0!3m2!1sen!2shu!4v1700000000000!5m2!1sen!2shu', price: '5 000 Ft' },
        { name: 'Holdvölgy Experience', desc: 'Prémium borélmény', embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.8!2d21.2833!3d48.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4738c8b8b8b8b8b8%3A0x4738c8b8b8b8b8b8!2sM%C3%A1d%2C%20%C3%81rp%C3%A1d%20u.%2013%2C%203909!5e0!3m2!1sen!2shu!4v1700000000000!5m2!1sen!2shu', price: '8 000 Ft-tól' },
        { name: 'Szent Tamás Estate', desc: 'Prémium borászat', embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.8!2d21.2833!3d48.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4738c8b8b8b8b8b8%3A0x4738c8b8b8b8b8b8!2sM%C3%A1d%2C%20Hunyadi%20J%C3%A1nos%20u.%203%2C%203909!5e0!3m2!1sen!2shu!4v1700000000000!5m2!1sen!2shu', price: '7 500 Ft-tól' },
        { name: 'Takács Szőlőbirtok és Pincészet', desc: 'Szőlőbirtok és pincészet', embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.8!2d21.2833!3d48.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4738c8b8b8b8b8b8%3A0x4738c8b8b8b8b8b8!2sM%C3%A1d%2C%20Zempl%C3%A9ni%20utca%2017%2C%203909!5e0!3m2!1sen!2shu!4v1700000000000!5m2!1sen!2shu', price: '7 000 Ft-tól' },
        { name: 'Pelle Pince', desc: 'Családi pincészet', embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.8!2d21.2833!3d48.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4738c8b8b8b8b8b8%3A0x4738c8b8b8b8b8b8!2sM%C3%A1d%2C%20Bercs%C3%A9nyi%20u.%208%2C%203909!5e0!3m2!1sen!2shu!4v1700000000000!5m2!1sen!2shu', price: '6 000 Ft-tól' },
        { name: 'Mádi A Borbirtok', desc: 'Borbirtok', embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.8!2d21.2833!3d48.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4738c8b8b8b8b8b8%3A0x4738c8b8b8b8b8b8!2sM%C3%A1d%2C%20V%C3%A9csei%20u.%2015%2C%203909!5e0!3m2!1sen!2shu!4v1700000000000!5m2!1sen!2shu', price: '9 000 Ft-tól' }
      ],
    }
  };

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = translations[language];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(true);
    setFormData({ name: '', email: '', phone: '', winery: '', visitDate: '', paymentMethod: '', message: '' });
    setTimeout(() => {
      setSuccessMessage(false);
      setModal(null);
    }, 2000);
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeModal = () => {
    setModal(null);
    setSelectedLocation(null);
  };

  return (
    <div className="bg-cream min-h-screen">
      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-wine text-cream p-6 flex justify-between items-center">
              <h3 className="text-2xl font-serif font-bold">{modal.title}</h3>
              <button onClick={closeModal} className="hover:bg-wine/80 p-1 rounded">
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              {successMessage && (
                <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-4 text-center font-semibold">
                  {t.modal.success}
                </div>
              )}
              
              {modal.type === 'form' ? (
                <form onSubmit={handleFormSubmit}>
                  <p className="text-gray-600 mb-4">{modal.description}</p>
                  <div className="space-y-3">
                    <input
                      type="text"
                      name="name"
                      placeholder={t.modal.name}
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-wine"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder={t.modal.email}
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-wine"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder={t.modal.phone}
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-wine"
                    />
                    {modal.type === 'form' && modal.id === 'partner' && (
                      <input
                        type="text"
                        name="winery"
                        placeholder={t.modal.winery}
                        value={formData.winery}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-wine"
                      />
                    )}
                    {modal.type === 'form' && modal.id === 'booking' && (
                      <>
                        <select
                          name="winery"
                          value={formData.winery}
                          onChange={handleFormChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-wine"
                        >
                          <option value="">{t.modal.selectWinery}</option>
                          {locations[language].wineries.map((loc, idx) => (
                            <option key={idx} value={loc.name}>
                              {loc.name} ({loc.price})
                            </option>
                          ))}
                        </select>
                        
                        <input
                          type="date"
                          name="visitDate"
                          value={formData.visitDate}
                          onChange={handleFormChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-wine"
                          placeholder={t.modal.visitDate}
                        />
                        
                        {formData.winery && (
                          <div>
                            <label className="block text-sm font-semibold text-wine mb-2">{t.modal.paymentMethod}</label>
                            <div className="space-y-2">
                              <label className="flex items-center">
                                <input
                                  type="radio"
                                  name="paymentMethod"
                                  value="creditCard"
                                  checked={formData.paymentMethod === 'creditCard'}
                                  onChange={handleFormChange}
                                  className="mr-2"
                                />
                                <span>{t.modal.creditCard}</span>
                              </label>
                              <label className="flex items-center">
                                <input
                                  type="radio"
                                  name="paymentMethod"
                                  value="bankTransfer"
                                  checked={formData.paymentMethod === 'bankTransfer'}
                                  onChange={handleFormChange}
                                  className="mr-2"
                                />
                                <span>{t.modal.bankTransfer}</span>
                              </label>
                              <label className="flex items-center">
                                <input
                                  type="radio"
                                  name="paymentMethod"
                                  value="cashOnSite"
                                  checked={formData.paymentMethod === 'cashOnSite'}
                                  onChange={handleFormChange}
                                  className="mr-2"
                                />
                                <span>{t.modal.cashOnSite}</span>
                              </label>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                    <textarea
                      name="message"
                      placeholder={t.modal.message}
                      value={formData.message}
                      onChange={handleFormChange}
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-wine"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-4 bg-wine text-cream py-2 rounded-lg font-bold hover:bg-opacity-90 transition"
                  >
                    {t.modal.submit}
                  </button>
                </form>
              ) : modal.id === 'map' ? (
                <div>
                  <p className="text-gray-600 mb-4">{modal.description}</p>
                  <div className="mb-4">
                    <iframe
                      src={selectedLocation ? selectedLocation.embed : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107000!2d21.2!3d47.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4738c8b8b8b8b8b8%3A0x4738c8b8b8b8b8b8!2sTokaj%2C%20Hungary!5e0!3m2!1sen!2shu!4v1700000000000!5m2!1sen!2shu"}
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                  <div className="grid grid-cols-1 gap-4 text-sm">
                    <div className="bg-cream p-3 rounded-lg">
                      <h4 className="font-bold text-wine mb-2">🍷 {language === 'hu' ? 'Borászatok' : 'Wineries'}</h4>
                      <ul className="space-y-1">
                        {locations[language].wineries.map((location, idx) => (
                          <li key={idx}>
                            <button
                              onClick={() => setSelectedLocation(location)}
                              className={`w-full text-left hover:text-wine transition ${selectedLocation?.name === location.name ? 'text-wine font-semibold' : 'text-gray-600'}`}
                            >
                              • {location.name} - {location.desc} {location.price && `(${location.price})`}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {selectedLocation && (
                    <div className="mt-4 p-3 bg-wine/10 rounded-lg">
                      <p className="text-sm text-wine font-semibold">
                        📍 {language === 'hu' ? 'Kiválasztott:' : 'Selected:'} {selectedLocation.name}
                      </p>
                      <p className="text-sm text-gray-700 mt-2">{selectedLocation.desc}</p>
                      <p className="text-sm text-wine font-semibold mt-2">
                        {language === 'hu' ? 'Belépő ár:' : 'Entry price:'} {selectedLocation.price}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2 mt-3">
                        <button
                          onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(selectedLocation.name + ', Tokaj, Hungary')}`, '_blank')}
                          className="text-xs bg-gold text-wine px-3 py-1 rounded hover:bg-opacity-90 transition font-semibold"
                        >
                          🗺️ {language === 'hu' ? 'Útvonal' : 'Directions'}
                        </button>
                        <button
                          onClick={() => {
                            setFormData(prev => ({ ...prev, winery: selectedLocation.name }));
                            setModal({ type: 'form', id: 'booking', title: t.modal.bookingTitle, description: t.modal.bookingDesc });
                          }}
                          className="text-xs bg-white text-wine px-3 py-1 rounded border border-gold hover:bg-gold hover:text-cream transition font-semibold"
                        >
                          📅 {language === 'hu' ? 'Foglalás' : 'Book Visit'}
                        </button>
                        <button
                          onClick={() => setSelectedLocation(null)}
                          className="text-xs text-gray-500 hover:text-gray-700"
                        >
                          {language === 'hu' ? 'Vissza az összes helyszínhez' : 'Back to all locations'}
                        </button>
                      </div>
                    </div>
                  )}
                  <button
                    onClick={closeModal}
                    className="w-full mt-4 bg-wine text-cream py-2 rounded-lg font-bold hover:bg-opacity-90 transition"
                  >
                    {t.modal.close}
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-gray-600 mb-4">{modal.description}</p>
                  <button
                    onClick={closeModal}
                    className="w-full bg-wine text-cream py-2 rounded-lg font-bold hover:bg-opacity-90 transition"
                  >
                    {t.modal.close}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Wine className="text-gold" size={28} />
              <span className="ml-2 text-xl sm:text-2xl font-serif font-bold text-wine">Borút Planner</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-wine transition">{t.nav.features}</button>
              <button onClick={() => scrollToSection('partners')} className="text-gray-700 hover:text-wine transition">{t.nav.partners}</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-wine transition">{t.nav.contact}</button>
            </div>
            
            {/* Language & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 sm:px-3 py-1 rounded transition font-semibold text-sm ${
                    language === 'en' ? 'bg-wine text-cream' : 'text-gray-700'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('hu')}
                  className={`px-2 sm:px-3 py-1 rounded transition font-semibold text-sm ${
                    language === 'hu' ? 'bg-wine text-cream' : 'text-gray-700'
                  }`}
                >
                  HU
                </button>
              </div>
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 border-t border-gray-200">
              <button onClick={() => scrollToSection('features')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-cream rounded">
                {t.nav.features}
              </button>
              <button onClick={() => scrollToSection('partners')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-cream rounded">
                {t.nav.partners}
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-cream rounded">
                {t.nav.contact}
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-24 bg-gradient-to-br from-wine via-wine to-gray-900 text-cream px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 md:mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-cream/90 mb-6 md:mb-8 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button onClick={() => scrollToSection('features')} className="border-2 border-gold text-gold px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold hover:bg-gold hover:text-wine transition">
                {t.hero.cta2}
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-gold/20 to-cream/10 rounded-2xl aspect-square flex items-center justify-center border-2 border-gold/50">
              <div className="text-center">
                <Wine size={120} className="text-gold mx-auto mb-4" />
                <p className="text-cream/70 font-serif text-lg">Premium Wine Tourism</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-28 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-wine mb-3 md:mb-4">
              {t.features.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Route Planner */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-t-4 border-gold hover:shadow-2xl transition cursor-pointer"
              onClick={() => { setSelectedLocation(locations[language].wineries[0]); setModal({ type: 'info', id: 'map', title: t.modal.mapTitle, description: t.modal.mapDesc }); }}>
              <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gold/20 rounded-lg mb-4 md:mb-6">
                <MapPin className="text-gold" size={32} />
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-wine mb-3 md:mb-4">{t.features.routePlanner.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {t.features.routePlanner.desc}
              </p>
              <div className="mt-4 md:mt-6 flex items-center text-gold font-semibold text-sm md:text-base">
                {t.features.routePlanner.btn} <ChevronDown className="ml-2 w-4 h-4" />
              </div>
            </div>

            {/* Booking System */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-t-4 border-gold hover:shadow-2xl transition cursor-pointer"
              onClick={() => {
                setFormData(prev => ({ ...prev, winery: '' }));
                setModal({ type: 'form', id: 'booking', title: t.modal.bookingTitle, description: t.modal.bookingDesc });
              }}>
              <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gold/20 rounded-lg mb-4 md:mb-6">
                <Calendar className="text-gold" size={32} />
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-wine mb-3 md:mb-4">{t.features.booking.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {t.features.booking.desc}
              </p>
              <div className="mt-4 md:mt-6 flex items-center text-gold font-semibold text-sm md:text-base">
                {t.features.booking.btn} <ChevronDown className="ml-2 w-4 h-4" />
              </div>
            </div>

            {/* Interactive Maps */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-t-4 border-gold hover:shadow-2xl transition cursor-pointer"
              onClick={() => {
                setSelectedLocation(null);
                setModal({ type: 'info', id: 'map', title: t.modal.mapTitle, description: t.modal.mapDesc });
              }}>
              <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gold/20 rounded-lg mb-4 md:mb-6">
                <MapIcon className="text-gold" size={32} />
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-wine mb-3 md:mb-4">{t.features.maps.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {t.features.maps.desc}
              </p>
              <div className="mt-4 md:mt-6 flex items-center text-gold font-semibold text-sm md:text-base">
                {t.features.maps.btn} <ChevronDown className="ml-2 w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner with Us Section */}
      <section id="partners" className="py-16 md:py-28 px-4 bg-wine text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 md:mb-6">
                {t.partners.title}
              </h2>
              <p className="text-base md:text-lg text-cream/90 mb-6 md:mb-8 leading-relaxed">
                {t.partners.subtitle}
              </p>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {t.partners.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <Star className="text-gold mr-3 md:mr-4 mt-1 flex-shrink-0" size={24} />
                    <span className="text-sm md:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => setModal({ type: 'form', id: 'partner', title: t.modal.partnerTitle, description: t.modal.partnerDesc })}
                className="bg-gold text-wine px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold hover:shadow-lg transition transform hover:scale-105">
                {t.partners.cta}
              </button>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-gold/10 to-cream/5 rounded-2xl aspect-square flex items-center justify-center border-2 border-gold/50">
                <div className="text-center">
                  <Users size={120} className="text-gold mx-auto mb-4" />
                  <p className="text-cream/70 font-serif text-lg">Exclusive Partner Benefits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 md:py-28 px-4 bg-gradient-to-r from-wine to-gray-900 text-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 md:mb-6">
            {t.cta.title}
          </h2>
          <p className="text-base md:text-xl text-cream/90 mb-6 md:mb-8">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button onClick={() => scrollToSection('features')} className="border-2 border-gold text-gold px-8 md:px-10 py-3 md:py-4 rounded-lg font-bold hover:bg-gold hover:text-wine transition text-base md:text-lg">
              {t.cta.cta2}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-cream px-4 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
            <div>
              <div className="flex items-center mb-4">
                <Wine className="text-gold" size={24} />
                <span className="ml-2 font-serif font-bold text-lg">Borút Planner</span>
              </div>
              <p className="text-cream/70 text-sm md:text-base">{t.footer.desc}</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">{t.footer.product}</h4>
              <ul className="space-y-2 text-cream/70 text-sm md:text-base">
                {t.footer.productLinks.map((link, idx) => (
                  <li key={idx}><a href="#" className="hover:text-gold transition">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">{t.footer.company}</h4>
              <ul className="space-y-2 text-cream/70 text-sm md:text-base">
                {t.footer.companyLinks.map((link, idx) => (
                  <li key={idx}><a href="#" className="hover:text-gold transition">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">{t.footer.legal}</h4>
              <ul className="space-y-2 text-cream/70 text-sm md:text-base">
                {t.footer.legalLinks.map((link, idx) => (
                  <li key={idx}><a href="#" className="hover:text-gold transition">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-cream/20 pt-8 text-center text-cream/60 text-sm md:text-base">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}