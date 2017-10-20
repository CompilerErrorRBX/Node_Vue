<template>
  <div class="app-text-body">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'app-text-body',
    computed: {

    },
    data() {
      return {

      };
    },
    methods: {

    },
    props: {
    },
    watch: {
      
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../../Variables.scss';

  .app-text-body {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    user-select: text;
    &>.app-heading {
      color: $app-heading-color;
      font-size: 24px;
      margin-bottom: 4px;
    }
    &>span,
    &>p {
      margin-top: 0;
      color: $app-text-color;
      font-size: 14px;
    }
  }
</style>
