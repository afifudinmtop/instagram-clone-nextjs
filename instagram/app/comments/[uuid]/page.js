"use client";
import "./page.css";
import { useState, useEffect } from "react";

import Comments_header from "./Comments_header";
import Comments_list from "./Comments_list";
import Comments_textarea from "./Comments_textarea";

const Page = ({ params }) => {
  const post_uuid = params.uuid;
  const [data, setData] = useState([]);

  useEffect(() => {
    cek_login();
    get_list_comment();
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

  const get_list_comment = () => {
    fetch("/api/comment/get_list_comment/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post_uuid }),
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
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <div className="mt-[8px] h-dvh">
      <Comments_header uuid_post={post_uuid} />
      <Comments_list data={data} />
      <Comments_textarea uuid_post={post_uuid} />
    </div>
  );
};

export default Page;
