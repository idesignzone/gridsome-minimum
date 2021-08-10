<template>
    <Layout>
        <div>
          <blog></blog>
        </div>
    </Layout>
</template>

<script>
  import Blog from "../components/posts/ThemeBlog";
  export default {
      name: "Home",
    components: { Blog }
  }
</script>
