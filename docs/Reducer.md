## Reducer
In order to use `redux-cart` the reducer should be mounted.

```javascript
import { combineReducers } from 'redux';
import { reducer as cart } from 'redux-cart';
import app from 'reducers/app';

const reducer = combineReducers({ app, cart });

export default reducer;
```
