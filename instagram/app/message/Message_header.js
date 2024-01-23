const Message_header = () => {
  return (
    <div className="flex justify-between ms-[20px] me-[15px]">
      <div className="flex my-auto">
        <img
          src="/arrow_left.png"
          className="w-[10px] h-[20px] my-auto me-[15px]"
        />

        <div className="text-xl font-bold text-black mb-[5px] me-[5px]">
          messi.official
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
