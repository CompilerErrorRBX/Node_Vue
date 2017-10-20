<template>
  <div class="app-search-bar" @click="select" :class="{ focused: focused, results: results.length }" v-on-click-outside="deselect" >
    <app-icon class="app-search-icon" icon="search" />
    <input class="app-search-input" placeholder="Search" v-model="query" />
    <app-icon-button class="app-search-cancel" icon="close" dense @click.native="cancelSearch" />
    <div class="app-search-container">
      <div class="app-search-results">
        <app-list class="app-search-results-container" dense>
          <app-list-item v-for="result in results" :key="result.id" hoverable>
            <app-avatar :src="result.src" :icon="result.icon" :alt="result.alt" />
            <app-heading>{{ result.value }}</app-heading>
          </app-list-item>
        </app-list>
        <app-list class="app-search-results-counter" :title="`Found ${results.length} result${results.length > 1? 's' : ''}`" dense />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-search-bar',
    computed: {

    },
    data() {
      return {
        cancel: null,
        focused: false,
        input: null,
        query: this.searchQuery,
        results: [
          // {
          //   id: 1,
          //   src: 'https://pbs.twimg.com/profile_images/703686186112450560/4LMZITmv_400x400.jpg',
          //   icon: 'person',
          //   value: 'Tony Mu',
          // },
          // {
          //   id: 1,
          //   src: 'http://img2.zergnet.com/1576829_300.jpg',
          //   icon: 'person',
          //   value: 'Tom Cruise',
          // }
        ],
      };
    },
    methods: {
      cancelSearch() {
        this.query = '';
      },
      deselect() {
        this.focused = false;
      },
      select() {
        this.input.focus();
        this.focused = true;
      },
      search() {
        this.$http.get(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${this.query}&apikey=DNX7QWJZ0FQ20DJ3`).then(response => {
          const data = response.data['Weekly Time Series'];
          const searchResults = [];

          if (data === null || data === undefined) {
            this.results = [];
            return;
          }

          for (const key of Object.keys(data)) {
            const value = data[key];
            searchResults.push({
              id: key,
              icon: 'trending_up',
              value: `${key}: $${value['1. open']}`
            });
          }
          this.results = searchResults;
        }, response => {
          console.log('Failed');
        });
      }
    },
    mounted() {
      this.input = this.$el.querySelector('.app-search-input');
      this.cancel = this.$el.querySelector('.app-search-cancel');
    },
    props: {
      delay: Number,
      searchQuery: String,
    },
    watch: {
      query() {
        this.search();
      },
    },
  }
</script>

<style lang="scss">
  @import '../../../Variables.scss';

  .app-search-bar {
    position: relative;
    display: flex;
    flex: 1 0 auto;
    max-width: 740px;
    height: 48px;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 2px;
    align-items: center;
    color: $primary-text-color;
    transition: $swift-ease-out;
    cursor: text;

    .app-search-icon {
      padding: 0 24px 0 16px;
    }

    .app-search-cancel {
      opacity: 0;
      transition: $swift-ease-out;
      color: $app-text-color;
    }

    .app-search-input {
      background-color: transparent;
      display: flex;
      flex: 1 0 auto;
      height: 100%;
      border: none;
      outline: none;
      font-size: 16px;
      color: inherit;
      pointer-events: none;

      &::-webkit-input-placeholder {
        color: inherit;
      }
    }

    .app-search-container {
      position: absolute;
      width: calc(100% + 16px);
      top: 100%;
      padding: 8px;
      left: -8px;
      overflow: hidden;
      pointer-events: none;

      .app-search-results {
        transition: $swift-ease-out;
        position: relative;
        background-color: #fff;
        width: 100%;
        border-radius: 0 0 2px 2px;
        color: $app-text-color;
        transform: translateY(calc(-100% - 8px));
        pointer-events: all;
      }

      .app-search-results-container {
        overflow-y: auto;
        max-height: 32vh;
      }
    }

    &.focused {
      transition: $swift-ease-in;
      background-color: rgba(255, 255, 255, 1);
      color: $app-text-color;
      box-shadow: $depth-2dp;

      .app-search-cancel {
        opacity: 1;
        transition: $swift-ease-in;
      }

      &.results {
        border-radius: 2px 2px 0 0;
        box-shadow: $depth-4dp;

        .app-search-results {
          border-top: 1px rgba(0,0,0,0.1) solid;
          transform: translateY(-8px);
          transition: $swift-ease-in;
          transition-delay: 0.2s;
          box-shadow: $depth-4dp;
        }
      }
    }
  }
</style>
