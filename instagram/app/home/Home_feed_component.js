"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Home_feed_components = (props) => {
  const uuid_owner = props.uuid_owner;
  const post_uuid = props.uuid;

  const status_love = props.likes;
  const [love, set_love] = useState(status_love === "yes" ? "hidden" : "");
  const [unlove, set_unlove] = useState(status_love === "yes" ? "" : "hidden");

  const timeAgo = (timestamp) => {
    const now = new Date();
    const past = new Date(timestamp);
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const elapsed = now - past;

    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + " seconds ago";
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + " minutes ago";
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + " hours ago";
    } else if (elapsed < msPerDay * 7) {
      return Math.round(elapsed / msPerDay) + " days ago";
    } else {
      return (
        past.getDate() +
        " " +
        past.toLocaleString("default", { month: "long" }) +
        " " +
        past.getFullYear()
      );
    }
  };

  const go_like = () => {
    fetch("/api/like/go_like/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_uuid: uuid_owner, post_uuid: post_uuid }),
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
          set_love("hidden");
          set_unlove("");
        } else {
          set_love("");
          set_unlove("hidden");
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const go_unlike = () => {
    fetch("/api/go_unlike/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_uuid: uuid_owner, post_uuid: post_uuid }),
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
          set_love("");
          set_unlove("hidden");
        } else {
          set_love("hidden");
          set_unlove("");
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <div>
      <hr className="bg-[#E0E0E0] h-[1px] my-[10px]" />

      {/* header */}
      <div className="flex justify-between ps-[18px] pe-[25px] mb-[10px]">
        {/* atas kiri */}
        <Link href={"/user/" + props.user_uuid} className="flex">
          <img
            src={"/uploads/" + props.avatar}
            className="w-[37px] h-[37px] me-[6px] rounded-full"
          />
          <div className="text-black font-medium my-auto text-sm">
            {props.name}
          </div>
        </Link>

        {/* atas kanan */}
        <img src={"/more.png"} className="w-[20px] h-[20px] my-auto" />
      </div>

      {/* main image */}
      <img src={"/uploads/" + props.gambar} className="w-[375px] h-[375px]" />

      {/* button action */}
      <div className="flex justify-between my-[12px] px-[12px]">
        <div className="flex gap-[12px]">
          {/* love */}
          <img
            onClick={go_like}
            src={"/heart.png"}
            className={"w-[24px] h-[24px] " + love}
          />

          {/* unlove */}
          <img
            onClick={go_unlike}
            src={"/heart_fill.png"}
            className={"w-[24px] h-[24px] " + unlove}
          />

          <img src={"/comment.png"} className="w-[24px] h-[24px]" />
          <img src={"/share.png"} className="w-[24px] h-[24px]" />
        </div>

        <img src={"/bookmark.png"} className="w-[24px] h-[24px]" />
      </div>

      {/* liked */}
      <Link
        href={"/likes/" + props.uuid}
        className="text-black text-sm px-[12px]"
      >
        <span className="font-medium">view likes</span>
      </Link>

      {/* caption */}
      <div className="mt-[5px] text-black text-sm px-[12px]">
        <Link className="font-medium" href={"/user/" + props.user_uuid}>
          {props.name}{" "}
        </Link>
        <span className="font-normal">{props.caption}</span>
      </div>

      {/* komen */}
      <Link
        href={"/comments/" + props.uuid}
        className="text-sm text-[#8A8A8A] font-normal px-[12px] mt-[5px] mb-[15px]"
      >
        View all comments
      </Link>

      {/* timestamp */}
      <div className="text-[10px] text-[#8A8A8A] font-normal px-[12px] mt-[5px] mb-[15px]">
        {timeAgo(props.ts)}
      </div>
    </div>
  );
};

export default Home_feed_components;
