/* global Router */

import Vue from 'vue';
import App from './components/App.vue';
import bus from './bus';
import { Router } from '../dist/director/build/director';

window.app = new Vue({
  el: '#app',
  render: h => h(App)
});

let router = new Router();

['all', 'active', 'completed'].forEach(function (visibility) {
  router.on(visibility, function () {
    bus.$emit('router', visibility);
  });
});

router.configure({
  notfound: function () {
    window.location.hash = '';
    bus.$emit('router', 'all');
  }
});

router.init();

