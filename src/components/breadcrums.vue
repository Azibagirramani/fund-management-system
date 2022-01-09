<template>
  <div>
    <div class="card shadow border-0 text-white" :class="exCLass">
      <div class="card-header border-white bg-transparent">
        {{ title }}
      </div>
      <div class="card-body py-0">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex flex-column">
            <p class="my-1 fw-bold">{{ total }}</p>
            <p class="fs--1">{{ percentage }}</p>
          </div>
          <i class="fs-1" :class="icon" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    total: {
      type: Number,
      default: 0,
    },
    percentage: {
      type: Number,
      default: 0,
    },
    icon: {
      type: String,
      default: "",
    },
    exCLass: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="css" scoped>
.fs--1 {
  font-size: 0.7rem !important;
}

.card {
  border-radius: 0.5rem;
}

.bg-first {
  background-color: #f7852a !important;
}

.bg-second {
  background-color: #33b4d3 !important;
}

.bg-third {
  background-color: #55bd78 !important;
}

.bg-fourth {
  background-color: #e74447 !important;
}

.bg-fifth {
  background-color: #083b4c !important;
}
</style>
