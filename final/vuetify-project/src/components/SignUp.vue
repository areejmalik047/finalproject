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
        v-model="Password"
        label="password"
        :rule="passwordRule"
        type="password"
        :counter="8"
      ></v-text-field>

      <v-btn type="submit" block class="mt-2" v-on:click="saveData"
        >Signup</v-btn
      >
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
      email: "",
      Password: "",
      email: "",
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
    async saveData() {
      let result = await axios.post("http://10.0.10.216:80/api/register", {
        name: this.name,
        email: this.email,
        password: this.Password,
      });
      console.log(result);
      if (result.status == 200) {
        alert("Success");
        //localStorage.setItem("user", JSON.stringify(result));
        this.$router.push({ name: "Homepage" });
      }
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
