import profile from "../assets/profile.jpg";
import logo from "../assets/Vector.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

function Profile() {
  return (
    <>
      <motion.div
        className="
        relative 
        m-auto 
        w-[95%] sm:w-[85%] md:w-[70%] lg:w-[50%]
        min-h-[75vh] 
        mt-[20%] sm:mt-[10%] md:mt-[8%] 
        rounded-2xl 
        shadow-lg shadow-black/30 
        p-4 sm:p-6 md:p-8
      "
        style={{ backgroundColor: "#1F1F1F" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Link
          to="/setting"
          className="absolute left-3 top-3 bg-amber-300 text-black rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold hover:bg-amber-400 transition"
        >
          ←
        </Link>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 px-4 sm:px-6 pt-10">
          <img
            src={logo}
            alt="logo"
            className="w-8 h-8 absolute right-3 top-3"
          />
        </div>

        <Protfolio />
      </motion.div>
    </>
  );
}

export default Profile;

function Protfolio() {
  return (
    <>
      <div className="mb-[5%] flex flex-col items-center">
        <h2
          style={{ color: "#C9A227" }}
          className="text-lg sm:text-xl md:text-2xl font-semibold text-center"
        >
          الملف الشخصي
        </h2>

        <img
          src={profile}
          alt="profile"
          className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] mt-4 rounded-full object-cover"
        />

        <Buttons />
      </div>

      <div
        style={{ backgroundColor: "#3D3D3D" }}
        className="
        w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%]
        m-auto rounded-3xl p-4 sm:p-6 md:p-8"
      >
        <Form />
      </div>
    </>
  );
}

function Buttons() {
  const [selected, setSelected] = useState("عادي");

  return (
    <div
      style={{ backgroundColor: "#3D3D3D" }}
      className="
        w-[70%] sm:w-[50%] md:w-[35%]
        h-10 m-auto rounded-xl mt-[2%] mb-[3%]
        flex justify-between items-center px-2
      "
    >
      <button
        onClick={() => setSelected("مميز")}
        style={{
          backgroundColor: selected === "مميز" ? "#C9A227" : "#23113F4D",
        }}
        className="px-4 py-2 rounded-xl text-black font-semibold transition-all text-sm sm:text-base"
      >
        مميز
      </button>
      <span className="text-gray-400">|</span>
      <button
        onClick={() => setSelected("عادي")}
        style={{
          backgroundColor: selected === "عادي" ? "#C9A227" : "#23113F4D",
        }}
        className="px-4 py-2 rounded-xl text-black font-semibold transition-all text-sm sm:text-base"
      >
        عادي
      </button>
    </div>
  );
}

function Form() {
  const [data, setData] = useState({
    email: "abdalhakim.miri@gmail.com",
    name: "هيمي ساروا",
  });

  return (
    <div className="w-full text-white">
      <form
        dir="rtl"
        className="flex flex-col gap-4 text-sm sm:text-base"
        style={{ textAlign: "right" }}
      >
        {/* الاسم */}
        <input
          type="text"
          placeholder="الاسم"
          value={data.name}
          className="p-3 rounded-lg bg-[#2E2E2E] outline-none focus:ring-2 focus:ring-[#C9A227] text-right placeholder:text-right"
        />

        {/* الإيميل */}
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={data.email}
          className="p-3 rounded-lg bg-[#2E2E2E] outline-none focus:ring-2 focus:ring-[#C9A227] text-right placeholder:text-right"
        />

        {/* رقم الهاتف */}
        <input
          type="tel"
          placeholder="رقم الهاتف"
          className="p-3 rounded-lg bg-[#2E2E2E] outline-none focus:ring-2 focus:ring-[#C9A227] text-right placeholder:text-right"
        />

        {/* حساب فيسبوك */}
        <input
          type="text"
          placeholder="حساب فيسبوك"
          className="p-3 rounded-lg bg-[#2E2E2E] outline-none focus:ring-2 focus:ring-[#C9A227] text-right placeholder:text-right"
        />

        {/* حساب ديسكورد */}
        <input
          type="text"
          placeholder="حساب ديسكورد"
          className="p-3 rounded-lg bg-[#2E2E2E] outline-none focus:ring-2 focus:ring-[#C9A227] text-right placeholder:text-right"
        />

        {/* الأزرار */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6">
          <button
            type="button"
            className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition-all text-white font-semibold w-full sm:w-auto"
          >
            حذف الحساب
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded-lg bg-[#C9A227] text-black font-semibold hover:bg-[#b99722] transition-all w-full sm:w-auto"
          >
            تسجيل الخروج
          </button>
        </div>
      </form>
    </div>
  );
}
