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
    <BaseModal id="addProject" ref="showModal" :title="'Add Project'">
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
      this.$router.push("projects/add");
      //   this.$bvModal.show("addProject");
    },
  },
};
</script>

<style></style>
