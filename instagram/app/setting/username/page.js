"use client";
import "./page.css";
import Link from "next/link";
import { useState, useEffect } from "react";

const Page = () => {
  const [username, set_username] = useState("");
  const [notif, set_notif] = useState("");

  useEffect(() => {
    cek_login();
    get_profil();
  }, []);

  const upload_data = () => {
    fetch("/api/user/update_username/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
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
          return (window.location.href = "/setting/");
        }
        set_notif(data.pesan);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const get_profil = () => {
    fetch("/api/user/get_profil/", {
      method: "GET",
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
        set_username(data[0].username);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

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
        if (!data.isLoggedIn) {
          return (window.location.href = "/login/");
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <div className="mt-[20px] px-[16px]">
      {/* header */}
      <div className="flex justify-between">
        <Link href="/setting/">
          <img src="/Cross.png" className="w-[18px] h-[18px] my-auto" />
        </Link>

        <div className="text-center text-[16px] my-auto">Edit Username</div>

        <img
          onClick={upload_data}
          src="/Tick1.png"
          className="w-[20px] h-[15px] my-auto cursor-pointer"
        />
      </div>

      {/* field */}
      <div>
        <div className="text-[#757575] text-[15px] mt-[16px]">Username</div>
        <input
          type="text"
          className="text-[15px] w-full border-b border-[#B3B3B3] outline-0"
          value={username}
          onChange={(e) => set_username(e.target.value)}
        />
      </div>

      {/* notif */}
      <div className="text-center text-red-600 font-medium text-base mt-3">
        {notif}
      </div>
    </div>
  );
};

export default Page;
