const DM_header = () => {
  return (
    <div className="flex justify-between ms-[20px] me-[15px] mb-[15px]">
      <div className="flex my-auto">
        <img
          src="/arrow_left.png"
          className="w-[10px] h-[20px] my-auto me-[17px]"
        />
        <img
          src="/uploads/1.png"
          className="w-[35px] h-[35px] my-auto me-[7px]"
        />
        <div className="me-[5px] my-auto">
          <div className="text-[16px] font-bold text-black leading-tight my-auto">
            messi.official
          </div>
          <div className="text-[#8C8C8C] text-[14px] leading-tight my-auto">
            Active
          </div>
        </div>
      </div>

      <div className="flex gap-[20px] my-auto">
        <img src="/video.png" className="w-[24px] h-[20px] my-auto" />
        <img src="/Information.png" className="w-[22px] h-[22px] my-auto" />
      </div>
    </div>
  );
};

export default DM_header;
