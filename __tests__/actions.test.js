import * as action from '../src/actions';

describe('Cart Actions', () => {
  var id = 'randomId';

  it('create an action to add to the cart', () => {
    expect(action.addToCart(id)).toEqual(expect.objectContaining({
      type: action.ADD_TO_CART,
      id
    }));
  });

  it('create an action to remove from cart', () => {
    expect(action.removeFromCart(id)).toEqual(expect.objectContaining({
      type: action.REMOVE_FROM_CART,
      id
    }));
  });
});
