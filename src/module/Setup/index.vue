<template>
  <div class="">
    <Header />
    <div class="d-flex justify-content-center mt-5">
      <div class="card shadow border-0 w-75">
        <div class="card-body">
          <form-wizard>
            <tab-content title="Organization profile" :selected="true">
              <form @submit.prevent="onSubmit(form)">
                <div class="mt-4">
                  <!-- Organization logo -->
                  <div class="form-group">
                    <input
                      type="file"
                      class="form-control-file"
                      id="organization_logo"
                      name="organization_logo"
                      @change="onFileChange"
                      accept="image/*"
                    />
                    <small class="form-text text-muted">
                      <span class="text-danger">*</span>
                      <span>Please upload a logo for your organization.</span>
                    </small>
                  </div>
                </div>

                <div class="row mt-4">
                  <p class="text-muted">Organization information</p>
                  <div class="col">
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="companyName"
                        placeholder="Enter company name"
                        v-model="form.organisationName"
                        required
                      />
                      <label for="floatingInput">Name</label>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="companyWebsite"
                        placeholder="Enter company Description"
                        v-model="form.organisationDescription"
                        required
                      />
                      <label for="companyWebsite">Description</label>
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col">
                      <div class="form-group">
                        <label for="companyWebsite">Account Owner</label>
                        <input
                          type="text"
                          readonly
                          class="form-control-plaintext"
                          id="staticEmail"
                          value="John Doe"
                        />
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-floating mb-3">
                        <input
                          type="text"
                          class="form-control"
                          id="companyWebsite"
                          placeholder="Business Type"
                          v-model="form.businessType"
                          required
                        />
                        <label for="companyWebsite">Business Type</label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-floating mb-3">
                        <input
                          type="number"
                          class="form-control"
                          id="companyWebsite"
                          placeholder="Enter company capacity"
                          v-model="form.staffCapacity"
                          required
                        />
                        <label for="companyWebsite">Capacity</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row mt-3">
                  <p class="text-muted">Contact information</p>
                  <div class="col">
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="companyPhone"
                        placeholder="Enter company phone"
                        v-model="form.organisationPhone"
                        required
                      />
                      <label for="companyPhone">Phone</label>
                    </div>
                  </div>

                  <div class="col">
                    <div class="form-floating mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="companyEmail"
                        placeholder="Enter company email"
                        v-model="form.organisationEmail"
                        required
                      />
                      <label for="companyEmail">Email</label>
                    </div>
                  </div>
                  <div class="form-floating">
                    <textarea
                      v-model="form.organisationAddress"
                      class="form-control"
                      id="floatingTextarea"
                    ></textarea>
                    <label for="floatingTextarea">Address</label>
                  </div>
                </div>

                <div class="mt-3">
                  <p class="text-muted">Locations</p>
                  <div class="row row-cols-3 g-0 my-3">
                    <div
                      class="col"
                      v-for="(loc, index) in businessLocation"
                      :key="index"
                    >
                      <span class="badge rounded-pill bg-light text-dark">
                        {{ loc.locationName }}
                        <i
                          class="fa fa-times"
                          aria-hidden="true"
                          @click="removeLocation(index)"
                        ></i
                      ></span>
                    </div>
                  </div>
                  <div class="d-flex my-3">
                    <div class="form-floating mb-3 w-100">
                      <input
                        type="text"
                        class="form-control"
                        id="companyPhone"
                        placeholder="Enter company phone"
                        v-model="locationName"
                        required
                      />
                      <label for="companyPhone">Enter location</label>
                    </div>
                    <span class="input-group-text" @click="addLocation"
                      ><i class="fa fa-plus" aria-hidden="true"></i
                    ></span>
                  </div>
                </div>
                <div class="d-flex gap-4">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    @click="submitOrganisation(form)"
                  >
                    Submit
                  </button>
                  <button type="button" class="btn btn-danger">Clear</button>
                </div>
              </form>
            </tab-content>
            <tab-content title="Departments">
              <div>
                <p class="text-muted">Add Departments</p>

                <div class="input-group mb-3 mt-4">
                  <form
                    class="w-100"
                    @submit.prevent="submitDepartment(dept)"
                    action=" "
                  >
                    <label for=""> Select Location </label>
                    {{ dept.departmentsName }}

                    <v-select
                      v-model="dept.locationId"
                      label="locationName"
                      :options="locations"
                    ></v-select>
                    <div class="row row-cols-3 g-0 gy-2 my-3">
                      <div
                        class="col"
                        v-for="(dep, index) in moreDepartments"
                        :key="index"
                      >
                        <span class="badge rounded-pill bg-light text-dark">
                          {{ dep }}
                          <i
                            class="fa fa-times"
                            aria-hidden="true"
                            @click="removeDepartments(index)"
                          ></i
                        ></span>
                      </div>
                    </div>

                    <div class="d-flex my-3">
                      <div class="form-floating mb-3 w-100">
                        <input
                          type="text"
                          class="form-control"
                          id="DepartmentName"
                          placeholder="Enter Department Name"
                          v-model="moreDepartmentsName"
                        />
                        <label for="DepartmentName">Enter Department(s)</label>
                      </div>
                      <span class="input-group-text" @click="addDepartments"
                        ><i class="fa fa-plus" aria-hidden="true"></i
                      ></span>
                    </div>

                    <button type="submit" class="mt-2 btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </tab-content>
            <tab-content title="Add an Employee">
              <form @submit.prevent="submitEmployee()">
                <div class="row mt-4">
                  <p class="text-muted">Add Employees</p>
                  <div class="row">
                    <div class="col">
                      <div class="form-floating mb-3">
                        <input
                          type="text"
                          class="form-control"
                          id="companyName"
                          placeholder="Enter company name"
                          v-model="form.firstName"
                          required
                        />
                        <label for="floatingInput">First Name</label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-floating mb-3">
                        <input
                          type="text"
                          class="form-control"
                          id="companyWebsite"
                          placeholder="Enter company Description"
                          v-model="form.lastName"
                        />
                        <label for="companyWebsite">Last Name</label>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col">
                      <div class="form-floating mb-3">
                        <input
                          type="text"
                          class="form-control"
                          id="companyWebsite"
                          placeholder="User Name"
                          v-model="form.userName"
                          required
                        />
                        <label for="companyWebsite">User Name</label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-floating mb-3">
                        <input
                          type="email"
                          class="form-control"
                          id="companyWebsite"
                          placeholder="Email"
                          v-model="form.email"
                          required
                        />
                        <label for="companyWebsite">Email</label>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col">
                      <div class="form-floating mb-3">
                        <input
                          type="text"
                          class="form-control"
                          id="companyWebsite"
                          placeholder="User Name"
                          v-model="form.userName"
                          required
                        />
                        <label for="companyWebsite">Location</label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="form-floating mb-3">
                        <input
                          type="text"
                          class="form-control"
                          id="companyWebsite"
                          placeholder="Enter company Description"
                          v-model="form.phone"
                          required
                        />
                        <label for="companyWebsite">Phone</label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-floating mb-3">
                        <input
                          type="text"
                          class="form-control"
                          id="companyWebsite"
                          placeholder="Enter company Description"
                          v-model="form.designation"
                          required
                        />
                        <label for="companyWebsite">Staff</label>
                      </div>
                    </div>
                    <div class="col">
                      <label for=""> Select Location </label>

                      <v-select
                        v-model="dept.locationId"
                        label="locationName"
                        :options="locations"
                        @input="getDepartments"
                      ></v-select>
                    </div>

                    <div class="col">
                      <label for=""> Select Department </label>

                      <v-select
                        v-model="dept.departmentId"
                        :reduce="(option) => option.locationId"
                        label="departmentName"
                        :options="DepartmentNew"
                      ></v-select>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col">
                      <div class="form-floating mb-3">
                        <input
                          type="text"
                          class="form-control"
                          id="companyWebsite"
                          placeholder="Enter company Description"
                          v-model="form.password"
                        />
                        <label for="companyWebsite">Password</label>
                      </div>
                    </div>
                    
                  </div>
                </div>

                <div class="d-flex gap-4">
                  <!-- <Button title="Submit"></Button> -->
                  <button type="submit" class="btn btn-primary">Submit</button>
                  <button type="reset" class="btn btn-danger">Clear</button>
                </div>
              </form>
            </tab-content>
            <tab-content title="Finish">
              <div class="text-center">
                <h4>Summary</h4>
              </div>
            </tab-content>
          </form-wizard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//local registration
