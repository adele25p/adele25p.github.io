<template>
  <footer class="app-footer">
    <!-- Footer Information -->
    <div class="footer-info">
      <span>Adèle - Portfolio</span>
      <span>Designed and coded with passion and care using VueJS.</span>
      <span>© 2025 Ponge Adèle.</span>
    </div>
  </footer>
</template>

<style scoped>
* {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition:
    transform 0.3s,
    color 0.3s;
}

.app-footer {
  width: 100vw; /* Full width */
}

.footer-info {
  margin: 1rem;
  padding: 1rem;
  background-color: var(--color-background-soft);
  border-radius: 2rem;
}
</style>
