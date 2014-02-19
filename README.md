## Ember sub-route transitioning example

Transitioning to a stored transition that was orginally from one subroute to another doesn't appear to work in ember 1.4.0 or higher. The same code does work with ember 1.3.0.

To recreate:

- Navigate to `orders/1`.
- Click on 'Checkout'.
- Click on 'Login'.
- The app attempts to transition to `login.checkout`, instead of `order.checkout` and therefore fails.
- If you look at the stored transition, it does contain the order_id, but this doesn't seem to get used.