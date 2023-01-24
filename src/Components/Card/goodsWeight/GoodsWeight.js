import React from "react";
import s from "./GoodsWeight.module.css"

const GoodsWeight = (props) =>{
    return(
        <div className={s.goodsWeight} style={{backgroundColor:props.colorCard}}>
            {props.goodsWeight}
            <p className={s.goodsText}>кг</p>
        </div>
    )
}

export default GoodsWeight