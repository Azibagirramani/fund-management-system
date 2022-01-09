<template>
  <div class="card" @click="$emit('card-index', currentIndex)">
    <div class="card-body text-center" :class="baseEx">
      <i class="fs-1" :class="icon" aria-hidden="true"></i>
      <input
        class="form-check-input checked"
        type="checkbox"
        :checked="checkBox"
        v-if="checkBox"
      />
      <input
        class="form-check-input checked"
        type="checkbox"
        :checked="checkBox"
        v-else
      />
      <h6 class="mt-2">{{ title }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentIndex: {
      type: Number,
      default: null,
    },
    baseEx: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      required: true,
      default: "title",
    },
    checkBox: {
      type: Boolean,
      required: false,
      default: false,
    },
    icon: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="css">
.card--selected {
  outline: 2px solid green;
}

.card {
  position: relative;
  border-radius: 0;
}

.card:hover {
  outline: 2px solid green;
  cursor: pointer;
}
.checked {
  position: absolute;
  left: 9.5rem;
  top: 0.8rem;
}
</style>
