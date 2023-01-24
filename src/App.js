import React from "react";
import './App.css';
import Card from "./Components/Card/Card";
import {cardColorReplace} from "./state";

const App = (props) => {

  let card = props.store.cardFood.map( d=> <Card
      cardFood = {d.item}
      cardText = {props.store.cardText}
      numberOfServings = {d.numberOfServings}
      numberOfGifts = {d.numberOfGifts}
      goodsWeight = {d.goodsWeight}
      colorCard = {d.colorCard}
      disableCard = {d.disableCard}
      cardId = {d.id}
      colorReplace = {cardColorReplace}
  />)


  return (
      <div className='app-wrapper'>
        <div></div>
        <h1>Ты сегодня покормил кота?</h1>
        <h2>Корзина: {props.store.shoppingCart}</h2>
        {card}
      </div>
  );
}

export default App;