<template>
  <div id="app">
    <header>
      <icon name="video-camera" scale="4"></icon><h1>VIDEOPLAYER</h1>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
  import 'vue-awesome/icons/video-camera';
  import Icon from 'vue-awesome/components/Icon';
  import Dash from 'dashjs';

  export default {
    name: 'app',
    components: {
      Icon, Dash,
    },
  };
</script>

<style>
  :root {
    --main-background-color: #2c3e50;
    --main-font-color: #e0e7ef;
  }

  body {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    height: 100vh;
    margin: 0;
    background-color: var(--main-background-color);
  }

  header > :first-child {
    margin-right: 10px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--main-font-color);
    margin-top: 60px;
  }

  header {
    display: inline-flex;
    align-items: center;
    line-height: 40px;
    padding: 0px 10px;
    border: 1px solid var(--main-font-color);;
    border-radius: 4px;
  }
</style>
