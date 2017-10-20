<template>
  <app-container>
    <app-menu dense>
      <app-menu-item>
        <app-icon icon="person" />
        <app-heading text="Test" />
      </app-menu-item>
      <app-divider />
      <app-menu-item>
        <app-icon icon="dashboard" />
        <app-heading text="Test" />
        <app-icon icon="arrow_drop_down" slot="right" />
      </app-menu-item>
    </app-menu>
    <app-container vertical>
      <app-navigation>
        <app-toolbar overlay>
          <app-icon-button icon="menu" @click.native="toggleSidenav" />
          <app-heading>Project</app-heading>
          <app-search-bar slot="center" />
          <app-icon-button icon="person" slot="right" @click.native="dialogOpened = true" />
          <app-icon-button icon="dashboard" slot="right" @click.native="dialog2Opened = true" />
        </app-toolbar>
      </app-navigation>
      <app-container>
        <app-sidenav :opened="sideNavOpened" >
          <app-sidenav-actions slot="heading" floating>
            <app-icon-button icon="arrow_back" @click.native="toggleSidenav" />
            <app-heading>Project</app-heading>
          </app-sidenav-actions>
          <app-sidenav-section>
            <app-sidenav-item icon="home" text="Home"/>
          </app-sidenav-section>
        </app-sidenav>
        <app-container vertical>
          <app-responsive>
            <app-subheading text="Because you are following:" />
            <app-chip-container>
              <app-chip text="Tony Mu" src="https://pbs.twimg.com/profile_images/703686186112450560/4LMZITmv_400x400.jpg" />
            </app-chip-container>
            <app-section row :gutter="16">
              <app-section column flex="25" flex-medium="50" flex-small="50" flex-xsmall="100">
                <app-card hoverable>
                  <app-card-title src="https://pbs.twimg.com/profile_images/703686186112450560/4LMZITmv_400x400.jpg" title="Tony Mu" subtitle="Writer, technician, extraodinare." />
                  <app-card-image src="http://cdn.wallpapersafari.com/47/87/lVvq4N.jpg" />
                  <app-card-title title="The Story of Us" subtitle="A relection on humanity as a whole" />
                  <app-card-content>
                    I used to think one day we'd tell the story of us
                    How we met and the sparks flew instantly
                    People would say, "they're the lucky ones"
                    I used to know my place was a spot next to you
                    Now I'm searching the room for an empty seat
                    'Cause lately I don't even know what page you're on
                  </app-card-content>
                  <app-card-content>
                    <app-chip text="Awesome" hoverable />
                    <app-chip text="Text" closable hoverable />
                    <app-chip icon="favorite" text="Happy" closable hoverable />
                    <app-chip alt="Tony Mu" text="Birthday" closable hoverable />
                    <app-chip src="https://pbs.twimg.com/profile_images/703686186112450560/4LMZITmv_400x400.jpg" text="You're awesome!" closable hoverable />
                  </app-card-content>
                  <app-card-actions>
                    <app-icon-button slot="right" icon="favorite" dense />
                    <app-icon-button slot="right" icon="bookmark" dense />
                    <app-icon-button slot="right" icon="share" dense />
                  </app-card-actions>
                </app-card>
              </app-section>
              <app-section column flex="25" flex-medium="50" flex-small="50" flex-xsmall="100">
                <app-card hoverable>
                  <app-card-title src="https://pbs.twimg.com/profile_images/703686186112450560/4LMZITmv_400x400.jpg" title="Tony Mu" subtitle="Writer, technician, extraodinare." />
                  <app-card-image src="https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg" />
                  <app-card-title title="Title goes here" subtitle="Subtitle here" />
                  <app-collapsible :isCollapsed="true">
                    <app-card-actions slot="heading">
                      <app-button text="Button" dense />
                      <app-icon-button slot="right" icon="expand_less" dense collapse-trigger />
                    </app-card-actions>
                    <app-card-content>
                      I used to think one day we'd tell the story of us
                      How we met and the sparks flew instantly
                      People would say, "they're the lucky ones"
                      I used to know my place was a spot next to you
                      Now I'm searching the room for an empty seat
                      'Cause lately I don't even know what page you're on
                    </app-card-content>
                  </app-collapsible>
                </app-card>
              </app-section>
            </app-section>
          </app-responsive>
        </app-container>
      </app-container>
    </app-container>
    <app-dialog class="small" :show="dialogOpened" @close="dialogOpened = false">
      <app-dialog-body>
        <app-heading>
          Set backup account
        </app-heading>
      </app-dialog-body>
      <app-list>
        <app-list-item hoverable>
          <app-avatar src="https://pbs.twimg.com/profile_images/703686186112450560/4LMZITmv_400x400.jpg" />
          <span>tonymu@gmail.com</span>
        </app-list-item>
        <app-list-item hoverable>
          <app-avatar icon="person" />
          <span>user02@gmail.com</span>
        </app-list-item>
        <app-list-item hoverable>
          <app-avatar icon="add" />
          <span>add account</span>
        </app-list-item>
      </app-list>
    </app-dialog>
    <app-dialog fullscreen :show="dialog2Opened" @close="dialog2Opened = false">
      <app-dialog-toolbar title="Title">
        <app-icon-button icon="close" @click.native="dialog2Opened = false" />
        <app-button text="Save" slot="right" />
      </app-dialog-toolbar>
    </app-dialog>
  </app-container>
</template>

<script>
  export default {
    computed: {

    },
    data() {
      return {
        sideNavOpened: true,
        dialogOpened: false,
        dialog2Opened: false,
      };
    },
    methods: {
      toggleSidenav() {
        this.sideNavOpened = !this.sideNavOpened;
      },
    },
    props: {
      
    },
    watch: {
      
    },
  }
</script>
