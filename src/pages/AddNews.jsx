import React, { useState } from "react";
import axios from "axios";

function AddNews() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [images, setImage] = useState(null);
  const [newsType, setNewsType] = useState(""); // ✅ New State
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const API_URL = "https://gamingcity-production.up.railway.app/api";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setMessage("❌ مفيش Token — لازم تعمل تسجيل دخول");
        return;
      }

      // ✅ تجهيز formData
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", desc);
      formData.append("newsType", "68ca887ce456a5f692c73dc8"); // ✅ بعد ما تضيف الـ select
      formData.append("images", images);

      const response = await axios.post(`${API_URL}/news`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("✅ Added:", response.data);
      setMessage("✅ الخبر اتضاف بنجاح!");

      // ✅ تفريغ البيانات
      setTitle("");
      setDesc("");
      setImage(null);
    } catch (error) {
      console.error("❌ Error:", error);

      // ✅ اطبع رسالة السيرفر هنا
      if (error.response) {
        console.log("💬 Server Response:", error.response.data);
        setMessage(
          `❌ فشل في إضافة الخبر — ${error.response.data.message || ""}`
        );
      } else {
        setMessage("❌ فشل في إضافة الخبر — خطأ غير متوقع");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">إضافة خبر جديد</h1>

      {message && (
        <p className="mb-4 p-3 bg-red-400 rounded-lg text-center">{message}</p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="عنوان الخبر"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 border rounded-lg"
          required
        />

        <textarea
          placeholder="وصف الخبر"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="p-3 border rounded-lg"
          rows="5"
          required
        />

        {/* ✅ قائمة اختيار نوع الخبر */}
        <select
          value={newsType}
          onChange={(e) => setNewsType(e.target.value)}
          className="p-3 border rounded-lg"
          required
        >
          <option value="">اختار نوع الخبر</option>
          <option value="68ca887ce456a5f692c73dc8">عام</option>
          <option value="68ca888be456a5f692c73dcc">رياضة</option>
          <option value="68ca889be456a5f692c73dcd">تقني</option>
        </select>

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="p-3 border rounded-lg"
        />

        <button
          type="submit"
          disabled={loading}
          className="p-3 bg-yellow-500 text-black rounded-lg font-bold"
        >
          {loading ? "جاري الإضافة..." : "إضافة الخبر"}
        </button>
      </form>
    </div>
  );
}

export default AddNews;
