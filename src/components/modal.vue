<template>
  <b-modal ref="modal" :id="id" hide-footer :title="title" size="lg" centered >
    <slot></slot>
  </b-modal>
</template>

<script>
import { BModal } from "bootstrap-vue";
export default {
  components: {
    "b-modal": BModal,
  },
  props: {
    id: {
      type: String,
      required: true,
      default: "modal-center",
    },

    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "default",
    },
  },

  methods: {
    showModal() {
      this.$refs.modal.show();
    },
    hideModal() {
      this.$refs.modal.hide();
    },
  },
  watch: {
    show: function (value) {
      if (value) {
        this.showModal();
      } else {
        this.hideModal();
      }
    },
  },
  mounted() {
    this.hideModal();
  },
};
</script>

<style></style>
