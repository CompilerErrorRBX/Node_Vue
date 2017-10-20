<template>
  <div class="app-subheading">
    {{ text }}
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'app-subheading',
    computed: {

    },
    data() {
      return {

      };
    },
    methods: {

    },
    props: {
      text: String,
    },
    watch: {
      
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../../Variables.scss';

  .app-subheading {
    height: 48px;
    line-height: 48px;
    font-size: 16px;
    color: $app-text-color;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    user-select: text;
  }
</style>
