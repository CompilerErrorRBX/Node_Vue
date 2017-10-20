<template>
  <div class="app-collapsible">
    <slot name="heading"></slot>
    <div class="app-collapsible-container">
      <div class="app-collapse">
        <slot>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-collapsible',
    computed: {

    },
    data() {
      return {
        debounce: null,
        content: null,
        expanded: !this.isCollapsed,
        trigger: null,
      };
    },
    methods: {
      toggleCollapse() {
        clearTimeout(this.debounce);
        this.expanded = !this.expanded;
        this.container.style.height = this.expanded? `${this.content.clientHeight}px` : 0;
        if (this.expanded) {
          this.debounce = setTimeout(() => {
            this.container.style.height = 'auto';
          }, 200);
        }
      }
    },
    mounted() {
      this.container = this.$el.querySelector('.app-collapsible-container');
      this.content = this.container.querySelector('.app-collapse');
      this.trigger = this.$el.querySelector('[collapse-trigger]');

      this.container.style.height = this.expanded? `auto` : 0;

      if (this.trigger) {
        this.trigger.addEventListener('click', this.toggleCollapse);
      }
    },
    props: {
      isCollapsed: Boolean,
    },
    watch: {

    },
  }
</script>

<style lang="scss" scoped>
  @import '../../../Variables.scss';

  .app-collapsible {
    &>.toolbar.app-card-actions,
    &>.toolbar {
      border: 0;
    }
    &>.app-collapsible-container {
      overflow: hidden;
      will-change: height;
      transition: $swift-ease-in;
    }
  }
</style>

