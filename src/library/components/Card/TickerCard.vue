<template>
  <app-card class="app-ticker-card">
    <app-card-title icon="trending_up" :title="`${symbol} market data`" :subtitle="action" />
    <app-list>
      <app-list-item v-for="(data, key) in tickerData" :key="key">
        <app-text-body>
          <app-heading>Open</app-heading>
          <app-subheading>{{ key }}: {{ data['1. open'] }}</app-subheading>
        </app-text-body>
      </app-list-item>
    </app-list>
  </app-card>
</template>

<script>
  export default {
    name: 'app-ticker-card',
    computed: {

    },
    data() {
      return {
        tickerData: {},
      };
    },
    methods: {

    },
    mounted() {
      this.$http.get(`https://www.alphavantage.co/query?function=${this.action}&symbol=${this.symbol}&interval=${this.interval}&outputsize=${this.fullOutput? 'full' : 'compact'}&apikey=DNX7QWJZ0FQ20DJ3`).then(response => {
        this.tickerData = response.body[`Time Series (${this.interval})`];
        console.log(response.body[`Time Series (${this.interval})`]);
      }, response => {
        console.log('Failed');
      });
    },
    props: {
      symbol: {
        type: String,
        required: true,
      },
      action: {
        type: String,
        required: true,
      },
      interval: {
        type: String,
        default: '15min',
      },
      fullOutput: Boolean,
    },
    watch: {
      
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../../Variables.scss';

  .app-ticker-card {
    
  }
</style>

