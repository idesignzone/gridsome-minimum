<template>
  <Layout>
    <div>

      <div class="uk-section">
        <div class="uk-container-large">
            <div class="uk-flex-center uk-grid-medium" data-uk-grid>

                <div class="uk-width-2-3@m">
                    <div class="uk-inline news-image">
                    <g-image
                      v-if="$page.WordPress.post.featuredImage"
                      :src="$page.WordPress.post.featuredImage.node.sourceUrl"
                      :alt="$page.WordPress.post.featuredImage.node.altText"
                    />
                  </div>
                  <div>
                    <div>
                      <h1 class="uk-margin-medium-top">{{ $page.WordPress.post.title }}</h1>

                      <div class="uk-margin-medium-top" v-html="$page.WordPress.post.content"></div>

                      <div>

                      </div>
                    </div>

                </div>
              </div> 

            </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  WordPress {
    post (id: $id) {
      id
      title
      content
      date
      commentCount
      link
      excerpt
      author {
        node {
          id
          name
          description
        avatar {
          url
        }
        }
      }
      categories {
        edges {
          node {
            id
            name
            uri
          }
        }
      }
      tags {
        edges {
          node {
            name
            id
          }
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
          }
        }
      }
    }
    posts {
      nodes {
        id
        date
      }
    }
  }
}
</page-query>

<script>
export default {

}
</script>
