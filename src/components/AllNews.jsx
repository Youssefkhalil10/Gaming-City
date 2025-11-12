import { useEffect, useState } from 'react'
import SearchBar from './SearchBar';
import NewsCard from './NewsCard';
import axiosClient from '../api/axiosClient'


const AllNews = () => {
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosClient.get(`/news?page=${page}&limit=10`);
                const data = await response.data;
                setTotalPages(data.totalPages);
                console.log(data)
                setNews(prev => [...prev, ...data.news]); 
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [page]);

    const pagination = () => {
        setPage(prev => prev + 1);
    };

    const showNews = news.map((n) => (
       <NewsCard key={n._id} thenew={n} />
    ));

    return (
        <>
            <SearchBar search={search} setSearch={setSearch} />
            <div className="grid xs:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 w-[90%] mx-auto mb-5">
                {showNews}
            </div>
            <NewsCard news={news} />
            {page < totalPages && (
                <button
                    dir="rtl"
                    onClick={pagination}
                    className="bg-white text-black py-3 px-3 my-8 cursor-pointer block mx-auto rounded-xl"
                >
                    عرض المزيد
                </button>
            )}
        </>
    );
};

export default AllNews;
