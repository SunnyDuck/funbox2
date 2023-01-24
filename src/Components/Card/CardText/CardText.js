import React from "react";
import s from "./CardText.module.css"

const CardText = (props) => {
    return(
        <div>
            <p>{props.defaultText}</p>
            <h1>Нямушка</h1>
            <h2 className={s.cardFood}>c {props.cardFood}</h2>
            <p className={s.presentText}>{props.numberOfServings} порций</p>
            <p className={s.presentText}> {props.mouseLine} в подарок</p>
        </div>
    )
}

export default CardText