"use client";
import Link from "next/link";

const Profil_collection = (props) => {
  return (
    <Link href={"/post/" + props.uuid} className="cursor-pointer">
      <img src={"/uploads/" + props.src} className="w-[122px] h-[122px]" />
    </Link>
  );
};

export default Profil_collection;
