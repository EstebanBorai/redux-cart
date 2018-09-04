# redux-cart
> 🛒 A Shopping Cart Reducer for Redux

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
