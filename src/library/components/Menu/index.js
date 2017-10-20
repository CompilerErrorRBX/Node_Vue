import Menu from './Menu.vue';
import MenuItem from './MenuItem.vue';

export default function install(Vue) {
  Vue.component('app-menu', Menu);
  Vue.component('app-menu-item', MenuItem);
}
