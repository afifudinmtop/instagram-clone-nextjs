import Link from "next/link";

const Profil_button = () => {
  return (
    <div className="flex justify-between gap-[14px] mx-[16px] mt-[8px]">
      <Link
        href="/setting"
        className="cursor-pointer flex items-center justify-center bg-[#DFDFDF] text-black text-[10px] text-center rounded h-[25px] w-1/2"
      >
        <span>Edit Profil</span>
      </Link>

      <div className="cursor-pointer flex items-center justify-center bg-[#DFDFDF] text-black text-[10px] text-center rounded h-[25px] w-1/2">
        <span>Share Profil</span>
      </div>
    </div>
  );
};

export default Profil_button;
