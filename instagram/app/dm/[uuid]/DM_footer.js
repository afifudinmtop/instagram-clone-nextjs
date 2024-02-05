"use client";
import { useState, useEffect } from "react";

const DM_footer = (props) => {
  const uuid_penerima = props.profil_uuid;
  const [pesan, set_pesan] = useState("");

  const upload_data = () => {
    if (pesan.length < 1) {
      return;
    }

    fetch("/api/dm/send_pesan/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pesan, uuid_penerima }),
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
        if (data.pesan == "sukses!") {
          return window.location.reload();
        }

        return;
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <div className="fixed bottom-[10px] left-1/2 -translate-x-1/2 w-[352px] rounded-[39px] bg-[#E8E8E8] h-[44px] flex ps-[12px] pe-[4px]">
      {/* text area */}
      <input
        type="text"
        className="w-full bg-[#E8E8E8] h-[20px] my-auto text-base outline-none pe-3"
        value={pesan}
        onChange={(e) => set_pesan(e.target.value)}
      />

      {/* button send */}
      <div
        onClick={upload_data}
        className="bg-[#3525F3] rounded-full w-[36px] h-[36px] flex my-auto"
      >
        <img src="/send.png" className="w-[20px] h-[20px] m-auto" />
      </div>
    </div>
  );
};

export default DM_footer;
