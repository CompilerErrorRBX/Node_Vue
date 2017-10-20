<template>
  <div class="container">
    <div>
      <span>Hello, World!</span>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
    }
</script>

<style>
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('../assets/stylesheets/Global.scss');
</style>
