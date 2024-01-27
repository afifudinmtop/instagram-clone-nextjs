"use client";

import Post_header from "./Post_header";
import Post_footer from "./Post_footer";
import Post_feed_components from "./Post_feed_component";
import Add_photo from "../../components/Add_photo";

import "./page.css";

import { useState, useEffect } from "react";

const Page = ({ params }) => {
  const [data, setData] = useState([]);
  const uuid = params.uuid;

  useEffect(() => {
    cek_login();
    get_feed();
  }, []);

  const cek_login = () => {
    fetch("/api/session_check", {
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

  const get_feed = () => {
    fetch("/api/post/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uuid }),
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
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <div className="mt-[8px]">
      <Post_header />

      {data.map((item) => (
        <Post_feed_components
          key={item.post_uuid}
          uuid={item.post_uuid}
          avatar={item.user_gambar}
          name={item.user_username}
          gambar={item.post_gambar}
          caption={item.post_caption}
          user_uuid={item.user_uuid}
          ts={item.post_ts}
        />
      ))}

      <Post_footer />

      <Add_photo />
    </div>
  );
};

export default Page;
