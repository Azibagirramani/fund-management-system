<template>
  <b-modal
    :id="id"
    ref="modal"
    :title="title"
    centered
    ok-only
    no-stacking
    ok-title="Save"
    @ok="$emit('ok', $event)"
    @show="$emit('show', $event)"
  >
    <slot></slot>
    <template #modal-footer="{ cancel }">
      <!-- Emulate built in modal footer ok and cancel button actions -->

      <div class="d-flex w-100 justify-content-between px-5">
        <div>
          <b-button
            size="sm"
            variant="danger"
            class="px-5 text-secondary mr-2"
            @click="cancel()"
          >
            Cancel
          </b-button>
        </div>
        <div>
          <b-button :variant="variant" @click="$emit('ok', $event)">
            <span v-if="loader">
              <b-spinner variant="light" label="Spinning"></b-spinner>
            </span>
            <span v-else>
              {{ submitTitle }}
            </span>
          </b-button>
        </div>
      </div>
      <!-- Button with custom close trigger value -->
    </template>
  </b-modal>
</template>

<script>
export default {

  props: {
    title: {
      type: String,
      default: "Title",
    },
    loader: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: "modal",
    },
    submitTitle: {
      type: String,
      default: "Save",
    },
    variant: {
      type: String,
      default: "primary",
    },
  },
};
</script>

<style lang="scss" scoped></style>
