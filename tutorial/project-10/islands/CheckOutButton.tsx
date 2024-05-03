const CheckOutButton = () => (
  <button
    class="checkout-button"
    onClick={() => {
      // got to /checkout page
      window.location.href = "/checkout";
    }}
  >
    Checkout
  </button>
);

export default CheckOutButton;
