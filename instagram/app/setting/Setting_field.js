"use client";
import Link from "next/link";

const Setting_field = (props) => {
  return (
    <div>
      {/* name */}
      <div className="text-[#757575] text-[15px] mt-[16px]">Name</div>
      <div className="flex w-full">
        <Link
          className="text-[15px] h-[24px] w-full border-b border-[#B3B3B3] outline-0 cursor-text"
          href="/setting/name/"
        >
          {props.name}
        </Link>
      </div>

      {/* username */}
      <div className="text-[#757575] text-[15px] mt-[16px]">Username</div>
      <div className="flex w-full">
        <Link
          className="text-[15px] h-[24px] w-full border-b border-[#B3B3B3] outline-0 cursor-text"
          href="/setting/username/"
        >
          {props.username}
        </Link>
      </div>

      {/* bio */}
      <div className="text-[#757575] text-[15px] mt-[16px]">Bio</div>
      <div className="flex w-full">
        <Link
          className="text-[15px] h-[24px] w-full border-b border-[#B3B3B3] outline-0 cursor-text"
          href="/setting/bio/"
        >
          {props.bio}
        </Link>
      </div>
    </div>
  );
};

export default Setting_field;
