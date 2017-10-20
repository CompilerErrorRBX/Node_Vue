import List from './List.vue';
import Item from './ListItem.vue';

export default function install(Vue) {
  Vue.component('app-list', List);
  Vue.component('app-list-item', Item);
}