import Header from "../../components/header.vue";
import { FormWizard, TabContent } from "vue-step-wizard";
import "vue-step-wizard/dist/vue-step-wizard.css";

export default {
  //component code
  components: {
    FormWizard,
    TabContent,
    Header,
  },
  data() {
    return {
      form: {},
      dept: {},
      locationId: [],
      locations: [],
      businessLocation: [],
      departmentProfile: false,
      moreDepartments: [],
      DepartmentNew: [],
      moreDepartmentsName: "",
      departments: [],
      organisationId: "",
      projectManagers: [],
      projectManagersName: "",
      departmentsName: "",
      locationName: "",
      organisationLogo: null,
    };
  },

  methods: {
    async submitEmployee() {
      (this.form.organisationId = this.organisationId),
        (this.form.departmentId = this.dept.departmentId),
        (this.form.locationId = this.dept.locationId.locationId),
        console.log("this employee", this.form);
      const forSubmit = [];

      forSubmit.push(this.form);
      const { data } = await this.$axios.post(
        `/employees/createEmployees`,
        forSubmit
      );
      this.$router.push(`/organisation/dashboard`)
      console.log("employee info is ", data);
    },
    async submitDepartment(form) {
      const newForm = this.moreDepartments.map((e) => ({
        departmentName: e,
        organisationId: this.organisationId,
        locationId: form.locationId.locationId,
      }));

      const { data } = await this.$axios.post(
        `departments/createDepartment/`,
        newForm
      );
      console.log("response is", data);
      this.getDepartments();
    },
    async getDepartments(location) {
      console.log(location.locationId);
      const { data } = await this.$axios.get(
        `/departments/getDepartment/${this.organisationId}/${location.locationId}`
      );
      this.DepartmentNew = data;
      console.log("departmets ", data);
    },
    // handle submit
    onSubmit(form) {
      console.log("Form submitted!", form);
    },

    async submitOrganisation(form) {
      form["businessLocation"] = this.businessLocation;
      form["employeeId"] = "CRGBRZ9ZRADP35S";
      const { data } = await this.$axios.post(
        `/organisation/createOrganisation`,
        form
      );
      this.organisationId = data.id;
      this.getLocations();
      this.form = {};
      console.log("oragnisation is ", data);
    },
    async getLocations() {
      const { data } = await this.$axios.get(
        `/business/getBusinessLocation/${this.organisationId}`
      );
      this.locations = data;
      console.log("locastion are", data);
    },

    // get file
    onFileChange(e) {
      this.organisationLogo = e.target.files[0];
    },

    // add location
    addLocation() {
      this.businessLocation.push({ locationName: this.locationName });
      this.locationName = "";
    },
    addDepartments() {
      this.moreDepartments.push(`${this.moreDepartmentsName}`);
      this.moreDepartmentsName = "";
    },

    // remove location
    removeLocation(index) {
      this.businessLocation.splice(index, 1);
    },

    // add location
    addDepartment(form) {
      form.organisationId = this.organisationId;
      form.console.log(form);
      this.departments.push(this.departmentsName);
    },

    // remove department
    removeDepartment(index) {
      this.departments.splice(index, 1);
    },
    removeDepartments(index) {
      this.moreDepartments.splice(index, 1);
    },

    // add project manager
    addPm() {
      this.projectManagers.push(this.departmentsName);
    },

    // remove project manager
    removePm(index) {
      this.projectManagers.splice(index, 1);
    },
  },
};
</script>

<style lang="css" scoped>
.input-group-text {
  height: 3.55rem;
}

i {
  cursor: pointer;
}

.vue-step-wizard {
  width: 100% !important;
  background-color: transparent !important;
  padding: 0rem !important;
}

.step-body {
  -webkit-box-shadow: 0 3px 5px red !important;
  -moz-box-shadow: 0 3px 5px red !important;
  box-shadow: 0 3px 5px red !important;
}

.step-button-previous {
  background-color: red !important;
}

.step-button {
  color: red !important;
}

textarea {
  height: 10rem !important;
}
</style>
