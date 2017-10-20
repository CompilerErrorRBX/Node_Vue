<template>
  <i v-if="icon" class="app-icon material-icons">
    {{ icon }}
  </i>
</template>

<script>
  export default {
    name: 'app-icon',
    computed: {

    },
    data() {
      return {

      };
    },
    methods: {

    },
    props: {
      icon: String,
    },
    watch: {
      
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../../Variables.scss';

  .app-icon {
    color: inherit;
    font-size: 24px;
    line-height: inherit;
    user-select: none;
    will-change: transform;
    transition: transform $base-transition;
  }
</style>
