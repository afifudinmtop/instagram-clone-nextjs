import Link from "next/link";

const Profil_header = (props) => {
  return (
    <div className="flex justify-between ms-[20px] me-[25px]">
      <div className="flex my-auto">
        <Link href="/home" className="my-auto">
          <img
            src="/arrow_left.png"
            className="w-[10px] h-[20px] my-auto me-[15px]"
          />
        </Link>

        <div className="text-xl font-bold text-black mb-[5px] me-[5px]">
          {props.username}
        </div>
      </div>

      <Link href="/setting" className="my-auto">
        <img src="/titik3.png" className="w-[3px] h-[12px] my-auto" />
      </Link>
    </div>
  );
};

export default Profil_header;
