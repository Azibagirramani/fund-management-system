<template>
  <nav
    id="sidebarMenu"
    class="col-md-3 col-lg-2 d-md-block bg-white sidebar collapse"
  >
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item" v-for="(urls, index) in urls" :key="index">
          <router-link :to="urls.path" class="nav-link">
            <i :class="urls.icon" aria-hidden="true"></i>
            {{ urls.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      urls: [
        {
          icon: "fa fa-tachometer",
          name: "Dashboard",
          path: "/dashboard",
        },
        {
          icon: "fa fa-money",
          name: "Funds",
          path: "/dashboard/funds",
        },
        {
          icon: "fa fa-list",
          name: "Projects",
          path: "/dashboard/projects",
        },
        {
          icon: "fa fa-cog",
          name: "Settings",
          path: "/dashboard/settings",
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  /* rtl:raw:
  right: 0;
  */
  bottom: 0;
  /* rtl:remove */
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
  font-weight: 500;
  color: #a9abae;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #727272;
}

.sidebar .nav-link.active {
  color: #2470dc;
}

.sidebar .nav-link:hover {
  color: #5c6168;
  background-color: #eaf2fe;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
}

i {
  font-size: 1rem;
  margin-right: 0.2rem;
}
</style>
