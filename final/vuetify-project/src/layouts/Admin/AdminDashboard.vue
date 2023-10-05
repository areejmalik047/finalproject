<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :background_color="blue"
      location="left"
      temporary
    >
      <v-list density="compact" nav>
        <router-link to="/book">
          <v-list-item
            prepend-icon="mdi-folder"
            title="Books"
            value="shared"
          ></v-list-item>
        </router-link>
        <router-link to="/user">
          <v-list-item
            prepend-icon="mdi-account-multiple"
            
            title="Users"
            value="myfiles"
          ></v-list-item>
        </router-link>
        <router-link to="/order">
          <v-list-item
            prepend-icon="mdi-star"
            title="Order"
            value="starred"
          ></v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      color="teal-darken-4"
      image="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:image>
        <v-img
          gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <template v-slot:prepend>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Book Store </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- //side bar -->

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style scoped>
.v-navigation-drawer {
  background-color:whitesmoke;
  color: white;
}
</style>
