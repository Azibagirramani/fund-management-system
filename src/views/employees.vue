<template>
  <div class="">
    <div class="d-flex justify-content-between px-2 mb-2">
      <h3>Employee</h3>
      <button class="btn text-white" @click="showForm">
        Add Employee <i class="fa fa-plus"></i>
      </button>
    </div>

    <div class="card border-0 p-4">
      <div class="card-header bg-transparent">
        <div class="">
          <label for=""> Location</label>
          <v-select
            v-model="location"
            placeholder="Input Location"
            label="locationName"
            :reduce="(option) => option.locationId"
            :options="orgLocations"
            @input="getDepartment"
          ></v-select>
          <label for=""> Department</label>
          <v-select
            v-model="department"
            placeholder="Input Location first"
            label="departmentName"
            :reduce="(e) => e.departmentId"
            :options="orgDepartments"
            @input="getEmployee"
          ></v-select>
        </div>
        <div class="d-flex justify-content-between">
          <div class="d-flex justify-content-end gap-4">
            <select class="form-control w-25">
              <option>All status</option>
            </select>
            <input class="form-control w-75" placeholder="search..." />
          </div>
        </div>
      </div>
    </div>
    <div class="card shadow mt-4 bg-light">
      <BaseTable />
    </div>
    <BaseModal ref="showModal" :title="'Add Employee'">
      <form>
        <p>Basic Information</p>
        <div class="row">
          <div class="col">
            <div>
              <label class="form-label">First Name</label>
              <input
                type="text"
                class="form-control form-control-sm"
                required
              />
            </div>
          </div>
          <div class="col">
            <div>
              <label class="form-label">Last Name</label>
              <input
                type="text"
                class="form-control form-control-sm"
                required
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div>
              <label class="form-label">Email</label>
              <input
                type="email"
                class="form-control form-control-sm"
                required
              />
            </div>
          </div>
          <div class="col">
            <div>
              <label class="form-label">Phone</label>
              <input
                type="phone"
                class="form-control form-control-sm"
                required
              />
            </div>
          </div>
        </div>
        <p class="mt-4">Others</p>
        <div class="row">
          <div class="col">
            <div>
              <label class="form-label">User Name</label>
              <input
                type="text"
                class="form-control form-control-sm"
                required
              />
            </div>
          </div>
          <div class="col">
            <div>
              <label class="form-label">Designation</label>
              <input
                type="phone"
                class="form-control form-control-sm"
                required
              />
            </div>
          </div>
          <div class="col">
            <div>
              <label class="form-label">Passord</label>
              <input
                type="password"
                class="form-control form-control-sm"
                required
              />
            </div>
          </div>
        </div>

        <div class="text-end">
          <button class="btn btn-primary">Submit</button>
        </div>
      </form>
    </BaseModal>
  </div>
</template>

<script>
import BaseModal from "@/components/modal.vue";
// import ModalWrapper from "@/components/ModalWrapper";

import BaseTable from "@/components/table.vue";
export default {
  components: {
    BaseTable,

    BaseModal,
  },
  data() {
    return {
      orgLocations: [],
      orgDepartments: [],
      location: "",
      department: "",
    };
  },
  mounted() {
    this.getOrgLocations();
  },
  computed: {
    org() {
      return this.$store.state.organisation.org;
    },
  },
  methods: {
    async getEmployee(){
      try {
        const {data} = await this.$axios.get(`/getEmployeesByDepartmentId/${this.department}/${this.location}`)
        console.log('employee',data)
      } catch (error) {
        console.error(error)
        
      }
      
    },
    async getDepartment() {
      try {
        const { data } = await this.$axios.get(
          `/departments/getDepartment/${this.org.organisationId}/${this.location}`
        );
        this.orgDepartments = data;
      } catch (error) {
        console.error(error);
      }
    },
    async getOrgLocations() {
      try {
        const { data } = await this.$axios.get(
          `/business/getBusinessLocation/${this.org.organisationId}`
        );
        console.log("loactions", data);
        this.orgLocations = data;
      } catch (error) {
        console.error(error);
      }
    },
    showForm() {
      this.$refs.showModal.showModal();
    },
  },
};
</script>

<style></style>
