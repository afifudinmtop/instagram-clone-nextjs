import Link from "next/link";

const Setting_header = () => {
  return (
    <div className="flex my-auto">
      <Link href="/profil/" className="my-auto">
        <img
          src="/arrow_left.png"
          className="w-[10px] h-[20px] my-auto me-[15px]"
        />
      </Link>

      <div className="text-xl font-bold text-black mb-[3px] me-[5px]">
        Edit profile
      </div>
    </div>
  );
};

export default Setting_header;
