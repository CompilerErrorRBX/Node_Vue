<template>
  <div class="app-divider" :class="{ dense: dense }">
  </div>
</template>

<script>
  export default {
    name: 'app-divider',
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
      dense: Boolean,
    },
    watch: {
      
    },
  }
</script>

<style lang="scss">
  @import '../../../Variables.scss';

  .app-divider {
    border-top: 1px rgba(0,0,0,0.1) solid;
    margin: 4px 0;
  }
</style>
