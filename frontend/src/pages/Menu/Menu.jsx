import React, { useState } from 'react';
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu.jsx";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay.jsx";
import "../../Components/FoodItem/FoodItem.css";
import "../../Components/FoodDisplay/FoodDisplay.css";
import AppDownload from "../../Components/AppDownload/AppDownload.jsx";

const Menu = () => {
    const [category, setCategory] = useState("ALL");  // <-- Add this like Home.jsx

    return (
        <div>
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} />
            <AppDownload/>
        </div>
    );
};

export default Menu;
