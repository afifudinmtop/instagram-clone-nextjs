"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Search_list = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    get_feed();
  }, []);

  const get_feed = () => {
    fetch("/api/search/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
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

  return <div className="px-5 mt-[21px] overflow-auto h-dvh"></div>;
};

export default Search_list;
