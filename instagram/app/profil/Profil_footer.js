"use client";
import Link from "next/link";

const Profil_footer = () => {
  return (
    <div className="w-[375px] flex justify-center py-[14px] px-[25px] gap-[55px] fixed bottom-0 left-1/2 -translate-x-1/2 bg-white">
      <Link href="/home">
        <img
          src="/home.png"
          className="w-[22px] h-[22px] cursor-pointer max-w-[none]"
        />
      </Link>

      {/* explore */}
      <Link href="/explore">
        <img
          src="/explore.png"
          className="w-[22px] h-[22px] cursor-pointer max-w-[none]"
        />
      </Link>

      {/* add */}
      <img
        onClick={() => {
          document.getElementById("button_display_add_photo").click();
        }}
        src="/Add.png"
        className="w-[22px] h-[22px] cursor-pointer max-w-[none]"
      />

      {/* reels */}
      <img
        src="/reels.png"
        className="w-[22px] h-[22px] cursor-pointer max-w-[none]"
      />

      {/* profil */}
      <Link href="/profil">
        <img
          src="/user.png"
          className="w-[22px] h-[22px] cursor-pointer max-w-[none]"
        />
      </Link>
    </div>
  );
};

export default Profil_footer;
