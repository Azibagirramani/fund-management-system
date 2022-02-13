<template>
  <div>
    <h3>Project Creation</h3>
    <form class="form-group" @submit.prevent="handleSubmit">
      <h4>Basic Information</h4>
      <div class="card p-2 mb-2">
        <div class="row">
          <div class="col">
            <label class="form-label">Project Name</label>
            <input
              v-model="project.projectName"
              type="text"
              class="form-control form-control-sm"
              required
            />
          </div>
          <div class="col">
            <div>
              <label class="form-label">Project cost(NGN)</label>
              <input
                v-model="project.projectCost"
                type="number"
                class="form-control form-control-sm"
                required
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div>
              <label class="form-label">Supervisor</label>
              <v-select
                v-model="project.projectSupervisorId"
                :options="supervisors"
                required
                :reduce="(option) => option.projectSupervisorId"
                label="projectManagerSupervisor"
              ></v-select>
            </div>
          </div>
          <div class="col">
            <div>
              <label class="form-label">Manager</label>
              <v-select
                v-model="project.projectManagerId"
                :options="managers"
                required
                :reduce="(option) => option.projectManagerId"
                label="projectManager"
              ></v-select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div>
              <label class="form-label">Organisation</label>
              <input
                v-model="org.organisationName"
                type="text"
                disabled
                class="form-control form-control-sm"
                required
              />
            </div>
          </div>
          <div class="col">
            <div>
              <label class="form-label">Location</label>
              <v-select
                v-model="project.locationId"
                :options="locations"
                required
                :reduce="(option) => option.locationId"
                label="locationName"
              ></v-select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="form-label">Start Date</label>
            <input
              v-model="project.startDate"
              type="date"
              class="form-control form-control-sm"
              required
            />
          </div>
          <div class="col">
            <label class="form-label">End Date</label>
            <input
              v-model="project.endDate"
              type="date"
              class="form-control form-control-sm"
              required
            />
          </div>
        </div>
        <div class="my-3">
          <label class="form-label">Description</label>
          <textarea
            v-model="project.projectDescription"
            class="form-control"
            rows="3"
            required
          ></textarea>
        </div>
      </div>
      <b-button v-b-toggle.collapse-1 variant="primary"
        >Add Project Details
      </b-button>
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <div class="row">
            <div
              class="col mx-4 d-flex flex column justify-content-center align-items-center"
              :style="{
                border: '2px dashed #9826AB',
                minHeight: '3rem',
                cursor: 'pointer',
              }"
            >
              <div class="text-center text-primary" @click="attachImage">
                <span :style="{ fontSize: '2rem' }">
                  <Icon icon="bi:image" />
                </span>
                <br />
                <b-spinner
                  v-if="imageSpinner"
                  variant="success"
                  type="grow"
                  label="Spinning"
                ></b-spinner>
                <span v-else>{{ attachImg }} </span>
              </div>
            </div>
            <div
              class="col mx-4 d-flex flex column justify-content-center align-items-center"
              :style="{
                border: '2px dashed #9826AB',
                minHeight: '3rem',
                cursor: 'pointer',
              }"
            >
              <div class="text-center text-primary" @click="attachImage2">
                <span :style="{ fontSize: '2rem' }">
                  <Icon icon="ant-design:file-text-outlined" />
                </span>
                <br />
                <b-spinner
                  v-if="attachmentSpinner"
                  variant="success"
                  type="grow"
                  label="Spinning"
                ></b-spinner>
                <span v-else>{{ attachFile }} </span>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="details"> Details</label>
            <textarea
              v-model="project.projectDetails.details"
              name=""
              id=""
              placeholder="a step-by-step introduction to setting up the Spring context using Java-based configuration and the basic Maven pom for the project,"
              class="form-control"
              cols="10"
              rows="3"
            ></textarea>
          </div>
          <div
            v-for="(requirement, index) in project.projectRequirements"
            :key="index"
          >
            <label class="form-label">Requirements</label>
            <input
              v-model="requirement.requirements"
              type="text"
              placeholder="Move company's equipment to site"
              class="form-control form-control-sm"
              required
            />
            <span
              class="text-danger"
              @click="project.projectRequirements.splice(index, 1)"
            >
              <Icon icon="fluent:delete-28-regular" />
            </span>
          </div>
          <b-button
            class="my-2"
            @click="project.projectRequirements.push({ requirements: '' })"
          >
            Add Requirements
          </b-button>

          <div>
            <h3>MileStones</h3>
            <div
              v-for="(milestone, mileStoneIndex) in project.projectMileStones"
              :key="mileStoneIndex"
              class="border rounded mb-2 p-2"
            >
              <label for="mileStone"> level </label>
              <input
                v-model="milestone.level"
                type="number"
                placeholder="level 20"
                class="form-control"
              />
              <label for=""> Milestone description</label>
              <input
                v-model="milestone.milestone"
                type="text"
                placeholder="Submit quoation"
                class="form-control"
              />
              <span
                class="mt-2 text-danger"
                @click="project.projectMileStones.splice(mileStoneIndex, 1)"
              >
                <Icon icon="fluent:delete-28-regular" />
              </span>
            </div>

            <b-button
              class="mt-2"
              @click="
                project.projectMileStones.push({
                  level: '',
                  mileStone: '',
                })
              "
            >
              Add MileStone</b-button
            >
          </div>
        </b-card>
      </b-collapse>

      <div class="text-end mt-2">
        <button class="btn btn-primary">Submit</button>
      </div>
      <input
        type="file"
        ref="fileInput1"
        class="invisible"
        @change="onChange"
      />
      <input
        type="file"
        ref="fileInput2"
        class="invisible"
        @change="onChange2"
      />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locations: [],
      attachmentSpinner: false,
      imageSpinner: false,
      managers: [],
      attachImg: "Attach Image(optional)",
      attachFile: "Attach File (optional)",
      supervisors: [],
      project: {
        projectName: "",
        projectDescription: "",
        projectManagerId: "",
        projectSupervisorId: "",
        startDate: "",
        endDate: "",
        projectCost: "",
        organisationId: "",
        locationId: "",
        projectDetails: {
          details: "",
          imageUrl: "",
          attachmentsUrl: "",
        },
        projectRequirements: [
          {
            requirements: "",
          },
        ],
        projectMileStones: [
          {
            level: "",
            mileStone: "",
          },
        ],
      },
    };
  },
  computed: {
    org() {
      return this.$store.state.organisation.org;
    },
  },
  mounted() {
    this.getLocations();
    this.getManagers();
    this.getSupervisors();
  },
  methods: {
    async getManagers() {
      try {
        const { data } = await this.$axios.get(
          `/employees/getProjectManager/${this.org.organisationId}`
        );
        this.managers = data;
        console.log("response mangers", data);
      } catch (error) {
        console.error(error);
      }
    },
    async getSupervisors() {
      try {
        const { data } = await this.$axios.get(
          `/employees/getProjectManagerSupervisor/${this.org.organisationId}`
        );
        this.supervisors = data;
        console.log("supervisors", data);
      } catch (error) {
        console.error(error);
      }
    },
    async getLocations() {
      const { data } = await this.$axios.get(
        `/business/getBusinessLocation/${this.org.organisationId}`
      );
      this.locations = data;
      console.log("locastion are", data);
    },
    attachImage() {
      if (this.$refs.fileInput1) {
        this.$refs.fileInput1.click();
      }
    },
    attachImage2() {
      if (this.$refs.fileInput2) {
        this.$refs.fileInput2.click();
      }
    },
    async onChange(e) {
      this.imageSpinner = true;
      const file = e.target.files[0];
      const fd = new FormData();

      fd.append("file", file);
      fd.append("type", "projects");
      try {
        const { data } = await this.$axios.post(
          `/organisation/imageUpload/`,
          fd
        );
        console.log("img is", data);
        this.project.projectDetails.imageUrl = data.imageUrl;
        console.log("img", data);
        this.attachImg = file.name;
      } catch (error) {
        console.error(error);
      } finally {
        this.imageSpinner = false;
      }
    },
    async onChange2(e) {
      this.attachmentSpinner = true;
      const file = e.target.files[0];
      console.log(file);
      const fd = new FormData();

      fd.append("file", file);
      fd.append("type", "projects");
      try {
        const { data } = await this.$axios.post(
          `/organisation/imageUpload/`,
          fd
        );
        this.project.projectDetails.attachmentsUrl = data.imageUrl;
        this.attachFile = file.name;
      } catch (error) {
        console.error(error);
      } finally {
        this.attachmentSpinner = false;
      }
    },
    async handleSubmit() {
      this.project.organisationId = this.org.organisationId;
      try {
        await this.$axios.post(`/project/createProject`, this.project);
        this.$router.push(`/dashboard/projects`);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
