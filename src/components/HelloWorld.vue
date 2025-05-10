<script setup>
// Define props for the HelloWorld component
// 'msg' is a required string prop
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings">
    <!-- Display the message passed as a prop -->
    <h1 class="green">{{ msg }}</h1>
    <h3>
      <!-- Informational text with links to Vite and Vue documentation -->
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
/* Styling for the main heading */
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

/* Styling for the subheading */
h3 {
  font-size: 1.2rem;
}

/* Center align text for smaller screens */
.greetings h1,
.greetings h3 {
  text-align: center;
}

/* Left align text for larger screens */
@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
