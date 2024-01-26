const Post_feed_components = (props) => {
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
        <img src={"/more.png"} className="w-[20px] h-[20px] my-auto" />
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
        <span className="font-medium">{props.likes} likes</span>
      </div>

      {/* caption */}
      <div className="mt-[5px] text-black text-sm px-[12px]">
        <span className="font-medium">{props.name} </span>
        <span className="font-normal">{props.caption}</span>
      </div>

      {/* komen */}
      <div className="text-sm text-[#8A8A8A] font-normal px-[12px] mt-[5px] mb-[15px]">
        View all {props.komen} comments
      </div>
    </div>
  );
};

export default Post_feed_components;
