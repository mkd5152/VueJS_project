<template>
  <div id="app">
    <!-- top navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src="../src/assets/logo.svg" width="30" height="30" alt="" />
      </a>
      <a class="navbar-brand" href="#">
        <img src="../src/assets/tahmeel.svg" alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              ><img src="../src/assets/bell.png" width="25" height="30" alt=""
            /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src="../src/assets/pp.png" width="30" height="30" alt=""
            /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">PB Shipper</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- This container contains the sidebar and main content of the page -->
    <!-- h-100 takes the full height of the body-->
    <div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col-2" style=" height: 100%;  width: 200px;  position: fixed;  top: 62px;  background-color: #111;  padding-top: 20px;">
          <!-- Navigation links in sidebar-->
          <a class="text-white" href="#"
            ><img src="../src/assets/lmd.png" width="20" height="20" alt="" />
            Manage LMD Jobs</a
          >
        </div>
        <!--Main Content of the application-->
        <div class="child">
          <div class="container">
            <div class="row">
              <div class="col-xs-6">
                <Pending />
              </div>
              <div class="col-xs-6">
                <Assigned />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Assigned from "./components/Assigned";
import Pending from "./components/Pending";

export default {
  name: "App",
  components: {
    Assigned,
    Pending,
  },
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
.child {
  margin: 0 auto;
}
</style>
