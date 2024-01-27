"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Add_photo = () => {
  const [gambar_url, set_gambar_url] = useState("");
  const [caption, set_caption] = useState("");

  const upload_data = () => {
    const formData = new FormData();

    // Append movie data to the form data
    formData.append("caption", caption);

    // Get the file input element
    const fileInput = document.querySelector('input[type="file"]');

    // Check if a file is selected
    if (fileInput.files.length > 0) {
      // Append the selected file to the form data
      formData.append("gambar", fileInput.files[0]);
    } else {
      console.error("Please select an image file.");
      return;
    }

    fetch("/api/upload_gambar/", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        window.location.href = "/profil";
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const objectURL = URL.createObjectURL(file);
      set_gambar_url(objectURL);
    } else {
      set_gambar_url("");
    }
  };

  return (
    <div
      id="div_add_photo"
      className={
        "fixed top-0 left-1/2 w-[375px] -translate-x-1/2 px-5 h-screen bg-white z-50 hidden"
      }
    >
      {/* tigger display */}
      <div
        className="hidden"
        id="button_display_add_photo"
        onClick={() => {
          document.getElementById("input_gambar").click();
          const modal = document.getElementById("div_add_photo");
          modal.classList.toggle("hidden");
        }}
      ></div>

      {/* head */}
      <div className="flex mt-2 mb-4">
        <Link href="/">
          <img
            src="/arrow_left.png"
            className="w-[10px] h-[20px] my-auto me-[15px]"
          />
        </Link>

        <div className="text-xl font-bold text-black my-auto">New Post</div>
      </div>

      {/* body */}
      <div>
        <input
          id="input_gambar"
          className="hidden"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        <img
          id="gambar"
          src={gambar_url}
          className="w-[250px] h-[250px] mx-auto mb-6"
        />

        <textarea
          rows="3"
          className="w-full outline-0"
          placeholder="Write a caption.."
          value={caption}
          onChange={(e) => set_caption(e.target.value)}
        />

        <div
          className="cursor-pointer w-full bg-[#1877F2] rounded text-white text-center py-2 mt-6"
          onClick={upload_data}
        >
          Share
        </div>
      </div>
    </div>
  );
};

export default Add_photo;
