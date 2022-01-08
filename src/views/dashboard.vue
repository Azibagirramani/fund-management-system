<template>
  <div>
      <Header />
    <div class="container-fluid">
      <div class="row">
        <NavBar />
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <h1>content</h1>
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
    Header
  },
};
</script>
