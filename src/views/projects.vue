<template>
  <div class="">
    <div class="card shadow border-0">
      <div class="card-header bg-transparent">
        <div class="d-flex justify-content-between">
          <button class="btn text-white" @click="showForm">
            Add project <i class="fa fa-plus"></i>
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
    </div>
    <BaseModal ref="showModal" :title="'Add Project'">
      <form>
        <p>Basic Information</p>
        <div class="row">
          <div class="col">
            <div>
              <label class="form-label">Project Manager Name</label>
              <input
                type="text"
                class="form-control form-control-sm"
                required
              />
            </div>
          </div>
          <div class="col">
            <div>
              <label class="form-label">Supervisor</label>
              <input
                type="text"
                class="form-control form-control-sm"
                required
              />
            </div>
          </div>
          <div class="col">
            <label class="form-label">Date</label>
            <input type="date" class="form-control form-control-sm" required />
          </div>
        </div>
        <div class="my-3">
          <label class="form-label">Purpose</label>
          <textarea class="form-control" rows="3" required></textarea>
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
    showForm() {
      this.$refs.showModal.showModal();
    },
  },
};
</script>

<style></style>
