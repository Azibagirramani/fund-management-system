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
        <div class="d-flex justify-content-between">
          <div class="d-flex justify-content-end gap-4">
            <select class="form-control w-25">
              <option>filter</option>
              <option>Departments</option>
              <option>Location</option>
            </select>
            <input class="form-control w-75" placeholder="search..." />
          </div>
        </div>
      </div>
    </div>
    <div class="card rounded shadow mt-4 bg-light">
      <TableWrapper
        :items="
          AllEmployees.map((employee) => ({ tripleActions: '', ...employee }))
        "
        :fields="fields"
        @row-clicked="gotoEmployee"
      >
        <template #tripleActions="{ data }">
          <b-dropdown
            size="lg"
            dropleft
            variant="link"
            toggle-class="text-decoration-none"
            no-caret
          >
            <template #button-content>
              <b-icon icon="three-dots-vertical"></b-icon>
            </template>

            <b-dropdown-item @click="makeManager(data.item, 'supervisor')"
              >Upgrade to Supervisor</b-dropdown-item
            >
            <b-dropdown-item @click="makeManager(data.item, 'manager')"
              >Upgrade to Manager
            </b-dropdown-item>
          </b-dropdown>
        </template>
      </TableWrapper>
    </div>
    <BaseModal id="addEmployee" ref="showModal" :title="'Add Employee'">
      <form @submit.prevent="submitEmployee">
        <div class="mb-3 form-group">
          <p>Organisation Information</p>
          <div class="row">
            <div class="col">
              <label class="form-label" for="org"> Organisation</label>
              <input
                class="form-control"
                v-model="org.organisationName"
                disabled
                type="text"
              />
            </div>
            <div class="col">
              <label class="form-label">Designation</label>
              <input
                v-model="addEmployee.designation"
                type="text"
                class="form-control"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label class="form-label" for=""> Location</label>
              <v-select
                v-model="addEmployee.locationId"
                placeholder="Input Location"
                label="locationName"
                :reduce="(option) => option.locationId"
                :options="orgLocations"
                @input="getDepartment"
              ></v-select>
            </div>
            <div class="col">
              <label class="form-label" for=""> Department</label>
              <v-select
                v-model="addEmployee.departmentId"
                placeholder="Input Location first"
                label="departmentName"
                :reduce="(e) => e.departmentId"
                :options="orgDepartments"
              ></v-select>
            </div>
          </div>
        </div>

        <p>Basic Information</p>
        <div class="row">
          <div class="col">
            <div>
              <label class="form-label">First Name</label>
              <input
                v-model="addEmployee.firstName"
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
                v-model="addEmployee.lastName"
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
                v-model="addEmployee.email"
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
                v-model="addEmployee.phone"
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
                v-model="addEmployee.userName"
                type="text"
                class="form-control form-control-sm"
                required
              />
            </div>
          </div>
          <div class="col">
            <div>
              <label class="form-label">Password</label>
              <input
                v-model="addEmployee.password"
                type="password"
                class="form-control form-control-sm"
                required
              />
            </div>
          </div>
        </div>

        <div class="text-end mt-2">
          <button class="btn btn-primary">Submit</button>
        </div>
      </form>
    </BaseModal>
  </div>
</template>

<script>
import BaseModal from "@/components/modal.vue";
// import ModalWrapper from "@/components/ModalWrapper";
export default {
  components: {
    BaseModal,
  },
  data() {
    return {
      AllEmployees: [],
      fields: [
        {
          key: "firstName",
          sortable: true,
        },
        {
          key: "lastName",
          sortable: true,
        },
        {
          key: "email",
          sortable: false,
        },
        {
          key: "departmentName",
          sortable: true,
          // Variant applies to the whole column, including the header and footer
          // variant: "danger",
        },

        {
          key: "userName",
          sortable: false,
        },
        {
          key: "tripleActions",
          label:'',
          sortable: false,
        },
      ],
      addEmployee: {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        phone: "",
        departmentId: "",
        designation: "",
        organisationId: "",
        password: "",
        locationId: "",
      },
      orgLocations: [],
      orgDepartments: [],
      location: "",
      department: "",
    };
  },
  mounted() {
    this.getOrgLocations();
    this.getOrgEmployees();
  },
  computed: {
    org() {
      return this.$store.state.organisation.org;
    },
  },
  methods: {
    async makeManager(item, role) {
      console.log();
      try {
        this.$axios.post(`/employees/createProjectManager`, {
          employeeId: item.employeeId,
          organisationId: this.org.organisationId,
          projectManager:
            role === "manager" ? item.firstName + item.lastName : "",
          projectManagerSupervisor:
            role === "supervisor" ? item.firstName + item.lastName : "",
          type:
            role === "supervisor"
              ? "projectManagerSupervisor"
              : "projectManager",
        });
      } catch (error) {
        console.error(error);
      }

      console.log(item, role);
    },
    gotoEmployee(employee) {
      console.log(employee);
    },
    async submitEmployee() {
      this.addEmployee.organisationId = this.org.organisationId;

      await this.$axios.post(`/employees/createEmployees`, [this.addEmployee]);
      this.getOrgEmployees();

      this.$bvModal.hide("addEmployee");
      this.getOrgEmployees();
    },
    async getOrgEmployees() {
      try {
        const { data } = await this.$axios.get(
          `employees/getAllEmployeesByOrganisation/${this.org.organisationId}`
        );
        this.AllEmployees = data;
        console.log("employees", data);
      } catch (error) {
        console.error(error);
      }
    },
    async getEmployee() {
      try {
        const { data } = await this.$axios.get(
          `/getEmployeesByDepartmentId/${this.department}/${this.location}`
        );
        console.log("employee", data);
      } catch (error) {
        console.error(error);
      }
    },
    async getDepartment() {
      try {
        const { data } = await this.$axios.get(
          `/departments/getDepartment/${this.org.organisationId}/${this.addEmployee.locationId}`
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
      this.$bvModal.show("addEmployee");
    },
  },
};
</script>

<style>
.dropdown-toggle::after {
  display: none;
}
</style>
