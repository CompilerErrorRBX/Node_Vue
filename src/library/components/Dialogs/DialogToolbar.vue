<template>
  <div class="app-dialog-toolbar-container">
    <app-pusher class="app-dialog-toolbar-pusher" maxSpan="72px" spanHeight :opened="true" />
    <div class="app-dialog-toolbar">
      <app-container verticalAlign="center" align="flex-start">
        <slot></slot>
        <app-heading v-if="title">{{ title }}</app-heading>
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
    name: 'app-dialog-toolbar',
    computed: {

    },
    data() {
      return {

      };
    },
    methods: {

    },
    props: {
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

  .app-dialog-toolbar {
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: $primary-color;
    color: $primary-text-color;

    top: 0;
    padding: 0 8px;

    @include set-height(56px);

    .app-heading {
      padding: 0 16px;
    }

    &>.app-container>.app-button,
    &>.app-container>.app-icon-button {
      color: $primary-text-color;
    }

    &>.app-container>.app-button {
      min-width: 64px;
    }
  }
</style>
