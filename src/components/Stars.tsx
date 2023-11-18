import React from "react";
import Star from "./Star";



function Stars ({count}) {
    if (count === undefined) {count = 0}
    const arr =  [];
    for (let i = 0; i < count; i++) {
        arr.push(i)
    }
    if (0 < count && count < 6) 
    {
        return (
            <ul className="card-body-stars">
                {arr.map((e) => (
                <li key = {e} >
                    <Star  />
                </li>
            ))}
            </ul>
        )
    }
        
    else {
        console.log ("Вне диапазона");
    }
}

export default Stars