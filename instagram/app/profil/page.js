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
  useEffect(() => {
    cek_login();
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
  return (
    <div className="mt-[8px]">
      <Profil_header />
      <Profil_info />
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
