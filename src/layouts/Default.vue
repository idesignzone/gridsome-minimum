<template>
  <div id="app">
      <Header></Header>
      <transition name="fade" appear>
        <main>
            <slot></slot>
        </main>
      </transition>

  </div>
</template>

<script>
  import Header from "../components/ThemeHeader";
  export default {
    name: "Default",
        components: {Header},
  }
</script>
