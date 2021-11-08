<template>

    <div>
        <div class="uk-section">
            <div class="uk-container uk-container-large">
                <div class="uk-grid-medium" data-uk-grid>
                    <div class="uk-width-expand@m">
                        <div class="uk-grid-medium uk-child-width-1-2@m" data-uk-grid="masonry: true">
                            <div v-for="{ node } in $static.WordPress.posts.edges" :key="node.id">
                                <Post :post="node"></Post>
                                <Pagination :posts="$static.WordPress.posts" :postsQuery="postsQuery" @updatePosts="updatePosts" :limit="3"></Pagination> 
                            </div>
                        </div>
                    </div>
                    <div class="uk-width-1-3@m">
                        <Sidebar></Sidebar>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<static-query>
    query GetAllPosts ($first: Int, $last: Int, $endCursor: String, $startCursor: String) {
      WordPress {
        posts (first:$first last:$last after:$endCursor before:$startCursor) {
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
          edges {
            cursor
            node {
              id
              title
              content
              uri
              date
              excerpt
              author {
                node {
                  id
                  name
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
              featuredImage {
                node {
                  mediaItemUrl 
                  altText
                }
              }
            }
          }
        }
      }
    }
</static-query>

<script>
    import Post from "./PostCard";
    import Pagination from "./BlogPagination";
    import Sidebar from "./BlogSidebar";
    export default {
        name: "ThemeBlog",
        components: {Post, Pagination, Sidebar}
    }
</script>