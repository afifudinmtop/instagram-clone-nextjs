"use client";
import { useState, useEffect } from "react";

import DM_kiri from "./DM_kiri";
import DM_kanan from "./DM_kanan";

const DM_message = (props) => {
  const user = props.profil_uuid;

  const [data, setData] = useState([]);

  useEffect(() => {
    get_list_pesan();
  }, []);

  const timeAgo = (timestamp) => {
    const now = new Date();
    const past = new Date(timestamp);
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const elapsed = now - past;

    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + "s";
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + "m";
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + "h";
    } else if (elapsed < msPerDay * 7) {
      return Math.round(elapsed / msPerDay) + "d";
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

  const get_list_pesan = () => {
    fetch("/api/dm/list_pesan/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
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
    <div className="h-dvh ms-[20px] me-[15px]">
      <div className="h-5/6 my-[10px] overflow-auto ">
        {data.map((item) => (
          <div key={item.uuid_pesan}>
            {item.mine === "yes" ? (
              <DM_kanan text={item.pesan} ts={timeAgo(item.ts)} />
            ) : (
              <DM_kiri text={item.pesan} ts={timeAgo(item.ts)} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DM_message;
