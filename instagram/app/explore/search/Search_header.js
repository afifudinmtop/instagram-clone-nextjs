import Link from "next/link";

const Search_header = () => {
  return (
    <div className="px-5 flex">
      <Link href="/explore" className="my-auto">
        <img
          src="/arrow_left.png"
          className="w-[10px] h-[20px] my-auto me-[15px]"
        />
      </Link>

      <div className="bg-[#E8E8E8] w-full rounded-lg h-[36px] flex px-[12px]">
        <input
          id="search_field"
          placeholder="Search"
          type="text"
          className="w-full bg-[#E8E8E8] h-[20px] my-auto text-base outline-none"
        />
      </div>
    </div>
  );
};

export default Search_header;
