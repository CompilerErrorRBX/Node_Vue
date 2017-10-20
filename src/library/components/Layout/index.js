import Container from './Container.vue';
import Navigation from './Navigation.vue';
import Pusher from './Pusher.vue';
import Responsive from './Responsive.vue';
import Section from './Section.vue';

export default function install(Vue) {
  Vue.component('app-container', Container);
  Vue.component('app-navigation', Navigation);
  Vue.component('app-pusher', Pusher);
  Vue.component('app-responsive', Responsive);
  Vue.component('app-section', Section);
}
