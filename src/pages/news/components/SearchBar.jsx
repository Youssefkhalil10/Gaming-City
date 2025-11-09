import { IoMdSearch } from "react-icons/io"

const SearchBar = ({ search, setSearch }) => {
    return (
        <>
            <h2
                dir="rtl"
                className="mt-28 text-center mb-10 text-2xl text-[#C9A227]"
            >
                أحدث أخبار الألعاب
            </h2>
            <div dir='rtl' className="relative w-[90%] mx-auto mt-8">
                <input
                    type="text"
                    id="search"
                    placeholder=" "
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="peer w-[300px]  border-none mb-5 bg-[#2F2F2F] rounded-2xl p-3 outline-none transition-all  text-white"
                />
                <label
                    htmlFor="search"
                    className="absolute right-3 top-2 text-lg flex items-end gap-2 transition-all duration-300 px-2 text-[#C9A227] peer-placeholder-shown:visible peer-[&:not(:placeholder-shown)]:visible  "
                >
                    <IoMdSearch className='text-xl' />
                    بحث
                </label>
            </div>
        </>
    )
}

export default SearchBar
