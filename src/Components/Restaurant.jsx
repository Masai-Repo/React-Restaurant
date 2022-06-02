import axios from "axios";
import React, { useState } from "react";
import "./Restaurant.css";

export const Restaurant = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [srch, setSrch] = useState("");
  const search = () => {
    console.log("searching");
    setLoading(true);
    axios({
      url: import.meta.env.VITE_REACT_APP_XXX,
      method: "GET",
    })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  function submitChange(event) {
    let value = event.target.value;
    // console.log(value);
    setSrch(value);
  }
  console.log("data", data);
  // console.log(srch);
  return (
    <>
      <h1>Search for meals</h1>
      {/* <input
        type="text"
        placeholder="Enter Meal"
        name="food"
        value={srch.food}
        onChange={submitChange}
      /> */}
      <button onClick={search}>Search For Meals</button>
      {loading && <h1>LOADING</h1>}
      {data?.categories?.map((item) => (
        <div className="dv">
          <div>{item.strCategory}</div>
          <img src={item.strCategoryThumb} alt="" />
          <h4>{item.strCategoryDescription}</h4>
        </div>
      ))}
    </>
  );
};
