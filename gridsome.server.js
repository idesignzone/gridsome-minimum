// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      WordPress {
          posts {
            edges {
              node {
                id
                uri
              }
            }
          } 
       }
    }`)


    // Create Post pages
    let posts = data.WordPress.posts.edges.map(edge => edge.node)
    posts.forEach((node) => {
      createPage({
        path: `${node.uri}`,
        component: "./src/templates/posts/Post.vue",
        context: {
          id: node.id,
          uri: node.uri
        },
      });
    });
  });

};
