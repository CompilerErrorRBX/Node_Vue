<template>
  <div class="app-heading">
    {{ text }}
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'app-heading',
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
  .app-heading {
    font-size: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    user-select: text;
    &>.app-timestamp {
      float: right;
    }
  }
</style>
