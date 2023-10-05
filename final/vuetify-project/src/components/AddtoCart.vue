<template>
  <div>
    <table style="width: 100%; border-collapse: collapse">
      <thead>
        <tr>
          <th class="text-left">Image</th>

          <th class="text-left">Book</th>

          <th class="text-left">Price</th>

          <th class="text-left">Quantity</th>

          <th class="text-left">Total</th>

          <th class="text-left">Action</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in cart" :key="index">
          <td>
            <img :src="item.cover_image" alt="Product Image" width="100" />
          </td>

          <td>{{ item.title }}</td>

          <td>{{ item.price }}</td>

          <td>
            <div class="quantity-control">
              <v-btn @click="decreaseQuantity(item)" icon>
                <v-icon>mdi-minus</v-icon>
              </v-btn>

              <div class="quantity">{{ item.quantity }}</div>

              <v-btn @click="increaseQuantity(item)" icon>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </div>
          </td>

          <td>{{ item.price * item.quantity }}</td>

          <td>
            <v-btn color="error" @click="deleteItem(index)">Delete</v-btn>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="payment">
      <div>SubTotal: {{ calculateSubtotal() }}</div>
      <div>Total: {{ calculateTotal() }}</div>
      <v-btn color="primary" @click="checkout">Checkout</v-btn>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      quantity: "",
      cart: [],
    };
  },

  mounted() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    this.cart = cart;
  },

  methods: {
    increaseQuantity(item) {
      item.quantity++;
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
        localStorage.setItem("cart", JSON.stringify(this.cart));
      }
    },

    deleteItem(index) {
      this.cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    calculateSubtotal() {
      return this.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    calculateTotal() {
      const subtotal = this.calculateSubtotal();
      return subtotal;
    },
    // checkout
    async checkout() {
      try {
        // Separate book IDs and quantities into arrays
        const bookIds = this.cart.map((item) => item.id);
        const quantities = this.cart.map((item) => item.quantity);
        const postData = {  
          book_id: bookIds,
          quantity: quantities,
        };

        const token = localStorage.getItem("token");

        const result = await axios.post(
          "http://10.0.10.220:8080/api/confirm",
          postData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(result);
        alert("Order completed!");
      } catch (error) {
        console.error("Axios error:", error);
        alert("Error occurred during checkout. Please try again later.");
      }
    },
  },
};
</script>

<style scoped>
.quantity-control {
  display: flex;
  align-items: center;
}
.payment {
  background-color: #f0f0f0;
  padding: 50px;
  text-align: right;
  font-size: 20px;
}
</style>
