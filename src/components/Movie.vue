<template>
  <div class="movie">
    <h3>{{ msg }}</h3>
    <div v-if="isLoaded">
      <ul>
        <li><h2>{{ movie.title }}</h2></li>
        <li>{{ movie.overview }} </li>
      </ul>
    </div>
    <div>
      <video data-dashjs-player :src="media" controls></video>
    </div>
  </div>
</template>

<script>
import { getMovieData, getMedia } from '../utils/services';

export default {
  name: 'movie',

  data() {
    return {
      msg: 'Awesome Movie Player',
      media: getMedia(),
      movie: this.getMovie(),
      isLoaded: false,
    };
  },
  methods: {
    getMovie() {
      const vm = this;
      getMovieData().then((json) => {
        vm.movie = json;
        vm.isLoaded = true;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

video {
  width: 640px;
  height: 360px;
}
</style>
