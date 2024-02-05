"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Explore_collection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    get_feed();
  }, []);

  const get_feed = () => {
    fetch("/api/post/explore/", {
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
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <div className="overflow-auto h-[100vh] pb-[100px] mt-[7px] gap-[2px] flex flex-wrap content-start">
      {data.map((item) => (
        <Link
          key={item.uuid}
          href={"/post/" + item.uuid}
          className="cursor-pointer"
        >
          <img
            src={"/uploads/" + item.gambar}
            className="w-[122px] h-[122px]"
          />
        </Link>
      ))}
    </div>
  );
};

export default Explore_collection;
