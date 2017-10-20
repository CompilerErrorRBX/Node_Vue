<template>
  <div class="app-dialog-curtain" :class="{ show: isShown }" @click.self="close">
    <div class="app-dialog" :class="{ fullscreen: fullscreen }">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-dialog',
    computed: {

    },
    data() {
      return {
        isShown: this.show,
      };
    },
    methods: {
      close() {
        this.isShown = false;
        this.$emit('close');
      },
      open() {
        this.isShown = true;
        this.$emit('open');
      },
      toggle(isOpen = !this.isShown) {
        isOpen? this.open() : this.close();
      },
    },
    mounted() {
      this.$emit('mounted');
      if (this.isShown) {
        this.open();
      }
    },
    props: {
      fullscreen: Boolean,
      show: Boolean,
    },
    watch: {
      show() {
        this.toggle(this.show);
      },
    },
  }
</script>

<style lang="scss">
  @import '../../../Variables.scss';

  .app-dialog-curtain {
    position: fixed;

    background-color: rgba(0,0,0,0);
    pointer-events: none;

    width: 100vw;
    height: 100vh;
    z-index: 1500;

    transition: $swift-ease-out;

    &.small {
      .app-dialog {
        max-width: 320px;
      }
    }

    &.large {
      .app-dialog {
        max-width: 756px;
      }
    }

    .app-dialog {
      position: fixed;
      display: flex;
      flex-direction: column;

      background-color: #fff;
      color: $app-text-color;
      
      width: 756px;
      max-width: 512px;
      border-radius: 2px;
      top: 100%;
      left: 50%;
      box-shadow: 0;

      transition: $swift-ease-out;

      transform: translate(-50%, 0) scale(0.8);

      &.fullscreen {
        width: 100%;
        height: 100%;
        max-width: unset;
      }

      .app-list {
        &:last-child {
          padding-bottom: 16px;
        }
      }
    }

    &.show {
      transition: $swift-ease-in;
      
      pointer-events: unset;
      background-color: rgba(0,0,0,0.35);

      .app-dialog {
        transition: $swift-ease-in;

        top: 50%;
        transform: translate(-50%, -50%);

        box-shadow: $depth-18dp
      }
    }

  }
</style>
