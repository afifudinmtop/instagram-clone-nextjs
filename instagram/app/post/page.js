"use client";

import Post_header from "./Post_header";
import Post_footer from "./Post_footer";
import Post_feed from "./Post_feed";

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
      <Post_header />
      <Post_feed />
      <Post_footer />
    </div>
  );
};

export default Page;
