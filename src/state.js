import {rerenderEntireTree} from './render'

let store = {
    cardText:{
        defaultText: 'Сказочное заморское яство',
        selectedHoverText: 'Котэ не одобряет?'
    },
    cardFood:[
        {id: 0, item: 'фуа-гра', numberOfServings: 10, numberOfGifts: 1, goodsWeight: "0,5", colorCard: '#1884CFFF', disableCard: 'No'},
        {id: 1, item: 'рыбой', numberOfServings: 40, numberOfGifts: 5, goodsWeight: "2", colorCard: '#1884CFFF', disableCard: 'No'},
        {id: 2, item: 'курой', numberOfServings: 100, numberOfGifts: 2, goodsWeight: "5", colorCard: '#1884CFFF', disableCard: 'Yes'}
    ],
    cardColors:{
        standartColorCard: '#1884CFFF',
        selectColorCard: '#FFC0CB'
    },
    shoppingCart: 'Пусто'
}

export let cardColorReplace = (id) => {
    if(store.cardFood[id].colorCard === store.cardColors.standartColorCard && store.cardFood[id].disableCard !== 'Yes'){
        store.cardFood[id].colorCard = store.cardColors.selectColorCard;
        if(store.shoppingCart === 'Пусто'){
            store.shoppingCart = 1;
        }
        else{
            store.shoppingCart += 1;
        }
    }
    else if(store.cardFood[id].disableCard !== 'Yes'){
        store.cardFood[id].colorCard = store.cardColors.standartColorCard;
        store.shoppingCart -= 1;
        if(store.shoppingCart === 0){
            store.shoppingCart = 'Пусто';
        }
    }
    rerenderEntireTree(store);
}


export default store;