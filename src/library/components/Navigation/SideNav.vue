<template>
  <div class="app-sidenav-container">
    <app-pusher v-if="!overlay" class="app-sidenav-pusher" :maxSpan="width" :opened="opened" />
    <div class="app-sidenav" :class="{ overlay: overlay, 'opened': opened }">
      <app-container class="app-sidenav-heading" vertical minimized>
        <slot name="heading"></slot>
      </app-container>
      <app-container vertical>
        <slot></slot>
      </app-container>
      <app-container vertical align="flex-end">
        <slot name="bottom"></slot>
      </app-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-sidenav',
    computed: {

    },
    data() {
      return {

      };
    },
    methods: {

    },
    mounted() {
      this.$el.querySelector('.app-sidenav').style.minWidth = this.width;
    },
    props: {
      overlay: Boolean,
      opened: {
        type: Boolean,
        default: true,
      },
      width: {
        type: String,
        default: '210px',
      },
    },
    watch: {
      width() {
        this.$el.querySelector('.app-sidenav').style.minWidth = this.width;
      },
    },
  }
</script>

<style lang="scss">
  @import '../../../Variables.scss';
  @import '../../../Mixins.scss';

  .app-sidenav {
    $sidebar-width: 210px;

    position: absolute;
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    height: 100vh;
    left: -$sidebar-width;

    transition: $swift-ease-out;

    .app-sidenav-heading {
      display: none;
    }

    &.overlay {
      position: fixed;
      top: 0;
      left: 0;
      background-color: #fff;
      box-shadow: $depth-8dp;
      min-width: 300px;
      z-index: 1001;

      .app-sidenav-heading {
        display: flex;
      }
    }

    @include layout-xsmall() {
      position: fixed;
      top: 0;
      left: -300px;
      background-color: #fff;
      box-shadow: $depth-8dp;
      min-width: 300px !important;
      z-index: 1001;

      .app-sidenav-heading {
        display: flex;
      }

      &.opened {
        left: 0;
      }
    }

    &.opened {
      transition: $swift-ease-in;
      left: 0;
    }
  }

  .app-sidenav-container {
    .app-sidenav-pusher {
      @include layout-xsmall() {
        min-width: 0 !important;
      }
    }
  }
</style>
