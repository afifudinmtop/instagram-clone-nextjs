import Link from "next/link";

const Comments_header = (props) => {
  const uuid_post = props.uuid_post;
  return (
    <div className="px-5 flex">
      <Link href={"/post/" + uuid_post} className="my-auto">
        <img
          src="/arrow_left.png"
          className="w-[10px] h-[20px] my-auto me-[15px]"
        />
      </Link>

      <div className="text-xl font-bold text-black mb-[5px] me-[5px]">
        Comment
      </div>
    </div>
  );
};

export default Comments_header;
