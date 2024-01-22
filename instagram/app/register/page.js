"use client";

const Register = () => {
  return (
    <div className="w-80 mx-auto">
      {/* logo instagram */}
      <div className="flex justify-center mt-[35vh]">
        <img src="/logos_instagram.png" className="w-36 h-10" />
      </div>

      {/* username */}
      <input
        type="text"
        className="p-3 mt-6 leading-10 w-full h-10 rounded border-[0.5px] border-[#C5C5C5] bg-[#EEE] text-black text-xs placeholder:text-[#848484] placeholder:text-xs placeholder:leading-10"
        placeholder="Phone number, email or username"
      />

      {/* password */}
      <input
        type="password"
        className="p-3 mt-3 leading-10 w-full h-10 rounded border-[0.5px] border-[#C5C5C5] bg-[#EEE] text-black text-xs placeholder:text-[#848484] placeholder:text-xs placeholder:leading-10"
        placeholder="Password"
      />

      {/* button log in */}
      <div className="cursor-pointer mt-3 w-full h-10 rounded bg-[#1877F2] text-white text-xs text-center leading-10">
        Login
      </div>

      {/* register */}
      <div className="mt-2 text-center text-xs">
        <span className="me-1 text-[#6D6D6D]">Doesn't have an account?</span>
        <span className="text-[#23244F] font-medium cursor-pointer">
          Register
        </span>
      </div>
    </div>
  );
};

export default Register;
