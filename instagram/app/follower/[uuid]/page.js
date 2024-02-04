"use client";
import "./page.css";
import Link from "next/link";
import { useState, useEffect } from "react";

const Page = ({ params }) => {
  const user_uuid = params.uuid;
  const [data, setData] = useState([]);

  useEffect(() => {
    cek_login();
    get_list_follower();
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

  const get_list_follower = () => {
    fetch("/api/follow/get_list_follower/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_uuid }),
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

  return (
    <div className="mt-[8px]">
      {/* header */}
      <div className="px-5 flex">
        <Link href="/" className="my-auto">
          <img
            src="/arrow_left.png"
            className="w-[10px] h-[20px] my-auto me-[15px]"
          />
        </Link>

        <div className="text-xl font-bold text-black mb-[5px] me-[5px]">
          Follower
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
