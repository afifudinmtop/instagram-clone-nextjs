import Link from "next/link";

const Message_header = (props) => {
  const profil_username = props.profil_username;

  return (
    <div className="flex justify-between ms-[20px] me-[15px]">
      <div className="flex my-auto">
        <Link href="/" className="my-auto">
          <img
            src="/arrow_left.png"
            className="w-[10px] h-[20px] my-auto me-[15px]"
          />
        </Link>

        <div className="text-xl font-bold text-black mb-[5px] me-[5px]">
          {profil_username}
        </div>

        <img
          src="/dropdown.png"
          className="w-[10px] h-[5px] my-auto me-[40px]"
        />
      </div>

      <div className="flex gap-[22px]">
        <img src="/video.png" className="w-[24px] h-[20px] my-auto" />
        <img src="/message.png" className="w-[22px] h-[22px] my-auto" />
      </div>
    </div>
  );
};

export default Message_header;
