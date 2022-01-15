<template>
  <div>
    <BTable :items="items" show-empty>
      <template #emptyfiltered="scope">
        <h4>{{ scope.emptyFilteredText }}</h4>
      </template>
    </BTable>
  </div>
</template>

<script>
import { BTable } from "bootstrap-vue";
export default {
  components: {
    BTable,
  },
  data() {
    return {
      items: [],
    };
  },
};
</script>

<style></style>
