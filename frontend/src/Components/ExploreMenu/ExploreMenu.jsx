import React from 'react';
import "./ExploreMenu.css"
import {menu_list} from "../../assets/assets.js";

const ExploreMenu = ({category,setCategory}) => {

    return (
        <div className="ExploreMenu" id="ExploreMenu">
            <h1>Explore our menu</h1>
            <p className="explore-menu-text">
                Pick from a menu full of delicious choices. Our goal is to
                make you smile and give you a better dining experience, one meal at a time.
            </p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return(
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"ALL":item.menu_name)} key={index} className="explore-menu-list-item" >
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=''/>
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr/>
        </div>
    );
};

export default ExploreMenu;
