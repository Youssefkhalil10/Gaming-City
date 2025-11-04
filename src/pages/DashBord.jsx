import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import photo from "../assets/admin.png";

const data = [
  {
    AdminImg: photo,
    Title: "Aliboss",
  },
];

const Options = [
  { key: 1, Title: "لوحة التحكم", path: "/dashbord" },
  { key: 2, Title: "الملف الشخصي", path: "/profile" },
  { key: 3, Title: "الأخبار", path: "/news" },
  { key: 4, Title: "المتاجر", path: "/stores" },
  { key: 5, Title: "البطولات", path: "/tournaments" },
  { key: 6, Title: "المسؤولين", path: "/admins" },
];

function Buttons() {
  return (
    <div className="flex flex-col gap-3 mt-6 w-full">
      {Options.map((e) => (
        <Link
          to={e.path}
          key={e.key}
          className={`block text-center py-2 rounded-xl text-sm sm:text-base transition-all duration-300 ${
            e.key === 1
              ? "bg-amber-300 text-gray-900"
              : "bg-gray-800 text-amber-300 hover:bg-amber-300 hover:text-gray-900"
          }`}
        >
          {e.Title}
        </Link>
      ))}
    </div>
  );
}

function DashBord() {
  const navigate = useNavigate();
  const [today, setToday] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handlePopState = (e) => {
      e.preventDefault();
      navigate("/home"); // يرجّع المستخدم للصفحة الرئيسية
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("ar-EG", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setToday(formattedDate);
  }, []);

  return (
    <div className="flex flex-col md:flex-row-reverse min-h-screen">
      {/* القائمة الجانبية */}
      <div
        style={{ backgroundColor: "#333333" }}
        className={`${
          menuOpen ? "block" : "hidden"
        } md:block w-full md:w-[250px] p-6 flex flex-col items-center shadow-lg fixed md:static top-0 right-0 h-full md:h-auto z-50`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="md:hidden absolute top-3 left-3 text-amber-300 text-2xl"
        >
          ✕
        </button>

        {data.map((e, i) => (
          <div key={i} className="text-center w-full">
            <img
              className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full border-2 border-amber-300 mx-auto"
              src={e.AdminImg}
              alt={e.Title}
            />
            <h2 className="text-yellow-400 mt-3 text-base sm:text-lg font-semibold">
              أهلاً وسهلاً {e.Title}
            </h2>
            <Buttons />
          </div>
        ))}
      </div>

      {/* زر فتح القائمة في الموبايل */}
      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden fixed top-4 right-4 bg-amber-300 text-black px-3 py-1 rounded-lg font-semibold shadow-lg z-40"
      >
        ☰ القائمة
      </button>

      {/* المحتوى الرئيسي */}
      <div
        style={{ backgroundColor: "#151515" }}
        className="flex-1 p-5 sm:p-8 text-white overflow-y-auto mt-[60px] md:mt-0"
      >
        <div className="flex flex-wrap justify-center md:justify-between gap-6 mt-10">
          {/* الأخبار */}
          <div
            style={{ backgroundColor: "#333333" }}
            className="w-full sm:w-[80%] md:w-[45%] rounded-xl p-5 shadow-md"
          >
            <h3 className="text-amber-300 text-lg sm:text-xl font-bold mb-3 border-b border-amber-300 inline-block">
              📰 الأخبار
            </h3>
            <p className="text-gray-300 mb-3 text-sm sm:text-base">
              هنا سيتم عرض آخر الأخبار الخاصة بالموقع أو التحديثات القادمة.
            </p>
            <p className="text-xs sm:text-sm text-gray-400 border-t border-gray-600 pt-2">
              📅 التاريخ: {today}
            </p>
          </div>

          {/* المسؤولين */}
          <div
            style={{ backgroundColor: "#333333" }}
            className="w-full sm:w-[80%] md:w-[45%] rounded-xl p-5 shadow-md"
          >
            <h3 className="text-amber-300 text-lg sm:text-xl font-bold mb-3 border-b border-amber-300 inline-block">
              👤 الادمن
            </h3>
            <p className="text-gray-300 mt-[3%] text-center text-xl sm:text-2xl">
              7
            </p>
          </div>

          {/* المشاهدات */}
          <div
            style={{ backgroundColor: "#333333" }}
            className="w-full sm:w-[80%] md:w-[45%] rounded-xl p-5 shadow-md"
          >
            <h3 className="text-amber-300 text-lg sm:text-xl font-bold mb-3 border-b border-amber-300 inline-block">
              👁️ المشاهدات
            </h3>
            <p className="text-gray-300 mb-3 text-sm sm:text-base">
              هنا سيتم عرض إحصائيات المشاهدات وعدد الزوار بشكل تفصيلي.
            </p>
            <p className="text-xs sm:text-sm text-gray-400 border-t border-gray-600 pt-2">
              📅 التاريخ: {today}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBord;
