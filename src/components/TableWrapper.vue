<template>
  <div>
    <b-table
      striped
      show-empty
      hover
      :items="items"
      :fields="fields"
      @row-clicked="$emit('row-clicked', $event)"
    >
      <template #cell(tripleActions)="data">
        <slot name="tripleActions" :data="data">
          <span class=""> {{ data.value }} </span>
        </slot>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: false,
    },
    fields: {
      type: Array,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped></style>
