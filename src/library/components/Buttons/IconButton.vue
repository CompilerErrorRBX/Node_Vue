<template>
  <button class="app-icon-button" :class="{ dense: dense }">
    <app-icon :icon="icon" />
    <app-ripple :center="true" />
  </button>
</template>

<script>
  export default {
    name: 'app-icon-button',
    computed: {
      
    },
    data() {
      return {
        
      };
    },
    methods: {
      
    },
    props: {
      dense: Boolean,
      icon: String,
    },
    watch: {
      
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../../Variables.scss';
  @import '../../../Mixins.scss';

  @mixin set-size($size) {
    min-height: $size;
    min-width: $size;
    max-height: $size;
    max-width: $size;
    line-height: $size;
  }

  .app-icon-button {
    position: relative;
    float: left;
    overflow: hidden;
    border-radius: 50%;
    background-color: transparent;
    font-size: 24px;
    margin: 0 8px;
    color: inherit;

    transition: $swift-ease-in;
    
    @include set-size(36px);

    .overlay {
      border-radius: 50%;
    }

    .app-icon {
      min-height: inherit;
      min-width: inherit;
      font-size: inherit;
      position: relative;
    }

    & + & {
      margin-left: 0;
    }

    &.dense {
      @include set-size(32px);
      font-size: 20px;
    }
  }
</style>

