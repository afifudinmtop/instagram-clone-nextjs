"use client";
import Home_header from "./Home_header";
import Home_story from "./Home_story";
import Home_feed from "./Home_feed";
import Footer from "./Footer";

import "./page.css";

import { useState, useEffect } from "react";

const Page = () => {
  useEffect(() => {
    cek_login();
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
  return (
    <div className="mt-5">
      <Home_header />
      <div className="overflow-auto h-dvh pb-[100px]">
        <Home_story />
        <Home_feed />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
