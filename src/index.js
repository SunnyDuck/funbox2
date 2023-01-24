import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import cardText from './state'
import cardFood from './state'
import {rerenderEntireTree} from './render'

rerenderEntireTree(cardText, cardFood);

reportWebVitals();
