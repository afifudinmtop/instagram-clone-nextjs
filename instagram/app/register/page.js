"use client";
import Link from "next/link";

const Register = () => {
  return (
    <div className="w-80 mx-auto">
      {/* bahasa */}
      <div className="flex justify-center mt-16">
        <div className="text-[#868686] text-xs me-1">English</div>
        <img
          className="w-[5px] h-[3px] my-auto"
          src="/login_register_arrow.png"
        />
      </div>

      {/* logo instagram */}
      <div className="flex justify-center mt-40">
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
        Sign Up
      </div>

      {/* register */}
      <div className="mt-2 text-center text-xs">
        <span className="me-1 text-[#6D6D6D]">Already have an account?</span>
        <Link href="/login">
          <span className="text-[#23244F] font-medium cursor-pointer">
            Sign in
          </span>
        </Link>
      </div>

      {/* or */}
      <div className="flex my-8 justify-between">
        <hr className="my-auto h-px bg-[#D3D3D3] w-32" />
        <div className="text-[#6D6D6D] font-semibold text-xs">OR</div>
        <hr className="my-auto h-px bg-[#D3D3D3] w-32" />
      </div>

      {/* button log in */}
      <div className="flex justify-center shadow cursor-pointer mt-3 w-full h-10 rounded bg-[#1877F2] ">
        <img src="/facebook.png" className="w-5 h-5 me-2 my-auto" />
        <div className="text-white text-xs text-center leading-10">
          Sign Up with Facebook
        </div>
      </div>
    </div>
  );
};

export default Register;
