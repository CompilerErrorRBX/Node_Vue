<template>
  <div class="app-toolbar-container">
    <app-pusher v-if="overlay" class="app-toolbar-pusher" maxSpan="72px" spanHeight :opened="true" />
    <div class="app-toolbar" :class="{ floating: overlay, dense: dense }">
      <app-container verticalAlign="center" align="flex-start">
        <slot></slot>
        {{ title }}
        <slot name="center"></slot>
      </app-container>
      <app-container verticalAlign="center" align="flex-end" minimized>
        <slot name="right"></slot>
      </app-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-toolbar',
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
      overlay: Boolean,
      title: String,
    },
    watch: {
      
    },
  }
</script>

<style lang="scss">
  @import '../../../Variables.scss';
  @import '../../../Mixins.scss';

  @mixin set-height($height) {
    height: $height;
    line-height: $height;
  }

  .app-toolbar {
    $mobile-height: 56px;
    $desktop-height: 64px;
    $dense-desktop-height: 48px;

    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: $primary-color;
    color: $primary-text-color;

    padding: 0 8px;
    
    border-top: 1px rgba(0,0,0,0.1) solid;
    border-bottom: 1px rgba(0,0,0,0.1) solid;

    transition: $swift-ease-in-out-duration;

    @include set-height($mobile-height);

    @include layout-small-and-up() {
      @include set-height($desktop-height);

      &.dense {
        @include set-height($dense-desktop-height);
      }
    }

    .app-heading {
      padding: 0 16px;
    }

    .app-button,
    .app-icon-button {
      color: $primary-text-color;
    }

    &.floating {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
      box-shadow: $depth-4dp;
    }
  }
</style>
