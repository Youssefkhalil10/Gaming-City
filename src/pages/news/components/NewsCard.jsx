import { Link } from 'react-router-dom';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import 'dayjs/locale/ar';

dayjs.extend(relativeTime);
dayjs.locale('ar');
const NewsCard = ({ thenew }) => {
    // حماية إضافية لو thenew مش موجود
    if (!thenew) return null;

    return (
        <div dir="rtl" className="bg-[#1c1c1c] p-4 rounded-2xl">
            {thenew?.images?.length > 0 && (
                <img
                    src={thenew.images[0]}
                    alt={thenew.title}
                    className="rounded-3xl w-full"
                />
            )}

            <div className="flex items-end justify-between">
                <div>
                    <h3 className="mt-3">{thenew.title}</h3>
                    <div className="flex gap-2 mt-4">
                        <h3 className="text-5">guest</h3>
                        <p className="text-gray-600">
                            {dayjs(thenew.createdAt).fromNow()}
                        </p>
                    </div>
                </div>
                <Link className="bg-white text-black py-3 px-3 h-fit rounded-xl">
                    قراءة المزيد
                </Link>
            </div>
        </div>
    );
};

export default NewsCard;
