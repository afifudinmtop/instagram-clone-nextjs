"use client";
import Link from "next/link";
import "./page.css";
import { useState, useEffect } from "react";

const Page = () => {
  const [notif, set_notif] = useState("");
  const [gambar, set_gambar] = useState("/avatar.png");

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
        set_gambar(`/uploads/${data[0].gambar}`);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const upload_data = () => {
    const formData = new FormData();

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

    fetch("/api/update_foto_profil/", {
      method: "POST",
      body: formData,
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
          return (window.location.href = "/setting/");
        }

        set_notif(data.pesan);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const objectURL = URL.createObjectURL(file);
      set_gambar(objectURL);
    } else {
      set_gambar("/avatar.png");
    }
  };

  return (
    <div className="mt-[20px] px-[16px]">
      {/* header */}
      <div className="flex justify-between">
        <Link href="/setting/">
          <img src="/Cross.png" className="w-[18px] h-[18px] my-auto" />
        </Link>

        <div className="text-center text-[16px] my-auto">
          Edit Profile Photo
        </div>

        <img
          onClick={upload_data}
          src="/Tick1.png"
          className="w-[20px] h-[15px] my-auto cursor-pointer"
        />
      </div>

      {/* body */}
      <input
        id="input_gambar"
        className="hidden"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />

      <div>
        <img
          src={gambar}
          className="h-[80px] w-[80px] rounded-full mt-[40px] mx-auto"
        />
        <div
          onClick={() => {
            document.getElementById("input_gambar").click();
          }}
          className="mt-[24px] text-center text-[#1877F2] text-[17px] cursor-pointer"
        >
          Change profile photo
        </div>
      </div>

      {/* notif */}
      <div className="text-center text-red-600 font-medium text-base mt-3">
        {notif}
      </div>
    </div>
  );
};

export default Page;
