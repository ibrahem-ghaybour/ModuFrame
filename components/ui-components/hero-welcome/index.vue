<template>
  <div class="min-h-screen bg-[url('/images/bg-loginandsignup.png')] bg-cover bg-center text-white px-6 pt-40 pb-32">
    <div class="max-w-7xl mx-auto">
      <div
        class="inline-block bg-white/10 px-4 py-2 rounded-full text-sm text-[#C1FF00] mb-8"
      >
        front end developer
      </div>
      <h1
        class="animate-gradient text-[clamp(40px,8vw,80px)] uppercase font-bold leading-tight tracking-tight mb-6"
      >
        Building a strong agency<br />
        Site with frame
      </h1>

      <p class="text-xl text-gray-400 mb-10 max-w-xl">
          We are committed to pushing the boundaries of what's possible.
      </p>

      <div class="flex gap-4 mb-12">
        <button
          class="flex items-center gap-2 px-8 py-4 rounded-full bg-[#C1FF00] text-black font-medium transition-all hover:bg-[#d4ff40]"
        >
          getStarted
          <span>→</span>
        </button>
        <button
          class="px-8 py-4 rounded-full bg-transparent text-white font-medium border border-white/20 transition-all hover:bg-white/10"
        >
          watchVideo
        </button>
        <!-- <button
            @click="toggleLanguage"
            class="px-8 py-4 rounded-full bg-transparent text-white font-medium border border-white/20 transition-all hover:bg-white/10"
          >
            {{
              currentLocale === "en"
                ? $t("switchToArabic")
                : $t("switchToEnglish")
            }}
          </button> -->
      </div>

      <div class="flex items-center gap-4">
        <div class="flex items-center">
          <!-- <img
            v-for="i in 4"
            :key="i"
            :src="`/avatar-${i}.jpg`"
            :style="{ marginLeft: i > 1 ? '-8px' : '0' }"
            alt="Client avatar"
            class="w-8 h-8 rounded-full border-2 object-cover border-black"
          /> -->
        </div>
        <span class="text-gray-400 text-sm">200+ happy clients</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@keyframes animation {
  from {
    background-position: 0%;
  }
  to {
    background-position: -200%;
  }
}

.animate-gradient {
  background-repeat: repeat;
  background-size: 200% auto;
  animation: animation 15s linear infinite;
}
</style>
<!--   
  <i18n locale="en"></i18n>   -->
