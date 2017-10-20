<template>
  <div class="app-card" :class="{ hoverable: hoverable }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'app-card',
    computed: {

    },
    data() {
      return {

      };
    },
    methods: {

    },
    props: {
      hoverable: Boolean,
    },
    watch: {
      
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../../Variables.scss';

  .app-card {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    background-color: white;
    color: rgba(0,0,0,0.15);
    overflow: hidden;
    box-shadow: $depth-2dp;
    width: 100%;
    transition: $swift-ease-out;
    min-height: 0;
    flex: 0 1 auto;

    &.hoverable {
      &:hover {
        box-shadow: $depth-8dp;
      }
    }
  }
</style>

