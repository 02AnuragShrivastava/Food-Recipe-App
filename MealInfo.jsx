import React, { useState } from "react";
import { useParams } from "react-router-dom";
const MealInfo = () => {
  const { mealId } = useParams();
  const [info, setInfo] = useState();
  const getInfo = async () => {
    const info = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const json = await info.json();
    console.log(json.meals[0]);
    setInfo(json.meals[0]);
  };
  if (info != " ") {
    getInfo();
  }
  return (
    <div>
      {!info ? (
        "Data not found"
      ) : (
        <div className="mealInfo">
          <img src={info.strMealThumb} />
          <div className="info">
            <h1>Recipe Details</h1>
            <button>{info.strMeal}</button>
            <h3>Instruction's</h3>
            <p>{info.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealInfo;
