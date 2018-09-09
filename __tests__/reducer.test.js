import { reducer } from '../src';
import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ITEM } from '../src/actions';
import { Map } from 'immutable';

describe('Cart Reducer', () => {
  let initialState;
  let id;

  beforeEach(() => {
    initialState = new Map({});
    id = 'A01A';
  });

  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState)
  });

  it('should handle ADD_TO_CART', () => {
    let expectedState = new Map({});
    expectedState = expectedState.setIn(`${id}.quantity`.split('.'), 1);

    expect(
      reducer(initialState, {
        type: ADD_TO_CART,
        id
      })
    ).toEqual(expectedState);
  });

  it('should add one more to quantity if the item is already inside', () => {
    const modifiedState = reducer(initialState, {
      type: ADD_TO_CART,
      id
    });

    const expectedState = modifiedState.setIn(`${id}.quantity`.split('.'), 2);

    expect(
      reducer(modifiedState, {
        type: ADD_TO_CART,
        id
      })
    ).toEqual(expectedState)
  });

  it('should remove the item from the cart', () => {
    const modifiedState = reducer(initialState, {
      type: ADD_TO_CART,
      id
    });

    expect(
      reducer(modifiedState, {
        type: REMOVE_FROM_CART,
        id
      })
    ).toEqual(initialState);
  });

  it('should remove 1 of 3 items from the cart', () => {
    const modifiedState = initialState.setIn(`${id}.quantity`.split('.'), 3);
    const expectedState = initialState.setIn(`${id}.quantity`.split('.'), 2);

    expect(
      reducer(modifiedState, {
        type: REMOVE_ITEM,
        id,
        quantity: 1
      })
    ).toEqual(expectedState);
  });

  it('should remove the item from the cart if no more items of the same type are available', () => {
    const modifiedState = initialState.setIn(`${id}.quantity`.split('.'), 1);

    expect(
      reducer(modifiedState, {
        type: REMOVE_ITEM,
        id,
        quantity: 1
      })
    ).toEqual(initialState);
  });

  it('should remove 1 item if quantity of items to remove is not defined', () => {
    const modifiedState = initialState.setIn(`${id}.quantity`.split('.'), 1);

    expect(
      reducer(modifiedState, {
        type: REMOVE_ITEM,
        id,
        quantity: undefined
      })
    ).toEqual(initialState);
  });

  it('should remove the item from the cart if no more items of the same type are available [not providing quantity]', () => {
    const modifiedState = initialState.setIn(`${id}.quantity`.split('.'), 1);

    expect(
      reducer(modifiedState, {
        type: REMOVE_ITEM,
        id,
        quantity: undefined
      })
    ).toEqual(initialState);
  });

  it('should update remaining items [not providing quantity]', () => {
    const modifiedState = initialState.setIn(`${id}.quantity`.split('.'), 2);
    const expectedState = initialState.setIn(`${id}.quantity`.split('.'), 1);

    expect(
      reducer(modifiedState, {
        type: REMOVE_ITEM,
        id,
        quantity: undefined
      })
    ).toEqual(expectedState);
  });
});
