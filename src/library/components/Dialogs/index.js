import Dialog from './Dialog.vue';
import DialogActions from './DialogActions.vue';
import DialogBody from './DialogBody.vue';
import DialogTitle from './DialogTitle.vue';
import DialogToolbar from './DialogToolbar.vue';

export default function install(Vue) {
  Vue.component('app-dialog', Dialog);
  Vue.component('app-dialog-actions', DialogActions);
  Vue.component('app-dialog-body', DialogBody);
  Vue.component('app-dialog-title', DialogTitle);
  Vue.component('app-dialog-toolbar', DialogToolbar);
}
