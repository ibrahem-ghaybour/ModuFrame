<template>
  <div>
    <nav
      class="bg-[var(--primary-color)] fixed z-50 top-0 left-0 w-full border-t border-[#ffffff8b] rounded-t-[10px]"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Logo/Brand -->
          <div class="flex-shrink-0">
            <h1 class="text-white text-2xl font-bold">IBRA</h1>
          </div>

          <!-- Navigation Links -->
          <div class="hidden md:flex items-center space-x-8">
            <a
              href="#"
              class="text-white hover:text-[c] text-base font-medium transition-colors duration-200"
              >Services</a
            >
            <a
              href="#"
              class="text-white hover:text-[#BBFF00] text-base font-medium transition-colors duration-200"
              >Case Studies</a
            >
            <a
              href="#"
              class="text-white hover:text-[#BBFF00] text-base font-medium transition-colors duration-200"
              >Testimonials</a
            >
            <a
              href="#"
              class="text-white hover:text-[#BBFF00] text-base font-medium transition-colors duration-200"
              >FAQ</a
            >
          </div>

          <!-- Get Started Button -->
          <div>
            <a
              href="#"
              class="bg-[#BBFF00] hover:bg-[#a8e600] text-black px-6 py-3 rounded-full font-medium transition-colors duration-200"
            >
              Get Started
              <span class="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </nav>

    <div class="mx-auto w-[90%] pt-10">
      <slot />
    </div>
    <footer class="bg-black text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Top Section -->
        <div
          class="flex flex-col md:flex-row justify-between items-center mb-16"
        >
          <!-- Logo -->
          <h2 class="text-3xl font-bold mb-8 md:mb-0">IBRA</h2>

          <!-- Center Text -->
          <p class="text-xl text-center mb-8 md:mb-0">
            Build a powerful agency site<br />
            with Framer.
          </p>

          <!-- Navigation Links -->
          <div class="flex space-x-8">
            <a
              href="#"
              class="text-white transition-colors duration-200"
              >Services</a
            >
            <a
              href="#"
              class="text-white hover:text-[#BBFF00] transition-colors duration-200"
              >Case Studies</a
            >
            <a
              href="#"
              class="text-white hover:text-[#BBFF00] transition-colors duration-200"
              >Testimonials</a
            >
          </div>
        </div>

        <!-- Bottom Section -->
        <div
          class="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800"
        >
          <!-- Copyright -->
          <div class="mb-4 md:mb-0">
            <p>&copy; Mont Limited 2023. All rights reserved.</p>
          </div>

          <!-- Social Links -->
          <div class="flex space-x-4">
            <a
              href="#"
              class="p-2 rounded-full border border-white/20 hover:border-[#BBFF00] hover:text-[#BBFF00] transition-all duration-200"
            >
              <span class="sr-only">Facebook</span>
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              class="p-2 rounded-full border border-white/20 hover:border-[#BBFF00] hover:text-[#BBFF00] transition-all duration-200"
            >
              <span class="sr-only">LinkedIn</span>
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="p-2 rounded-full border border-white/20 hover:border-[#BBFF00] hover:text-[#BBFF00] transition-all duration-200"
            >
              <span class="sr-only">Twitter</span>
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                />
              </svg>
            </a>
          </div>

          <!-- Designed by -->
          <div class="flex items-center mt-4 md:mt-0">
            <span>Designed by</span>
            <span class="text-[#BBFF00] ml-2">Wize</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
nav{
  a{
    &hover{
      color:var(--primary-bg-button)
    }
  }
}
</style>
