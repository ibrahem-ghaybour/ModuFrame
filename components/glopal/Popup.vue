<template>
  <div
    v-if="show"
    @click="show = false"
    class="fixed top-0 left-0 w-full h-full p-5 z-50 bg-black/50 flex items-center justify-center"
  >
    <div class="bg-white rounded-xl p-8 relative" @click.stop>
      <div class=" absolute top-2 right-2 flex items-center justify-center space-x-4">
        <button
          @click="show = false"
          class="p-2 flex items-center justify-center w-8 h-8"
        >
          <FontAwesomeIcon  :icon="faXmark" class="text-black" />
        </button>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const show = defineModel("show");
</script>

<style lang="scss" scoped>
/* Add custom styles here if needed */
</style>
