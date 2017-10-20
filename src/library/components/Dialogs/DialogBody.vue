<template>
  <div class="app-dialog-body" >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'app-dialog-body',
    computed: {

    },
    data() {
      return {
        
      };
    },
    methods: {
      
    },
    mounted() {
      
    },
    props: {
      
    },
    watch: {
      
    },
  }
</script>

<style lang="scss" scoped>
  .app-dialog-body {
    padding: 24px;
    font-size: 16px;
    color: inherit;

    .app-heading {
      color: rgba(0, 0, 0, 0.85);
      font-weight: 400;
      font-size: 24px;
      letter-spacing: 0;
    }
  }
</style>
