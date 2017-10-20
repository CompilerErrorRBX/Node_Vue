<template>
  <div class="app-avatar" :class="{ transparent: !background, dense: dense }">
    <img v-if="src && src !== ''" class="circle" :src="src" />
    <app-icon v-if="!src || src === ''" :icon="icon" />
    <span v-if="(!src || src === '') && (!icon || icon === '')">{{ alternate }}</span>
  </div>
</template>

<script>
  export default {
    name: 'app-avatar',
    computed: {
      alternate() {
        if (!this.alt.length) return "";
        return this.alt[0];
      }
    },
    data() {
      return {

      };
    },
    methods: {

    },
    props: {
      dense: Boolean,
      src: String,
      icon: String,
      alt: {
        type: String,
        default: "",
      },
      background: {
        type: Boolean,
        default: true,
      }
    },
    watch: {
      
    },
  }
</script>

<style lang="scss">
  @import '../../../Variables.scss';

  @mixin setSize($size) {
    min-height: $size;
    min-width: $size;
    max-height: $size;
    max-width: $size;
    line-height: $size;
  }

  .app-avatar {
    $avatar-size: 40px;
    $avatar-size-dense: 32px;

    position: relative;
    display: inline-block;
    border-radius: 50%;
    font-size: 1.3rem;
    text-align: center;
    background-color: $primary-color;
    color: $primary-text-color;
    overflow: hidden;

    @include setSize($avatar-size);

    &>img {
      @include setSize($avatar-size);
    }

    &>.app-icon {
      @include setSize($avatar-size);
    }

    &.transparent {
      background-color: transparent;
      .app-icon {
        color: $app-text-color;
      }
    }

    .dense &,
    &.dense {
      @include setSize($avatar-size-dense);
      font-size: 18px;
      &>img {
        @include setSize($avatar-size-dense);
      }

      &>.app-icon {
        @include setSize($avatar-size-dense);
        font-size: 18px;
      }
    }
  }
</style>
