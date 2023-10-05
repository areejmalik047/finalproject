<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent="saveData">
      <h1>LOGIN</h1>
      <v-text-field v-model="email" label="E-mail"></v-text-field>

      <v-text-field
        v-model="password"
        label="enter your password"
        :counter="8"
      ></v-text-field>

      <v-btn type="submit" block class="mt-2" v-on:click="saveData"
        >Login</v-btn
      >

      <router-link to="/signup">
        <h3>SignUp</h3>
      </router-link>
    </v-form>
  </v-sheet>
</template>

<script>
import router from "@/router";
import axios from "axios";
export default {
  name: "LogIn",
  data() {
    return {
      password: "",
      email: "",
      users: [],
      token: "",
    };
  },
  methods: {
    async saveData() {
      let result = await axios.post("http://10.0.10.220:8080/api/login", {
        email: this.email,
        password: this.password,
      });
      this.token = result.data.token;
      localStorage.setItem("token", this.token);
      this.users = result.data.user;
      console.log("Token:", this.token);
      router.push({ path: "/product" });
    },
  },
};
</script>
<style>
.v-form {
  margin-top: 40%;
}
</style>
