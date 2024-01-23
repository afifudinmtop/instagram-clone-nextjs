"use client";

import Explore_header from "./Explore_header";
import Explore_footer from "./Explore_footer";
import Explore_collection from "./Explore_collection";

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
      <Explore_header />
      <div className="overflow-auto h-dvh pb-[100px] flex flex-wrap mt-[7px] gap-[2px] justify-between">
        <Explore_collection src="x1.png" />
        <Explore_collection src="x2.png" />
        <Explore_collection src="x3.png" />
        <Explore_collection src="x4.png" />
        <Explore_collection src="x5.png" />
        <Explore_collection src="x6.png" />
        <Explore_collection src="x7.png" />
        <Explore_collection src="x8.png" />
        <Explore_collection src="x9.png" />
        <Explore_collection src="x10.png" />
        <Explore_collection src="x11.png" />
        <Explore_collection src="x12.png" />
        <Explore_collection src="x13.png" />
        <Explore_collection src="x14.png" />
        <Explore_collection src="x15.png" />
        <Explore_collection src="x1.png" />
        <Explore_collection src="x2.png" />
        <Explore_collection src="x3.png" />
        <Explore_collection src="x4.png" />
        <Explore_collection src="x5.png" />
        <Explore_collection src="x6.png" />
        <Explore_collection src="x7.png" />
        <Explore_collection src="x8.png" />
        <Explore_collection src="x9.png" />
        <Explore_collection src="x10.png" />
        <Explore_collection src="x11.png" />
        <Explore_collection src="x12.png" />
        <Explore_collection src="x13.png" />
        <Explore_collection src="x14.png" />
        <Explore_collection src="x15.png" />
      </div>
      <Explore_footer />
    </div>
  );
};

export default Page;
