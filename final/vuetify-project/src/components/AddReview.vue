<template>
  <div>
    <v-title>Add Review & Rating</v-title>
    <v-text-field
      v-model="newReview"
      label="Review"
      counter="500"
      :rules="reviewRules"
    ></v-text-field>
    <v-rating v-model="newRating" label="Rating"></v-rating>
    <div>
      <v-btn color="primary" class="custom-button" @click="postReview"
        >POST</v-btn
      >
    </div>
    <br>
    
  </div>
</template>

<script>
import axios from "axios";
import GetDetail from "./GetDetail.vue";

export default {
  components: {
    GetDetail,
  },
  data() {
    return {
      newReview: "",
      newRating: 0,
    };
  },

  methods: {
    postReview() {
      // Make a POST request to add a review

      const bookId = this.$route.params.id; // Replace with the actual book ID

      const ReviewValue = this.newReview;

      axios
        .post(
          `http://10.0.10.220:8080/api/review/${bookId}`,
          {
            text: ReviewValue,
          },

          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,

              "Content-Type": "application/json",
            },
          }
        )
        .then(() => {
          this.postRating();
          this.newReview = "";
        })

        .catch((error) => {
          console.error("Error posting review:", error);
        });
    },

    postRating() {
      // Make a POST request to add a rating

      const bookId = this.$route.params.id; // Replace with the actual book ID

      const ratingValue = this.newRating;

      axios
        .post(
          `http://10.0.10.220:8080/api/detail/${bookId}`,
          {
            rating: ratingValue, // Include the rating field within the request body
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then(() => {
          this.newRating = 0;
        })
        .catch((error) => {
          console.error("Error posting rating:", error);
        });
    },
  },
};
</script>
