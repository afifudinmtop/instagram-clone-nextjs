"use client";
import { useState, useEffect } from "react";

import Profil_collection from "./Profil_collection";

const Profil_feed = (props) => {
  const user_uuid = props.user_uuid;
  const [data, setData] = useState([]);

  useEffect(() => {
    get_feed();
  }, []);

  const get_feed = () => {
    fetch("/api/post/user_feed/", {
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
    <div className="overflow-auto h-[50vh] pb-[100px] mt-[7px] gap-[2px] flex flex-wrap content-start">
      {data.map((item) => (
        <Profil_collection key={item.uuid} src={item.gambar} uuid={item.uuid} />
      ))}
    </div>
  );
};

export default Profil_feed;
