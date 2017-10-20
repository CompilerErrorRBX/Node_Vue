<template>
  <div v-if="isShown" class="app-menu" :class="{ simple: simple, dense: dense }">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'app-menu',
    computed: {

    },
    data() {
      return {
        isShown: this.show,
        parent: null,
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
      dense: Boolean,
      show: Boolean,
      simple: Boolean,
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
  @import '../../../Mixins.scss';

  .app-menu {
    position: fixed;
    background-color: #eee;

    z-index: 10000;
    padding: 8px 0;

    // Desktop settings
    min-width: 128px;
    max-width: 448px;

    &.dense {
      padding: 4px 0;
    }

    @include layout-xsmall() {
      // Mobile settings
      min-width: 112px;
      max-width: 280px;
    }

    color: $app-text-color;
    box-shadow: $depth-2dp;
    transition: $swift-ease-out;
  }
</style>
