<template>
  <section class="register">
    <div class="row w-100">
      <div class="col-md-5 bg-dark vh-100"></div>
      <div class="col-md-7 vh-100 d-flex align-items-center justify-content-center">
        <form @submit.prevent="handleSignup(form)">
          <h1 class="h3 mb-3 fw-normal text-center">Sign up</h1>
          <p class="fs--1 text-center">Start using FMS and improve fuddnd management.</p>

          <div class="my-3">
            <div class="row">
              <div class="col" v-for="(types, index) in accountTypes" :key="index">
                <AccountCard
                  :title="types.title"
                  :icon="types.icons"
                  :checkBox="index === currentIndex ? true : false"
                  :baseEx="index === currentIndex ? 'card--selected' : ''"
                  @card-index="handleAccountType(index)"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div class="form-floating mb-3">
                <input
                  v-model="firstName"
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="First name"
                  required
                />
                <label for="floatingInput">First Name</label>
              </div>
            </div>
            <div class="col">
              <div class="form-floating mb-3">
                <input
                  v-model="lastName"
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Last Name"
                  required
                />
                <label for="floatingInput">Last Name</label>
              </div>
            </div>
          </div>
          <div class="form-floating mb-3">
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              v-model="password"
              type="password"
              class="form-control form-control-sm"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div class="form-check my-2 mb-0">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckIndeterminate"
            />
            <label class="form-check-label" for="flexCheckIndeterminate">
              I read and agree to <a href="/#">Terms and Conditions</a>
            </label>
          </div>

          <div class="text-center mt-2">
            <button class="w-100 my-3 btn btn-lg text-white" type="submit">
              Sign up
            </button>
            <a href="#/" class="text-muted"
              >Already have an account ?
              <router-link to="/auth"
                ><span class="text-primary">Sign in</span></router-link
              ></a
            >
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import AccountCard from "../../components/accountCard";
export default {
  name: "register",
  components: {
    AccountCard,
  },
  data() {
    return {
      form: {},
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      loader: false,
      msg: null,
      currentIndex: null,
      accountTypes: [
        {
          title: "Manager",
          icons: "bi bi-person-workspace fs-1",
        },
        {
          title: "Employee",
          icons: "bi bi-person-lines-fill fs-1",
        },
      ],
    };
  },
  methods: {
    async handleSignup() {
      this.loader = true;
      try {
        await axios.post(`https://fms-backend-v1.herokuapp.com/api/v1/users/createUser`, {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
        });
        this.$router.push("/auth/login");
        return;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        this.msg = "Unable to register account";
      } finally {
        this.loader = false;
      }
    },

    handleAccountType(index) {
      console.log(index);
      this.currentIndex = index;
    },
  },
};
</script>

<style lang="css">
form {
  width: 25rem;
}

label {
  font-size: 0.9rem;
}
</style>
