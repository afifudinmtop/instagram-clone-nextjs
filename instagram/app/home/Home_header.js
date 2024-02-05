import Link from "next/link";

const Home_header = () => {
  return (
    <div className="flex justify-between px-5">
      <img src="/logos_instagram2.png" className="w-[123px] h-[35px]" />

      <div className="flex my-auto">
        <img src="/logos_love.png" className="w-[22px] h-[22px] me-[25px]" />
        <Link href="/message">
          <img src="/logos_dm.png" className="w-[22px] h-[22px]" />
        </Link>
      </div>
    </div>
  );
};

export default Home_header;
