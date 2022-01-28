<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>
<style>
.input-group-text {
  border-radius: 0 !important;
}

button {
  border-radius: 0 !important;
  background-color: #164181 !important;
}

input [type="checkbox"] {
  width: 2rem !important;
  height: 1.5rem !important;
}

.form-control {
  border-radius: 0 !important;
}

.form-control:focus {
  box-shadow: none !important;
  border-color: #3d8116 !important;
}

.form-check-input {
  border-radius: 0 !important;
}

.form-check-input:checked {
  background-color: #3d8116 !important;
}

.form-check-input:focus {
  border-color: none !important;
  outline: 0 !important;
  box-shadow: none !important;
}
a {
  text-decoration: none !important;
}

.btn:focus {
  outline: 0 !important;
  box-shadow: none !important;
}

.bg-primary {
  background-color: #3d8116 !important;
}

.text-primary {
  color: #3d8116 !important;
}
</style>
