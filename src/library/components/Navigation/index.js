import SearchBar from './SearchBar.vue';
import SideNav from './SideNav.vue';
import SideNavActions from './SideNavActions.vue';
import SideNavSection from './SideNavSection.vue';
import SideNavItem from './SideNavItem.vue';

export default function install(Vue) {
  Vue.component('app-search-bar', SearchBar);
  Vue.component('app-sidenav', SideNav);
  Vue.component('app-sidenav-actions', SideNavActions);
  Vue.component('app-sidenav-section', SideNavSection);
  Vue.component('app-sidenav-item', SideNavItem);
}
