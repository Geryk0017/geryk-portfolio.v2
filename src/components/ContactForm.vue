<script setup>
import SubmitButton from './Buttons/SubmitButton.vue'
import TextField from './TextField.vue'
</script>
<template>
  <div class="px-10 py-10 dark:text-white">
    <header>
      <h1 class="font-bold text-[30px]">Got an Web in Mind?</h1>
    </header>

    <form action="https://formspree.io/f/meepdzgg" method="POST">
      <main class="py-10">
        <div class="md:grid md:grid-cols-2 md:auto-rows-max space-y-5 md:space-y-0 gap-5">
          <!-- 1st Row -->
          <div>
            <TextField placeHolder="First Name" name="firstName" />
          </div>
          <div>
            <TextField placeHolder="Last Name" name="lastName" />
          </div>
          <!-- 2nd Row -->
          <div>
            <TextField placeHolder="Phone Number" name="phone" />
          </div>
          <div>
            <TextField placeHolder="Email Address" name="email" />
          </div>
          <!-- 3rd Row -->
          <div class="md:col-span-2">
            <TextField placeHolder="Subject" name="subject" />
          </div>
          <!-- 4th row -->
          <div class="md:col-span-2">
            <TextField
              placeHolder="How can I assist your needs..."
              name="message"
              height="h-32"
              :isTextarea="true"
            />
          </div>
        </div>
      </main>
      <footer>
        <SubmitButton name="Submit Inquiry" />
      </footer>
    </form>
  </div>
</template>
