"use client";

import Message_header from "./Message_header";
import Message_search from "./Message_search";
import Message_item from "./Message_item";

import "./page.css";

import { useState, useEffect } from "react";

const Page = () => {
  const [profil_username, set_profil_username] = useState("");
  const [data, setData] = useState([]);
  const [data_fix, setDataFix] = useState([]);

  useEffect(() => {
    cek_login();
    get_profil();
    get_list_pesan();
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

  const get_profil = () => {
    fetch("/api/user/get_profil/", {
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
        set_profil_username(data[0].username);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const get_list_pesan = () => {
    fetch("/api/dm/list_dm", {
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
        setData(data);
        setDataFix(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const filterDataByUsername = (text) => {
    if (text == "") {
      return setData(data_fix);
    }
    const filteredData = data_fix.filter((item) =>
      item.username.includes(text)
    );
    setData(filteredData);
  };

  return (
    <div className="mt-[10px]">
      <Message_header profil_username={profil_username} />
      <Message_search onSearchChange={(text) => filterDataByUsername(text)} />

      <div className="overflow-auto h-dvh">
        {data.map((item) => (
          <Message_item
            key={item.uuid}
            uuid={item.uuid}
            src={item.gambar}
            name={item.username}
            status="Active now"
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
