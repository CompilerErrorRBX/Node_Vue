<template>
  <button class="app-button" :class="{ raised: raised, dense: dense }">
    <span v-if="text" class="app-button-text">{{ text }}</span>
    <app-ripple />
  </button>
</template>

<script>
  export default {
    name: 'app-button',
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
      raised: Boolean,
      text: String,
    },
    watch: {
      
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../../Variables.scss';
  @import '../../../Mixins.scss';

  .app-button {
    // Default is flat
    position: relative;
    float: left;
    border-radius: 2px;
    font-size: 14px;
    padding: 0 8px;
    margin: 0 8px;
    height: 36px;
    min-width: 88px;

    background-color: transparent;
    color: $primary-color;

    transition: $swift-ease-in;

    &.dense {
      height: 32px;
      font-size: 13px;
    }

    &:active {
      background-color: rgba($primary-color, 0.4);
    }

    &:hover {
      background-color: rgba($primary-color, 0.12);
    }
    
    & + & {
      margin-left: 0;
    }

    &.raised {
      margin: 0;
      padding: 0 16px;
      background-color: $primary-color;
      color: $primary-text-color;
      box-shadow: $depth-2dp;

      &:active {
        box-shadow: $depth-6dp;
      }

      &:hover {
        box-shadow: $depth-3dp;
      }
    }
  }
</style>
