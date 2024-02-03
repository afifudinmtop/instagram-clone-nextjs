"use client";
import { useState, useEffect } from "react";

const Status = () => {
  const [data, setData] = useState({ user: { name: "" } });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("/api/auth/session/", {
      cache: "no-store",
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return <div>{data.user.name}</div>;
};

export default Status;
