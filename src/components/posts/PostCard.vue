<template>

    <div>
        <div class="single-news">

            <!-- News Image -->
            <div class="uk-card uk-card-default uk-card-small uk-border-rounded">
                <div class="uk-card-media-top news-image uk-inline uk-transition-toggle">
                    <g-image class="uk-transition-scale-up uk-transition-opaque"
                    v-if="post.featuredImage"
                    :src="post.featuredImage.node.mediaItemUrl"
                    :alt="post.featuredImage.node.altText"
                  />
                </div>

                <div class="uk-card-body uk-text-left">
            

                  <g-link :to="post.uri">
                    <h2 class="uk-text-bold uk-margin-small-top">{{post.title}}</h2>
                  </g-link>
                    <div :inner-html.prop="post.content | truncate(160)"></div>
                </div>

            </div>
      </div>
   </div>

</template>

<script>
export default {
  name: "PostCard",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  filters: {
    truncate(string, value) {
      return string.substring(0, value) + '…';
    }
  }
}
</script>