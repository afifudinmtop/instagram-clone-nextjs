import Link from "next/link";

const Profil_info = (props) => {
  return (
    <div className="mx-[16px] mt-[23px]">
      <div className="flex justify-between">
        <img src={props.gambar} className="w-[89px] h-[89px] rounded-full" />
        <div className="flex gap-[35px] text-center my-auto">
          <div>
            <div className="text-[17px] font-medium">{props.jumlah_post}</div>
            <div className="text-[12px]">Posts</div>
          </div>

          <Link href={"/follower/" + props.uuid}>
            <div className="text-[17px] font-medium">{props.follower}</div>
            <div className="text-[12px]">Followers</div>
          </Link>

          <Link href={"/following/" + props.uuid}>
            <div className="text-[17px] font-medium">{props.following}</div>
            <div className="text-[12px]">Following</div>
          </Link>
        </div>
      </div>

      <div className="font-bold text-sm mt-1">{props.name}</div>
      <div className="text-sm">{props.bio}</div>
    </div>
  );
};

export default Profil_info;
