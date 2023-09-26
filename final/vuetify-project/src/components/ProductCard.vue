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
            @input="filterProducts"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col  v-for="product in filteredProducts" :key="product.id" md="3" sm="6">
          <v-card class="mx-auto" max-width="344">
            <v-img :src="product.thumbnail" height="200px" cover></v-img>

            <v-card-title>title:{{ product.title }}</v-card-title>

            <v-card-subtitle>price${{ product.price }}</v-card-subtitle>
            <v-card-subtitle>Rating:{{ product.rating }}</v-card-subtitle>
            <v-card-actions>
              <router-link to="/login">
                <v-btn color="blue-lighten-2" variant="text"> ADD Cart </v-btn>
              </router-link>
              <v-btn color="blue-lighten-2" variant="text"> Description </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="show = !show"
              ></v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text v-model="description">
                  <b>description:</b>{{ product.description }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>


import axios from "axios";
export default {

  name: "ProductCard",
  data: () => ({
    show: false,
    products: [],
    searchText: "",
  }),
  computed: {
    filteredProducts() {
      // Filter products based on searchText
      return this.products.filter((product) =>
        product.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  },
  async mounted() {
    let result = await axios.get("https://dummyjson.com/products");
    this.products = result.data.products;

      
  },
};
</script>

<style scoped>
/* Adjust the card styles */

.v-card-text {
  padding: 8px; /* Add padding for spacing inside each card */
}
</style>
