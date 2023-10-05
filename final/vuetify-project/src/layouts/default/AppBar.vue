<template>
  <v-card color="grey-lighten-3">
    <v-layout>
      <v-app-bar
        color="teal-darken-4"
        image="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>
        <v-app-bar-title>Book Store</v-app-bar-title>
        <v-spacer></v-spacer>
        <div>
          <router-link to="/">
            <v-btn color="white">Home</v-btn>
          </router-link>
        </div>
        <div>
          <router-link to="/product">
            <v-btn color="white">Product</v-btn>
          </router-link>
        </div>
        <div>
          <router-link to="/about">
            <v-btn color="white">About US</v-btn>
          </router-link>
        </div>
        <div>
          <router-link to="">
            <v-btn color="white">Contact US</v-btn>
          </router-link>
        </div>
        <div>
          <v-btn v-if="!userAuthenticated" @click="navigateTo('login')"
            >Login</v-btn
          >
          <v-btn v-if="!userAuthenticated" @click="navigateTo('signup')"
            >Register</v-btn
          >
          <v-btn v-else @click="logout()">Logout</v-btn>
        </div>
      </v-app-bar>

      <v-main> </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userAuthenticated: false,
      yourAuthToken: localStorage.getItem("token"),
    };
  },

  methods: {
    navigateTo(route){
      this.$router.push("/"+route)
    }
    ,
    async logout() {
      try {
        axios.post("10.0.10.220:8080/api/logout", null, {
          headers: {
            Authorization: `Bearer ${this.yourAuthToken}`,
          },
        });

        localStorage.removeItem("token");

        this.userAuthenticated = false;

        this.$router.push("/login");
      } catch (error) {
        console.error("Logout failed:", error);
      }
    },
  },
  created() {

if (this.yourAuthToken !== null) {

  this.userAuthenticated = true;

}
  }
};
</script>
