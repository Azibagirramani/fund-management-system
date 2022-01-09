<template>
  <div id="landing">
    <nav class="navbar navbar-expand-lg navbar-white bg-white">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand logo" href="#">Fund Management System</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">How it works</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <router-link to="/auth/login" class="nav-link">Demo</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section class="mt-5 container">
      <div class="row">
        <div class="col-md-6">
          <h1 class="col-6 hero-text">Divide payments to anyone</h1>
          <p class="col-7 mt-4 text-muted">
            App name is a dead-simple way to divide payments for purchase and
            between friend. Coming soon.
          </p>
          <div class="col-7">
            <div class="d-flex">
              <input
                class="form-control mt-4"
                placeholder="example@gmail.com"
              />
              <button class="btn text-white mt-4 ml-2">Request</button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img
            src="../assets/heroImage.svg"
            alt="hero-image"
            class="img-fluid hero-image"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
nav ul li a {
  color: #6d6d6d !important;
}

nav ul li a:hover {
  color: #3d8116 !important;
}

.hero-text {
  font-size: 3.5rem;
}

.logo {
  color: #3d8116 !important;
}
</style>
