<template>
 <!--  <nav class="navbar navbar-expand-sm py-3 position-wrap">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#"><img src="../assets/download.png" alt="" /></a>
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0 font bg-1-content">
          <li class="nav-item">
            <a class="nav-link" href="#">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">SERVICES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">PORTFOLIO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">PRICING</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">TEAM</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">BLOG</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">CONTACT US</a>
          </li>
          <li class="nav-item">
            <button class="button custom"><a class="nav-link" href="#">Login</a></button>
          </li>
        </ul>
      </div>
    </div>
  </nav> -->

  <nav class="navbar navbar-expand-lg py-3 position-wrap navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#"><img src="../assets/logo-dark.png" alt="" /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0 font">
          <li class="nav-item">
            <router-link to="/" class="nav-link" >HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/sectioncontent" class="nav-link" >SERVICES</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/sectionthree" class="nav-link">PORTFOLIO</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/sectionfour" class="nav-link">PRICING</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/priceplan" class="nav-link">TEAM</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/teamsec" class="nav-link">ABOUT</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/latestnews" class="nav-link">BLOG</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/latestnews" class="nav-link">CONTACT US</router-link>
          </li>
          <li class="nav-item">
            <button class="button custom"><a class="nav-link" href="#">LOGIN</a></button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.ml-auto {
  margin-left: auto;
  gap: 10px;
  align-items: center;
}
.button {
  background-color: #8cb369;
  border-radius: 5px;
  border: none;
  padding: 8px 20px;
  margin-left: 10px;
  font-weight: bold;
  font-size: 16px;
}
.button:hover {
  background-color: #729b4e;
}
.custom a {
  padding: 0;
  color: #fff !important;
}
.font li {
  font-weight: 650;
  font-size: 14px;
}
.font li a:hover {
  color: #8cb369;
}
.bg-1-content li a {
  color: #fff;
}
.position-wrap {
  position: fixed;
  z-index: 100;
  width: 100%;
}
</style>
