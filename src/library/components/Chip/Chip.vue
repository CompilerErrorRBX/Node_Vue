<template>
  <div class="app-chip" :class="{ hoverable: hoverable }">
    <app-avatar v-if="alt || src || icon" :alt="alt" :src="src" :icon="icon" dense/>
    <app-heading :text="text" />
    <app-icon-button v-if="closable" icon="cancel" @click.native="close" dense/>
  </div>
</template>

<script>
  export default {
    name: 'app-chip',
    computed: {

    },
    data() {
      return {
        
      };
    },
    methods: {
      close() {
        this.$el.remove();
      },
    },
    props: {
      alt: String,
      closable: Boolean,
      hoverable: Boolean,
      icon: String,
      src: String,
      text: String,
    },
    watch: {
      
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../../Variables.scss';

  .app-chip {
    display: flex;
    border-radius: 32px;
    background-color: rgba(0,0,0,0.10);
    color: $app-text-color;
    overflow: hidden;
    box-shadow: 0;
    transition: $swift-ease-out;
    min-width: 0;
    max-height: 32px;
    height: 32px;
    margin: 2px;
    flex: 0 1 auto;

    float: left;
    align-items: center;

    .app-heading {
      float: left;
      line-height: 32px;
      padding-left: 8px;
      font-size: 14px;
      flex: 1 0 auto;
      text-align: center;
      &:first-child {
        padding-left: 12px;
      }
      &:last-child {
        padding-right: 12px;
      }
    }

    .app-icon-button {
      margin-right: 0;
      color: rgba(0,0,0,0.25);
      transition: $swift-ease-out;
    }

    .app-avatar {
      float: left;
      transition: $swift-ease-out;
    }

    .app-icon-button {
      float: right;
    }

    &>.overlay {
      border-radius: 32px;
    }

    &.hoverable {
      &:hover {
        transition: $swift-ease-in;

        background-color: rgba(0,0,0,0.45);
        color: #fff;
        box-shadow: $depth-2dp;

        .app-icon-button {
          transition: $swift-ease-in;
          color: #fff;
        }

        .app-avatar {
          transition: $swift-ease-in;
          color: $accent-text-color;
          background-color: $accent-color;
        }
      }
    }
  }
</style>

