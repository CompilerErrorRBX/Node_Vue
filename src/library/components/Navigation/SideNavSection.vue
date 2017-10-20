<template>
  <app-list class="app-sidenav-section">
    <slot></slot>
  </app-list>
</template>

<script>
  export default {
    name: 'app-sidenav-section',
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
  .app-sidenav-section {
    position: relative;
    padding: 8px 0;

    &:first-child {
      padding-top: 0;
    }

    &:not(:last-child) {
      border-bottom: 1px rgba(0,0,0,0.1) solid;
    }
  }
</style>
