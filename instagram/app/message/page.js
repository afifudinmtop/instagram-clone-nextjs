"use client";

import Message_header from "./Message_header";
import Message_search from "./Message_search";
import Message_item from "./Message_item";

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
    <div className="mt-[10px]">
      <Message_header />
      <Message_search />
      <div className="overflow-auto h-dvh">
        <Message_item
          src="1.png"
          name="Jefferey Williams"
          status="Active now"
        />
        <Message_item
          src="2.png"
          name="Jefferey Williams"
          status="Active now"
        />
        <Message_item
          src="3.png"
          name="Jefferey Williams"
          status="Active now"
        />
        <Message_item
          src="4.png"
          name="Jefferey Williams"
          status="Active now"
        />
        <Message_item
          src="5.png"
          name="Jefferey Williams"
          status="Active now"
        />
        <Message_item
          src="6.png"
          name="Jefferey Williams"
          status="Active now"
        />
        <Message_item
          src="1.png"
          name="Jefferey Williams"
          status="Active now"
        />
        <Message_item
          src="2.png"
          name="Jefferey Williams"
          status="Active now"
        />
        <Message_item
          src="3.png"
          name="Jefferey Williams"
          status="Active now"
        />
        <Message_item
          src="4.png"
          name="Jefferey Williams"
          status="Active now"
        />
        <Message_item
          src="5.png"
          name="Jefferey Williams"
          status="Active now"
        />
        <Message_item
          src="6.png"
          name="Jefferey Williams"
          status="Active now"
        />
      </div>
    </div>
  );
};

export default Page;
