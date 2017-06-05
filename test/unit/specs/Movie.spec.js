import Vue from 'vue';
import Movie from '@/components/Movie';

describe('Movie.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Movie);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.movie h1').textContent)
      .to.equal('Awesome Movie Player');
  });
});
