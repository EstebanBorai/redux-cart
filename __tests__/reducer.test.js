import { reducer } from '../src';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../src/actions';
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
});
