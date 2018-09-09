import { Map } from 'immutable';
import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ITEM } from './actions';
import { subtractNaturalSet } from './helpers';

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
	case REMOVE_FROM_CART: 
		return cart.delete(action.id.toString());
	case REMOVE_ITEM:
		if (action.quantity !== undefined) {
			const current = cart.getIn(`${action.id}.quantity`.split('.'));
			let next = subtractNaturalSet(current, action.quantity);
			if (next === 0) {
				return cart.delete(action.id.toString());
			} else {
				return cart.setIn(`${action.id}.quantity`.split('.'), next);
			}
		} else {
			const current = cart.getIn(`${action.id}.quantity`.split('.'));
			let next = subtractNaturalSet(current, 1);
			if (next === 0) {
				return cart.delete(action.id.toString());
			} else {
				return cart.setIn(`${action.id}.quantity`.split('.'), next);
			}
		}
	default:
		return cart;
	}
}
