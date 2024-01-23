const Explore_header = () => {
  return (
    <div className="px-5">
      <div className="bg-[#E8E8E8] w-full rounded-lg h-[36px] flex px-[12px]">
        <img src="/search.png" className="w-[13px] h-[13px] my-auto me-[8px]" />
        <input
          placeholder="Search"
          type="text"
          className="w-full bg-[#E8E8E8] h-[20px] my-auto text-base outline-none"
        />
      </div>
    </div>
  );
};

export default Explore_header;
