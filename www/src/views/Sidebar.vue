<template>
  <div>
    <!-- SideBar Title -->
    <br />
    <h4>
      <b-icon icon="building"></b-icon>&nbsp;Vunk
    </h4>
    <hr class="sidebar-divider" />
    <!-- SideBar menu -->
    <div align="left">
      <b-nav vertical>
        <b-nav-item v-b-toggle.sidebar-dashboard>
          <b-row>
            <b-col cols="1">
              <p :class="statusSidebar ? '' : 'h3'">
                <b-icon icon="graph-up"></b-icon>
              </p>
            </b-col>
            <b-col>
              <p v-if="statusSidebar">Dashboard</p>
            </b-col>
            <b-col cols="1">
              <b-icon icon="play" rotate="90"></b-icon>
            </b-col>
          </b-row>
        </b-nav-item>
        <b-collapse id="sidebar-dashboard">
          <b-nav-item>
            <b-nav vertical>
              <b-nav-item>
                <router-link to="/">Home</router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link to="/about">About</router-link>
              </b-nav-item>
            </b-nav>
          </b-nav-item>
        </b-collapse>
      </b-nav>
      <hr class="sidebar-divider light" />
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  props: { window: Object, statusSidebar: Boolean },
  computed: {
    smallMediumWindow() {
      if (this.window.width < 768) return true;
      else return false;
    }
  }
};
</script>

<style>
.sidebar-divider {
  border-color: white;
}
.sidebar-divider.light {
  border-color: #999999;
  max-width: 90%;
  padding-left: 0;
  margin-left: 0;
}
#sidebar a {
  color: white;
}
</style>
