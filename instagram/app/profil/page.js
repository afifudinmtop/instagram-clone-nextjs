"use client";

import Profil_header from "./Profil_header";
import Profil_footer from "./Profil_footer";
import Profil_info from "./Profil_info";
import Profil_feed from "./Profil_feed";
import Profil_menu from "./Profil_menu";
import Profil_button from "./Profil_button";
import Profil_story from "./Profil_story";
import Add_photo from "../components/Add_photo";

import "./page.css";

import { useState, useEffect } from "react";

const Page = () => {
  const [gambar, set_gambar] = useState("/avatar.png");
  const [name, set_name] = useState("");
  const [bio, set_bio] = useState("");
  const [username, set_username] = useState("");

  const [jumlah_post, set_jumlah_post] = useState(0);
  const [follower, set_follower] = useState(0);
  const [following, set_following] = useState(0);

  useEffect(() => {
    cek_login();
    get_profil();
    get_stats();
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

  const get_profil = () => {
    fetch("/api/get_profil/", {
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
        set_bio(data[0].bio);
        set_username(data[0].username);
        set_gambar(`/uploads/${data[0].gambar}`);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const get_stats = () => {
    fetch("/api/get_stats/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_uuid: "mine" }),
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
        set_jumlah_post(data.jumlah_post);
        set_follower(data.follower);
        set_following(data.following);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <div className="mt-[8px]">
      <Profil_header username={username} />
      <Profil_info
        jumlah_post={jumlah_post}
        follower={follower}
        following={following}
        gambar={gambar}
        name={name}
        bio={bio}
      />
      <Profil_button />
      <Profil_story />
      <Profil_menu />
      <Profil_feed />
      <Profil_footer />

      <Add_photo />
    </div>
  );
};

export default Page;
