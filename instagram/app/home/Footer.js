"use client";

const Footer = () => {
  return (
    <div className="w-[375px] flex justify-center py-[14px] px-[25px] gap-[55px] fixed bottom-0 left-1/2 -translate-x-1/2 bg-white">
      <img src="/home-bold.png" className="w-[22px] h-[22px] cursor-pointer" />
      <img src="/explore.png" className="w-[22px] h-[22px] cursor-pointer" />
      <img
        onClick={() => {
          document.getElementById("button_display_add_photo").click();
        }}
        src="/Add.png"
        className="w-[22px] h-[22px] cursor-pointer"
      />
      <img src="/reels.png" className="w-[22px] h-[22px] cursor-pointer" />
      <img src="/user.png" className="w-[22px] h-[22px] cursor-pointer" />
    </div>
  );
};

export default Footer;
