<template>
  <div>
    <nav class="bg-[#211a27dc] fixed z-50 top-0 left-0 w-full">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo/Brand -->
          <div class="flex-shrink-0">
            <h1 class="text-white font-bold">Logo</h1>
          </div>

          <!-- Navigation Links -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-center space-x-4">
              <a
                href="#"
                class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Home</a
              >
              <a
                href="#"
                class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >About</a
              >
              <a
                href="#"
                class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Services</a
              >
              <a
                href="#"
                class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Contact</a
              >
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class=" bg-black">
      <slot />
    </div>
    <footer class="bg-[#211A27] text-gray-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div>
            <h3 class="text-white text-lg font-bold mb-4">Company</h3>
            <p class="text-sm">
              Your company description goes here. Make it brief but meaningful.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-sm hover:text-white">About Us</a></li>
              <li><a href="#" class="text-sm hover:text-white">Services</a></li>
              <li><a href="#" class="text-sm hover:text-white">Contact</a></li>
              <li><a href="#" class="text-sm hover:text-white">Blog</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul class="space-y-2 text-sm">
              <li>123 Street Name</li>
              <li>City, Country</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@example.com</li>
            </ul>
          </div>

          <!-- Social Links -->
          <div>
            <h3 class="text-white text-lg font-bold mb-4">Follow Us</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-300 hover:text-white">
                <span class="sr-only">Facebook</span>
                <!-- Add social icons here -->
              </a>
              <!-- Add more social links as needed -->
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
