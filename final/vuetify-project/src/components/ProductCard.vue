<template>
  <div>
    <br />
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="searchText"
            label="Search"
            append-icon="mdi-magnify"
            single-line
            hide-details
            @input="filterbooks"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="book in filteredbooks" :key="book.id" md="3" sm="6">
          <v-card class="mx-auto" max-width="344">
            <v-img :src="book.cover_image" height="200px" cover></v-img>
            <v-card-title>title:{{ book.title }}</v-card-title>
            <v-card-subtitle>price${{ book.price }}</v-card-subtitle>
            <v-card-subtitle>Rating:{{ book.rating }}</v-card-subtitle>
            <v-card-actions>
              <router-link :to="'/addtocart/' + book.id">
                <v-btn
                  color="blue-lighten-2"
                  variant="text"
                  @click="addToCart(book)"
                >
                  ADD Cart
                </v-btn>
              </router-link>
              <router-link :to="'/product/' + book.id">
                <v-btn color="blue-lighten-2" variant="text">
                  Description
                </v-btn>
              </router-link>
              <v-spacer></v-spacer>
            </v-card-actions>

            <v-expand-transition> </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import apiservice from "@/Service/Api.js";
export default {
  name: "ProductCard",
  data: () => ({
    show: false,
    books: [],
    cart: [],
    searchText: "",
  }),
  computed: {
    filteredbooks() {
      // Filter products based on searchText
      return this.books.filter((book) =>
        book.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
  },
  async mounted() {
    let result = await axios.get(" http://10.0.10.220:8080/api/book");
    this.books = result.data.books;
  },
  methods: {
    addToCart(books) {
      apiservice.addToCart(book);
    },
  },
};
</script>

<style scoped>
/* Adjust the card styles */

.v-card-text {
  padding: 8px; /* Add padding for spacing inside each card */
}
</style>
