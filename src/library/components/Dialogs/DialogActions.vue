<template>
  <div class="app-dialog-actions-container">
    <app-pusher class="app-dialog-toolbar-pusher" maxSpan="56px" spanHeight :opened="overlay" />
    <div class="app-dialog-actions" :class="{ fixed: overlay, stacked: stacked }">
      <app-container v-if="!stacked" verticalAlign="center" align="flex-start" minimized>
        <slot name="left"></slot>
      </app-container>
      <app-container v-if="!stacked" verticalAlign="center" align="center" />
      <app-container v-if="!stacked" verticalAlign="center" align="flex-end" minimized>
        <slot></slot>
      </app-container>
      <app-container v-if="stacked" verticalAlign="center" vertical align="flex-start">
        <slot></slot>
      </app-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-dialog-actions',
    computed: {

    },
    data() {
      return {

      };
    },
    methods: {

    },
    props: {
      overlay: Boolean,
      stacked: Boolean,
    },
    watch: {
      
    },
  }
</script>

<style lang="scss">
  @import '../../../Variables.scss';

  .app-dialog-actions {
    $actions-height: 52px;

    display: flex;
    flex-direction: row;
    color: $primary-text-color;
    height: $actions-height;
    line-height: $actions-height;

    &.fixed {
      position: absolute;
      background-color: #eee;
      width: 100%;
      bottom: 0;
      border-top: 1px rgba(0,0,0,0.1) solid;
      border-radius: 0 0 2px 2px;
    }

    &.stacked {
      flex-direction: column;
      height: auto;
      padding-bottom: 8px;
      .app-button {
        display: block;
        width: 100%;
        height: 48px;
        max-height: 48px;
        margin: 0;
        padding: 0 16px;
        text-align: end;
      }
    }

    .app-button {
      min-width: 64px;
    }
  }
</style>
