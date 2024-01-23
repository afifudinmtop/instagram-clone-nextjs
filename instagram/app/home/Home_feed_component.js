const Home_feed_components = (props) => {
  return (
    <div>
      <hr className="bg-[#E0E0E0] h-[1px] my-[10px]" />

      {/* header */}
      <div className="flex justify-between ps-[18px] pe-[25px] mb-[10px]">
        {/* atas kiri */}
        <div className="flex">
          <img
            src={"/uploads/" + props.avatar}
            className="w-[37px] h-[37px] me-[6px]"
          />
          <div className="text-black font-medium my-auto text-sm">
            {props.name}
          </div>
        </div>

        {/* atas kanan */}
        <img src={"/titik3.png"} className="w-[3px] h-[12px] my-auto" />
      </div>

      {/* main image */}
      <img src={"/uploads/" + props.gambar} className="w-[375px] h-[375px]" />

      {/* button action */}
      <div className="flex justify-between my-[12px] px-[12px]">
        <div className="flex gap-[12px]">
          <img src={"/heart.png"} className="w-[24px] h-[24px]" />
          <img src={"/comment.png"} className="w-[24px] h-[24px]" />
          <img src={"/share.png"} className="w-[24px] h-[24px]" />
        </div>

        <img src={"/bookmark.png"} className="w-[24px] h-[24px]" />
      </div>

      {/* liked */}
      <div className="text-black text-sm px-[12px]">
        <span className="font-normal">Liked by </span>
        <span className="font-medium">fabrizio </span>
        <span className="font-normal">and others</span>
      </div>

      {/* caption */}
      <div className="mt-[5px] text-black text-sm px-[12px]">
        <span className="font-medium">{props.name} </span>
        <span className="font-normal">{props.caption}</span>
      </div>

      {/* komen */}
      <div className="text-sm text-[#8A8A8A] font-normal px-[12px] mt-[5px]">
        View all {props.komen} comments
      </div>
    </div>
  );
};

export default Home_feed_components;
