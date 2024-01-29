"use client";
import { useState, useEffect } from "react";

import Home_feed_components from "./Home_feed_component";

const Home_feed = (props) => {
  const uuid_owner = props.uuid_owner;
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
          key={item.post_uuid}
          uuid_owner={uuid_owner}
          uuid={item.post_uuid}
          avatar={item.user_gambar}
          name={item.user_username}
          gambar={item.post_gambar}
          caption={item.post_caption}
          user_uuid={item.user_uuid}
          ts={item.post_ts}
          likes={item.likes}
        />
      ))}
    </div>
  );
};

export default Home_feed;
