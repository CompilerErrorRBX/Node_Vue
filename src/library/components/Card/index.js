import Card from './Card.vue';
import CardImage from './CardImage.vue';
import CardTitle from './CardTitle.vue';
import CardActions from './CardActions.vue';
import CardContent from './CardContent.vue';
import TickerCard from './TickerCard.vue';

export default function install(Vue) {
  Vue.component('app-card', Card);
  Vue.component('app-card-image', CardImage);
  Vue.component('app-card-title', CardTitle);
  Vue.component('app-card-actions', CardActions);
  Vue.component('app-card-content', CardContent);
  Vue.component('app-ticker-card', TickerCard);
}
