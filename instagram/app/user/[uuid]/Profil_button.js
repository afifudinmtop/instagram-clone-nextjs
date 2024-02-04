"use client";
import { useState, useEffect } from "react";

const Profil_button = (props) => {
  const user_uuid = props.user_uuid;
  const [follow, set_follow] = useState("hidden");
  const [unfollow, set_unfollow] = useState("hidden");

  useEffect(() => {
    cek_follow();
  }, []);

  const cek_follow = () => {
    fetch("/api/cek_follow/", {
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
        if (data.pesan == "follow") {
          set_follow("hidden");
          set_unfollow("");
        } else {
          set_follow("");
          set_unfollow("hidden");
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const go_follow = () => {
    fetch("/api/follow/go_follow/", {
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
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const go_unfollow = () => {
    fetch("/api/follow/go_unfollow/", {
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
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <div className="flex justify-between gap-[14px] mx-[16px] mt-[8px]">
      <div
        id="button_follow"
        onClick={go_follow}
        className={
          follow +
          " cursor-pointer bg-[#1877F2] text-white text-[10px] text-center rounded h-[25px] w-1/2 leading-[25px]"
        }
      >
        Follow
      </div>
      <div
        onClick={go_unfollow}
        id="button_unfollow"
        className={
          unfollow +
          " cursor-pointer bg-[#DFDFDF] text-black text-[10px] text-center rounded h-[25px] w-1/2 leading-[25px]"
        }
      >
        Unfollow
      </div>
      <div className="bg-[#DFDFDF] text-black text-[10px] text-center rounded h-[25px] w-1/2 leading-[25px]">
        Message
      </div>
    </div>
  );
};

export default Profil_button;
