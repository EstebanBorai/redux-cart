<p align="center">  
  <img 
    src="https://raw.githubusercontent.com/estebanborai/redux-cart/master/assets/redux-cart-logo.png" 
    alt="redux-cart logo"
  />
  <h2 align="center">redux-cart</h2>
  <em>🛒 A Shopping Cart Reducer for Redux</em>
</p>

## Installation
`npm i redux-cart`

## Usage
#### Reducer
Add the *cart* reducer to your main reducer.
```javascript
// reducers/index.js
import { combineReducers } from 'redux';
import app from './app';
import { reducer as cart } from 'redux-cart';

export default combineReducers({ app, cart });
```
