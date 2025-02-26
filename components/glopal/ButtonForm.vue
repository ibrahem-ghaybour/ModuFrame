<template>
  <button
    type="submit"
    class="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
  >
    <span v-if="loading">
      <FontAwesomeIcon :icon="faSpinner" class="animate-spin" />
    </span>
    <span v-else> {{ text }} </span>
  </button>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
const authStore = useAuthStore();
const { loading } = storeToRefs(authStore);
const { text } = defineProps({
  text: {
    type: String,
    default: () => "",
  },
});
</script>

<style lang="scss" scoped></style>
