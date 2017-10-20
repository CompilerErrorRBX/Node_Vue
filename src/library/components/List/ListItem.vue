<template>
  <div class="app-list-item" :class="{ hoverable: hoverable, dense: dense }">
    <app-ripple v-if="hoverable" />
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'app-list-item',
    computed: {

    },
    data() {
      return {

      };
    },
    methods: {

    },
    props: {
      hoverable: Boolean,
      dense: Boolean,
    },
    watch: {
      
    },
  }
</script>

<style lang="scss">
  @import '../../../Variables.scss';

  .app-list-item {
    $item-height: 48px;
    $item-height-dense: 42px;

    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;

    min-height: $item-height;

    &>.app-avatar {
      float: left;
      clear: left;
      margin-right: 16px;
    }

    &>.app-icon-button {
      color: $app-text-color;
    }

    &>.app-heading {
      height: $item-height;
      line-height: $item-height;
    }

    &.hoverable {
      transition: background-color 0.2s;
      cursor: pointer;
      &:hover {
        background-color: rgba(0,0,0,0.05);
      }
    }
    .dense &,
    &.dense {
      min-height: $item-height-dense;
      padding: 0 12px;

      &>.app-avatar {
        margin-right: 0;
      }

      &>.app-heading {
        font-size: 14px;
        height: $item-height-dense;
        line-height: $item-height-dense;
      }
    }
  }
</style>

