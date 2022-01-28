<template>
  <div class="">
    <div class="card shadow border-0">
      <div class="card-header bg-transparent">
        <div class="d-flex justify-content-between">
          <button class="btn text-white" @click="showForm">
            New Request <i class="fa fa-plus"></i>
          </button>
          <div class="d-flex justify-content-end gap-4">
            <select class="form-control w-25">
              <option>All status</option>
            </select>
            <input class="form-control w-75" placeholder="search..." />
          </div>
        </div>
      </div>
      <div class="card-body">
        <BaseTable />
      </div>
      <b-button @click="runit">click me</b-button>
    </div>

    <BaseModal ref="showModal" :title="'Fund request'">
      <form>
        <p>Basic Information</p>
        <div class="row">
          <div class="col">
            <div>
              <label class="form-label">Requester name</label>
              <input type="text" class="form-control form-control-sm" />
            </div>
          </div>
          <div class="col">
            <div>
              <label class="form-label">Designation</label>
              <input type="text" class="form-control form-control-sm" />
            </div>
          </div>
          <div class="col">
            <label class="form-label">Date</label>

            <input type="date" class="form-control form-control-sm" />
          </div>
        </div>

        <p class="mt-4">Fund Information</p>
        <div class="row">
          <div class="col">
            <div>
              <label class="form-label">Project Name</label>
              <select class="form-control form-control-sm">
                <option selected>Project 1</option>
                <option>Project 2</option>
              </select>
            </div>
          </div>
          <div class="col">
            <div>
              <label class="form-label">Project milestones</label>
              <input type="number" class="form-control form-control-sm" />
            </div>
          </div>
          <div class="col">
            <div>
              <label class="form-label">Supervisor</label>
              <select class="form-control form-control-sm">
                <option selected>Supervisor</option>
                <option>Supervisor 2</option>
              </select>
            </div>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-md-5">
            <label class="form-label">Amount</label>
            <div class="input-group mb-3">
              <span class="input-group-text">NGN</span>
              <input
                type="text"
                class="form-control"
                aria-label="Amount (to the nearest dollar)"
              />
            </div>
          </div>
        </div>

        <div class="my-3">
          <label class="form-label">Purpose</label>
          <textarea class="form-control" rows="3"></textarea>
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
import BaseTable from "@/components/table.vue";
export default {
  components: {
    BaseTable,
    BaseModal,
  },

  methods: {
    runit() {
      this.$store.commit("organisation/increment");
      console.log(this.$store.state.organisation.count, this.$store);
    },
    showForm() {
      this.$refs.showModal.showModal();
    },
  },
};
</script>

<style></style>
