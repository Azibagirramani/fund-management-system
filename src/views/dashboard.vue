<template>
  <div>
    <Header />
    <div class="container-fluid " :style="{height: '100vh', backgroundColor: '#F5F6F7'}">
      <div class="row ">
        <NavBar />
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div class="mt-4 ">
            <router-view></router-view>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/navbar.vue";
import Header from "../components/header.vue";
export default {
  components: {
    NavBar,
    Header,
  },
};
</script>
