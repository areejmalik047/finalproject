<template>
  <div>
    <v-card class="detail">
      <v-card-title>
        <h2>Book Details</h2>
      </v-card-title>
      <v-card-text>
        <h3>Reviews</h3>
        <div v-for="(review, index) in bookdetail.reviews" :key="index">
          <p>User: {{ review.user_id }}</p>
          <p>Reviews:{{ review.text }}</p>

          <v-rating>Rating: {{ review.rating }}</v-rating>
        </div>
      </v-card-text>

      <!-- overall rating -->
      <v-card-actions>
        <h3>Rating:</h3>
        <v-rating
          v-model="bookdetail.rating"
          background-color="yellow"
        ></v-rating>
      </v-card-actions>
      <v-card-actions>
        <h3>Overall Rating: {{ bookdetail.rating }}</h3>
      </v-card-actions>
    </v-card>
<!-- <div>
    <h1>Related book</h1>
    <v-row>
      <v-col md="5" sm="6" 
        v-for="(relatedBook, index) in bookdetail.related_books"
        :key="index"
        
      >
        <v-card>
          <v-img :src="relatedBook" height="300"></v-img>
        </v-card>
      </v-col>
    </v-row>
</div> -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "GetDetails",
  data() {
    return {
      bookdetail: {},
    };
  },
  created() {
    this.loadbooks();
  },
  methods: {
    loadbooks() {
      const bookId = this.$route.params.id;
      axios
        .get(`http://10.0.10.220:8080/api/bookdetail/${bookId}`)
        .then((response) => {
          this.bookdetail = response.data.details;
          console.log(this.bookdetail);
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>
<style scoped>
.detail {
  background-color: whitesmoke !important; /* Set the background color to white smoke */
}
</style>
