import { Map } from 'immutable';
import { ADD_TO_CART } from './actions';

export default function reducer(
	cart = new Map({}),
	action
) {
	switch(action.type) {
	case ADD_TO_CART:
		if (cart.has(action.id)) {
			return cart.setIn(`${action.id}.quantity`.split('.'),
				cart.getIn(`${action.id}.quantity`.split('.')) + 1);
		} else {
			return cart.setIn(`${action.id}.quantity`.split('.'), 1);
		}
	default:
		return cart;
	}
}
