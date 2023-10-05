<!-- product Details -->
<template>
  <v-container>
    <v-row>
      <v-col md="6" sm="12" v-if="books">
        <v-img
          :src="books.cover_image"
          alt="book Image"
          max-width="500"
          max-height="500"
        />
      </v-col>
      <v-col md="6" sm="12" v-if="books">
        <h1>Title:{{ books.title }}</h1>
        <h3>Description:{{ books.description }}</h3>
        <br />
        <h3>Aurhor:{{ books.author }}</h3>
        <h3>price:{{ books.price }}</h3>

        <v-card-subtitle></v-card-subtitle>
        <br />
        <div></div>
        <br />
        <div class="button">
          <br />
          <router-link :to="'/addtocart/' + book.id">
            <v-btn
              color="blue-lighten-2"
              variant="text"
              @click="addToCart(books)"
            >
              ADD Cart
            </v-btn>
          </router-link>
          <v-btn color="blue"> Wishlist</v-btn>
        </div>
        <br />
        <div>
          <AddReview />
          <GetDetail />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GetDetail from "./GetDetail.vue";
import AddReview from "./AddReview";
import axios from "axios";
import apiservice from "@/Service/Api.js";
export default {
  //name: "CartAdd",
  components: {
    AddReview,
    GetDetail,
  },
  data: () => ({
    show: false,
    quantity: 1,
    books: null,
  }),
  methods: {
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
  },
  async mounted() {
    let bookId = this.$route.params.id;
    console.log(bookId);
    let result = await axios.get(`http://10.0.10.220:8080/api/book/${bookId}`);
    this.books = result.data.book;
    console.log(this.books);
  },
  methods: {
    addToCart(books) {
      apiservice.addToCart(books);
    },
  },
};
</script>

<style scoped>
.quantity-control {
  display: flex;
  align-items: center;
}

.quantity {
  margin: 0 8px;
}
#discount {
  color: blue;
}
.button {
  display: flex;
}
</style>
