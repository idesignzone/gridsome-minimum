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

  <!-- Posts Comments -->
                <div>
                  <ul class="uk-comment-list uk-margin-medium-top">
                      <li v-for="{ node } in $page.WordPress.post.comments.edges" :key="node.id" v-show="node.parentDatabaseId === 0" class="uk-margin-medium-top">
                          <article class="uk-comment uk-comment-primary uk-visible-toggle uk-border-rounded" tabindex="-1">
                              <header class="uk-comment-header uk-position-relative">
                                  <div class="uk-grid-medium uk-flex-middle" uk-grid>
                                      <div class="uk-width-auto">
                                          <!-- <g-image class="uk-comment-avatar uk-border-circle" src="~/assets/images/avatar.jpg" :alt="node.author.node.name" width="60" height="60"></g-image> -->
                                      </div>
                                      <div class="uk-width-expand">
                                          <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">{{node.author.node.name}}</a></h4>
                                          <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                              <li><a href="#">{{ node.date }}</a></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="uk-position-top-right uk-position-small uk-hidden-hover"><a class="uk-link-muted" href="#">Reply</a></div>
                              </header>
                              <div class="uk-comment-body">
                                <div v-html="node.content"></div>
                              </div>
                          </article>
                          <ul v-if="node.replies.edges.length != 0" class="uk-margin-medium-top">
                              <li v-for="{ node } in node.replies.edges" :key="node.id">
                                  <article class="uk-comment uk-comment-primary uk-visible-toggle uk-border-rounded" tabindex="-1">
                                      <header class="uk-comment-header uk-position-relative">
                                          <div class="uk-grid-medium uk-flex-middle" uk-grid>
                                            <div class="uk-width-auto">
                                                <!-- <g-image class="uk-comment-avatar uk-border-circle" src="~/assets/images/avatar.jpg" :alt="node.author.node.name" width="60" height="60"></g-image> -->
                                            </div>
                                            <div class="uk-width-expand">
                                                <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">{{node.author.node.name}}</a></h4>
                                                <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                                    <li><a href="#">{{ node.date }}</a></li>
                                                </ul>
                                            </div>
                                          </div>
                                          <div class="uk-position-top-right uk-position-small uk-hidden-hover"><a class="uk-link-muted" href="#">Reply</a></div>
                                      </header>
                                      <div class="uk-comment-body">
                                          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                      </div>
                                  </article>
                              </li>
                          </ul>
                      </li>
                  </ul>

                  <!-- Comments Form -->
                  <div>
                    <h3 class="comment-reply-title uk-margin-medium-top">Leave a Reply</h3>
                    <form action="" class="comment-form" @submit.prevent="addComment" id="commentform">
                        <!-- <div class="logged-in-as">
                            <a href="#" aria-label="Logged in as Ali. Edit your profile.">Logged in as Ali</a>.
                            <a href="#">Log out?</a>
                        </div> -->
                        <div>
                            <label>Comment</label>
                            <textarea class="uk-textarea uk-margin-small-top uk-margin-small-bottom uk-border-rounded" rows="4" v-model="content" placeholder="Type your comment here..."></textarea>
                        </div>
                        <button name="submit" type="submit" class="uk-button uk-button-primary uk-margin-small-top" value="Post Comment">SUBMIT</button>
                    </form>
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
      comments(where: {order: ASC}) {
        edges {
          node {
              id
              content
              date
              parentDatabaseId
              databaseId
              commentedOn {
                node {
                  id
                }
              }
            author {
              node {
                name

              }
            }
            replies {
              edges {
                node {
                  databaseId
                  author {
                    node {
                      name
                      id
                    }
                  }
                  content
                  date
                  parentDatabaseId
                }
              }
            }
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
import axios from "axios"
export default {
  data(){
    return {
      id: '',
      content: '',
      author: ''
    }
  },
  methods: {
    addComment() {
      axios({
      url: 'https://gridbox-admin.idesignzone.com',
      method: 'post',
      headers: {
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Credentials': true,
        'Content-Type': 'application/json'
      },
      withCredentials: true,
      data: {
        query: `mutation CREATE_COMMENT {
                createComment(input: {
                  commentOn: 329, 
                  content: "hey", 
                  author: "Jason"
                }) {
                  success
                  comment {
                    id
                    content
                    author {
                      node {
                        name
                      }
                    }
                  }
                }
              }`
            }
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
    }
  }
}
</script>
