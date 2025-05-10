<template>
  <div class="item">
    <!-- Icon slot for displaying an icon -->
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <!-- Heading slot for displaying a title -->
      <h3>
        <slot name="heading"></slot>
      </h3>
      <!-- Default slot for additional content -->
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  /* Styling for the container of each item */
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  /* Styling for the details section */
  flex: 1;
  margin-left: 1rem;
}

i {
  /* Styling for the icon container */
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

h3 {
  /* Styling for the heading */
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    /* Adjustments for larger screens */
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    /* Styling for the icon on larger screens */
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    /* Vertical line before the item */
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    /* Vertical line after the item */
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    /* Remove line before the first item */
    display: none;
  }

  .item:last-of-type:after {
    /* Remove line after the last item */
    display: none;
  }
}
</style>
