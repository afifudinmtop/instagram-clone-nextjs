"use client";
import "./page.css";
import Link from "next/link";
import { useState, useEffect } from "react";

const Page = () => {
  const [data, setData] = useState([]);
  let searchTimeout;

  useEffect(() => {
    document.getElementById("search_field").focus();
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
        if (!data.isLoggedIn) {
          return (window.location.href = "/login/");
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const get_feed = (searchValue) => {
    fetch("/api/search/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchValue }),
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
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    clearTimeout(searchTimeout); // Hapus timeout yang ada jika ada

    searchTimeout = setTimeout(() => {
      // Jalankan fungsi set_search setelah 1 detik
      get_feed(inputValue);
    }, 1000); // Tunggu 1 detik sebelum menjalankan pencarian
  };

  return (
    <div className="mt-[8px]">
      {/* header */}
      <div className="px-5 flex">
        <Link href="/explore" className="my-auto">
          <img
            src="/arrow_left.png"
            className="w-[10px] h-[20px] my-auto me-[15px]"
          />
        </Link>

        <div className="bg-[#E8E8E8] w-full rounded-lg h-[36px] flex px-[12px]">
          <input
            id="search_field"
            placeholder="Search"
            type="text"
            onChange={handleInputChange}
            className="w-full bg-[#E8E8E8] h-[20px] my-auto text-base outline-none"
          />
        </div>
      </div>

      {/* list */}
      <div className="px-5 mt-[21px] overflow-auto h-dvh">
        {data.map((item) => (
          <Link
            key={item.uuid}
            href={"/user/" + item.uuid}
            className="flex mb-[22px]"
          >
            <img
              src={"/uploads/" + item.gambar}
              className="w-[40px] h-[40px] rounded-full me-[14px] my-auto"
            />
            <div className="my-auto">
              <div className="font-bold">{item.username}</div>
              <div className="-translate-y-1">{item.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
