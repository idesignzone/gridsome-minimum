<template>
  <div id="app">

      <transition name="fade" appear>
        <main>
            <slot></slot>
        </main>
      </transition>

  </div>
</template>

<script>
  export default {
    name: "Default"
  }
</script>
