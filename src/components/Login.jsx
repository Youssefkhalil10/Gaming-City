import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/gamingcity.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [validationErrors, setValidationErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (validationErrors[field]) {
      setValidationErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      errors.email = "البريد الإلكتروني مطلوب";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "البريد الإلكتروني غير صحيح";
    }

    if (!formData.password) {
      errors.password = "كلمة المرور مطلوبة";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError(null);

    try {
      // ✅ Mock API: محاكاة delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // ✅ تحقق من البيانات مباشرة
      if (
        formData.email === "owner@gmail.com" &&
        formData.password === "111111"
      ) {
        const fakeData = { token: "fake-jwt-token" }; // token وهمي
        localStorage.setItem("token", fakeData.token);
        console.log("✅ Login success:", fakeData);
        navigate("/home");
      } else {
        throw new Error("البريد الإلكتروني أو كلمة المرور غير صحيحة");
      }
    } catch (err) {
      console.error("❌ Login error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-[840px] mx-auto px-4">
        {/* Top bar */}
        <div className="py-6 flex justify-between">
          <button
            onClick={() => navigate("/")}
            aria-label="رجوع"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[rgba(201,162,39,1)] text-black hover:opacity-90 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 cursor-pointer"
            >
              <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          <button onClick={toggleTheme} className="btn">
            {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* Logo */}
        <div className="flex justify-center mt-2 mb-8">
          <img src={logo} alt="Logo" className="h-20 w-20" />
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">مرحباً بك مرة أخرى</h1>
          <p className="text-lg">سجل دخولك للوصول إلى حسابك</p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4"
        >
          {/* Email */}
          <div className="w-full max-w-2xl relative">
            <input
              style={{ direction: "rtl" }}
              type="email"
              placeholder="البريد الإلكتروني"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`w-full bg-white text-[#848080] rounded-full h-14 pr-12 pl-6 shadow-sm focus:outline-none ${
                validationErrors.email ? "border-2 border-red-500" : ""
              }`}
            />
            <div className="absolute inset-y-0 right-4 flex items-center text-gray-400 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5Zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5Z" />
              </svg>
            </div>
            {validationErrors.email && (
              <p className="text-red-500 text-xs mt-1 pr-2">
                {validationErrors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="w-full max-w-2xl relative">
            <input
              style={{ direction: "rtl" }}
              type="password"
              placeholder="كلمة السر"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              className={`w-full rounded-full bg-white text-[#848080] h-14 pr-12 pl-6 shadow-sm focus:outline-none ${
                validationErrors.password ? "border-2 border-red-500" : ""
              }`}
            />
            <div className="absolute inset-y-0 right-4 flex items-center text-gray-400 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-6h-1V9a5 5 0 0 0-10 0v2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2Zm-8-2a3 3 0 1 1 6 0v2H10V9Z" />
              </svg>
            </div>
            {validationErrors.password && (
              <p className="text-red-500 text-xs mt-1 pr-2">
                {validationErrors.password}
              </p>
            )}
          </div>

          {/* Forgot password */}
          <div className="w-full max-w-2xl flex justify-center text-sm">
            <button
              type="button"
              className="px-1 text-[rgba(201,162,39,1)] underline underline-offset-4 cursor-pointer mr-2"
            >
              تغير
            </button>
            <span>نسيت كلمة المرور؟</span>
          </div>

          {/* Error */}
          {error && (
            <div className="w-full max-w-2xl">
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center">
                {error}
              </div>
            </div>
          )}

          {/* Submit */}
          <div className="w-full max-w-2xl">
            <button
              type="submit"
              disabled={loading}
              className={`w-full h-16 rounded-full text-lg font-extrabold tracking-wide transition
                ${
                  loading
                    ? "bg-gray-400 text-gray-800 cursor-not-allowed"
                    : "bg-[rgba(201,162,39,1)] hover:bg-[rgba(201,162,39,0.85)] active:bg-[rgba(201,162,39,0.75)] text-black cursor-pointer shadow-[0_10px_30px_rgba(201,162,39,0.4)]"
                }`}
            >
              {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
            </button>
          </div>

          {/* Social login */}
          <div className="mt-8">
            <div className="grid grid-cols-2 gap-6">
              <button className="h-14 flex items-center justify-center gap-3 rounded-full bg-[#1877F2] text-white font-semibold hover:opacity-80 cursor-pointer transition px-4">
                <span>تسجيل الدخول عن طريق فيسبوك</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12Z" />
                </svg>
              </button>

              <button className="h-14 flex items-center justify-center gap-3 rounded-full bg-white text-gray-800 font-semibold border hover:bg-gray-100 transition cursor-pointer">
                <span>تسجيل الدخول عن طريق غوغل</span>
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google"
                  className="w-6 h-6"
                />
              </button>
            </div>

            <p className="text-center text-[rgba(201,162,39,1)] mt-6 font-bold cursor-pointer underline underline-offset-4">
              انشاء حساب
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
