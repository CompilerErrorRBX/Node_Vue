<template>
  <div class="app-card-content">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'app-card-content',
    computed: {

    },
    data() {
      return {

      };
    },
    methods: {

    },
    props: {

    },
    watch: {
      
    },
  }
</script>

<style lang="scss">
  @import '../../../Variables.scss';

  .app-card-content {
    padding: 16px;
    color: $app-text-color;
    font-size: 14px;
    &>p {
      margin-top: 0;
    }
    &:empty {
      display: none;
    }

    &+&,
    &+.app-card-title {
      padding-top: 0;
    }
  }
</style>
