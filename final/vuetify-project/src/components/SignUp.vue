<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent>
      <h1>SIGNUP</h1>
      <v-text-field
        v-model="name"
        :counter="4"
        :rules="NameRules"
        label="user name"
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="password"
        :rule="passwordRule"
        type="password"
        :counter="8"
      ></v-text-field>
      <v-text-field
        v-model="confirm_password"
        label="confirm-password"
        :rule="confirm_password"
        type="password"
        :counter="8"
      ></v-text-field>

      <v-btn type="submit" block class="mt-2" @click="Data">Signup</v-btn>
      <router-link to="/login">
        <h3>Login</h3>
      </router-link>
    </v-form>
  </v-sheet>
</template>
<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      password: "",
      email: "",
      users: [],
      confirm_password: "",
      NameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 4) || "Name must be less than 4 characters",
      ],

      NameRules: [
        (value) => {
          if (value?.length >= 3) return true;
          return "Name is required.";
        },
      ],
      emailRules: [
        (value) => {
          if (value) return true;
          return "E-mail is requred.";
        },
        (value) => {
          if (/.+@.+\..+/.test(value)) return true;
          return "E-mail must be valid.";
        },
      ],
      password: "",
      passwordRule: [
        (value) => {
          if (value) return true;
          return "Password is required.";
        },
        (value) => {
          if (value && value.length >= 3) return true;
          return "Password must be at least 8 characters.";
        },
      ],
    };
  },
  methods: {
    async Data() {
      let result = await axios.post("http://10.0.10.220:8080/api/register", {
        name: this.name,
        email: this.email,
        password: this.password,
        confirm_password: this.confirm_password,
      });
      this.users = result.data.user;
      console.log("Registration successful:", this.users);
      this.$router.push("/login");
    },
  },
};
</script>
<style>
.v-form {
  /* border: 2px solid black; */
  /* //border-radius: 1px; */
  padding: 30px;
  margin-top: 40%;
}
.v-btn {
  color: white;
}
</style>
