<template>
  <div v-if="src" class="app-card-image" ref="image">
    <img :src="src" />
    <div class="overlay">
      <slot></slot>
      <span v-if="caption" class="app-caption">{{ caption }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-card-image',
    computed: {

    },
    data() {
      return {

      };
    },
    methods: {

    },
    props: {
      scale: {
        type: Number,
        default: 1
      },
      src: String,
      caption: String,
    },
    watch: {
      
    },
  }
</script>

<style lang="scss">
  .app-card-image {
    position: relative;
    img {
      display: block;
      width: 100%;
      height: auto;
    }
    .app-card-actions {
      background: linear-gradient(rgba(black, 0.5), transparent);
      border: none;
      .app-button {
        color: white;
      }
    }
    .app-card-caption {
      position: absolute;
      display: inline-block;
      color: white;
      background: linear-gradient(transparent, rgba(black, 0.5));
      font-size: 1.2rem;
      padding: 16px 8px;
      width: 100%;
      bottom: 0;
    }
    .app-floating-action-button {
      position: absolute;
      bottom: 0;
      transform: translateY(50%);
    }

    &+.app-card-title {
      padding-top: 24px;
    }
  }
</style>
