"use client";
import { useState, useEffect } from "react";

import Home_feed_components from "./Home_feed_component";

const Home_feed = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    get_feed();
  }, []);

  const get_feed = () => {
    fetch("/api/feed", {
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
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <div>
      {data.map((item) => (
        <Home_feed_components
          key={item.uuid}
          avatar="1.png"
          name="leo.messi"
          gambar={item.gambar}
          caption={item.caption}
          komen="0"
          likes="0"
        />
      ))}
    </div>
  );
};

export default Home_feed;
