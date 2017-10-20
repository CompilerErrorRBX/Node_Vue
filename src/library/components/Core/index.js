import Avatar from './Avatar.vue';
import Collapsible from './Collapsible.vue';
import Divider from './Divider.vue';
import Heading from './Heading.vue';
import Icon from './Icon.vue';
import Ripple from './Ripple.vue';
import Subheading from './Subheading.vue';
import TextBody from './TextBody.vue';
import Timestamp from './Timestamp.vue';

export default function install(Vue) {
  Vue.component('app-avatar', Avatar);
  Vue.component('app-collapsible', Collapsible);
  Vue.component('app-divider', Divider);
  Vue.component('app-heading', Heading);
  Vue.component('app-icon', Icon);
  Vue.component('app-ripple', Ripple);
  Vue.component('app-subheading', Subheading);
  Vue.component('app-text-body', TextBody);
  Vue.component('app-timestamp', Timestamp);
}
