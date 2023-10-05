import axios from "axios";
const apiservice = {
  addToCart(book) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.id === book.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({ ...book, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.$router.push("/cart");
  },
};
export default apiservice;
