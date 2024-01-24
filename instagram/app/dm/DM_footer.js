const DM_footer = () => {
  return (
    <div className="fixed bottom-[10px] left-1/2 -translate-x-1/2 w-[352px] rounded-[39px] bg-[#E8E8E8] h-[44px] flex ps-[12px] pe-[4px]">
      <input
        type="text"
        className="w-full bg-[#E8E8E8] h-[20px] my-auto text-base outline-none pe-3"
      />
      <div className="bg-[#3525F3] rounded-full w-[36px] h-[36px] flex my-auto">
        <img src="/send.png" className="w-[20px] h-[20px] m-auto" />
      </div>
    </div>
  );
};

export default DM_footer;
