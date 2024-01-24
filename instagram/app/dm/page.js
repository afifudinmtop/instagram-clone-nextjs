"use client";

import DM_header from "./DM_header";
import DM_message from "./DM_message";
import DM_footer from "./DM_footer";

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
    <div className="mt-[10px]">
      <DM_header />
      <DM_message />
      <DM_footer />
    </div>
  );
};

export default Page;
