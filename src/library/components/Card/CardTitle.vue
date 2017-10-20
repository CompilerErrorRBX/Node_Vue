<template>
  <div class="app-card-title" :class="{ avatar: src || alt || icon }">
    <app-avatar v-if="src || alt || icon" :src="src" :icon="icon" :alt="alt" />
    <app-text-body>
      <app-heading v-if="title">{{ title }}</app-heading>
      <span class="app-card-subtitle" v-if="subtitle">{{ subtitle }}</span>
    </app-text-body>
  </div>
</template>

<script>
  export default {
    name: 'app-card-title',
    computed: {

    },
    data() {
      return {

      };
    },
    methods: {

    },
    props: {
      alt: String,
      icon: String,
      src: String,
      subtitle: String,
      title: String,
    },
    watch: {
      
    },
  }
</script>

<style lang="scss">
  @import '../../../Variables.scss';

  .app-card-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
    padding: 16px;

    &>.app-text-body {
      min-width: 0;
      flex: 1;
    }

    &>.app-avatar {
      float: left;
      clear: left;
      margin-right: 16px;
    }
    .app-heading {
      color: $app-heading-color;
      font-weight: 400;
      letter-spacing: 0;
    }
    .app-card-subtitle {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &.avatar {
      .app-heading {
        font-size: 16px;
      }
    }

    &+.app-card-content {
      padding-top: 0;
    }
  }
</style>
