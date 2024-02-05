const DM_kiri = (props) => {
  return (
    <div>
      <div className="bg-[#efefef] text-[15px] rounded-[18px] px-[12px] py-[7px] w-fit max-w-52 mb-1">
        {props.text}
      </div>
      <div className="text-[#737373] text-[12px] mb-5 ms-2">{props.ts}</div>
    </div>
  );
};

export default DM_kiri;
