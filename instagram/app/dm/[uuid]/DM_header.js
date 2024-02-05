import Link from "next/link";

const DM_header = (props) => {
  const profil_gambar = props.profil_gambar;
  const profil_username = props.profil_username;
  const profil_uuid = props.profil_uuid;

  return (
    <div className="flex justify-between ms-[20px] me-[15px] mb-[15px]">
      <div className="flex my-auto">
        <Link href="/message" className="my-auto">
          <img
            src="/arrow_left.png"
            className="w-[10px] h-[20px] my-auto me-[17px]"
          />
        </Link>
        <Link href={"/user/" + profil_uuid} className="flex">
          <img
            src={profil_gambar}
            className="w-[35px] h-[35px] my-auto me-[7px] rounded-full"
          />
          <div className="me-[5px] my-auto">
            <div className="text-[16px] font-bold text-black leading-tight my-auto">
              {profil_username}
            </div>
            <div className="text-[#8C8C8C] text-[14px] leading-tight my-auto">
              Active
            </div>
          </div>
        </Link>
      </div>

      <div className="flex gap-[20px] my-auto">
        <img src="/video.png" className="w-[24px] h-[20px] my-auto" />
        <img src="/Information.png" className="w-[22px] h-[22px] my-auto" />
      </div>
    </div>
  );
};

export default DM_header;
