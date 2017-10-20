<template>
  <div class="app-responsive">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'app-responsive',
    computed: {

    },
    data() {
      return {

      };
    },
    methods: {
    },
    mounted() {
      
    },
    props: {
      
    },
    watch: {
      
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../../Variables.scss';
  @import '../../../Mixins.scss';

  .app-responsive {
    width: 100%;
    margin: 0 auto;
    padding: 0 16px;

    transition: $swift-ease-out;

    @include layout-xlarge() {
      max-width: $breakpoint-large;
    }
    @include layout-large() {
      max-width: $breakpoint-medium;
    }
    @include layout-medium() {
      max-width: $breakpoint-small;
    }
    @include layout-small() {
      max-width: $breakpoint-xsmall;
    }
    @include layout-xsmall() {
      max-width: 100%;
      padding: 0;
    }
  }
</style>

