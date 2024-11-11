import React, { useState } from "react";
import MealCard from "./MealCard";

const MainPage = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState(" ");
  const [msg, setMsg] = useState(" ");
  const handleInput = (event) => {
    setSearch(event.target.value);
  };
  const myfun = async () => {
    if (search == " ") {
      setMsg("Please Enter text");
    } else {
      const get = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const jsonData = await get.json();

      setData(jsonData.meals);
      setMsg("");
    }
  };

  return (
    <>
      <h1 className="head">Food Recipe App</h1>
      <div className="container ">
        <div className="searchBar flex justify-center gap-2 mt-6">
          <input
            type="text"
            placeholder="Enter Dishes"
            onChange={handleInput}
            className="w-96 p-2 text-2xl"
          />
          <button onClick={myfun}>Search</button>
        </div>
        <h4 className="h4 text-3xl text-black">{msg}</h4>
        <div>
          <MealCard detail={data} />
        </div>
      </div>
    </>
  );
};

export default MainPage;
