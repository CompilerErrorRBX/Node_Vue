<template>
  <div class="app-chip-container" :class="{ justified: justified, fit: fit }">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'app-chip-container',
    computed: {

    },
    data() {
      return {
        
      };
    },
    methods: {
      
    },
    props: {
      fit: Boolean,
      justified: Boolean,
    },
    watch: {
      
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../../Variables.scss';

  .app-chip-container {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    &.justified {
      justify-content: space-between;
    }

    &.fit {
      .app-chip {
        flex: 1 0 auto;
      }
    }
  }
</style>

