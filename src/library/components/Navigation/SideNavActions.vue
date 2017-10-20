<template>
  <div class="app-sidenav-actions" :class="{ dense: dense, floating: floating }">
    <app-container class="app-action-area" verticalAlign="center" align="flex-start">
      <slot></slot>
    </app-container>
    <app-container class="app-action-area" verticalAlign="center" align="flex-end">
      <slot name="right"></slot>
    </app-container>
  </div>
</template>

<script>
  export default {
    name: 'app-sidenav-actions',
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
      floating: Boolean,
    },
    watch: {
      
    },
  }
</script>

<style lang="scss">
  @import '../../../Variables.scss';

  .app-sidenav-actions {
    $actions-height: 54px;
    $actions-dense-height: 46px;

    display: flex;
    flex-direction: row;
    color: $primary-text-color;
    height: $actions-height;
    line-height: $actions-height;

    transition: $swift-ease-in-out-duration;

    &:first-child {
      border-bottom: 1px rgba(0,0,0,0.1) solid;
    }
    &:last-child {
      border-top: 1px rgba(0,0,0,0.1) solid;
    }

    &.floating {
      box-shadow: $depth-2dp;
    }

    &.dense {
      height: $actions-dense-height;
      line-height: $actions-dense-height;
    }

    .app-action-area {
      color: $app-text-color;
      .app-icon-button {
        & + .app-heading {
          padding-left: 16px;
        }
      }
      .app-heading {
        padding: 0 8px;
        color: $app-heading-color;
      }
    }
  }
</style>
