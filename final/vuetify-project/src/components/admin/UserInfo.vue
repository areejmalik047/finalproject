<template>
  <div>
    <table style="width: 100%; border-collapse: collapse">
      <thead>
        <tr>
          <th class="text-right">ID</th>
          <th class="text-right">Name</th>
          <th class="text-right">Email</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserInfo",
  data() {
    return {
      users: [],
    };
  },
  async created() {
    try {
      
      const token = localStorage.getItem("token");
      const response = await axios.get("http://10.0.10.220:8080/api/users", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type":"application/json",
        },
      });
      this.users = response.data.data;
      console.log(this.users);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
