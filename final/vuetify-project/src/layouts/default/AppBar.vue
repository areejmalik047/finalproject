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
          <router-link to="/signup">
            <v-btn color="white">Signup</v-btn>
          </router-link>
        </div>
        <div>
          <router-link to="/login">
            <v-btn color="white">Login</v-btn>
          </router-link>
        </div>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main> </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
//
</script>
