<script>
  export default {
    name: 'app-section',
    computed: {
      classes() {
        let classes = {
          'row': this.row,
          'row-xsmall': this.rowXsmall,
          'row-small': this.rowSmall,
          'row-medium': this.rowMedium,
          'row-large': this.rowLarge,
          'row-xlarge': this.rowXlarge,
          'column': this.column,
          'column-xsmall': this.columnXsmall,
          'column-small': this.columnSmall,
          'column-medium': this.columnMedium,
          'column-large': this.columnLarge,
          'column-xlarge': this.columnXlarge,
          'hide-xsmall': this.hideXsmall,
          'hide-small': this.hideSmall,
          'hide-medium': this.hideMedium,
          'hide-large': this.hideLarge,
          'hide-xlarge': this.hideXlarge,
          'hide-xsmall-and-up': this.hideXsmallAndUp,
          'hide-small-and-up': this.hideSmallAndUp,
          'hide-medium-and-up': this.hideMediumAndUp,
          'hide-large-and-up': this.hideLargeAndUp,
          'hide-xlarge-and-up': this.hideXlargeAndUp
        };
        if (this.gutter) {
          if (typeof this.gutter === 'boolean') {
            classes['gutter'] = true;
          } else if (this.gutter) {
            classes['gutter-' + this.gutter] = true;
          }
        }
        /* Flex */
        this.generatePropClasses('flex', '', 'flex', classes);
        this.generatePropClasses('flex', 'xsmall', 'flexXsmall', classes);
        this.generatePropClasses('flex', 'small', 'flexSmall', classes);
        this.generatePropClasses('flex', 'medium', 'flexMedium', classes);
        this.generatePropClasses('flex', 'large', 'flexLarge', classes);
        this.generatePropClasses('flex', 'xlarge', 'flexXlarge', classes);
        /* Flex Offset */
        this.generatePropClasses('flex-offset', '', 'flexOffset', classes);
        this.generatePropClasses('flex-offset', 'xsmall', 'flexOffsetXsmall', classes);
        this.generatePropClasses('flex-offset', 'small', 'flexOffsetSmall', classes);
        this.generatePropClasses('flex-offset', 'medium', 'flexOffsetMedium', classes);
        this.generatePropClasses('flex-offset', 'large', 'flexOffsetLarge', classes);
        this.generatePropClasses('flex-offset', 'xlarge', 'flexOffsetXlarge', classes);
        /* Horizontal Alignment */
        this.generatePropClasses('align', '', 'align', classes);
        this.generatePropClasses('align', 'xsmall', 'alignXsmall', classes);
        this.generatePropClasses('align', 'small', 'alignSmall', classes);
        this.generatePropClasses('align', 'medium', 'alignMedium', classes);
        this.generatePropClasses('align', 'large', 'alignLarge', classes);
        this.generatePropClasses('align', 'xlarge', 'alignXlarge', classes);
        /* Vertical Alignment */
        this.generatePropClasses('vertical-align', '', 'verticalAlign', classes);
        this.generatePropClasses('vertical-align', 'xsmall', 'verticalAlignXsmall', classes);
        this.generatePropClasses('vertical-align', 'small', 'verticalAlignSmall', classes);
        this.generatePropClasses('vertical-align', 'medium', 'verticalAlignMedium', classes);
        this.generatePropClasses('vertical-align', 'large', 'verticalAlignLarge', classes);
        this.generatePropClasses('vertical-align', 'xlarge', 'verticalAlignXlarge', classes);
        return classes;
      }
    },
    data() {
      return {

      };
    },
    methods: {
      generatePropClasses(prop, size, name, object) {
        if (size) {
          size = '-' + size;
        }
        if (this[name]) {
          if (typeof this[name] === 'boolean') {
            if (!this[name]) {
              object[prop + size + '-none'] = true;
            } else {
              object[prop + size] = true;
            }
          } else {
            object[prop + size + '-' + this[name]] = true;
          }
        }
      }
    },
    props: {
      tag: {
        type: String,
        default: 'div'
      },
      row: Boolean,
      rowXsmall: Boolean,
      rowSmall: Boolean,
      rowMedium: Boolean,
      rowLarge: Boolean,
      rowXlarge: Boolean,
      column: Boolean,
      columnXsmall: Boolean,
      columnSmall: Boolean,
      columnMedium: Boolean,
      columnLarge: Boolean,
      columnXlarge: Boolean,
      hideXsmall: Boolean,
      hideSmall: Boolean,
      hideMedium: Boolean,
      hideLarge: Boolean,
      hideXlarge: Boolean,
      hideXsmallAndUp: Boolean,
      hideSmallAndUp: Boolean,
      hideMediumAndUp: Boolean,
      hideLargeAndUp: Boolean,
      hideXlargeAndUp: Boolean,
      gutter: [String, Number, Boolean],
      align: String,
      alignXsmall: String,
      alignSmall: String,
      alignMedium: String,
      alignLarge: String,
      alignXlarge: String,
      verticalAlign: String,
      verticalAlignXsmall: String,
      verticalAlignSmall: String,
      verticalAlignMedium: String,
      verticalAlignLarge: String,
      verticalAlignXlarge: String,
      flex: [String, Number, Boolean],
      flexXsmall: [String, Number, Boolean],
      flexSmall: [String, Number, Boolean],
      flexMedium: [String, Number, Boolean],
      flexLarge: [String, Number, Boolean],
      flexXlarge: [String, Number, Boolean],
      flexOffset: [String, Number, Boolean],
      flexOffsetXsmall: [String, Number, Boolean],
      flexOffsetSmall: [String, Number, Boolean],
      flexOffsetMedium: [String, Number, Boolean],
      flexOffsetLarge: [String, Number, Boolean],
      flexOffsetXlarge: [String, Number, Boolean]
    },
    watch: {
      
    },
    render(createElement) {
      return createElement(this.tag, {
        staticClass: 'app-section',
        class: this.classes
      }, this.$slots.default);
    }
  }
