## Actions
The `actions` and `action creators` are exposed allowing you to consume and manipulate any action.

### Actions

Action | Description
------------ | -------------
`ADD_TO_CART` | Dispatched when calling `addToCart`.
`REMOVE_FROM_CART` | Dispatched when calling `removeFromCart`.
`REMOVE_ITEM` | Dispatched when calling `removeItem`.

### Action Creators

Function | Arguments | Description
------------ | ------------- | -------------
`addToCart` | `id` (string) | Adds an item to the cart. If an item already exists then add one more to the quantity counter.
`removeFromCart` | `id` (string) | Dispatched when an item is completely removed from the cart.
`removeItem` | `id`(string), `quantity` (number)[optional] | Remove one or more items of the same `id` from the cart. If `quantity` argument is not given removes one item.
