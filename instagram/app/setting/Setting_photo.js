import Link from "next/link";

const Setting_photo = (props) => {
  return (
    <div>
      <img
        src={props.gambar}
        className="h-[80px] w-[80px] rounded-full mt-[40px] mx-auto"
      />
      <Link
        href="/setting/photo"
        className="w-full flex justify-center mt-[24px] text-center text-[#1877F2] text-[17px]"
      >
        Change profile photo
      </Link>
    </div>
  );
};

export default Setting_photo;
