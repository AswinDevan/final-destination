<template>
  <div id="app">
    <app-head></app-head>
    <br><br>
    <div style="min-height:100vh;">
    <router-view/>
    </div>
    <br>
    <app-foot></app-foot>
  </div>
</template>

<script>
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
export default {
  name: 'App',
}
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>
