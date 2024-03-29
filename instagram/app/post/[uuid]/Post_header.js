"use client";
import Link from "next/link";

const Post_header = () => {
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
          Post
        </div>
      </div>
    </div>
  );
};

export default Post_header;
