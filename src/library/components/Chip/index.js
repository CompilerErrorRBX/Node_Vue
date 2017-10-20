import Chip from './Chip.vue';
import ChipContainer from './ChipContainer.vue';

export default function install(Vue) {
  Vue.component('app-chip', Chip);
  Vue.component('app-chip-container', ChipContainer);
}
