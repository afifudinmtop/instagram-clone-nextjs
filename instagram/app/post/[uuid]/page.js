"use client";

import Post_header from "./Post_header";
import Post_footer from "./Post_footer";
import Post_feed_components from "./Post_feed_component";
import Add_photo from "../../components/Add_photo";

import "./page.css";

import { useState, useEffect } from "react";

const Page = ({ params }) => {
  const [gambar, set_gambar] = useState("/avatar.png");
  const [name, set_name] = useState("");
  const [username, set_username] = useState("");
  const [uuid_owner, set_uuid] = useState("");

  const [data, setData] = useState([]);
  const uuid = params.uuid;

  useEffect(() => {
    cek_login();
    get_feed();
    get_profil();
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

  const get_feed = () => {
    fetch("/api/post/post/", {
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
        set_name(data[0].name);
        set_username(data[0].username);
        set_uuid(data[0].uuid);
        set_gambar(`/uploads/${data[0].gambar}`);
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

      <Post_footer />

      <Add_photo />
    </div>
  );
};

export default Page;
