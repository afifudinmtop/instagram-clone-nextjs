"use client";
import Home_header from "./Home_header";
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
    <div className="mt-5">
      <Home_header />
    </div>
  );
};

export default Page;
