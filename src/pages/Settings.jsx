import profile from "../assets/profile.jpg";
import logo from "../assets/gamingcity.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const buttons = [
  { key: 1, name: "الملف الشخصي" },
  { key: 2, name: "المحفوظات" },
  { key: 3, name: "الإشعارات" },
  { key: 4, name: "سياسة الخصوصية" },
  { key: 5, name: "تسجيل الخروج" },
];

function Settings() {
  return (
    <motion.div
      className="
        relative 
        m-auto 
        w-[90%] sm:w-[80%] md:w-[60%] 
        h-auto min-h-[75vh] 
        mt-[15%] sm:mt-[10%] md:mt-[8%] 
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
        to="/home"
        className="absolute left-3 top-3 bg-amber-300 text-black rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold hover:bg-amber-400 transition"
      >
        ←
      </Link>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 px-4 sm:px-6 pt-10">
        <img
          src={profile}
          alt="profile"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full"
        />
        <h2
          style={{ color: "#C9A227" }}
          className="text-lg sm:text-xl md:text-2xl font-semibold"
        >
          الإعدادات
        </h2>
        <img
          src={logo}
          alt="logo"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full"
        />
      </div>

      <Buttons />
    </motion.div>
  );
}

export default Settings;

function Buttons() {
  return (
    <div className="mt-[4%] pb-6">
      {buttons.map((btn) => (
        <Link
          key={btn.key}
          to="#"
          className="
            block 
            m-auto 
            mb-8 
            p-2 
            rounded-3xl 
            text-center 
            w-[80%] sm:w-[60%] md:w-[50%] 
            bg-[#3D3D3D] 
            text-white 
            hover:bg-[#555] 
            transition
          "
        >
          {btn.name}
        </Link>
      ))}
    </div>
  );
}
