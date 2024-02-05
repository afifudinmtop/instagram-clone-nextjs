const DM_kanan = (props) => {
  return (
    <div>
      <div className="flex justify-end mb-1">
        <div className="bg-[#3797f0] text-white text-[15px] rounded-[18px] px-[12px] py-[7px] w-fit max-w-52">
          {props.text}
        </div>
      </div>
      <div className="flex justify-end mb-5 me-2">
        <div className="text-[#737373] text-[12px]">{props.ts}</div>
      </div>
    </div>
  );
};

export default DM_kanan;
