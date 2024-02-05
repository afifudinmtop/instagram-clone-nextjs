"use client";
import { useState, useEffect } from "react";

const Comments_textarea = (props) => {
  const uuid_post = props.uuid_post;
  const [text, set_text] = useState("");

  const upload_data = () => {
    if (text.length < 1) {
      return;
    }

    fetch("/api/comment/send_comment/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, uuid_post }),
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
      <input
        type="text"
        className="w-full bg-[#E8E8E8] h-[20px] my-auto text-base outline-none pe-3"
        value={text}
        onChange={(e) => set_text(e.target.value)}
      />
      <div
        className="bg-[#3525F3] rounded-full w-[36px] h-[36px] flex my-auto"
        onClick={upload_data}
      >
        <img src="/send.png" className="w-[20px] h-[20px] m-auto" />
      </div>
    </div>
  );
};

export default Comments_textarea;
