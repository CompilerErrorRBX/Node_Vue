<template>
  <div class="app-menu-item" :class="{ dense: dense }">
    <app-container verticalAlign="center" align="flex-start" minimized>
      <slot></slot>
    </app-container>
    <app-container verticalAlign="center" align="center" />
    <app-container verticalAlign="center" align="flex-end" minimized>
      <slot name="right"></slot>
    </app-container>
    <app-ripple />
  </div>
</template>

<script>
  export default {
    name: 'app-menu-item',
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
  @import '../../../Mixins.scss';

  .app-menu-item {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    cursor: pointer;

    color: inherit;
    background-color: rgba(0,0,0,0);

    width: 100%;
    font-size: 15px;
    height: 32px;

    &>.app-container>.app-heading {
      font-size: inherit;
      &:first-child {
        padding-left: 24px;
      }
    }

    &>.app-container>.app-icon {
      font-size: 20px;
      padding: 0 8px 0 16px;
    }

    &.dense,
    .dense & {
      font-size: 13px;
      height: 24px;
      &>.app-container>.app-icon {
        font-size: 17px;
      }
    }

    @include layout-xsmall() {
      font-size: 16px;
      height: 48px;

      &>.app-container>.app-icon {
        font-size: 24px;
      }

      &.dense,
      .dense & {
        font-size: 14px;
        height: 32px;
        &>.app-container>.app-icon {
          font-size: 20px;
        }
      }
    }

    transition: $swift-ease-out;

    &:hover {
      transition: $swift-ease-in;

      background-color: rgba(0,0,0,0.14);
    }
  }
</style>
