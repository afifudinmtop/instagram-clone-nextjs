const Setting_field = () => {
  return (
    <div>
      {/* name */}
      <div className="text-[#757575] text-[15px] mt-[16px]">Name</div>
      <input
        type="text"
        className="text-[15px] w-full border-b border-[#B3B3B3] outline-0"
        value="Shalini D N"
      />

      {/* username */}
      <div className="text-[#757575] text-[15px] mt-[16px]">Username</div>
      <input
        type="text"
        className="text-[15px] w-full border-b border-[#B3B3B3] outline-0"
        value="shalinidnofficial"
      />

      {/* bio */}
      <div className="text-[#757575] text-[15px] mt-[16px]">Bio</div>
      <input
        type="text"
        className="text-[15px] w-full border-b border-[#B3B3B3] outline-0"
        value="la vie est belle"
      />
    </div>
  );
};

export default Setting_field;
