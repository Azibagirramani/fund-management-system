<template>
  <div>
    <div class="d-flex justify-content-end">
      <div>
        <b-button variant="outline-primary" v-b-modal.addDepartment>
          <span class="iconify" data-icon="ant-design:plus-outlined"></span> Add
          Department
        </b-button>
      </div>
    </div>
    <div
      class="card class-details-card dark-bg-card mb-3"
      style="background-color: #0f5252"
    >
      <div class="card-body">
        <div class="d-flex align-content-center">
          <div class="flex-grow-1">
            <div
              class="d-flex align-items-center justify-content-between flex-wrap mb-3"
            >
              <div class="class-name mr-1">
                {{ organisation.organisationName }}
              </div>
            </div>
            <hr class="my-0" />
            <div class="mt-3">
              <div class="row">
                <div class="col-xl-4 col-lg-6 mb-2">
                  <span class="class-details-data_label">Email: </span>
                  <span class="class-details-data_value">{{
                    organisation.organisationEmail
                  }}</span>
                </div>
                <div class="col-xl-4 col-lg-6 mb-2">
                  <span class="class-details-data_label">Name: </span>
                  <span class="class-details-data_value">{{
                    organisation.organisationName
                  }}</span>
                </div>
                <div class="col-xl-4 col-lg-6 mb-2">
                  <span class="class-details-data_label">Description: </span>
                  <span class="class-details-data_value">{{
                    organisation.organisationDescription
                  }}</span>
                </div>
                <div class="col-xl-4 col-lg-6 mb-2">
                  <span class="class-details-data_label">Address: </span>
                  <span class="class-details-data_value">{{
                    organisation.organisationAddress
                  }}</span>
                </div>
                <div class="col-xl-4 col-lg-6 mb-2">
                  <span class="class-details-data_label">Type: </span>
                  <span class="class-details-data_value">{{
                    organisation.businessType
                  }}</span>
                </div>
                <div class="col-xl-4 col-lg-6 mb-2">
                  <span class="class-details-data_label">Capacity: </span>
                  <span class="class-details-data_value"
                    ><span class="badge blue-badge bg-grayish-blue">{{
                      organisation.staffCapacity
                    }}</span></span
                  >
                </div>
                <div class="col-xl-4 col-lg-6 mb-2">
                  <span class="class-details-data_label">Locations: </span>
                  <span
                    v-for="(location, index) in organisation.locations"
                    :key="index"
                    class="class-details-data_value"
                    >{{ location.locationName }}
                    <span
                      v-if="organisation.locations.length - (index + 1) != 0"
                    >
                      ,
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="ml-4">
            <img
              src="data:image/png;base64,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"
              class="card-flexed-img"
            />
          </div>
        </div>
      </div>
    </div>
    <div>
      <h2>Departments</h2>
    </div>
    <ModalWrapper
      id="addDepartment"
      title="Add Department"
      submit-title="Add Department"
      :loader="loader"
      variant="primary"
      @ok="handleSubmit()"
    >
      <form class="pt-3">
        <div class="form-group">
          <label for=""> Name</label>

          <input
            v-model="department.name"
            type="text"
            class="form-control form-control-lg"
            id="exampleInputEmail1"
            placeholder="Department Name"
          />
        </div>

        <div class="form-group">
          <label for=""> Location</label>
          <div class="bg-light">
            <v-select
              :options="organisation.locations"
              :reduce="(option) => option.locationId"
              label="locationName"
            ></v-select>
          </div>
        </div>
        <div class="form-group">
          <label for=""> Orgnaisation</label>
          <input
            v-model="department.organisation"
            type="text"
            class="form-control form-control-lg"
            id="exampleInputPassword1"
            placeholder="Organisation"
          />
        </div>
      </form>
    </ModalWrapper>
  </div>
</template>

<script>
import ModalWrapper from "@/components/ModalWrapper";

export default {
  components: { ModalWrapper },

  data() {
    return {
      loader: false,
      organisation: {},
      department: {
        name: "",
        location: "",
        organisation: this.$route.params.slug,
      },
    };
  },
  methods: {
    async handleSubmit() {
      alert("yo");
    },
  },
  async mounted() {
    const { data } = await this.$axios.get(
      `https://fms-backend-v1.herokuapp.com/api/v1/organisation/displayOrganisation/${this.$route.params.slug}`
    );
    const location = await this.$axios.get(
      `https://fms-backend-v1.herokuapp.com/api/v1/business/getBusinessLocation/${this.$route.params.slug}`
    );
    this.organisation = data;
    this.organisation.locations = location.data;
    console.log("organisation is ", data, location.data);
  },
};
</script>

<style scoped>
.badge {
  font-size: 13px;
  padding: 0.25rem 0.5rem;
  line-height: 100%;
  text-align: center;
  border: 1px solid #000;
  border-radius: 4px;
}

.badge.blue-badge {
  color: #1070b7;
  border-color: #1070b7;
}
</style>
