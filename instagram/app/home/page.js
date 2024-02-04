"use client";
import Home_header from "./Home_header";
import Home_story from "./Home_story";
import Home_feed from "./Home_feed";
import Footer from "./Footer";
import Add_photo from "../components/Add_photo";

import "./page.css";

import { useState, useEffect } from "react";

const Page = () => {
  const [gambar, set_gambar] = useState("/avatar.png");
  const [name, set_name] = useState("");
  const [username, set_username] = useState("");
  const [uuid, set_uuid] = useState("");

  useEffect(() => {
    cek_login();
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
    <div className="mt-5">
      <Home_header />
      <div className="overflow-auto h-dvh pb-[100px]">
        <Home_story />
        <Home_feed uuid_owner={uuid} />
      </div>
      <Footer />

      <Add_photo />
    </div>
  );
};

export default Page;
