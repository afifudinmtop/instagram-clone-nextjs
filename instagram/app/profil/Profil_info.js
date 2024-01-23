const Profil_info = () => {
  return (
    <div className="mx-[16px] mt-[23px]">
      <div className="flex justify-between">
        <img src="/uploads/7.png" className="w-[89px] h-[89px] rounded-full" />
        <div className="flex gap-[35px] text-center my-auto">
          <div>
            <div className="text-[17px] font-medium">1,132</div>
            <div className="text-[12px]">Posts</div>
          </div>
          <div>
            <div className="text-[17px] font-medium">60K</div>
            <div className="text-[12px]">Followers</div>
          </div>
          <div>
            <div className="text-[17px] font-medium">4</div>
            <div className="text-[12px]">Following</div>
          </div>
        </div>
      </div>

      <div className="font-bold text-sm mt-1">Fabrizio Romano</div>
      <div className="text-sm">A journalist</div>
    </div>
  );
};

export default Profil_info;
