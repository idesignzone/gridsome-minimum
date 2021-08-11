<template>
      <div v-html="widget.html"></div>
</template>

<script>
export default {
    name: "ThemeWidget",
      props: {
        widget: {
          type: Object,
          required: true
        }
      }
}
</script>