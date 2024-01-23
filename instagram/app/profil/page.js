"use client";

import Profil_header from "./Profil_header";
import Profil_footer from "./Profil_footer";
import Profil_info from "./Profil_info";
import Profil_collection from "./Profil_collection";
import Profil_menu from "./Profil_menu";
import Profil_button from "./Profil_button";
import Profil_story from "./Profil_story";

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
      <div className="overflow-auto h-dvh pb-[100px] flex flex-wrap mt-[7px] gap-[2px] justify-between">
        <Profil_collection src="x1.png" />
        <Profil_collection src="x2.png" />
        <Profil_collection src="x3.png" />
        <Profil_collection src="x4.png" />
        <Profil_collection src="x5.png" />
        <Profil_collection src="x6.png" />
        <Profil_collection src="x7.png" />
        <Profil_collection src="x8.png" />
        <Profil_collection src="x9.png" />
        <Profil_collection src="x10.png" />
        <Profil_collection src="x11.png" />
        <Profil_collection src="x12.png" />
        <Profil_collection src="x13.png" />
        <Profil_collection src="x14.png" />
        <Profil_collection src="x15.png" />
        <Profil_collection src="x1.png" />
        <Profil_collection src="x2.png" />
        <Profil_collection src="x3.png" />
        <Profil_collection src="x4.png" />
        <Profil_collection src="x5.png" />
        <Profil_collection src="x6.png" />
        <Profil_collection src="x7.png" />
        <Profil_collection src="x8.png" />
        <Profil_collection src="x9.png" />
        <Profil_collection src="x10.png" />
        <Profil_collection src="x11.png" />
        <Profil_collection src="x12.png" />
        <Profil_collection src="x13.png" />
        <Profil_collection src="x14.png" />
        <Profil_collection src="x15.png" />
      </div>
      <Profil_footer />
    </div>
  );
};

export default Page;
