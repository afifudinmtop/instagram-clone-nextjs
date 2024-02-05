"use client";

import DM_header from "./DM_header";
import DM_message from "./DM_message";
import DM_footer from "./DM_footer";

import "./page.css";

import { useState, useEffect } from "react";

const Page = ({ params }) => {
  const user_uuid = params.uuid;

  const [profil_gambar, set_profil_gambar] = useState("/avatar.png");
  const [profil_username, set_profil_username] = useState("");
  const [profil_uuid, set_profil_uuid] = useState("");

  useEffect(() => {
    cek_login();
    get_profil();
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
    fetch("/api/user/get_user/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_uuid }),
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
        set_profil_uuid(data[0].uuid);
        set_profil_gambar(`/uploads/${data[0].gambar}`);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <div className="mt-[10px]">
      <DM_header
        profil_gambar={profil_gambar}
        profil_username={profil_username}
        profil_uuid={profil_uuid}
      />
      <DM_message profil_uuid={user_uuid} />
      <DM_footer profil_uuid={profil_uuid} />
    </div>
  );
};

export default Page;
