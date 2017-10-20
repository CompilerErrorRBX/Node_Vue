<template>
  <div class="app-pusher" :class="{ opened: opened }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'app-pusher',
    computed: {

    },
    data() {
      return {

      };
    },
    methods: {
    },
    mounted() {
      this.$el.style.transitionDuration = `${this.speed}ms`;
      this.$el.style[this.spanHeight? 'min-height' : 'min-width'] = this.opened? this.maxSpan : this.minSpan;
    },
    props: {
      opened: Boolean,
      maxSpan: {
        type: String,
        default: '0px',
      },
      minSpan: {
        type: String,
        default: '0px',
      },
      spanHeight: Boolean,
      duration: {
        type: Number,
        default: 200,
      }
    },
    watch: {
      duration() {
        this.$el.style.transitionDuration = `${this.speed}ms`;
      },
      opened() {
        this.$el.style[this.spanHeight? 'min-height' : 'min-width'] = this.opened? this.maxSpan : this.minSpan;
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../../Variables.scss';

  .app-pusher {
    display: flex;
    transition: $swift-ease-out;

    &.opened {
      transition: $swift-ease-in;
    }
  }
</style>

