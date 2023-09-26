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
//import axios from "axios";
export default {
  name: "LogIn",
  data() {
    return {
      password: "",
      email: "",
    };
  },
  // methods: {
  //   async saveData() {
  //     let result = await axios.get("http://localhost:3000/users", {
  //       params: {
  //         email: this.email,
  //         password: this.password,
  //       },
  //     });

  //     console.log(result);
  //     if (result.status === 200 && result.data.length > 0) {

  //       alert("Login successful");
  //       this.$router.push({ name: "Homepage" });
  //     } else {
  //       alert("Invalid email or password");
  //     }
  //   },
  // },
};
</script>
<style>
.v-form {
  margin-top: 40%;
}
</style>