</script>

<style lang="scss">
  @import '../../../Variables.scss';
  @import '../../../Mixins.scss';

  /* Rows and Columns */

  .app-section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
  }

  @mixin layout($size: null) {
    @if $size == null {
      $size : '';
    }

    @if $size != '' {
      $size : '-#{$size}';
    }

    .row#{$size} {
      flex-direction: row;
    }

    .column#{$size} {
      flex-direction: column;
    }
  }

  @include layout();


  /* Container */

  .app-section.container {
    width: 100%;
    max-width: 1200px;

    &.centered {
      margin: 0 auto;
    }
  }


  /* Alignments */

  @mixin layout-align($size: null) {
    @if $size == null {
      $size : '';
    }

    @if $size != '' {
      $size : '-#{$size}';
    }

    .align#{$size}-start {
      justify-content: flex-start;
    }

    .align#{$size}-center {
      justify-content: center;
    }

    .align#{$size}-end {
      justify-content: flex-end;
    }
  }

  @include layout-align();


  /* Vertical Alignments */

  @mixin layout-vertical-align($size: null) {
    @if $size == null {
      $size : '';
    }

    @if $size != '' {
      $size : '-#{$size}';
    }

    .vertical-align#{$size}-start {
      align-items: flex-start;
      align-content: flex-start;
    }

    .vertical-align#{$size}-center {
      align-items: center;
      align-content: center;
    }

    .vertical-align#{$size}-end {
      align-items: flex-end;
      align-content: flex-end;
    }

    .vertical-align#{$size}-stretch {
      align-items: stretch;
      align-content: stretch;
    }
  }

  @include layout-vertical-align();


  /* Gutter Size */

  @mixin layout-gutter($padding: 12px) {
    &:not(.column) {
      > .app-section {
        padding-right: $padding;
        padding-left: $padding;
      }
    }

    .column {
      > .app-section {
        padding-top: $padding;
        padding-bottom: $padding;
      }
    }
  }

  .gutter {
    @include layout-gutter();

    @include layout-small {
      @include layout-gutter(8px);
    }
  }

  $sizes: (8, 16, 24, 40);

  @each $item in $sizes {
    $padding: $item / 2 + px;

    .gutter-#{$item} {
      @include layout-gutter($padding);
    }
  }


  /* Flex Size */

  @mixin layout-flex($size: null) {
    @if $size == null {
      $size : '';
    }

    @if $size != '' {
      $size : '-#{$size}';
    }

    .flex#{$size} {
      flex: 1 1;
    }

    .flex#{$size}-33 {
      max-width: 33.33333%;
      min-width: 33.33333%;
      flex: 0 1 33.33333%;
    }

    .flex#{$size}-66 {
      max-width: 66.66666%;
      min-width: 66.66666%;
      flex: 0 1 66.66666%;
    }

    .flex-offset#{$size}-33 {
      margin-left: 33.33333%;
    }

    .flex-offset#{$size}-66 {
      margin-left: 66.66666%;
    }

    @for $i from 1 through 20 {
      $counter: $i * 5;

      .flex#{$size}-#{$counter} {
        max-width: #{$counter + '%'};
        min-width: #{$counter + '%'};
        flex: 0 1 #{$counter + '%'};
      }

      .flex-offset#{$size}-#{$counter} {
        margin-left: #{$counter + '%'};
      }
    }
  }

  @include layout-flex();


  /* Responsive Breakpoints */

  @mixin breakpoint-layout($size) {
    @include layout($size);
    @include layout-flex($size);
    @include layout-align($size);

    .hide-#{$size} {
      display: none;
    }
  }

  @include layout-xlarge {
    @include breakpoint-layout(xlarge);
  }

  @include layout-large {
    @include breakpoint-layout(large);
  }

  @include layout-medium {
    @include breakpoint-layout(medium);
  }

  @include layout-small {
    @include breakpoint-layout(small);
  }

  @include layout-xsmall {
    @include breakpoint-layout(xsmall);
  }

  @include layout-large-and-up {
    @include breakpoint-layout(large-and-up);
  }

  @include layout-medium-and-up {
    @include breakpoint-layout(medium-and-up);
  }

  @include layout-small-and-up {
    @include breakpoint-layout(small-and-up);
  }

  @include layout-xsmall-and-up {
    @include breakpoint-layout(xsmall-and-up);
  }
</style>

