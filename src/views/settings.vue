<template>
  <div class="">
    <div class="card shadow border-0">
      <div class="row">
        <div
          class="col-md-4 text-center px-5 py-4 vh-100 d-flex justify-content-center flex-column align-items-center"
        >
          <img
            src="https://via.placeholder.com/300"
            class="img-fluid rounded-img"
          />
          <p class="text-center mt-lg-3">Change Profile Picture</p>
          <div class="">
            <button class="mb-3 btn w-100 text-white">
              Use Camera <i class="fa fa-camera"></i>
            </button>
            <button class="btn w-100 text-white">
              Upload Image <i class="fa fa-upload"></i>
            </button>
          </div>
        </div>
        <div class="col">
          <form>
            <div class="card rounded-0 border-0">
              <div class="card-header">Personal information</div>
              <div class="mb-1 row px-3 mt-3">
                <label for="inputPassword" class="col-sm-2 col-form-label"
                  >Full Name</label
                >
                <div class="col-sm-10">
                  <input type="text" class="form-control form-control-sm" />
                </div>
              </div>
              <div class="mb-1 row px-3 mt-3">
                <label for="inputPassword" class="col-sm-2 col-form-label"
                  >Date of birth</label
                >
                <div class="col-sm-10">
                  <input type="date" class="form-control form-control-sm" />
                </div>
              </div>
              <div class="mb-1 row px-3 mt-3">
                <label for="inputPassword" class="col-sm-2 col-form-label"
                  >Address</label
                >
                <div class="col-sm-10">
                  <input type="text" class="form-control form-control-sm" />
                </div>
              </div>
              <div class="card-header">Contact</div>
              <div class="mb-1 row px-3 mt-3">
                <label for="inputPassword" class="col-sm-2 col-form-label"
                  >Email</label
                >
                <div class="col-sm-10">
                  <input type="email" class="form-control form-control-sm" />
                </div>
              </div>
              <div class="mb-1 row px-3 mt-3">
                <label for="inputPassword" class="col-sm-2 col-form-label"
                  >Phone no</label
                >
                <div class="col-sm-10">
                  <input type="text" class="form-control form-control-sm" />
                </div>
              </div>
              <div class="card-header">Security</div>
              <div class="mb-1 row px-3 mt-3">
                <label for="inputPassword" class="col-sm-2 col-form-label"
                  >Old Password</label
                >
                <div class="col-sm-10">
                  <input type="password" class="form-control form-control-sm" />
                </div>
              </div>
              <div class="mb-1 row px-3 mt-3">
                <label for="inputPassword" class="col-sm-2 col-form-label"
                  >New Password</label
                >
                <div class="col-sm-10">
                  <input type="password" class="form-control form-control-sm" />
                </div>
              </div>
              <div class="mb-1 row px-3 mt-3">
                <label for="inputPassword" class="col-sm-2 col-form-label"
                  >Confirm Password</label
                >
                <div class="col-sm-10">
                  <input type="password" class="form-control form-control-sm" />
                </div>
              </div>
            </div>

            <div class="d-flex justify-content-end me-4">
              <button class="btn text-white" type="button">Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.rounded-img {
  border-radius: 50% !important;
}

label,
p {
  font-size: 0.8rem;
}
</style>
