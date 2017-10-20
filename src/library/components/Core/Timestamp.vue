<template>
  <span v-if="time" class="app-timestamp">
    {{ parsedTime }}
  </span>
</template>

<script>
  export default {
    name: 'app-timestamp',
    computed: {
      parsedTime() {
        return moment(this.time).fromNowOrNow();
      }
    },
    data() {
      return {

      };
    },
    methods: {

    },
    props: {
      time: String,
    },
    watch: {
      
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../../Variables.scss';

  .app-timestamp {
    font-size: 0.6rem;
    color: rgba($app-text-color, 0.3);
    user-select: text;
  }
</style>
