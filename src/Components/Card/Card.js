import React from "react";
import s from "./Card.module.css";
import CardText from "./CardText/CardText";
import GoodsWeight from "./goodsWeight/GoodsWeight";

const Card = (props) => {
    let mouseLine = '';
    let counterGifts = () => {
        if(props.numberOfGifts%10===1){
            mouseLine = 'мышь';
        }
        else if(props.numberOfGifts%10<5){
            mouseLine = props.numberOfGifts + ' мыши';
        }
        else{
            mouseLine = props.numberOfGifts + ' мышей';
        }
    }
    counterGifts();

    let changeCardColor = () => {
        props.colorReplace(props.cardId);
    }

    let cursor = 'pointer';
    let opacityCard = 1;
    let cardDescription = 'Чего сидишь? Порадуй, котэ,';
    let buyText = ' купи.';

    let cardDisableFunc = () => {
        if(props.disableCard === 'Yes'){
            cursor = 'not-allowed';
            opacityCard = 0.5;
            cardDescription = 'Печалька с ' + props.cardFood + ' закончился';
            buyText = '';
        }
    }

    cardDisableFunc();

    return(
        <div className={s.main}>
            <div className={s.cardwrapper} onClick={changeCardColor} style={
                {backgroundColor: props.colorCard,
                    cursor: cursor,
                    opacity: opacityCard}
            }>
                <div className={s.card}>
                    <div className={s.cardText}>
                        <CardText
                            defaultText = {props.cardText.defaultText}
                            cardFood = {props.cardFood}
                            numberOfServings = {props.numberOfServings}
                            mouseLine = {mouseLine}
                        />
                    </div>
                    <div className={s.backCat}></div>
                    <GoodsWeight
                        goodsWeight = {props.goodsWeight}
                        colorCard = {props.colorCard}
                    />
                </div>
            </div>
            <div className={s.cardDescription} >
                {cardDescription}
                <div onClick={changeCardColor} style={{cursor: cursor, color: "yellow", textDecoration: 'underline'}}>
                    {buyText}
                </div>
            </div>
        </div>
    )
}

export default Card