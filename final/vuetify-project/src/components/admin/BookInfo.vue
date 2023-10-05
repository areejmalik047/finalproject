<template>
  <div>
    <table style="width: 100%; border-collapse: collapse">
      <thead>
        <tr>
          <th>Image</th>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) in cart" :key="index">
          <td>
            <img :src="book.cover_image" alt="Product Image" width="100" />
          </td>
          <td>{{ book.id }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.price }}</td>
          <td>{{ book.author }}</td>
          <td>
            <v-btn
              color="error"
              @click="deleteItem(book.id, index)"
              class="mr-2"
            >
              Delete
            </v-btn>
            <v-btn color="success" @click="onUpdated(index)">Update</v-btn>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cart: [],
      
    };
  },
  async mounted() {
    try {
      const response = await axios.get("http://10.0.10.220:8080/api/book");
      this.cart = response.data.books;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  methods: {
    async deleteItem(bookId, index) {
      console.log("Deleting book with ID:", bookId);
      try {
        const bookId = this.$route.params.id;
        await axios.delete(`http://10.0.10.220:8080/api/book/${bookId}`);
        this.cart = this.cart.filter((book, i) => i !== index);
        console.log("Book deleted successfully.");
      } catch (error) {
        console.error("Error deleting book:", error);
      }
    },
    onUpdated(index) {
      // Handle the update logic here
    },
  },
};
</script>
