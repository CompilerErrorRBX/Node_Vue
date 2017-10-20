<template>
  <div class="overlay" @mousedown="activate" @mouseup="release" @mouseout="release">
    <div class="app-ripple" :class="{ 'active': isActive }" :style="styles"></div>
  </div>
</template>

<script>
  export default {
    name: 'app-ripple',
    computed: {
      styles() {
        return {
          top: this.top,
          left: this.left,
        };
      }
    },
    data() {
      return {
        isActive: false,
        timer: null,
        top: '50%',
        left: '50%',
      };
    },
    methods: {
      activate(event) {
        if (!this.center) {
          const pos = this.getClickPosition(event);
          this.top = pos.top;
          this.left = pos.left;
        }
        clearTimeout(this.timer);
        this.isActive = true;
      },
      release() {
        this.timer = setTimeout(() => {
          this.isActive = false;
        }, 250);
      },
      getClickPosition(event) {
        const rect = this.$parent.$el.getBoundingClientRect();
        let top = event.pageY;
        let left = event.pageX;
        if (event.type === 'touchstart') {
          top = event.changedTouches[0].pageY;
          left = event.changedTouches[0].pageX;
        }
        return {
          top: top - rect.top - document.body.scrollTop + 'px',
          left: left - rect.left - document.body.scrollLeft + 'px'
        };
      },
    },
    props: {
      center: Boolean,
    },
    watch: {
      
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../../Variables.scss';

  .app-ripple {
    $ripple-speed: 0.2s;

    position: absolute;
    padding-top: 0;
    width: 0;
    border-radius: 50%;
    background-color: currentColor;
    opacity: 0.35;
    transform: translate(-50%, -50%);
    transition: opacity $swift-ease-in-timing-function $ripple-speed;
    &.active {
      transition: width $swift-ease-in-timing-function $ripple-speed, 
                  padding-top $swift-ease-in-timing-function $ripple-speed, 
                  opacity $swift-ease-in-timing-function $ripple-speed;
      padding-top: 205%;
      width: 205%;
      opacity: 0.2;
    }
  }
</style>
