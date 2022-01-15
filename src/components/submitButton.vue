<template>
  <div>
    <button class="btn" :class="variant" @click="$emit('submit')" type="submit">
      <span v-if="loader">
        <b-spinner variant="light" label="Spinning"></b-spinner>
      </span>
      <span v-else> {{ title }} </span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "btn-primary",
    },
    loader: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "Submit",
    },
  },
};
</script>

<style lang="scss" scoped></style>
