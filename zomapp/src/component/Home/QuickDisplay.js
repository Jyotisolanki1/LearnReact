import React from "react";
import { Link } from "react-router-dom";
import './QuickSearch';

const QuickDisplay = (props) => {
    const listMeal = ({mealData}) =>{
    if(mealData){
        return mealData.map((item)=>{
            return(
                  <Link to={`/listing/${item.mealtype_id}`} key={item._id}>
                    <div className="tileContainer">
                        <div className="tileComponent1">
                        <img src={item.meal_image} alt={item.mealtype}/>
                        </div>
                        <div className="tileComponent2">
                        <div className="componentHeading">{item.mealtype}</div>
                        <div className="componentSubHeading">start your day with exclusive breakfast options</div>
                        </div>
                    </div>
                   </Link>
            )
        })
    }
    }
    return(        
        <div className="cardMain">
            {listMeal(props)}
        </div>
    )
}
export default QuickDisplay;