<template>
  <div class="sidebar">
    <div v-for="{ node } in $static.WordPress.sidebar.widgets.edges" :key="node.id">
      <Widget :widget="node"></Widget>
    </div>
  </div>
</template>

<static-query>
    query {
      WordPress {
        sidebar (sidebar: BLOG) {
          id
          name
          widgets {
            edges {
              node {
                id
                html
                type
              }
            }
          }
        }
      }
    }
</static-query>

<script>
   import Widget from "../ThemeWidget";
    export default {
        name: "BlogSidebar",
       components: {Widget}
    }
</script>