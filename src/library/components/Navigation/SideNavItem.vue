<template>
  <app-list-item class="app-sidenav-item" hoverable>
    <app-avatar v-if="icon" :icon="icon" :background="false" />
    <app-text-body>
      <span>{{ text }}</span>
    </app-text-body>
    <app-ripple :center="!text" />
  </app-list-item>
</template>

<script>
  export default {
    name: 'app-sidenav-item',
    computed: {

    },
    data() {
      return {

      };
    },
    methods: {

    },
    props: {
      icon: String,
      text: String,
      href: String,
    },
    watch: {
      
    },
  }
</script>

<style lang="scss" scoped>
  .app-sidenav-item {
    position: relative;
    overflow: hidden;
    height: 40px;
    padding: 0 12px 0 20px;
    cursor: pointer;
  }
</style>
