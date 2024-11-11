import React from "react";
import MainPage from "./components/MainPage";
import { Route, Routes } from "react-router-dom";
import MealInfo from "./components/MealInfo";
const App = () => {
  return (
    <div>
      {/* <MainPage /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:mealId" element={<MealInfo />}></Route>
      </Routes>
    </div>
  );
};

export default App;
