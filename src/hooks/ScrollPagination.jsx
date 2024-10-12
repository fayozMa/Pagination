import React from "react";
import { useState, useEffect } from "react";
function ScrollPagination() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch (`https://jsonplaceholder.typicode.com/photos`)
        const data = await res.json()
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });
  return <div>ScrollPagination</div>;
}

export default ScrollPagination;
