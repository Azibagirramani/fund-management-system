<template>
  <header
    class="navbar p-2 navbar-dark sticky-top bg-white flex-md-nowrap p-0 shadow-sm"
  >
    <a
      class="col-md-3 col-lg-2 me-0 px-3 text-dark badge rounded-pill bg-primary text-white bg-primary fs-6"
      href="#"
      >Show organisation name</a
    >

    <div class="navbar-nav">
      <div class="d-flex align-items-center">
        <img
          class="img-fluid logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/1200px-Google_Chrome_icon_%28September_2014%29.svg.png"
          alt="..."
        />

        <div class="nav-item text-nowrap">
          <a class="nav-link px-3 text-dark" href="#">Sign out</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
/*
 * Navbar
 */

.navbar-brand {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
}

.navbar .navbar-toggler {
  top: 0.25rem;
  right: 1rem;
}

.navbar .form-control {
  padding: 0.75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
}

.logo {
  width: 1.5rem !important;
  height: 1.5rem !important;
}
</style>
