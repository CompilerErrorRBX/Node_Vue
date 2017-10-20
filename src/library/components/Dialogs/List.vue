<template>
  <div class="app-list" :class="{ dense: dense }">
    <app-subheading v-if="title" :text="title" />
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'app-list',
    computed: {

    },
    data() {
      return {

      };
    },
    methods: {

    },
    props: {
      dense: Boolean,
      title: String,
    },
    watch: {
      
    },
  }
</script>

<style lang="scss" scoped>
  .app-list {
    .app-subheading {
      padding: 0 16px;
    }

    &.dense {
      &>.app-subheading {
        padding: 0 12px;
        font-size: 12px;
        height: 32px;
        line-height: 32px;
      }
    }
  }
</style>
