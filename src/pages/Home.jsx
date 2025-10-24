import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import Navbar from "../components/Navbar";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroSlides, setHeroSlides] = useState([]);
  const [newsCards, setNewsCards] = useState([]);
  const [articles, setArticles] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);

  // Auto-play slider
  useEffect(() => {
    // Example of fetching hero slides from an API
    const fetchHeroSlides = async () => {
      // This is a mock API call. Replace with your actual API endpoint.
      let mockHeroSlides = [];
      try {
        const response = await fetch(
          "https://gamingcity-production.up.railway.app/api/advertised/active"
        );
        const data = await response.json();
        mockHeroSlides = data.advertised.map((item) => ({
          id: item._id,
          image:
            item.imageUrl ||
            "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format&fit=crop", // Placeholder image
          title: "",
          description: "",
          category: "", // Default category
        }));
        setHeroSlides(mockHeroSlides);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    const fetchNewsCards = async () => {
      try {
        const response = await fetch(
          "https://gamingcity-production.up.railway.app/api/news"
        );
        const data = await response.json();
        const formattedNews = data.news.map((item) => ({
          id: item._id,
          image:
            item.images?.[0] ||
            "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&auto=format&fit=crop", // Placeholder image
          title: item.title,
          category: item.newsType?.title || "أخبار", // Default category
        }));
        setNewsCards(formattedNews);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://gamingcity-production.up.railway.app/api/news"
        );
        const data = await response.json();
        const formattedArticles = data.news.map((item) => ({
          id: item._id,
          image:
            item.images?.[0] ||
            "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&auto=format&fit=crop", // Placeholder image
          title: item.title,
          category: item.newsType?.title || "أخبار", // Default category
        }));
        setArticles(formattedArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    const fetchTeamMembers = async () => {
      const mockTeamMembers = [
        {
          id: 1,
          name: "أحمد محمد",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop",
        },
        {
          id: 2,
          name: "سارة أحمد",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop",
        },
        {
          id: 3,
          name: "محمد علي",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop",
        },
        {
          id: 4,
          name: "نور حسن",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop",
        },
        {
          id: 5,
          name: "خالد يوسف",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop",
        },
        {
          id: 6,
          name: "ليلى كريم",
          image:
            "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&auto=format&fit=crop",
        },
        {
          id: 7,
          name: "عمر سعيد",
          image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop",
        },
        {
          id: 8,
          name: "مريم فاروق",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop",
        },
      ];
      setTeamMembers(mockTeamMembers);
    };

    fetchHeroSlides();
    fetchNewsCards();
    fetchArticles();
    fetchTeamMembers();

    if (heroSlides.length > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <div className="min-h-screen bg-black-900" dir="rtl">
      {/* Hero Slider Section */}
      <section className="relative bg-gradient-to-br  overflow-hidden mt-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Navbar />
          <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              {heroSlides.length > 0 && (
                <div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={heroSlides[currentSlide].image}
                    alt={heroSlides[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-4"
                    >
                      {heroSlides[currentSlide].category}
                    </span>
                    <h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl md:text-5xl font-extrabold text-white mb-4"
                    >
                      {heroSlides[currentSlide].title}
                    </h2>
                    <p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-lg text-gray-200 max-w-2xl"
                    >
                      {heroSlides[currentSlide].description}
                    </p>
                  </div>
                </div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center transition shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center transition shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    currentSlide === index ? "bg-yellow-500 w-8" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {newsCards.map((card, index) => (
            <div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <span className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                  {card.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Search/Newsletter Section */}
      <section className=" py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-right">
              <h2 className=" text-yellow-500 text-3xl md:text-4xl font-extrabold  mb-4">
                ابحث عن آخر الأخبار والمراجعات
              </h2>
              <p className="text-lg text-white">
                ابق على اطلاع دائم بأحدث أخبار الألعاب والتقنية
              </p>
            </div>
            <div className="flex-1">
              <div className="bg-white rounded-2xl shadow-2xl p-2 flex items-center gap-2 max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="ابحث هنا..."
                  className="flex-1 px-4 py-3 outline-none text-gray-800"
                />
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-xl font-bold transition flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  بحث
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Heading */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-white mb-8 text-center">
          آخر الأخبار
        </h2>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <span className="absolute top-3 right-3 bg-yellow-500 text-black px-2 py-1 rounded-lg text-xs font-bold">
                  {article.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-white line-clamp-2">
                  {article.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-xl font-bold transition">
            المزيد من الأخبار
          </button>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-extrabold text-white mb-12 text-center">
          فريق العمل
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="text-center cursor-pointer"
            >
              <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-4 border-yellow-500 shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-gray-400 font-medium">{member.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-br  py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 bg-purple-900 rounded-3xl flex items-center justify-center shadow-2xl">
              <svg
                className="w-20 h-20 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7v10c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7l-10-5zm0 18c-4.4 0-8-3.6-8-8V8.3l8-4.7 8 4.7V12c0 4.4-3.6 8-8 8z" />
              </svg>
            </div>
            <div className="flex-1 text-center md:text-right">
              <h2 className="text-3xl font-extrabold text-yellow-500 mb-4">
                من نحن؟
              </h2>
              <p className="text-lg text-white-500 leading-relaxed">
                نحن فريق متخصص في تقديم أحدث الأخبار والمراجعات حول عالم الألعاب
                والتقنية. هدفنا هو توفير محتوى عالي الجودة وموثوق لجميع عشاق
                الألعاب في الوطن العربي. نسعى دائماً لتقديم تجربة فريدة ومميزة
                لمتابعينا من خلال تغطية شاملة لكل ما هو جديد.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e1e1e] text-gray-400 py-12 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-yellow-500 transition">
                    الرئيسية
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500 transition">
                    الأخبار
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500 transition">
                    المراجعات
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500 transition">
                    الفيديوهات
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">الفئات</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-yellow-500 transition">
                    أجهزة الألعاب
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500 transition">
                    ألعاب الحاسوب
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500 transition">
                    ألعاب الهواتف
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500 transition">
                    الرياضات الإلكترونية
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">الشركة</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-yellow-500 transition">
                    من نحن
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500 transition">
                    اتصل بنا
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500 transition">
                    سياسة الخصوصية
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500 transition">
                    شروط الاستخدام
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">تابعنا</h3>
              <p className="text-sm mb-4">
                ابق على تواصل معنا عبر منصات التواصل الاجتماعي
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-lg flex items-center justify-center transition"
                >
                  <span className="text-xl">📘</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-lg flex items-center justify-center transition"
                >
                  <span className="text-xl">📷</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-lg flex items-center justify-center transition"
                >
                  <span className="text-xl">🐦</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-lg flex items-center justify-center transition"
                >
                  <span className="text-xl">▶️</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>© 2024 GameNews. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
