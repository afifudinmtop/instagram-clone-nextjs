"use client";

import Setting_header from "./Setting_header";
import Setting_photo from "./Setting_photo";
import Setting_field from "./Setting_field";

import "./page.css";

import { useState, useEffect } from "react";

const Page = () => {
  const [name, set_name] = useState("");
  const [bio, set_bio] = useState("");
  const [username, set_username] = useState("");

  useEffect(() => {
    cek_login();
    get_profil();
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
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <div className="mt-[20px] px-[16px]">
      <Setting_header />
      <Setting_photo />
      <Setting_field name={name} bio={bio} username={username} />
    </div>
  );
};

export default Page;
