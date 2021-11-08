<template>
  <ClientOnly>
    <header id="header" class="uk-position-top">


      <div data-uk-sticky="self-target: .uk-navbar-container; cls-active: uk-background-default uk-box-shadow-small uk-navbar-sticky; top: 50vh; animation: uk-animation-slide-top-small">
          <nav  class="uk-navbar-container" data-uk-navbar>

              <!-- Header Right -->
              <div class="uk-navbar-right">

                <ToggleTheme />

              </div>
          </nav>
      </div>

  </header>
  </ClientOnly>
</template>

<script>
    import ToggleTheme from '@/components/ToggleTheme.vue'
    export default {
        name: "ThemeHeader",
        components: {
          ToggleTheme
          },
    }
</script>