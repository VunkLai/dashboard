<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <b-col v-if="statusSidebar" id="sidebar" md="2" sm="0">
          <Sidebar :window="window" :statusSidebar="statusSidebar" />
        </b-col>

        <b-col id="content">
          <b-navbar id="content-header" type="dark" variant="dark">
            <b-navbar-nav>
              <b-nav-item>
                <b-icon @click="togg" font-scale="2" icon="list" variant="light"></b-icon>
              </b-nav-item>
              <b-nav-item>width:{{window.width}}</b-nav-item>
            </b-navbar-nav>
          </b-navbar>
          <b-breadcrumb id="content-breadcrumb">
            <b-breadcrumb-item href="#home">
              <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>Home
            </b-breadcrumb-item>
            <b-breadcrumb-item href="#foo">Foo</b-breadcrumb-item>
            <b-breadcrumb-item href="#bar">Bar</b-breadcrumb-item>
            <b-breadcrumb-item active>Baz</b-breadcrumb-item>
          </b-breadcrumb>
          <b-container id="content-panel">
            <router-view />
          </b-container>
          <b-navbar id="content-footer" type="light" variant="light">
            <b-navbar-nav class="ml-auto">
              <b-nav-item right>&copy; Vunk - Workshop</b-nav-item>
            </b-navbar-nav>
          </b-navbar>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Sidebar from "@/views/Sidebar";
export default {
  name: "app",
  data() {
    return {
      statusSidebar: true,
      window: {
        width: 0,
        height: 0
      }
    };
  },
  components: {
    Sidebar
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    togg() {
      this.statusSidebar = !this.statusSidebar;
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      // window.width < Medium (Bootstrap default value) -> Mobile
      if (this.window.width < 768) this.statusSidebar = false;
    }
  }
};
</script>

<style>
#sidebar {
  background-color: #2a3f54;
  color: white;
}

#content {
  padding-left: 0;
  padding-right: 0;
}

#content-panel {
  min-height: 100vh;
}
#app {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
