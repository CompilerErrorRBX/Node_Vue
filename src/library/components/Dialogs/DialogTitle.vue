<template>
  <app-heading class="app-dialog-title" :text="title">
    <slot></slot>
  </app-heading>
</template>

<script>
  export default {
    name: 'app-dialog-title',
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
      title: String,
    },
    watch: {
      
    },
  }
</script>

<style lang="scss" scoped>
  .app-dialog-title {
    padding-bottom: 20px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 400;
    font-size: 24px;
    letter-spacing: 0;
  }
</style>
