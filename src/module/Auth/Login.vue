<template>
  <div class="row w-100">
    <div class="col-md-5 vh-100 bg-dark"></div>
    <div
      class="col-md-7 vh-100 d-flex align-items-center justify-content-center"
    >
      <form @submit.prevent>
        <h1 class="h3 mb-3 fw-normal text-center">Sign in</h1>
        <p class="text-center">Welcome back! We are happy you like FMS</p>
        <span class="text-danger">
          {{ msg }}
        </span>
        <div class="form-floating mb-3">
          <input
            v-model="user.email"
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            v-model="user.password"
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="text-center mt-3">
          <a href="#/" class="float-end text-muted">Forgot password ?</a>
          <button class="w-100 my-3 btn btn-lg text-white" @click="login">
            <span v-if="loading">
              <b-spinner variant="light" label="Spinning"></b-spinner>
            </span>
            <span v-else> Continue </span>
          </button>
          <a href="#/" class="text-muted"
            >Dont't have an account yet?
            <router-link to="/auth/register"
              ><span class="text-primary">Sign up</span></router-link
            ></a
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",

  data() {
    return {
      loading: false,
      error: "",
      msg: "",
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        this.loading = true;
        const response = await axios.post(
          "https://fms-backend-v1.herokuapp.com/api/v1/users/userLogin",
          this.user
        );
        localStorage.setItem("fms-jwt", response.data.jwtToken);
        localStorage.setItem("fms-employeeId", response.data.employerId);
        if (response.status === 200) {
          this.$router.push("/organisation/setup");
        }
      } catch (error) {
        this.msg = "something went wrong";
        this.error = "something went wrong";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="css">
.mt-40 {
  margin-top: 10rem !important;
}

form {
  width: 55%;
}

form a {
  text-decoration: none;
  font-size: 0.8rem !important;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
