<template>
  <div class="">
    <div class="card shadow border-0">
      <div class="card-header bg-transparent">
        <div class="d-flex justify-content-between">
          <button class="btn text-white">
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
    </div>
  </div>
</template>

<script>
import BaseTable from "@/components/table.vue";
export default {
  components: {
    BaseTable,
  },
};
</script>

<style></style>
