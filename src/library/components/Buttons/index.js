import Button from './Button.vue';
import FAButton from './FloatingActionButton.vue';
import IconButton from './IconButton.vue';

export default function install(Vue) {
  Vue.component('app-button', Button);
  Vue.component('app-floating-action-button', FAButton);
  Vue.component('app-icon-button', IconButton);
}
