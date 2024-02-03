"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Page = () => {
  const [username, set_username] = useState("");
  const [password, set_password] = useState("");
  const [notif, set_notif] = useState("");

  useEffect(() => {
    cek_login();
  }, []);

  const cek_login = () => {
    fetch("/api/auth/session_check", {
      method: "GET",
      cache: "no-store",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Network response was not ok: " + response.statusText
          );
        }
        return response.json();
      })
      .then((data) => {
        if (data.isLoggedIn) {
          return (window.location.href = "/home/");
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const upload_data = () => {
    if (username.length < 6) {
      return set_notif("username min 6 character!");
    }

    if (password.length < 6) {
      return set_notif("password min 6 character!");
    }

    fetch("/api/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Network response was not ok: " + response.statusText
          );
        }
        return response.json();
      })
      .then((data) => {
        if (data.pesan == "sukses!") {
          return (window.location.href = "/home/");
        }

        set_notif(data.pesan);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

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

      {/* notif */}
      <div className="text-center text-red-600 font-medium text-base">
        {notif}
      </div>

      {/* username */}
      <input
        type="text"
        className="p-3 mt-6 leading-10 w-full h-10 rounded border-[0.5px] border-[#C5C5C5] bg-[#EEE] text-black text-xs placeholder:text-[#848484] placeholder:text-xs placeholder:leading-10"
        placeholder="Phone number, email or username"
        onChange={(e) => set_username(e.target.value)}
      />

      {/* password */}
      <input
        type="password"
        className="p-3 mt-3 leading-10 w-full h-10 rounded border-[0.5px] border-[#C5C5C5] bg-[#EEE] text-black text-xs placeholder:text-[#848484] placeholder:text-xs placeholder:leading-10"
        placeholder="Password"
        onChange={(e) => set_password(e.target.value)}
      />

      {/* button log in */}
      <div
        onClick={upload_data}
        className="cursor-pointer mt-3 w-full h-10 rounded bg-[#1877F2] text-white text-xs text-center leading-10"
      >
        Login
      </div>

      {/* register */}
      <div className="mt-2 text-center text-xs">
        <span className="me-1 text-[#6D6D6D]">Doesn't have an account?</span>
        <Link href="/register">
          <span className="text-[#23244F] font-medium cursor-pointer">
            Register
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Page;
