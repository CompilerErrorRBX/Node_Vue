<template>
  <div class="app-container" :class="{ vertical: vertical, minimized: minimized }" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'app-container',
    computed: {

    },
    data() {
      return {
        styles: {
          'align-items': this.verticalAlign,
          'justify-content': this.align
        },
      };
    },
    methods: {

    },
    props: {
      align: {
        type: String,
        default: 'flex-start',
      },
      minimized: Boolean,
      vertical: Boolean,
      verticalAlign: {
        type: String,
        default: 'stretch',
      },
    },
    watch: {
      
    },
  }
</script>

<style lang="scss" scoped>
  .app-container {
    position: relative;
    display: flex;
    flex-direction: row;
    flex: 1;
    &.vertical {
      flex-direction: column;
    }
    &.minimized {
      flex: 0 1 auto;
    }
  }
</style>

